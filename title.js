// タイトル画面についての設定

// 景色の初期化
var scene;
function initScene() {    
  scene = new THREE.Scene();
  initAudio();
}

// キャンバスの初期化
function initThree() {
  width = document.getElementById('canvas-frame').clientWidth;
  height = document.getElementById('canvas-frame').clientHeight;  
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(width, height );
  document.getElementById('canvas-frame').appendChild(renderer.domElement);
  renderer.setClearColor(0xFFFFFF, 1.0);
}

const listener = new THREE.AudioListener();


// create a global audio source
const sound = new THREE.Audio( listener );

function initAudio() {
  // load a sound and set it as the Audio object's buffer
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load( 'sounds/pss.m4a', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( true );
    sound.setVolume( 0.5 );
    if (t > 0){
      sound.play();
    }
  });
}

document.addEventListener('click', initAudio);


// カメラの初期化
function initCamera() {  
    camera = new THREE.PerspectiveCamera( 45 , width / height , 1 , 10000 );
    if (!controls){
      controls = new THREE.OrbitControls(camera, renderer.domElement);
  
      controls.enableDamping = true;
      controls.dampingFactor = 0.2;
    }
    camera.position.x = 400;
    camera.position.y = 0;
    camera.position.z = 0;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt( {x:0, y:0, z:0 } );
    camera.add( listener );
}

// ライト設定
function initLight() {
  light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
  light.position.set( 400, -200, 200);
  light.castShadow = true;       
  scene.add(light);
  if(t < 0) {
    light2 = new THREE.AmbientLight(0xFFFFFF);
  } else {
    light2 = new THREE.AmbientLight(0x555555);
  }
  scene.add(light2);
}

// 床設定
function initFloor() {
  const axesHelper = new THREE.AxesHelper(500);
  // floor = new THREE.GridHelper(400, 20, 0x000000);
  floor2 = new THREE.Mesh(
    new THREE.PlaneGeometry(500,300),
    new THREE.MeshBasicMaterial({color:0x2e8b57})
  );
  floor4 = new THREE.GridHelper(400, 20, 0x000000);
  floor2.rotation.y = Math.PI / 2; // x軸周りに90度回転
  floor2.rotation.x = Math.PI / 2;
  // floor.rotation.z = Math.PI / 2; // x軸周りに90度回転
  floor2.receiveShadow = true;
  scene.add(axesHelper);
  scene.add(floor4);
  scene.add(floor2);
  floor2.add(sound);
  // scene.add(floor);
}

// オブジェクト設定
function initObject() {
  // 文字部分
  mojiPita();
  mojiWaku();

  // objects
  bote1 = makeBote(1);
  scene.add(bote1);
  inu1 = makeInu(1);
  scene.add(inu1);

  bote1.position.set(25,-120,-80);
  inu1.position.set(25,120,-80);
}

// ループ関数
t = 0
function loop() {
    t++;
    renderer.clear();
    bote1.rotation.set(t/20,t/100,0);
    inu1.rotation.set(-t/20,t/100,0);
    // camera.position.set( 400*Math.cos(t/100), 400*Math.sin(t/200), 50*Math.cos(t/50));
    camera.lookAt( {x:0, y:0, z:0 } );   
    if(t > 0) {
      controls.update(); 
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    }
}
