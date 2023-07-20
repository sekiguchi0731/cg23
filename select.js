// モード・キャラクター選択画面

// モード選択画面
// ボタン表示/非表示設定
function modeScene() {
    stbtn = document.getElementById("start-btn");
    mbtn = document.getElementById("music-btn");
    var md = document.getElementById("mode");
    var mdbtn = document.getElementById("md-btn");
    var sel = document.getElementById("select");

    if (stbtn.style.display != (stbtn.style.display = "none")){}
    if (sel.style.display != (sel.style.display = "none")){}
    if (mbtn.style.display != (mbtn.style.display = "none")) {}

    if(md.style.display != (md.style.display = "block")){}
    if(mdbtn.style.display != (mdbtn.style.display = "flex")){}
}

// キャラクター選択画面
function selectScene() {
    sel = document.getElementById("select");
    selbtn = document.getElementById("sel-btn");
    var md = document.getElementById("mode");
    var mdbtn = document.getElementById("md-btn");

    if(md.style.display != (md.style.display = "none")){}
    if(mdbtn.style.display != (mdbtn.style.display = "none")){}
    if (sel.style.display != (sel.style.display = "block")){}
    // display: block;だと横並びにならない
    if (selbtn.style.display != (selbtn.style.display = "flex")){}
}

// カメラ状態
function selectCamera() {
    camera.position.set( 300, 0, 0);
    camera.up.z = 1;
    camera.lookAt( {x:0, y:0, z:0 } ); 
}

// 選択背景
function selectFloor(){
    floor4 = new THREE.Mesh(
        new THREE.PlaneGeometry(500,300),
        new THREE.MeshBasicMaterial({color:0x2e8b57})
    );
    floor4.rotation.y = Math.PI / 2;
    floor4.receiveShadow = "true";
    scene.add(floor4);
}


// モード画面オブジェクト
function modeObject(){
    ilust = new THREE.Mesh(
        new THREE.BoxGeometry(100,80,2),
        new THREE.MeshStandardMaterial({
            map: loader.load("assets/auto.png")
        })
    );
    ilust2 = new THREE.Mesh(
        new THREE.BoxGeometry(100,80,2),
        new THREE.MeshStandardMaterial({
            map: loader.load("assets/free.png")
        })
    );
    ilust.position.set(10,-55,-20);
    ilust.rotation.y = Math.PI/2
    ilust2.position.set(10,55,-20);
    ilust2.rotation.y = Math.PI/2
    scene.add(ilust);
    scene.add(ilust2);
}

// キャラクター画面オブジェクト
function selectObject(){
    bote3 = makeBote(1);
    inu3 = makeInu(1);
    bote3.rotateOnWorldAxis(new THREE.Vector3(1,0,0), Math.PI/2);
    bote3.position.set(25,-50,0);
    inu3.position.set(25,50,0);
    scene.add(bote3);
    scene.add(inu3);
}

// モードセット
// 0：モード選択画面 1：キャラクター選択画面
function setSelect(boo4) {
    mdblan = boo4;
}

var t4 = 0;
var roll;
let t0 = Date.now() - 3, T = 2;
function loop2(){
    const t1= Date.now();
    const dt = t1 - t0;

    renderer.clear();
    if(dt > T) {
        t4++;
        if(mdblan) {
            bote3.rotation.set(t4/100,0,0);
            inu3.rotation.set(-t4/100,0,0);
        } else {
            ilust.position.z = 10*Math.cos(t4/25);
            ilust2.position.z = 10*Math.sin(t4/25);
        }
        t0 = t1;
    }
    camera.lookAt( {x:0, y:0, z:0 } );   
    controls.update(); 
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop2);
}