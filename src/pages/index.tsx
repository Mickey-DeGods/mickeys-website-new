import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Image from "next/image";
import { TwitterIcon } from "@/components/atoms/Twitter";
import { DiscordIcon } from "@/components/atoms/Discord";
import DocumentHead from "@/components/molecules/DocumentHead";

const Home = () => {
  // let scene: THREE.Scene,
  //   camera: THREE.PerspectiveCamera,
  //   renderer: any,
  //   controls: OrbitControls;

  // const containerRef = useRef<HTMLDivElement | null>(null);

  // const init3dRender = () => {
  //   scene = new THREE.Scene();
  //   // scene.background = new THREE.Color(0xdddddd);

  //   camera = new THREE.PerspectiveCamera(
  //     40,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   camera.rotation.y = (45 / 180) * Math.PI;
  //   camera.position.x = 100;
  //   camera.position.y = 50;
  //   camera.position.z = 200;

  //   renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   containerRef.current &&
  //     containerRef.current.appendChild(renderer.domElement);

  //   controls = new OrbitControls(camera, renderer.domElement);

  //   let hlight = new THREE.AmbientLight("#ffffff", 1);
  //   scene.add(hlight);

  //   let directionalLight = new THREE.DirectionalLight(0xffffff, 20);

  //   directionalLight.position.set(20, 1, 0);
  //   directionalLight.castShadow = true;
  //   scene.add(directionalLight);

  //   let light = new THREE.PointLight(0xc4c4c4, 1);
  //   light.position.set(0, 300, 500);
  //   scene.add(light);

  //   let light2 = new THREE.PointLight(0xc4c4c4, 1);
  //   light2.position.set(500, 100, 0);
  //   scene.add(light2);

  //   let light3 = new THREE.PointLight(0xc4c4c4, 1);
  //   light3.position.set(0, 100, -500);
  //   scene.add(light3);

  //   let light4 = new THREE.PointLight(0xc4c4c4, 1);
  //   light4.position.set(-500, 300, 0);
  //   scene.add(light4);

  //   let loader = new GLTFLoader();
  //   loader.load(
  //     "/assets/fries.glb",
  //     function (gltf) {
  //       gltf.scene.scale.set(200, 200, 200);
  //       scene.add(gltf.scene);
  //       renderer.render(scene, camera);
  //     },
  //     undefined,
  //     function (error) {
  //       console.log(error);
  //     }
  //   );
  // };

  // const animate = () => {
  //   requestAnimationFrame(animate);
  //   controls.update();
  //   renderer.render(scene, camera);
  // };

  // useEffect(() => {
  //   if (!containerRef.current) return; // Check if the container ref is available before initializing
  //   init3dRender();
  //   animate();
  //   return () => {
  //     controls.dispose();
  //   };
  // }, []);

  // return <div className="" ref={containerRef}></div>;
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-between bg-primary">
      <DocumentHead
        title="Mickey DeGods II: Coming Soon"
        description="Mickey DeGods II: Coming Soon"
        baseUrl="https://mickeydegods.com/"
        favicon="/favicon.ico"
        siteName="Mickey DeGods"
        image="/assets/meta.png"
      />

      {/* navbar */}
      <div className="w-full flex items-center justify-center py-8 px-12">
        <Image src="/assets/fries-white.png" width={30} height={30} alt="White fries logo" />
      </div>

      {/* main section */}
      <div className="flex flex-col items-center justify-center gap-1">
        <Image
          src="/assets/fries.gif"
          width={400}
          height={400}
          alt="spinning fries gif"
        />
      </div>

      {/* socials */}
      <div className="flex items-center gap-3">
        <a
          href="https://twitter.com/MickeyDegods"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/40 w-[60px] h-[60px] flex items-center justify-center
          hover:scale-110 transition-transform ease-in-out duration-300 cursor-pointer"
        >
            <TwitterIcon fill="white" />
        </a>
        <a
          href="https://discord.gg/UwAUPgzgmZ"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/40 w-[60px] h-[60px] flex items-center justify-center
          hover:scale-110 transition-transform ease-in-out duration-300 cursor-pointer"
        >
            <DiscordIcon fill="white" />
        </a>
      </div>
      <div className="text-white/40 text-sm py-5">© 2023 Mickey DeGods</div>
    </main>
  );
};

export default Home;
