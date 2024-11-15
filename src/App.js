import './App.css';
import styled from 'styled-components';
import Header from './Component/Header';
import SignUp from './Component/Signup';

const Container = styled.div`
    display: block;
    margin-inline: auto;
    width: 1208px;
    height: 650px;
    background-color: #fff;
    margin-top: 48px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 5, 0.1);
`
function App() {
  return (
    <Container>
      <Header/>
      <SignUp/>
    </Container>
  );
}

export default App;
