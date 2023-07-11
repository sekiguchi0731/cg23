window.onload = function(){
  threeStart();
}

// 初期画面
function threeStart() {
  initThree();
  initCamera();
  // initAudio();
  initScene();    
  initLight();
  initFloor();
  initObject();
  loop();
}

// チュートリアルページ作る！

function selectInit(){
  initScene();
  // こいつがいるとtitle画面のまま
  // initThree();
  // こいつがいるとgame画面が表示されない
  // initCamera();
  selectScene();
  selectCamera();
  initLight();
  selectFloor();
  selectObject();
  loop2();
}

// ゲーム画面
function gameInit(boo2){
  t = -1;
  initScene();
  initLight();
  initVal(boo2);
  gameScene();
  gameCamera();
  gameObject();
  animate();
}