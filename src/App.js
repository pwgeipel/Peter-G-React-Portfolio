import { useState } from 'react'

import Navbar from './components/navbar'
import AboutPage from './pages/about'
import PortfolioPage from './pages/portfolio'
import ContactPage from './pages/contact'
import ResumePage from './pages/resume'




function App() {
  const [view, setView] = useState('about')

  const renderView = () => {
    if (view === 'about') {
      return <AboutPage />
    } else if ( view === 'portfolio') {
      return <PortfolioPage />
    } else if (view === 'contact') {
      return <ContactPage />
    } else if (view === 'resume') {
      return <ResumePage />
    } else {
      return 'No matching view found!'
    }
  }

  return (
    <>
     <Navbar 
      view={view}
      setView={setView}
      />
     { renderView() }
    </>
  );
}

export default App;
