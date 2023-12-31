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
// タイトル画面での時間
// 選択画面では2, ゲーム画面では-1
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
  "assets/wan1.png",
  "assets/wan.png",
  "assets/wan.png",
  "assets/wan.png"
];
// ローダ
var loader = new THREE.TextureLoader();
// ぼてじんのテクスチャマッピング
var texture, materials = [];
// いぬてんのテクスチャマッピング
var texture2, materials2 = [];
// 背景
var floor2, wall, wall2;
var sel;
var pen, pensaki, kokuen;
// ボタン状態
var floor, stbtn, reset, reset2, selbtn;
// バー状態
var bar, fbtn, lbtn, mbtn;
// 説明表示(=0 mod2)非表示
var counter = 0;
// リセットのための初期化変数
const initialRot= new THREE.Euler(0, 0, 0);
const initialPos = new THREE.Euler(0, 0, 0);
// カメラ位置
var cameraPos;
// キャラクター選択
// bote:1, inu:0
var boo2;
// モード設定
var mode;
// 選択画面の床
var floor4, ilust, ilust2;
var bote3;
var inu3;
// 選択画面判別 0:モード 1:キャラ
var mdblan;