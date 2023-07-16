// boo2は有効

var move;
// オートモード時の設定
function autoModef() {
    move = document.getElementById("moves");
    var mode2 = document.getElementById("auto");
    stime = Date.now();
    if (move.style.display != (move.style.display = "none")){}
    mode2.style.color = 0x000000;
    var bplate = new THREE.Mesh(
        new THREE.PlaneGeometry(5,5),
        new THREE.MeshBasicMaterial({ map: loader.load("assets/yuka.png")})
    );
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
        scene.add(instance);
    });
    resetObject(); // 通常モードでの座標を初期化
    (boo2) ? bote2.position.y -= 35: inu2.position.y -= 35;
    resetCamera();
}

var tick = 0;
// create a global audio source
const sound2 = new THREE.Audio( listener );
var k = 1;
function gameMode(movsel) {
    if(movsel == 1) {
        // autoModef();
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
                if (sound2.isPlaying) autoModef();
                console.log("k2="+k);
                k = 0;
            }
        });
    } else {
        move = document.getElementById("moves");

        if(move.style.display != (move.style.display = "none")){}
    }
}

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
    }


    if(time == 80) { // Autoモード終了
        resetObject();
        resetCamera();
        gameInit(boo2);
    }

}
var t2 = 0, mod;
function ontick(){
    t2 +=1;
    // if (tick != parseInt(performance.now() /1000)) {
    //     tick = parseInt((Date.now()-stime)/1000);
    //     //console.log(tick);
    //     // console.log(parseInt((Date.now()-stime)/1000));
    //     console.log(tick);
    //     autoMove(tick);
    // }
    // tick = parseInt((Date.now()-stime)/1000);
    // (boo2) ? mod = 20: mod = 13;
    if((t2)%20 == 0 && t2 > 0) {
        tick += 1;
        // tick -= 5;
        autoMove(tick);
        console.log(tick);
    }
    // tick = parseInt((Date.now()-stime)/1000);

    renderer.clear();
    controls.update();
    renderer.render(scene, camera);
    if(tick < 80) window.requestAnimationFrame(ontick);
}