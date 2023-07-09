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
var t=0;
// ぼてじん設定
var bote;
var urls = [
  "assets/face.png",
  "assets/botejin.png",
  "assets/test.png",
  "assets/test.png",
  "assets/test.png",
  "assets/test.png"
];
// いぬてん設定
var inu;
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
var floor2;
// ボタン状態
var floor, stbtn, reset, reset2;
// バー状態
var bar, fbtn, lbtn;
// リセットのための初期化変数
const initialRot= new THREE.Euler(0, 0, 0);
const initialPos = new THREE.Euler(0, 0, 0);
// カメラ位置
var cameraPos;