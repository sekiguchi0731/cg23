// return botejin
// boo : title(=1) or game(=0)
function makeBote(boo) {
    var bote;
    // loader = new THREE.TextureLoader();
    if(boo) { // タイトル画面
        for(let i = 0;i < urls.length;i++) {
            materials.push(new THREE.MeshLambertMaterial(
              { map: loader.load(urls[i])})
              );
        }
        bote = new THREE.Mesh(
            new THREE.BoxGeometry(25, 25, 25),
            materials
        );
    } else { // ゲーム画面
        for(let i = 0;i < urls.length;i++) {
            materials.push(new THREE.MeshBasicMaterial(
              { map: loader.load(urls[i])})
              );
        }
        bote = new THREE.Mesh(
            new THREE.BoxGeometry(5, 5, 5),
            materials
        );
        bote.castShadow = true;
        bote.rotation.copy(initialRot);
        bote.rotation.x = Math.PI / 2;
        bote.rotation.y = Math.PI / 2;
    }
    return bote;
}
// return inuten
// boo : title(=1) or game(=0)
function makeInu(boo) {
    if(boo) { // タイトル画面
        for(let i = 0;i < iurls.length;i++) {
            materials2.push(new THREE.MeshLambertMaterial(
              { map: loader.load(iurls[i])})
              );
        }
        inu = new THREE.Mesh(
            new THREE.BoxGeometry(20,20, 20),
            materials2
        );
        inu.rotation.x = Math.PI / 2;
    } else { // ゲーム画面
        for(let i = 0;i < iurls.length;i++) {
            materials2.push(new THREE.MeshBasicMaterial(
              { map: loader.load(iurls[i])})
              );
        }
        inu = new THREE.Mesh(
            new THREE.BoxGeometry(5, 5, 5),
            materials2
        );
        inu.castShadow = true;
        inu.rotation.x = Math.PI / 2;
        inu.rotation.y = Math.PI / 2;
    }
    return inu;
}

// return pen f
function makePen(col) {
    pen = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 30, 30, 10, false),
        new THREE.MeshStandardMaterial({color: col, roughness:0.5})
    );
    pen.castShadow = true;
    return pen;
}
// return pensaki f
function makePensaki(icol) {
    if(icol) {
        pensaki = new THREE.Mesh(
            new THREE.CylinderGeometry(0, 1, 5, 30, 10, false),
            new THREE.MeshStandardMaterial({color: 0xe9be7f, roughness:0.5})
        );
    } else {
        pensaki = new THREE.Mesh(
            new THREE.CylinderGeometry(0, 0.5, 2, 30, 10, false),
            new THREE.MeshStandardMaterial({color: 0x000000, roughness:0.5})
        );
        console.log(icol);
    }
    pensaki.castShadow = true;
    return pensaki;
}