import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Skills from "./components/Skills";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-image: linear-gradient(to right bottom, #7af607, #a2ec00, #c0e200, #d7d800, #eacd00, #f6ba18, #fda82c, #ff963d, #ff7c5a, #ff6282, #ff56b0, #fb5fe0);

  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Skills />
      <Works />
      <Who />
      <Contact />
    </Container>
  );
}

export default App;
