import { useState, useEffect } from 'react'

import './App.css'
// import styled from 'styled-components'

import logo from './assets/logo.png'

import { CopyToClipboardButton } from './components/CopyToClipboard'

const App:React.FC = () => {

  const [urlToShorten, setUrlToShorten] = useState<string>('')
  const [shortenedUrl, setShortenedUrl] = useState<string | null>('http://localhost:3000/')

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  // TODO:
  // - Regex validation for button so only valid urls are shortened
  // - Personalize copy to clipboard btn
  // - Mobile CSS
  // - Implement styled components

  return (
    <section className='App'>

      <header>
        <img src={logo} alt='Logo' />
      </header>

      <div className='content'>
        <div className='input-container'>
          <label htmlFor='url'>Enter the URL you'd like to shorten:</label>
          <input type='text' onChange={e => setUrlToShorten(e.target.value)}/>
        </div>

        <button className={urlToShorten.length > 0 ? 'workingBtn' : 'disabledBtn'} disabled={urlToShorten.length > 0}>Shorten URL</button>

        {shortenedUrl && <p className='result'>Your shortened URL is: <a href={shortenedUrl} target='_blank' rel='noreferrer' >{shortenedUrl}</a></p>}

        <CopyToClipboardButton/>

      </div>
    </section>
  )
}

export default App
