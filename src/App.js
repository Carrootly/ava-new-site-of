
import './App.css';
import  React from 'react';
import NavBar from './pages/navbar/navbar.jsx';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import Slides from './pages/carousel';
import Topo from './pages/Header/header';
import HighSchool from './pages/HighSchool.jsx';
import Primary from './pages/Primary';
import MiddleSchool from './pages/MiddleSchool';
import Kindergarten from './pages/Kindergarten';
import Administration from './pages/About/Administration';
import History from './pages/About/History';
import TeachingStaff from './pages/About/TeachingStaff';
import Admission from './pages/Admissions/admissions';

import Aviz from './pages/teachersQuestions/aviz';
import Barbosa from './pages/teachersQuestions/aviz';
import Bel from './pages/teachersQuestions/bel';
import Felipe from './pages/teachersQuestions/felipe';
import Ferreira from './pages/teachersQuestions/ferreira';
import Hirase from './pages/teachersQuestions/hirase';
import Luciana from './pages/teachersQuestions/luciana';
import Machado from './pages/teachersQuestions/machado';
import Marcelia from './pages/teachersQuestions/moraes';
import Paixao from './pages/teachersQuestions/soares';
import Soares from './pages/teachersQuestions/soares';

function App() {
  
  return (
    <div className='total-container'>
      <Topo/>
      <NavBar/>
      <Routes>  {/* Usando Routes em vez de BrowserRouter */}
        <Route path='/' element={<Home/>} />
        <Route path='/high-school' element={<HighSchool/>}/>
        <Route path='/middle-school' element={<MiddleSchool/>}/>
        <Route path='/primary-school' element={<Primary/>}/>
        <Route path='/kindergarten' element={<Kindergarten/>}/>
        <Route path='/administration' element={<Administration/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/teaching-staff' element={<TeachingStaff/>}/>
        <Route path='/admission' element={<Admission/>}/>
        <Route path='/mister-aviz' element={<Aviz/>}/>
        <Route path='/mister-barbosa' element={<Barbosa/>}/>
        <Route path='/mirs-bel' element={<Bel/>}/>
        <Route path='/mister-santos' element={<Felipe/>}/>
        <Route path='/mrs-ferreira' element={<Ferreira/>}/>
        <Route path='/miss-hirase' element={<Hirase/>}/>
        <Route path='/miss-carvalho' element={<Luciana/>}/>
        <Route path='/mister-machado' element={<Machado/>}/>
        <Route path='/mrs-carvalho' element={<Marcelia/>}/>
        <Route path='/miss-paixao' element={<Paixao/>}/>
        <Route path='/miss-soare' element={<Soares/>}/>

       

        
      </Routes>
    </div>
  );
}

export default App;
