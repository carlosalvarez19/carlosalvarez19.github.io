function Cabeza (){
   
THREE.Object3D.call(this);
    
this.ojo1 = new THREE.Mesh( new THREE.CylinderGeometry(2,2,5,100) );
this.ojo2 = new THREE.Mesh( new THREE.CylinderGeometry(2,2,5,100) );
this.cuello = new THREE.Mesh( new THREE.CylinderGeometry(1,1,5,100) );
this.ojo1.position.y = 10;
this.ojo2.position.y = 10;
this.ojo1.position.x = -2;
this.ojo2.position.x = 2;
this.cuello.position.y = 7;
this.add(this.cuello);
this.add(this.ojo1);
this.add(this.ojo2);

}

Cabeza.prototype = new THREE.Object3D();


function setup() {
  
    var tri= new THREE.Shape();
    tri.moveTo(0,0);
    tri.lineTo(2,2);
    tri.lineTo(4,0);
    tri.lineTo(0,0);
    var trianguloForma = new THREE.ExtrudeGeometry(tri,{amount:-5});
  
    var cuerpoForma = new THREE.Mesh( new THREE.BoxGeometry(10,10,10) );
    cabeza = new Cabeza();
    cuerpo.position.y = 2;
    piernaD.position.z = -1;
    piernaI.position.z = 1;
    step = 0.1;
    escena = new THREE.Scene();
    escena.add( cuerpo );
    escena.add( piernaD );
    escena.add( piernaI );
    camara = new THREE.PerspectiveCamera();
    camara.position.z = 20;
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerHeight*.95,window.innerHeight*.95 );
    document.body.appendChild( renderer.domElement );
}
function loop(){
    requestAnimationFrame( loop );
    renderer.render( escena, camara );    
    if ( Math.abs(piernaD.rotation.z) > .5 ) 
        step = -step;
      piernaD.rotation.z += step;
      piernaI.rotation.z -= step;
}
  
var escena, camara, renderer;
var step, piernaI, piernaD;
 
setup();
loop();



function setup(){

var cuboForma= 
var brazoForma= new THREE.BoxGeometry(2,2,12);
var cilindroForma= new THREE.CylinderGeometry(2,2,5,100);
var cilindroForma2= new THREE.CylinderGeometry(1,1,5,100);

  var cubo = new THREE.Mesh(cuboForma);
  var brazo1= new THREE.Mesh(brazoForma);
  var brazo2= new THREE.Mesh(brazoForma);
  var cilindro1 = new THREE.Mesh(cilindroForma);
  var cilindro2 = new THREE.Mesh(cilindroForma);
  var cilindro3 = new THREE.Mesh(cilindroForma2);
  var triangulo1 = new THREE.Mesh(trianguloForma);
  var triangulo2 = new THREE.Mesh(trianguloForma);
 
 cilindro1.position.y=10;
 cilindro1.position.x=-2;
 cilindro1.rotation.x +=1.57;
 
 cilindro2.position.y=10;
 cilindro2.position.x=2;
 cilindro2.rotation.x +=1.57;

 cilindro3.position.y=7;
 
 triangulo1.position.x=10;
 triangulo1.position.y=-7;
 triangulo1.rotation.y +=1.57;

 triangulo2.position.x=-5;
 triangulo2.position.y=-7;
 triangulo2.rotation.y +=1.57

 brazo1.position.x=5.5;
 brazo1.position.y=2;
 brazo1.position.z=6;

 brazo2.position.x=-5.5;
 brazo2.position.y=2;
 brazo2.position.z=6;
 
 var forma = new THREE.Geometry();
  
 THREE.GeometryUtils.merge(forma, cubo);
 THREE.GeometryUtils.merge(forma, brazo1);
 THREE.GeometryUtils.merge(forma, brazo2);
 THREE.GeometryUtils.merge(forma, cilindro1);
 THREE.GeometryUtils.merge(forma, cilindro2);
 THREE.GeometryUtils.merge(forma, cilindro3);
 THREE.GeometryUtils.merge(forma, triangulo1);
 THREE.GeometryUtils.merge(forma, triangulo2);
 
 var material =new THREE.MeshNormalMaterial();
 malla= new THREE.Mesh(forma, material);
 
 escena= new THREE.Scene();
 escena.add(malla);

 //se inicializa la camara y el renderer
 
 camara= new THREE.PerspectiveCamera();
 camara.position.z=50;
 
 renderer= new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
 }
 
 function loop() {
  requestAnimationFrame(loop);
  malla.rotation.y +=0.01;
  
  //for(var f=0; f<25; f=f+.01){
  //malla.position.x += f;
  }
  
  renderer.render(escena,camara);
  
      if ( Math.abs(piernaD.rotation.z) > .25 ) 
        step = -step;
      brazo1.rotation.z += step;
      brazo2.rotation.z -= step;
      
}

var escena, camara, renderer, malla;
setup();
loop();
