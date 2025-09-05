// import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// @Component({
//   selector: 'app-three-viewer',
//   templateUrl: './three-viewer.component.html',
//   styleUrls: ['./three-viewer.component.css']
// })
// export class ThreeViewerComponent implements AfterViewInit {
//   @ViewChild('canvas') private canvasRef!: ElementRef;

//   constructor() {}

//   ngAfterViewInit(): void {
//     this.createScene();
//   }

//   private createScene(): void {
//     const canvas = this.canvasRef.nativeElement;
//     const renderer = new THREE.WebGLRenderer({ canvas });
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
//     camera.position.set(0, 1, 5);

//     // Add lighting
//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(0, 10, 10);
//     scene.add(light);

//     // GLTFLoader to load the 3D model
//     const loader = new GLTFLoader();
//     loader.load('/assets/models/pineapple/scene.gltf', // Use your GLTF file name here
//       (gltf) => {
//         scene.add(gltf.scene);
//       },
//       undefined,  // Optional progress callback
//       (error) => {
//         console.error('An error occurred while loading the model:', error);
//       }
//     );
    
//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
      
//     };

//     animate();
//   }
// }
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-three-viewer',
  templateUrl: './three-viewer.component.html',
  styleUrls: ['./three-viewer.component.css']
})
export class ThreeViewerComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) private canvasRef!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private model!: THREE.Group | null;

  constructor() {}

  ngAfterViewInit(): void {
    this.createScene();
    window.addEventListener('resize', () => this.onWindowResize());
  }

  private onWindowResize(): void {
    const container = this.canvasRef.nativeElement.parentElement as HTMLElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  private createScene(): void {
    const canvas = this.canvasRef.nativeElement;

    const container = canvas.parentElement as HTMLElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 1, 5);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 15, 15);
    this.scene.add(ambientLight, light);
    this.scene.background = new THREE.Color(0xEFEFEF);

    // Load 3D Model
    const loader = new GLTFLoader();
    loader.load('/assets/models/pineapple.glb',
      (gltf) => {
        this.model = gltf.scene;
        this.scene.add(this.model);
        console.log("Model Loaded:", gltf.scene);
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    this.animate();
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    // Rotate the model if loaded
    if (this.model) {
      this.model.rotation.y += 0.005;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
