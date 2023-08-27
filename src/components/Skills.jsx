import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import Textr from "./Textr";



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #3d1c56;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #3d1c56;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Skills = () => {

  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [10, -10, 10], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Textr />
              <OrbitControls enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={1.0} 
              />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>My skills</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What i do</Subtitle>
          </WhatWeDo>
          <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut totam nul
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Skills;
