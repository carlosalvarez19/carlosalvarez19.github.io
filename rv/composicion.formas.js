function setup(){

  //Se plantea las geometrias a utilizar
  
  var esferaForma = new THREE.SphereGeometry(1);
  var cilindroForma = new THREE.CylinderGeometry(0.5, 0.5, 4);
  
  //para poder generar una forma combinada se requiere de las mallas para poder desplazar las formas en el espacio virtual 
  
  var esfera1 = new THREE.Mesh(esferaForma);
  var esfera2 = new THREE.Mesh(esferaForma);
  var cilindro = new THREE.Mesh(cilindroForma);
  
  //Se desplazan las mallas
  
  esfera1.position.y=2;
  esfera2.position.y=-2;
  
  //Se genera una forma geometrica abstracta
  
  var forma = new THREE.Geometry();
  
  //Se utiliza el paquete GeometryUtils para conjuntar las formas 
  
  THREE.GeometryUtils.merge(forma, esfera1);
  THREE.GeometryUtils.merge(forma, esfera2);
  THREE.GeometryUtils.merge(forma, cilindro);
  
  //se genera la malla apartir de la forma 
  
  malla = new THREE.Mesh(forma);
  
  //se inicializa la escena a partir de la forma
  
  escena = new THREE.Scene();
  escena.add(malla);
  
  //se inicializa la camara y el rendered
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);

//es importante notar que las rotaciones son sobre los ejes que estan fijos a la malla, no a los ejes del lienzo,inicialmente ambos coinciden

malla.rotation.x +=0.01;
malla.rotation.y +=0.01;

renderer.render(escena,camara);
}

var escena, camara, renderer, malla;
setup();
loop();
