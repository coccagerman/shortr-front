import styled from 'styled-components'
import error from '../assets/error.png'

const ErrorMsg:React.FC = () => {
  return (
    <ErrorContainer>
      <ErrorTxt>An error happened, please try again. =(</ErrorTxt>
    </ErrorContainer>
  )
}

export default ErrorMsg

const ErrorContainer = styled.header`  
  display: flex;
  justify-content: center;
  color: white;
  font-size: 2rem;
  width: 100vw;
  height: 100vh;
  background-image: url(${error});
  background-size: cover;
`;

const ErrorTxt = styled.h1`  
  margin-top: 10%;
`;