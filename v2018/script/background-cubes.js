function CubesBG() {
  var play, stop, stopped;
  this.play = function () {
    init();
    animate();
    stopped = false;
  };
  this.stop = function () {
    stopped = true;
    $("canvas").remove();
    // liberar memoria nullify
    //         camera = scene = renderer = birds = bird = boid = boids = null;
  };
  var container, stats;
  var camera, scene, renderer;
  var geometry, group;
  var mouseX = 0,
    mouseY = 0;
  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;
  document.addEventListener("mousemove", onDocumentMouseMove, false);

  function init() {
    container = document.createElement("div");
    container.className = "background cubes";
    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    );
    camera.position.z = 500;
    scene = new THREE.Scene();
    var geometry = new THREE.CubeGeometry(100, 100, 100);
    var material = new THREE.MeshNormalMaterial({
      overdraw: 0.5,
    });
    group = new THREE.Object3D();
    for (var i = 0; i < 200; i++) {
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = Math.random() * 2000 - 1000;
      mesh.position.y = Math.random() * 2000 - 1000;
      mesh.position.z = Math.random() * 2000 - 1000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      group.add(mesh);
    }
    scene.add(group);
    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.sortObjects = false;
    container.appendChild(renderer.domElement);
    //         stats = new Stats();
    //         stats.domElement.style.position = 'absolute';
    //         stats.domElement.style.top = '0px';
    //         stats.domElement.style.zIndex = 100;
    //         container.appendChild(stats.domElement);
    //
    window.addEventListener("resize", onWindowResize, false);
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 10;
    mouseY = (event.clientY - windowHalfY) * 10;
  }
  //

  function animate() {
    requestAnimationFrame(animate);
    render();
    //         stats.update();
  }

  function render() {
    if (!stopped) {
      camera.position.x += (mouseX - camera.position.x) * .05;
      camera.position.y += (-mouseY - camera.position.y) * .05;
      camera.lookAt(scene.position);
      var currentSeconds = Date.now();
      group.rotation.x = Math.sin(currentSeconds * 0.0007) * 0.5;
      group.rotation.y = Math.sin(currentSeconds * 0.0003) * 0.5;
      group.rotation.z = Math.sin(currentSeconds * 0.0002) * 0.5;
      renderer.render(scene, camera);
    }
  }
}
