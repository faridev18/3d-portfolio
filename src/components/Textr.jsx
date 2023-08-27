import React, { useRef } from "react";
import { PerspectiveCamera,Billboard, OrbitControls, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const skills = [
  "HTML",
  "CSS",
  "Github",
  "NodeJs",
  "ThreeJs",
  "ReactJs",
  "React",
  "Laravel",
  "PHP",
  "MySQL",
  "Redux",
  "GSAP",
  "Blender",
  "Bootstrap",
  "Firebase",
  "git",
  "Javascript",
  "Sass",
];

const Textr = () => {
  // const textRef = useRef();
  // useFrame(
  //   (state) =>
  //     (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 3)
  // );
  return (
    // <mesh>
    //   <boxGeometry />
    //   <meshStandardMaterial>
    //     <RenderTexture attach="map">
    //       <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    //       <color attach="background" args={["#dc9dcd"]} />
    //       <Text ref={textRef} fontSize={3} color="#555">
    //         Fari
    //       </Text>
    //     </RenderTexture>
    //   </meshStandardMaterial>
    // </mesh>
    <>



  {skills.map((item) => (
    <Billboard follow position={[
      (Math.floor(Math.random() * 41) - 20)/10,
      (Math.floor(Math.random() * 41) - 20)/10,
      (Math.floor(Math.random() * 41) - 20)/10]}
       key={item} >
      <Text  fontSize={.2} color={Math.random() < 0.5 ? "#7d01d9" : "#f7185b"}>{item}</Text>
    </Billboard>
  ))}
  
  
</>

  );
};

export default Textr;
