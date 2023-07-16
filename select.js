function modeScene() {
    stbtn = document.getElementById("start-btn");
    mbtn = document.getElementById("music-btn");
    var md = document.getElementById("mode");
    var mdbtn = document.getElementById("md-btn");

    if (stbtn.style.display != (stbtn.style.display = "none")){}
    if (mbtn.style.display != (mbtn.style.display = "none")) {
        // sound = null;
    }

    if(md.style.display != (md.style.display = "block")){}
    if(mdbtn.style.display != (mdbtn.style.display = "flex")){}
}

function selectScene() {
    sel = document.getElementById("select");
    selbtn = document.getElementById("sel-btn");
    var md = document.getElementById("mode");
    var mdbtn = document.getElementById("md-btn");

    if(md.style.display != (md.style.display = "none")){}
    if(mdbtn.style.display != (mdbtn.style.display = "none")){}
    if (sel.style.display != (sel.style.display = "block")){}
    // display: block;だと横並びにならない
    if (selbtn.style.display != (selbtn.style.display = "flex")){}
}

// カメラ状態
function selectCamera() {
    camera.position.set( 300, 0, 0);
    camera.up.z = 1;
    camera.lookAt( {x:0, y:0, z:0 } ); 
}

var floor4;
function selectFloor(){
    const axesHelper2 = new THREE.AxesHelper(500);
    floor4 = new THREE.Mesh(
        new THREE.PlaneGeometry(500,300),
        new THREE.MeshBasicMaterial({color:0x2e8b57})
    );
    floor4.rotation.y = Math.PI / 2;
    scene.add(axesHelper2);
    scene.add(floor4);
}

var ilust
function modeObject(){
    ilust = new THREE.Mesh(
        new THREE.PlaneGeometry(100,100),
        new THREE.MeshBasicMaterial({color: 0x000000})
    );

    scene.add(ilust);
}

var bote3;
var inu3;
function selectObject(){
    bote3 = makeBote(1);
    inu3 = makeInu(1);
    bote3.rotateOnWorldAxis(new THREE.Vector3(1,0,0), Math.PI/2);
    bote3.position.set(25,-50,0);
    inu3.position.set(25,50,0);
    scene.add(bote3);
    scene.add(inu3);
}

t = 0;
var roll;
function loop2(boo4){
    t++;
    renderer.clear();
    if(boo4) {
        // bote3.rotation.set(bote3.rotation.copy().add(roll));
        bote3.rotation.set(t/100,0,0);
        // これだと、調整した方向がまた0に戻っちゃうからだめ。元のに加えていかないと、
        inu3.rotation.set(-t/100,0,0);
    }
    camera.lookAt( {x:0, y:0, z:0 } );   
    if(t > 0) {
      controls.update(); 
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop2);
    }
}