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

function modeInit(){
  initScene();
  // こいつがいるとtitle画面のまま
  // initThree();
  // こいつがいるとgame画面が表示されない
  // initCamera();
  modeScene();
  selectCamera();
  initLight();
  selectFloor();
  modeObject();
  loop2(0);
}

function selectInit(boo3){
  const movsel = boo3;
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
  loop2(1);
}

// ゲーム画面
function gameInit(boo2){
  t = -1;
  initScene();
  initLight();
  initVal(boo2);
  gameSub();
  gameScene();
  gameCamera();
  gameObject();
  animate();
}

function initMode(mode) {
  tick = 0;
  console.log(mode);
  gameMode(mode);
  ontick();
}