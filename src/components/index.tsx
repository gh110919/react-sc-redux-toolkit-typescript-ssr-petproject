import { styled } from "styled-components";
import "../index.css";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 75%;
  background-color: black;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export function App() {
  return (
    <>
      <Section>
        <Box>
          <Form>
            <input type="text" />
            <input type="text" />
          </Form>
        </Box>
      </Section>
    </>
  );
}
