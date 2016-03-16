function setup() { 
  THREE.ImageUtils.crossOrigin = '';
  var   textura   = THREE.ImageUtils.loadTexture(´http://threejs.org/examples/textures/brick.diffuse.jpg');
  var   material  = THREE.MeshBasicmaterial( {map: textura} );
  var   forma     = new THREE.Box Geometry( 1, 4, 9 );
  malla           = new THREE.Mesh( forma, material );
  
  var luzpuntual  = newTHREE.PointLight(0xFFFFFF);
  luzpuntual.position.x = 10;
  luzpuntual.position.y = 10;
  luzpuntual.position.z = 10;
  
  escena = new THREE.Scene();
  escena.add(malla);
  escena.add(luzpuntual);
  
  camara = new THREE.PerspectiveCamerea();
  camara.position.z = 10;
  
  
  renderer = new THREE.webGLRenderer();
  renderer.SetSize( window.InnerHeight*.95, window.InnerHeight*.95 );
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
