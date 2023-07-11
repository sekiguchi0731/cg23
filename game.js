// ゲーム画面についての設定

function initVal(boolean) {
    boo2 = boolean;
}

// ボタン状態
function gameScene(){
    // グローバルに定義すると初期状態が読み込まれるためNG
    // stbtn = document.getElementById("start-btn"); 
    sel = document.getElementById("select");
    reset = document.getElementById("reset-btn");
    reset2 = document.getElementById("reset-btn2");
    bar = document.getElementById("moves");
    floor = new THREE.GridHelper(100, 20, 0x000000);
    floor.rotation.x = Math.PI / 2; // x軸周りに90度回転
    scene.add(floor);
    // if (stbtn.style.display != (stbtn.style.display = "none")){}
    if (sel.style.display != (sel.style.display = "none")){}
    if(reset.style.display != (reset.style.display = "block")){}
    if(bar.style.display != (bar.style.display = "block"));
    if(reset2.style.display != (reset2.style.display = "block")){}
}

// カメラ状態
function gameCamera() {
    camera.position.set( 30, 40, 20);
    camera.lookAt( {x:0, y:0, z:0 } ); 
}

// ゲームオブジェクト設定
function gameObject() {
    if(boo2) {
        bote2 = makeBote(0);
        bote2.position.set(2.5, 2.5, 2.5);
        scene.add(bote2);
    } else {
        inu2 = makeInu(0);
        inu2.position.set(2.5,2.5,2.5);
        scene.add(inu2);
    }
    
    const axesHelper2 = new THREE.AxesHelper( 50);
    scene.add(axesHelper2);
}

// btn -> move -> move-f
function resetCamera() {
    if (boo2) {
        resetCameraf(bote2);
    } else {
        resetCameraf(inu2);
    }
    
}
function resetObject() {
    if(boo2) {
        resetObjectf(bote2);
    } else {
        resetObjectf(inu2);
    }
    
}
function moveFront() {
    if(boo2) {
        moveFrontf(bote2);
    } else {
        moveFrontf(inu2);
    } 
}
function moveLeft() {
    if(boo2) {
        moveLeftf(bote2);
    } else {
        moveLeftf(inu2);
    }
}
function moveRight() {
    if(boo2) {
        moveRightf(bote2);
    } else {
        moveRightf(inu2);
    }
}
function moveBack() {
    if(boo2) {
        moveBackf(bote2);
    } else {
        moveBackf(inu2);
    } 
}

// 視点リセットボタン
function resetCameraf(bote) {
    // 座標を初期化
    var cameraPosition = bote.position.clone().add(new THREE.Vector3(30, 40, 20));
    camera.position.copy(cameraPosition);
    controls.target.copy(bote.position);
}

// ぼてじんリセットボタン
function resetObjectf(bote) {
    // 回転を初期化
    bote.rotation.copy(initialRot);
    bote.position.set(2.5, 2.5, 2.5);
    bote.rotation.x = Math.PI / 2;
    bote.rotation.y = Math.PI / 2;
}

// 動作
// 前進
function moveFrontf(bote) {
    // カメラの位置を設定
    cameraPos = bote.position.clone().add(new THREE.Vector3(30, 50, 20));
    camera.position.copy(cameraPos);
    bote.rotateOnWorldAxis(new THREE.Vector3(1,0,0),-Math.PI/2);
    bote.position.y += 5;
    controls.target.copy(bote.position);
    // 一定以上移動したらfrontボタン消したい
}

// 左
function moveLeftf(bote) {
    // カメラの位置を設定
    cameraPos = bote.position.clone().add(new THREE.Vector3(30, 40, 20));
    camera.position.copy(cameraPos);
    bote.rotateOnWorldAxis(new THREE.Vector3(0,1,0),Math.PI/2);
    bote.position.x += 5;
    controls.target.copy(bote.position);
}

// 右
function moveRightf(bote) {
    // カメラの位置を設定
    cameraPos = bote.position.clone().add(new THREE.Vector3(30, 40, 20));
    camera.position.copy(cameraPos);
    bote.rotateOnWorldAxis(new THREE.Vector3(0,1,0),-Math.PI/2);
    bote.position.x -= 5;
    controls.target.copy(bote.position);
}

// 後
function moveBackf(bote) {
    // カメラの位置を設定
    var cameraPos = bote.position.clone().add(new THREE.Vector3(30, 40, 20));
    camera.position.copy(cameraPos);
    bote.rotateOnWorldAxis(new THREE.Vector3(1,0,0),Math.PI/2);
    bote.position.y -= 5;
    // 
    // OrbitControlsのターゲットを設定
    controls.target.copy(bote.position);

    // カメラの更新
    // controls.update();
}

// ループ関数
function animate(){
    renderer.clear();
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}
  