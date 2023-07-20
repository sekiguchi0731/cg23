// boo2は有効

var move;
// オートモード時の設定
function autoModef() {
    // オートモード床
    var bplate = new THREE.Mesh(
        new THREE.PlaneGeometry(5,5),
        new THREE.MeshBasicMaterial({ map: loader.load("assets/yuka.png")})
    );

    if(boo2) { // ぼてじん
        // 床座標
        const positions = [{x:2.5, y:-32.5, z:0.1}];
        for (let i = 1;i < 14;i++) {
            positions.push({x:2.5, y:-32.5+i*5,z:0.1});
        }
        for (let i = 0;i < 2;i++) {
            positions.push({x:-2.5,y:17.5+i*5,z:0.1});
            positions.push({x:7.5,y:17.5+i*5,z:0.1});
            positions.push({x:12.5,y:17.5+i*5,z:0.1});
            positions.push({x:17.5+i*5,y:17.5,z:0.1});
        }
        positions.push({x:7.5,y:27.5,z:0.1});
        positions.push({x:27.5,y:17.5,z:0.1});
        
        positions.forEach((pos) => {
            const instance = bplate.clone();
            instance.position.set(pos.x, pos.y, pos.z);
            instance.receiveShadow = true;
            scene.add(instance);
        });
    } else { // いぬてん
        const positions = [{x:2.5, y:-2.5, z:0.1}];
        for (let i = 1;i < 18;i++) {
            positions.push({x:2.5, y:-37.5+i*5,z:0.1});
        }

        positions.forEach((pos) => {
            const instance = bplate.clone();
            instance.position.set(pos.x, pos.y, pos.z);
            instance.receiveShadow = true;
            scene.add(instance);
        });
    }
}

// オートモード時の音声設定
var tick = 0;
// create a global audio source
const sound2 = new THREE.Audio( listener );
var k = 1;
function gameMode(movsel) {
    if(movsel ==  1 && boo2) {//オートかつぼて
        console.log("k="+k);
        // load a sound and set it as the Audio object's buffer
        const audioLoader2 = new THREE.AudioLoader();
        audioLoader2.load( 'sounds/auto.m4a', function( buffer ) {
            sound2.setBuffer( buffer );
            sound2.setLoop( true );
            sound2.setVolume( 0.5 );
            sound2.loop = false;
            if (k){
                sound2.play();
                if (sound2.isPlaying) {
                    autoModef();
                    bote2.position.y -= 35;
                    resetCamera();
                }
                console.log("k2="+k);
                k = 0;
            }
        });
    } else if(movsel == 1 && !boo2) { // オートかついぬ
        console.log("wan");
        const audioLoader2 = new THREE.AudioLoader();
        audioLoader2.load( 'sounds/auto2.m4a', function( buffer ) {
            sound2.setBuffer( buffer );
            sound2.setLoop( true );
            sound2.setVolume( 1 );
            sound2.loop = false;
            if (k){
                sound2.play();
                if (sound2.isPlaying) {
                    autoModef();
                    inu2.position.y -= 40;
                    resetCamera();
                }
                console.log("k2="+k);
                k = 0;
            }
        });
    }
}

// オートモード設定時の挙動
function autoMove(time) {
    if (boo2) { // bote-auto
        if (time < 0) resetCamera();
        // b1
        if ((time%8 == 1) && (time < 25)) moveFront();
        if ((time%8 == 2) && (time < 25)) moveFront();
        if ((time%8 == 3) && (time < 25)) moveFront();
        if ((time%8 == 4) && (time < 25)) moveFront();
        if ((time%8 == 6) && (time < 25)) moveFront();
        if ((time%8 == 0) && (time < 25)) moveBack();

        // 僕
        let e = 29;
        if(time == e) moveBack();
        if(time == e+1) moveRight();


        // ぼてじん
        let f = 34
        if(time == f) moveBack();
        if(time == f+1) moveLeft();
        if(time == f+2) moveFront();
        if(time == f+3) moveLeft();
        if(time == f+5) moveFront();

        // めだまやきには
        let g = 45
        if(time == g) moveBack();
        if(time == g+1) moveLeft();
        if(time == g+2) moveBack();

        // 醤油
        let h = 52
        if(time == h) moveFront();
        if(h<time && time<h+3) moveRight();
        if(h+2<time && time<h+5) moveFront();

        let a2 = 65; // 僕
        if(time == a2) moveBack();
        if(time == a2+1) moveLeft();
        if(time == a2+2) moveBack();

        // 塩
        let a3 = 71
        if(time == a3) moveBack();

        if(75 < time && time < 80) moveLeft();
    } else if (!boo2) { // オートモードいぬてん
        if (time < 17) moveFront();

        if (time == 27) moveFront();
        if (time == 30) moveBack();
    }


    if(time == 80) { // Autoモード終了
        resetObject();
        resetCamera();
        gameInit(boo2);
    }

}

// ループ関数
var t2 = 0, mod;
function ontick(){
    t2 +=1;
    (boo2) ? mod = 20: mod = 13;
    if((t2)%mod == 0 && t2 > 0 && md2 == 1) {
        tick += 1;
        autoMove(tick);
    }

    renderer.clear();
    controls.update();
    renderer.render(scene, camera);
    if(tick <  80) window.requestAnimationFrame(ontick);
    if(tick == 79) {
        md2 = null;
        resetObject();
        resetCamera();
        gameInit(boo2);
    }
}