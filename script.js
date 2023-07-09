window.onload = function(){
  threeStart();
}

// 初期画面
function threeStart() {
  initThree();
  initCamera();
  initScene();    
  initLight();
  initFloor();
  initObject();
  loop();
}

// チュートリアルページ作る！

// ゲーム画面
function gameInit(){
  t = -1;
  initScene();
  initLight();
  gameScene();
  gameCamera();
  gameObject();
  animate();
}