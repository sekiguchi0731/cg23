// 画面の幅と高さ
var width, height;
// レンダラー
var renderer;
// カメラ状態と視点操作
var camera, controls;
// 光
var light, light2;
// 初期画面オブジェクト
var cube = Array(), plane;
// 時間
var t;
// ぼてじん設定
var bote1, bote2;
var urls = [
  "assets/face.png",
  "assets/syouyu.png",
  "assets/botejin1.png", // botejin
  "assets/boku.png",
  "assets/medama.png",
  "assets/shio.png"
];
// いぬてん設定
var inu1, inu2;
var iurls = [
  "assets/inuten.png",
  "assets/wan.png",
  "assets/wan.png",
  "assets/wan.png",
  "assets/wan.png",
  "assets/wan.png"
];
// ぼてじんのテクスチャマッピング
var loader, texture, materials = [];
// いぬてんのテクスチャマッピング
var loader2, texture2, materials2 = [];
// 背景
var floor2, wall, wall2;
var sel;
// ボタン状態
var floor, stbtn, reset, reset2, selbtn;
// バー状態
var bar, fbtn, lbtn, mbtn;
// リセットのための初期化変数
const initialRot= new THREE.Euler(0, 0, 0);
const initialPos = new THREE.Euler(0, 0, 0);
// カメラ位置
var cameraPos;
var boo2;
// モード設定
var mode;
// Auto

var stime, etime;