import { useState } from 'react'

import styled from 'styled-components'
import axios from 'axios'

import logo from '../assets/logo.png'
import validateUrl from '../assets/validateUrl'
import ErrorMsg from './ErrorMsg'


const Home:React.FC = () => {

  const [urlToShorten, setUrlToShorten] = useState<string>('')
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null)
  const [requestError, setRequestError] = useState<boolean>(false)

  const shortenUrl = () => {
      try {
          axios({
            method: 'post',
            url: 'https://shortr-back.herokuapp.com/',
            data: {
              origurl: urlToShorten
            }
          })
          .then(response => setShortenedUrl(response.data))
          .catch(() => setRequestError(true))

      } catch (err) {
        setRequestError(true)
        console.error(err)
      }
  }

  return (
    <section className='App'>
            {requestError ?
                <ErrorMsg/>
            :
                <>
                    <Header>
                        <Img src={logo} alt='Logo' />
                    </Header>
                
                    <ContentContainer className='content'>
                        <InputContainer className='input-container'>
                        <Label htmlFor='url'>Enter the URL you'd like to shorten:</Label>
                        <Input type='text' id='url' name='url' onChange={e => setUrlToShorten(e.target.value)}/>
                        </InputContainer>
                
                        <Button className={validateUrl(urlToShorten) ? 'workingBtn' : 'disabledBtn'} disabled={!validateUrl(urlToShorten)} onClick={() => shortenUrl()}>Shorten URL</Button>
                
                        {shortenedUrl && <Result className='result'>Your shortened URL is: <ShortURL href={shortenedUrl} target='_blank' rel='noreferrer' >{shortenedUrl}</ShortURL></Result>}
                    </ContentContainer>
                </>
            }
    </section>
  )
}

export default Home

const Header = styled.header`  
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #000716;
  position: absolute;
`;

const Img = styled.img`  
  @media screen and (max-width: 767px) {
    width: 15rem;
  }
`;

const ContentContainer = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #101826;
  height: 100vh;
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

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Input = styled.input`  
  width: 50rem;
  height: 3rem;
  border-radius: .25rem;
  font-size: 2rem;
  padding: .25;
  margin: 1rem 0;

  @media screen and (max-width: 767px) {
    width: 20rem;
    font-size: 1.5rem;
  }
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

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const ShortURL = styled.a`  
  color: white;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;

