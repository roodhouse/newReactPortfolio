import './App.css';
import Header from '../src/components/Header/Header'
import About from '../src/components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from '../src/components/Contact/Contact'
import Footer from '../src/components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div id='home'>
      <Header />
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
