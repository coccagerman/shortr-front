import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ErrorBoundary from './ErrorBoundary'

const Home = lazy(() => import ('./components/Home'))
const Loader = lazy(() => import ('./components/Loader'))


const App:React.FC = () => {

  return (
    <Router>
      <ErrorBoundary>

        <Routes>
            <Route path='/' element={<Suspense fallback={<></>}><Home/></Suspense>}/>
            <Route path="/:urlid" element={<Suspense fallback={<></>}><Loader /></Suspense>} />
        </Routes>

      </ErrorBoundary>
  </Router>
  )
}

export default App
