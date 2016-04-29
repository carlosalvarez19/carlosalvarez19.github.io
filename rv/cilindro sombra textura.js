function setup(){
  THREE.ImageUtils.crossOrigin = '';
  var   textura   = THREE.ImageUtils.loadTexture('https://github.com/carlosalvarez19/carlosalvarez19.github.io/blob/master/rv/LPLogo-black.svg.png');
  var   material  = new THREE.MeshPhongMaterial( {map: textura} );
  var   forma     = new THREE.SphereGeometry( 1, 100, 100 );
  malla           = new THREE.Mesh( forma, material );
  malla.rotation.z += 0.25; 

  var luzpuntual  = new THREE.PointLight(0xFFFFFF);
  luzpuntual.position.x = 10;
  luzpuntual.position.y = 10;
  luzpuntual.position.z = 10;
  
  var forma   = new THREE.BoxGeometry( 1, 1, 2.5);
  var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  malla   =new THREE.Mesh( forma, material );

  escena = new THREE.Scene();
  escena.add(malla);
  escena.add(luzpuntual);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 5;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild( renderer.domElement );
  
}
  
  function loop(){
    requestAnimationFrame(render);
    
    cilindro.rotation.x +=0.1;
    renderer.render(escena,camara);
  }
  
  setup();
  loop();
