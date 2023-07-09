//直方体を作る関数
// rzは必要なかったから、枠かもじか
function makeCube(sx,sy,sz,x,y,z,rx,ry,rz){
    if(rz == 0) { // 文字
        cube = new THREE.Mesh(
            new THREE.BoxGeometry(sx,sy,sz),
            new THREE.MeshLambertMaterial({color : 0xffff00})
        );
    } else { // frame
        cube = new THREE.Mesh(
            new THREE.BoxGeometry(sx,sy,sz),
            new THREE.MeshBasicMaterial({color : 0x000000})
        );
    }
    
    // scene.add(cube);
    cube.position.set(x,y,z);
    cube.rotation.x = rx;
    cube.rotation.y = ry;
    // cube.rotation.z = rz;
    scene.add(cube);
}
  
// トーラスを作る関数
// 外円半径、太さ、セグメント数
function makeTorus(er,ir,rs,ts,x,y,z,rx,ry,rz){
    var torus = new THREE.Mesh(
        new THREE.TorusGeometry(er,ir,rs,ts),
        new THREE.MeshLambertMaterial({color: 0xffff00})
    );
    torus.position.set(x,y,z);
    torus.rotation.x = rx;
    torus.rotation.y = ry + Math.PI/2;
    torus.rotation.z = rz + Math.PI/2;
    scene.add(torus);
}

// 角度つきトーラスを作る関数
// 外円半径、太さ、セグメント数
function makeTorus2(er,ir,rs,ts,arc,x,y,z,rx,ry,rz){
    var torus = new THREE.Mesh(
        new THREE.TorusGeometry(er,ir,rs,ts,arc),
        new THREE.MeshBasicMaterial({color: 0x000000})
    );
    torus.position.set(x,y,z);
    torus.rotation.x = rx;
    torus.rotation.y = ry + Math.PI/2;
    torus.rotation.z = rz + Math.PI/2;
    scene.add(torus);
}


function mojiPita() {
    // ぴ
    makeCube(5,23,7,5,-76,32,0,0,0);
    makeCube(5,7,35,5,-84,30,0,0,0);
    makeCube(5,23,7,5,-76,15,0,0,0);
    makeTorus(5,3,20,50,5,-60,40,0,0,0);

    // た
    makeCube(5,21,7,5,-30,33,Math.PI/3,0,0);
    makeCube(5,32,7,5,-20,23,Math.PI/3,0,0);
    makeCube(5,20,7,5,-20,37,-Math.PI/7,0,0);
    makeCube(5,15,7,5,-23,25,-Math.PI/7,0,0);

    // ご
    makeCube(5,22,7,5,22,33,0,0,0);
    makeCube(5,22,7,5,22,14,0,0,0);
    makeCube(5,7,25,5,30,24,0,0,0);
    makeTorus(3,3,20,50,5,33,40,0,0,0);
    makeTorus(3,3,20,50,5,43,40,0,0,0);

    // ら
    makeCube(5,21,7,5,72,42,0,0,0);
    makeCube(5,27,7,5,72,29,0,0,0);
    makeCube(5,7,15,5,82,25,0,0,0);
    makeCube(5,15,7,5,78,15,Math.PI/4,0,0);

    // す
    makeCube(5,22,7,5,-72,-28,0,0,0);
    makeCube(5,20,7,5,-70,-39,Math.PI/3,0,0);
    makeCube(5,14,7,5,-79,-49,Math.PI/5,0,0);
    makeCube(5,15,7,5,-65,-45,-Math.PI/7,0,0);

    // い
    makeCube(5,32,7,5,-22,-36,Math.PI/5,0,0);
    makeCube(5,7,25,5,-20,-45,0,0,0);

    // つ
    makeTorus(4,3,20,50,5,15,-38,0,0,0);
    makeTorus(4,3,20,50,5,27,-38,0,0,0);
    makeCube(5,22,7,5,34,-50,Math.PI/4,0,0);

    // ち
    makeCube(5,22,7,5,78,-27,Math.PI/8,0,0);
    makeCube(5,27,7,5,79,-41,0,0,0);
    makeCube(5,7,18,5,80,-38,0,0,0);
    makeCube(5,15,7,5,79,-50,Math.PI/2.5,0,0);
}

// 枠
function mojiWaku() {
    makeCube(5,290,3,0,0,99,0,0,1);
    makeCube(5,290,3,0,0,-111,0,0,1);
    makeCube(5,3,197,0,151,-7,0,0,1);
    makeCube(5,3,197,0,-153,-7,0,0,1);
    makeTorus2(10,2,20,20,Math.PI/2,0,141,89,0,0,0);
    makeTorus2(10,2,20,20,Math.PI/2,0,-143,89,0,0,Math.PI/2);
    makeTorus2(9,2,20,20,Math.PI/2,0,-144,-102,0,0,Math.PI);
    makeTorus2(9,2,20,20,Math.PI/2,0,142.5,-102,0,0,(Math.PI * 3)/2);
}