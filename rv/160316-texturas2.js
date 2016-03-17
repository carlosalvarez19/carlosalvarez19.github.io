function setup() { 
  THREE.ImageUtils.crossOrigin = '';
  var   textura   = THREE.ImageUtils.loadTexture('https://github.com/mrdoob/three.js/blob/master/examples/textures/brick_diffuse.jpg');
  var   material  = new THREE.MeshBasicMaterial( {map: textura} );
  var   forma     = new THREE.BoxGeometry( 1, 4, 9 );
  malla           = new THREE.Mesh( forma, material );
  
  //Tambien se puede hacer un cubo de dimension uno y luiego escalarlo//
  
  //var   textura   = THREE.ImageUtils.loadTexture(´http://threejs.org/examples/textures/brick.diffuse.jpg');
  //var   material  = new THREE.MeshBasicMaterial( {map: textura} );
  //var   forma     = new THREE.BoxGeometry( 1, 1, 1 );
  //malla           = new THREE.Mesh( forma, material );
  //malla.scale.set( 1, 4, 9);
  
  
  var luzpuntual  = new THREE.PointLight(0xFFFFFF);
  luzpuntual.position.x = 10;
  luzpuntual.position.y = 10;
  luzpuntual.position.z = 10;
  
  escena = new THREE.Scene();
  escena.add(malla);
  escena.add(luzpuntual);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild( renderer.domElement );
}
  
function loop(){
  requestAnimationFrame( loop);
    
  malla.rotation.x += 0.01;
  malla.rotation.y += 0.01;
  
  renderer.render( escena, camara );
}
 var camara, escena, renderer, malla;
 setup();
 loop();
