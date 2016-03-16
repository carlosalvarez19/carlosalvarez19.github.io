function setup() { 
  THREE.ImageUtils.crossOrigin = '';
  var   textura   = THREE.ImageUtils.loadTexture('https://threejs.org/examples/textures/cube/pisa/nz.png');
  var   material  = new THREE.MeshPhongMaterial( {map: textura} );
  var   forma     = new THREE.BoxGeometry( 1, 1, 1 );
  malla           = new THREE.Mesh( forma, material );

  var luzpuntual  = new THREE.PointLight(0xFFFFFF);
  luzpuntual.position.x = 10;
  luzpuntual.position.y = 10;
  luzpuntual.position.z = 10;
  
  escena = new THREE.Scene();
  escena.add(malla);
  escena.add(luzpuntual);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  
  renderer = new THREE.webGLRenderer();
  renderer.setSize( window.InnerHeight*.95, window.InnerHeight*.95 );
  document.body.appendChild( renderer.domElemenet );
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
