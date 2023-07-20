// ウィンドウ読み込み時
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

function modeInit(){
  initScene();
  modeScene();
  selectCamera();
  initLight();
  selectFloor();
  modeObject();
  setSelect(0);
  loop2();
}

// 選択画面
// boo3: auto or free
function selectInit(boo3){
  t = 2;
  initScene();
  // こいつがいるとtitle画面のまま
  // initThree();
  // こいつがいるとgame画面が表示されない
  // initCamera();
  setMode(boo3);
  selectScene();
  selectCamera();
  initLight();
  selectFloor();
  selectObject();
  setSelect(1);
  loop2();
}

// ゲーム画面
// boo2: bote or inu
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

// モード選択やり直し
function initMode(mode) {
  tick = 0;
  console.log(mode);
  gameMode(mode);
  ontick();
}