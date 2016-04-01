function Brazo (){

THREE.Object3D.call(this);
this.brazo=new THREE.Mesh(new THREE.BoxGeometry(2,2,12));
this.add(this.brazo);
}



function Cabeza (){

THREE.Object3D.call(this);

this.cilindro1=new THREE.Mesh(new THREE.CylinderGeometry(2,2,5,100));
this.cilindro2=new THREE.Mesh(new THREE.CylinderGeometry(2,2,5,100));
this.cilindro3=new THREE.Mesh(new THREE.CylinderGeometry(1,1,5,100));

 this.cilindro1.position.y=10;
 this.cilindro1.position.x=-2;
 this.cilindro1.rotation.x +=1.57;
 
 this.cilindro2.position.y=10;
 this.cilindro2.position.x=2;
 this.cilindro2.rotation.x +=1.57;

 this.cilindro3.position.y=7;

this.add(this.cilindro1);
this.add(this.cilindro2);
this.add(this.cilindro3);
}


Brazo.prototype=new THREE.Object3D();
Cabeza.prototype=new THREE.Object3D();

function setup(){

var cuboForma=new THREE.BoxGeometry(10,10,10);
var tri= new THREE.Shape();
tri.moveTo(0,0);
tri.lineTo(2,2);
tri.lineTo(4,0);
tri.lineTo(0,0);
var trianguloForma = new THREE.ExtrudeGeometry(tri,{amount:-5});


  var cubo = new THREE.Mesh(cuboForma);
  var triangulo1 = new THREE.Mesh(trianguloForma);
  var triangulo2 = new THREE.Mesh(trianguloForma);
  

 triangulo1.position.x=10;
 triangulo1.position.y=-7;
 triangulo1.rotation.y +=1.57;

 triangulo2.position.x=-5;
 triangulo2.position.y=-7;
 triangulo2.rotation.y +=1.57

 
 var forma = new THREE.Geometry();
  
 THREE.GeometryUtils.merge(forma, cubo);
 THREE.GeometryUtils.merge(forma, triangulo1);
 THREE.GeometryUtils.merge(forma, triangulo2);

 var material =new THREE.MeshNormalMaterial();
 malla= new THREE.Mesh(forma, material);
 
 brazo1= new Brazo();
 brazo2= new Brazo();
 cabeza= new Cabeza();
 
 brazo1.position.x=6;
 brazo1.position.y=2;
 brazo1.position.z=6;

 brazo2.position.x=-6;
 brazo2.position.y=2;
 brazo2.position.z=6;
  
 step=0.05; 
 escena= new THREE.Scene();
 escena.add(malla);
 escena.add(brazo1);
 escena.add(brazo2);
 escena.add(cabeza);

 camara= new THREE.PerspectiveCamera();
 camara.position.z=50;
 
 renderer= new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
 }

function loop() {
  requestAnimationFrame(loop);
  cabeza.rotation.y +=0.01;
  renderer.render(escena,camara);
if(Math.abs(brazo1.rotation.x)>.5)
  step=-step;
  brazo1.rotation.x+=step;
  brazo2.rotation.x+=step;
  
}


function loop2() {
  requestAnimationFrame(loop2);
  //malla.rotation.y-=0.01;
  //brazo1.rotation.y+=0.01;
  //brazo2.rotation.y+=0.01; 
  renderer.render(escena,camara);
  
}

var escena, camara, renderer, malla;
var step, brazo1, brazo2, cabeza;

setup();
loop();
loop2();
