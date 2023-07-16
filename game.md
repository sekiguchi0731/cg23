### 回転について
以下はオイラー角を利用するのでわかりにくい
```js
bote.rotation.z -= Math.PI / 2;
```
以下はオブジェクトの回転軸で回るため、回転のたびに軸の向きが変わってしまう
```js
bote.rotateZ(-Math.PI / 2);
```
```python
for(int i = 0;i < 5;i++){
    print(i)
}
```

### カメラの視点について
targetに視点を合わせたい時、通常は以下でおk
```js
camera.lookAt(target.position);
```
ただし、OrbitControls.jsを用いている場合、カメラの視点はcontrolsが処理している。
よって、以下のように記述しなければならない
```js
controls.target.copy(bote.position);
```
ループ関数内で、`controls.update()`を忘れぬよう。

### ライトについて
```js
materials = new THREE.MeshLambertMaterial({color: 0xffff00});
```
じゃないとライトの影響を受けない

- 音声をつける
- いぬてんの挙動
  - わん
- Autoモード
  - 文字入れる
  - タイルはる
- ゲームモード
  - 終了判定
- CSS各位
- チュートリアル

- 頑張った点
  - 転がるをどう表現するか
    - 回転がオイラー角でわからなかった
  - 音声の出力
  - 遷移を独立させる
  - 影をつけること
  - シーンの遷移
  - キャラクターを分けること(動作は同じじゃないと)
  - autoモード
  - カメラ
- これから
  - ゲームモードなど
  - CSS周り