function Brazo (){

THREE.Object3D.call(this);

THREE.ImageUtils.crossOrigin = '';
var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');

var brazoMaterial = new THREE.MeshBasicMaterial( {map: textura} );
var brazoForma = new THREE.BoxGeometry(20,20,120);
 
this.brazo = new THREE.Mesh( brazoForma, brazoMaterial );

  
  var gripper =new THREE.Shape();
  gripper.moveTo(0,0);
  gripper.lineTo(0,20);
  gripper.lineTo(20,40);
  gripper.lineTo(40,40);
  gripper.lineTo(60,20);
  gripper.lineTo(60,15);
  gripper.lineTo(50,15);
  gripper.lineTo(50,20);
  gripper.lineTo(40,30);
  gripper.lineTo(20,30);
  gripper.lineTo(10,20);
  gripper.lineTo(10,0);
  gripper.lineTo(20,-10);
  gripper.lineTo(40,-10);
  gripper.lineTo(50,0);
  gripper.lineTo(50,5);
  gripper.lineTo(60,5);
  gripper.lineTo(60,0);
  gripper.lineTo(40,-20);
  gripper.lineTo(20,-20);
  gripper.lineTo(0,0);
  
  gripperForma = new THREE.ExtrudeGeometry(gripper,{amount:15});
  var griperMaterial = new THREE.MeshBasicMaterial( {map: textura} );
   
  this.griper = new THREE.Mesh( gripperForma, griperMaterial ); 

  this.brazo.position.x=60;
  this.brazo.position.y=20;
  this.brazo.position.z=70;
  
  this.griper.rotation.y=-1.57;
  this.griper.position.x=70;
  this.griper.position.y=10;    
  this.griper.position.z=120;	

this.add(this.brazo);
this.add(this.griper);

}


function Brazo2 (){

THREE.Object3D.call(this);

THREE.ImageUtils.crossOrigin = '';
var   textura1   = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');

var brazoMaterial = new THREE.MeshBasicMaterial( {map: textura} );
var brazoForma = new THREE.BoxGeometry(20,20,120);
 
this.brazo = new THREE.Mesh( brazoForma, brazoMaterial );

  
  var gripper =new THREE.Shape();
  gripper.moveTo(0,0);
  gripper.lineTo(0,20);
  gripper.lineTo(20,40);
  gripper.lineTo(40,40);
  gripper.lineTo(60,20);
  gripper.lineTo(60,15);
  gripper.lineTo(50,15);
  gripper.lineTo(50,20);
  gripper.lineTo(40,30);
  gripper.lineTo(20,30);
  gripper.lineTo(10,20);
  gripper.lineTo(10,0);
  gripper.lineTo(20,-10);
  gripper.lineTo(40,-10);
  gripper.lineTo(50,0);
  gripper.lineTo(50,5);
  gripper.lineTo(60,5);
  gripper.lineTo(60,0);
  gripper.lineTo(40,-20);
  gripper.lineTo(20,-20);
  gripper.lineTo(0,0);
  
  gripperForma = new THREE.ExtrudeGeometry(gripper,{amount:15});
  var griperMaterial = new THREE.MeshBasicMaterial( {map: textura} );
   
  this.griper = new THREE.Mesh(gripperForma, griperMaterial);
  
  this.brazo.position.x=-60;
  this.brazo.position.y=20;
  this.brazo.position.z=70;
  
  this.griper.rotation.y=-1.57;
  this.griper.position.x=-55;
  this.griper.position.y=10;    
  this.griper.position.z=120;	

this.add(this.brazo);
this.add(this.griper);

}


function Cabeza (){

THREE.Object3D.call(this);

THREE.ImageUtils.crossOrigin = '';
var   textura2   = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');

var cilindroForma = new THREE.CylinderGeometry(20,20,50,100);
var cilindroMaterial = new THREE.MeshBasicMaterial( {map: textura2} );
var cilindro2Forma = new THREE.CylinderGeometry(10,10,50,100);
var cilindro2Material = new THREE.MeshBasicMaterial( {map: textura2} );
         

this.cilindro1 = new THREE.Mesh( cilindroForma, cilindroMaterial );
this.cilindro2 = new THREE.Mesh( cilindroForma, cilindroMaterial );
this.cilindro3 = new THREE.Mesh( cilindro2Forma, cilindro2Material );

 this.cilindro1.position.y=100;
 this.cilindro1.position.x=-20;
 this.cilindro1.rotation.x +=1.57;
 
 this.cilindro2.position.y=100;
 this.cilindro2.position.x=20;
 this.cilindro2.rotation.x +=1.57;

 this.cilindro3.position.y=70;

 this.add(this.cilindro1); 
 this.add(this.cilindro2);
 this.add(this.cilindro3);
}


Brazo.prototype=new THREE.Object3D();
Brazo2.prototype=new THREE.Object3D();
Cabeza.prototype=new THREE.Object3D();

function setup(){

THREE.ImageUtils.crossOrigin = ''; 
var   textura3   = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');
var   textura4   = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');

var cuboForma=new THREE.BoxGeometry(100,100,100);
var tri= new THREE.Shape();
tri.moveTo(0,0);
tri.lineTo(50,50);
tri.lineTo(100,0);
tri.lineTo(0,0);
var trianguloForma = new THREE.ExtrudeGeometry(tri,{amount:-50});

var cuboMaterial = new THREE.MeshBasicMaterial( {map: textura3} );
var trianguloMaterial = new THREE.MeshBasicMaterial( {map: textura4} );

var cubo = new THREE.Mesh( cuboForma, cuboMaterial );
var triangulo1 = new THREE.Mesh( trianguloForma, trianguloMaterial );
var triangulo2 = new THREE.Mesh( trianguloForma, trianguloMaterial );
  

 triangulo1.position.x=100;
 triangulo1.position.y=-70;
 triangulo1.position.z=50;
 triangulo1.rotation.y +=1.57;

 triangulo2.position.x=-50;
 triangulo2.position.y=-70;
 triangulo2.position.z=50;
 triangulo2.rotation.y +=1.57

 
 var cuerpo = new THREE.Geometry();
  
 THREE.GeometryUtils.merge(cuerpo, cubo);
 THREE.GeometryUtils.merge(cuerpo, triangulo1);
 THREE.GeometryUtils.merge(cuerpo, triangulo2);

 malla= new THREE.Mesh(cuerpo);
 
 brazo1= new Brazo();
 brazo2= new Brazo2();
 cabeza= new Cabeza();
  
 //brazo2.position.x=-120;
 
 step=0.05; 
 step2=0.01;

 var luzPuntual=new THREE.PointLight(0xffffff);
 luzPuntual.position.x=10;
 luzPuntual.position.y=10;
 luzPuntual.position.z=10;

 escena= new THREE.Scene();
 escena.add(malla);
 escena.add(brazo1);
 escena.add(brazo2);
 escena.add(cabeza);
 escena.add(luzPuntual);

 camara= new THREE.PerspectiveCamera();
 camara.position.z=500;
 
 renderer= new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
 }

function loop() {
  requestAnimationFrame(loop);
  cabeza.rotation.y +=step2;
  malla.rotation.y-=step2;
  brazo1.rotation.y-=step2;
  brazo2.rotation.y-=step2;
  renderer.render(escena,camara);
if(Math.abs(brazo1.rotation.x)>.5)
  step=-step;
  brazo1.rotation.x+=step;
  brazo2.rotation.x-=step;
  
}

var escena, camara, renderer, malla;
var step, brazo1, brazo2, cabeza;

setup();
loop();
