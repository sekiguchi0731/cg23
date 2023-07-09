// make botejin
// boo : title(=1) or game(=0)
function makeBote(boo) {
    var bote;
    loader = new THREE.TextureLoader();
    for(let i = 0;i < urls.length;i++) {
      materials.push(new THREE.MeshBasicMaterial(
        { map: loader.load(urls[i])})
        );
    }
    if(boo) { // タイトル画面
        bote = new THREE.Mesh(
            new THREE.BoxGeometry(25, 25, 25),
            materials
        );
    } else { // ゲーム画面
        bote = new THREE.Mesh(
            new THREE.BoxGeometry(5, 5, 5),
            materials
        );
        bote.rotation.copy(initialRot);
        bote.rotation.x = Math.PI / 2;
        bote.rotation.y = Math.PI / 2;
        const axesHelper = new THREE.AxesHelper(20);
        bote.add( axesHelper );
    }
    return bote;
}
// make inuten
// boo : title(=1) or game(=0)
function makeInu(boo) {
    loader2 = new THREE.TextureLoader();
    for(let i = 0;i < iurls.length;i++) {
      materials2.push(new THREE.MeshLambertMaterial(
        { map: loader2.load(iurls[i])})
        );
    }
    if(boo) { // タイトル画面
        inu = new THREE.Mesh(
            new THREE.BoxGeometry(20,20, 20),
            materials2
        );
        inu.rotation.x = Math.PI / 2;
    } else { // ゲーム画面
        inu = new THREE.Mesh(
            new THREE.BoxGeometry(5, 5, 5),
            materials2
        );
        const axesHelper = new THREE.AxesHelper(20);
        inu.add( axesHelper );
        inu.rotation.x = Math.PI / 2;
        inu.rotation.y = Math.PI / 2;
    }
    scene.add(inu);
}