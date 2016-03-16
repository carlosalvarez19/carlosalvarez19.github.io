function setup() { 
  THREE.ImageUtils.crossOrigin = '';
  var   textura   = THREE.ImageUtils.loadTexture(´http://three.js.org/examples/textures/create.gif');
  var   material  = THREE.MeshBasicmaterial( {map: textura} );
  var   forma     = new THREE.Box Geometry( 1, 1, 1 );
  malla           = new THREE.Mesh( forma, material );
  
  escena = new THREE.Scene();
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamerea();
  camara.position.z = 5;
  
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