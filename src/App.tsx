import { useState } from 'react'

import './App.css'
import styled from 'styled-components'

import logo from './assets/logo.png'

const App:React.FC = () => {

  const [urlToShorten, setUrlToShorten] = useState<string>('')
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null)

  return (
    <section className='App'>

      <Header>
        <img src={logo} alt='Logo' />
      </Header>

      <div className='input-container'>
        <label htmlFor='url'>Enter the URL you'd like to shorten:</label>
        <input type='text' onChange={e => setUrlToShorten(e.target.value)}/>
      </div>

      <button disabled={urlToShorten.length > 0}>Shorten URL</button>

      {shortenedUrl && <p>Your shortened URL is: <a href={shortenedUrl} target='_blank' rel='noreferrer' >{shortenedUrl}</a></p>}
    </section>
  )
}

  // Create a Title component that'll render an <h1> tag with some styles
  const Header = styled.header`
  display: flex,
  allign-items: center,
  background-color: red,
  width: 100%
  `;
  
export default App
