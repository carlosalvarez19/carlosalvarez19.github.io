function setup(){
  var escena=new THREE.Scene();
  var fov = 75; // Campo de vision
  var aspect=window.innerWidth/window.innerHeight; //relacion de aspecto
  var near=0.1;// plno cercano
  var far =1000;// plano lejano
  var camara = new THREE.PerspectiveCamera(fov, aspect, near, far );
  
  camara.position.z=5;
  
  var renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  
var forma = new THREE.CylinderGeometry(1,1,5);
var material = new THREE.MeshDepthMaterial({color: 0x08f410});
var cilindro = new THREE.Mesh(forma, material);
escena.add(cilindro);
}
  
  function loop(){
    requestAnimationFrame(render);
    
    cilindro.rotation.x +=0.1;
    renderer.render(escena,camara);
  }
  
  setup();
  loop();
