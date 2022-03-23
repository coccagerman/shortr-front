import { useState } from 'react'

import './App.css'
import styled from 'styled-components'

import logo from './assets/logo.png'
import validateUrl from './assets/validateUrl'


const App:React.FC = () => {

  const [urlToShorten, setUrlToShorten] = useState<string>('')
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null)

  // TODO:
  // - Mobile CSS

  return (
    <section className='App'>
      
      <Header>
        <img src={logo} alt='Logo' />
      </Header>

      <ContentContainer className='content'>
        <InputContainer className='input-container'>
          <Label htmlFor='url'>Enter the URL you'd like to shorten:</Label>
          <Input type='text' id='url' name='url' onChange={e => setUrlToShorten(e.target.value)}/>
        </InputContainer>

        <Button className={validateUrl(urlToShorten) ? 'workingBtn' : 'disabledBtn'} disabled={!validateUrl(urlToShorten)}>Shorten URL</Button>

        {shortenedUrl && <Result className='result'>Your shortened URL is: <a href={shortenedUrl} target='_blank' rel='noreferrer' >{shortenedUrl}</a></Result>}
      </ContentContainer>
    </section>
  )
}

export default App

const Header = styled.header`  
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #000716;
`;

const ContentContainer = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #101826;
  height: 85.4vh;
`;

const InputContainer = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`  
color: white;
font-size: 2rem;
`;

const Input = styled.input`  
  width: 50rem;
  height: 3rem;
  border-radius: .25rem;
  font-size: 2rem;
  padding: .25;
  margin: 1rem 0;
`;

const Button = styled.button`  
  border-radius: .25rem;
  border: 2px solid black;
  color: black;
  font-size: 2rem;
  padding: .25;
  margin-top: 2rem;
  width: 15rem;
  height: 4rem;
  align-self: center;
  cursor: pointer;
  transition: .3s;
  background-color: ${props => props.disabled ? 'gray' : '#ffb703'};
`;

const Result = styled.p`  
  color: white;
  font-size: 2rem;
  text-align: center;
  margin-top: 3rem;
`;

