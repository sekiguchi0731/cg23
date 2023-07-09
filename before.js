window.onload = function(){
    threeStart();
  }
  
  var width, height;
  var renderer;
  function initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;  
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height );
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColorHex(0xFFFFFF, 1.0);
    renderer.shadowMapEnabled = true;
  }
   
  var camera;
  function initCamera() {  
    camera = new THREE.PerspectiveCamera( 45 , width / height , 1 , 10000 );
    camera.position.x = 400;
    camera.position.y = 20;
    camera.position.z = 50;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt( {x:0, y:0, z:0 } );
  }
  
  var scene;
  function initScene() {    
    scene = new THREE.Scene();
  }
  
  var light, light2;
  function initLight() {  
    light = new THREE.DirectionalLight(0xFFFFFF, 1.0, 0);
    light.position.set( 50, 50, 200 );
    light.castShadow = true;    
    scene.add(light);
    light2 = new THREE.AmbientLight(0x555555);
    scene.add(light2);
  }
  
  var cube = Array(), plane;
  function initObject(){
    for(var i=0; i<3; i++){
      cube[i] = new THREE.Mesh(
           new THREE.CubeGeometry(50,50,50),
           new THREE.MeshLambertMaterial({color: 0xff0000, ambient:0xFF0000})
      );
      scene.add(cube[i]);
      cube[i].position.set(0,-100+100*i,0);
      cube[i].castShadow = true;
    }
    plane = new THREE.Mesh(
      new THREE.PlaneGeometry(300, 300),                 
      new THREE.MeshLambertMaterial({color: 0xccccc}) 
    );
    scene.add(plane);
    plane.position.set(0,0,-50);    
    plane.receiveShadow = true;
  }
  
  var t=0;
  function loop() {
      t++;
      renderer.clear();
      cube[0].rotation.set( t/100, 0, 0 );
      cube[1].rotation.set( 0, t/100, 0 );
      cube[2].rotation.set( 0, 0, t/100 );
      camera.position.set( 400*Math.cos(t/100), 400*Math.sin(t/200), 50*Math.cos(t/50));
      camera.lookAt( {x:0, y:0, z:0 } );    
      renderer.render(scene, camera);
        window.requestAnimationFrame(loop);
  }  
  function moveFront() {
    // var quaternion = bote.quaternion;

    // var target = new THREE.Quaternion();
    var origin_pos = bote.position.clone();
    var move_axis = 'x';         // 移動方向
    var cube_size = bote.scale.x;
    var move_offset = cube_size; // 移動距離
    var from_param = {x: 0};     // tween開始時の値
    var to_param = {x: 1};       // tween終了時の値
    var duration = 1000;         // 単位はミリ秒
    var cube_half = cube_size / 2
    var origin_quaternion = bote.quaternion.clone();
    
    var tween = new TWEEN.Tween(from_param)
    .to(to_param, duration)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate(function() {
        var x = this.x;
        var r = cube_half * Math.sqrt(2); // 中心の回転半径
        var center_angle = 45 + (90 * x); // 現在の中心位置の角度（移動開始時は45°）
        var center_rad = center_angle * Math.PI / 180; // 角度をラジアンに変換
        // 移動中のcube中心の高さ (sinθ * r)
        // cubeサイズの半分を引くことで、移動開始時点からの増加分だけを取得する
        var current_height = Math.sin(center_rad) * r - cube_half;
        // 移動中のcube中心の位置 (α - (cosθ * r))
        // 移動方向の逆転を考慮してmove_offset(1 or -1)を掛け合わせる
        var current_move = (cube_half - (Math.cos(center_rad) * r)) * move_offset;

        // 移動前のpositionを基準に計算
        bote.position[move_axis] = origin_pos[move_axis] + current_move;
        bote.position.y = origin_pos.y + current_height;

        var axis = new THREE.Vector3(0, 0, -1); // 回転軸
        var new_q = origin_quaternion.clone()
        var target = new THREE.Quaternion();
        var rad90 = Math.PI / 2; // ラジアン90°
        var rad = rad90 * x;
        // target.setFromAxisAngle(axis, rad);
        // new_q.multiply(target);
        // bote.quaternion.copy(new_q);
        // bote.quaternion.copy(origin_quaternion.clone().multiply(target_quaternion));
        var target_quaternion = new THREE.Quaternion().setFromAxisAngle(axis, rad);
        bote.quaternion.copy(origin_quaternion.clone().multiply(target_quaternion));
    })
    .start();
    // bote.rotation.set(Math.PI / 2, 0, 0);
}
  
  // 初期画面
  function threeStart() {
    initThree();
    initCamera();
    initScene();    
    initLight();
    initObject();
    loop();
  }
  
  // ゲーム画面
  function gameInit(){
    initScene();
  }