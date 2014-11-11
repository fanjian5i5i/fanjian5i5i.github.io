$(document).ready(function () {

	var container;

	var camera, controls, scene, renderer;

	var sphere, plane, sSun;

	var start = Date.now();
	init();
	animate();

	function init(){



		var width = window.innerWidth;
		var height = window.innerHeight;

		var $container = $('#container');

		camera = new THREE.PerspectiveCamera(70, width/height,1,1000);
		
		camera.position.z = 500;

		controls = new THREE.TrackballControls( camera );

		scene = new THREE.Scene();



		// create the geometry sphere
		var geometry  = new THREE.SphereGeometry(500, 32, 32);
		// create the material, using a texture of startfield
		var material  = new THREE.MeshBasicMaterial();
		material.map   = THREE.ImageUtils.loadTexture('images/cosmos.jpg');
		material.side  = THREE.BackSide;
		// create the mesh based on geometry and material
		var mesh  = new THREE.Mesh(geometry, material);
		scene.add(mesh);


		var light = new THREE.PointLight( 0xffffff);
		light.position.set(0,0,0);
		scene.add( light );

		var light = new THREE.PointLight( 0xffffff, .25);
		light.position.set(-350,-350,-350);
		scene.add( light );

		var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1.5 );
            // hemiLight.color.setHSV( 0.6, 0.75, 0.5 );
            // hemiLight.groundColor.setHSV( 0.095, 0.5, 0.5 );
        hemiLight.position.set( 0, 0, 0 );
        scene.add( hemiLight );

		var material1 = new THREE.MeshPhongMaterial();
		material1.map  = THREE.ImageUtils.loadTexture('http://fanjian5i5i.github.io/images/earthmap.jpg');
		sphere = new THREE.Mesh( new THREE.SphereGeometry(15,32,32), material1);
		sphere.position.x = 200;
		sphere.position.y = 200;
		sphere.position.z = -10;


		scene.add(sphere);
		var material2 = new THREE.MeshPhongMaterial();
		material2.map    = THREE.ImageUtils.loadTexture('http://fanjian5i5i.github.io/images/sun.jpg');
		sSun = new THREE.Mesh( new THREE.SphereGeometry(50,32,32), material2);
		scene.add(sSun);



		var numPoints = 100;
		for (var i=-350; i<= 0; i+=50){
		var spline = new THREE.SplineCurve3([
		   new THREE.Vector3(-350, i, -20),
		   new THREE.Vector3(-200, i, -20),
		   new THREE.Vector3(-50, i, -70-i*7/50),
		   new THREE.Vector3(50, i, -70-i*7/50),
		   new THREE.Vector3(200, i, -20),
		   new THREE.Vector3(350, i, -20),
		]);

		var material = new THREE.LineBasicMaterial({
		    color: 0xffffff,
		});

		var geometry = new THREE.Geometry();
		var splinePoints = spline.getPoints(numPoints);

		for(var j = 0; j < splinePoints.length; j++){
		    geometry.vertices.push(splinePoints[j]);  
		}

		var line = new THREE.Line(geometry, material);
		scene.add(line);
		}



		var numPoints = 100;
		for (var i=0; i<= 350; i+=50){
		var spline = new THREE.SplineCurve3([
		   new THREE.Vector3(-350, i, -20),
		   new THREE.Vector3(-200, i, -20),
		   new THREE.Vector3(-50, i, -70+i*7/50),
		   new THREE.Vector3(50, i, -70+i*7/50),
		   new THREE.Vector3(200, i, -20),
		   new THREE.Vector3(350, i, -20),
		]);

		var material = new THREE.LineBasicMaterial({
		    color: 0xffffff,
		});

		var geometry = new THREE.Geometry();
		var splinePoints = spline.getPoints(numPoints);

		for(var j = 0; j < splinePoints.length; j++){
		    geometry.vertices.push(splinePoints[j]);  
		}

		var line = new THREE.Line(geometry, material);
		scene.add(line);
		}
	

		var numPoints = 100;
		for (var i=-350; i<= 0; i+=50){
		var spline = new THREE.SplineCurve3([
		   new THREE.Vector3(-350, i, -20),
		   new THREE.Vector3(-200, i, -20),
		   new THREE.Vector3(-50, i, -70-i*7/50),
		   new THREE.Vector3(50, i, -70-i*7/50),
		   new THREE.Vector3(200, i, -20),
		   new THREE.Vector3(350, i, -20),
		]);

		var material = new THREE.LineBasicMaterial({
		    color: 0xffffff,
		});

		var geometry = new THREE.Geometry();
		var splinePoints = spline.getPoints(numPoints);

		for(var j = 0; j < splinePoints.length; j++){
		    geometry.vertices.push(splinePoints[j]);  
		}

		var line = new THREE.Line(geometry, material);
		scene.add(line);
		}



		var numPoints = 100;
		for (var i=0; i<= 350; i+=50){
		var spline = new THREE.SplineCurve3([
		   new THREE.Vector3(-350, i, -20),
		   new THREE.Vector3(-200, i, -20),
		   new THREE.Vector3(-50, i, -70+i*7/50),
		   new THREE.Vector3(50, i, -70+i*7/50),
		   new THREE.Vector3(200, i, -20),
		   new THREE.Vector3(350, i, -20),
		]);

		var material = new THREE.LineBasicMaterial({
		    color: 0xffffff,
		});

		var geometry = new THREE.Geometry();
		var splinePoints = spline.getPoints(numPoints);

		for(var j = 0; j < splinePoints.length; j++){
		    geometry.vertices.push(splinePoints[j]);  
		}

		var line = new THREE.Line(geometry, material);

		scene.add(line);
		}


		var numPoints = 100;
		for (var i=-350; i<= 0; i+=50){
		var spline = new THREE.SplineCurve3([
		   new THREE.Vector3( i, -350,-20),
		   new THREE.Vector3( i, -200,-20),
		   new THREE.Vector3(i, -50, -70-i*7/50),
		   new THREE.Vector3( i, 50,-70-i*7/50),
		   new THREE.Vector3( i, 200,-20),
		   new THREE.Vector3(i, 350, -20),
		]);

		var material = new THREE.LineBasicMaterial({
		    color: 0xffffff,
		});

		var geometry = new THREE.Geometry();
		var splinePoints = spline.getPoints(numPoints);

		for(var j = 0; j < splinePoints.length; j++){
		    geometry.vertices.push(splinePoints[j]);  
		}

		var line = new THREE.Line(geometry, material);
		scene.add(line);
		}



		var numPoints = 100;
		for (var i=0; i<= 350; i+=50){
		var spline = new THREE.SplineCurve3([
		   new THREE.Vector3( i,-350,-20),
		   new THREE.Vector3( i, -200,-20),
		   new THREE.Vector3(i, -50, -70+i*7/50),
		   new THREE.Vector3( i, 50,-70+i*7/50),
		   new THREE.Vector3( i, 200,-20),
		   new THREE.Vector3( i, 350,-20),
		]);

		var material = new THREE.LineBasicMaterial({
		    color: 0xffffff,
		});

		var geometry = new THREE.Geometry();
		var splinePoints = spline.getPoints(numPoints);

		for(var j = 0; j < splinePoints.length; j++){
		    geometry.vertices.push(splinePoints[j]);  
		}

		var line = new THREE.Line(geometry, material);
		scene.add(line);
		}

		//Line of Light 
		var numPoints = 100;
		var spline = new THREE.SplineCurve3([
		   new THREE.Vector3(-350, -350, 0),
		   new THREE.Vector3(-200, -200, 0),
		   new THREE.Vector3(-50, -50, 50),
		   new THREE.Vector3(50, 50, 50),
		   new THREE.Vector3(200, 200, 0),
		   new THREE.Vector3(350, 350, 0),
		]);

		var material = new THREE.LineBasicMaterial({
		    color: 0xffff00,
		    linewidth: 10
		});

		var geometry = new THREE.Geometry();
		var splinePoints = spline.getPoints(numPoints);

		for(var j = 0; j < splinePoints.length; j++){
		    geometry.vertices.push(splinePoints[j]);  
		}

		var line = new THREE.Line(geometry, material);
		// line.rotation.x = Math.PI/2;
		// line.rotation.y = Math.PI/2;

		scene.add(line);

		//Text1
		var theText = "<--- Light";

		var text3d = new THREE.TextGeometry( theText, {

			size: 20,
			height: 5,
			curveSegments: 2,
			font: "helvetiker"

		});		

		text3d.computeBoundingBox();
		var centerOffset = -0.5 * ( text3d.boundingBox.max.x - text3d.boundingBox.min.x );

		var textMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, overdraw: 0.5 } );
		text = new THREE.Mesh( text3d, textMaterial );

		text.position.x = 250;
		text.position.y = 250;
		text.position.z = 20;

		// text.rotation.x = Math.PI/2;
		text.rotation.y = Math.PI/4;
		text.rotation.x = Math.PI/2;

		group = new THREE.Group();
		group.add( text );
		scene.add( group );

		var theText = "Wrapped Spacetime";

		var text3d = new THREE.TextGeometry( theText, {

			size: 20,
			height: 5,
			curveSegments: 2,
			font: "helvetiker"

		});		

		text3d.computeBoundingBox();
		var centerOffset = -0.5 * ( text3d.boundingBox.max.x - text3d.boundingBox.min.x );

		var textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, overdraw: 0.5 } );
		text = new THREE.Mesh( text3d, textMaterial );

		text.position.x = -120;
		text.position.y = 0;
		text.position.z = -100;

		// text.rotation.x = Math.PI/2;
		// text.rotation.y = Math.PI/4;
		text.rotation.x = Math.PI/2;

		group = new THREE.Group();
		group.add( text );

		scene.add( group );


		renderer = new THREE.WebGLRenderer();
		renderer.setSize(width,height);
		//renderer.setClearColorHex( 0xffffff, 1 );
		$container.append(renderer.domElement);
		renderer.render(scene,camera);


	}
	function animate(){
		requestAnimationFrame(animate);
		render();

	}

	function render(){
		var timer = Date.now() - start;
		sphere.rotation.x += 0.02;
		sphere.rotation.y += 0.02;
		sphere.position.y = Math.sin(timer * 0.0015) * 200;
		sphere.position.x = Math.cos(timer * 0.0015) * 200;
		//sphere.position.x +=2;
		// sSun.rotation.x += 0.02;
		sSun.rotation.z += 0.0125;

		//sphere.rotation.setEulerFromQuaternion( quaternion );
		// sphere.rotation = new THREE.Euler().setFromQuaternion( quaternion );

		// sphere.rotation.z += 0.0175;
		// sphere.rotation.x = timer * 0.0003;
		// sphere.rotation.z = timer * 0.0002;

		// sphere.scale.x	= 1.0 + 0.3*Math.sin(timer/200);
		// sphere.scale.y	= 1.0 + 0.3*Math.sin(timer/200);
		// sphere.scale.z	= 1.0 + 0.3*Math.sin(timer/200);
		controls.update();
		renderer.render(scene,camera);

	}
});