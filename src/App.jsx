import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavbar from "./bottomNavbar/BottomNavbar"
import './App.css'
import LoginPage from './Pages/LoginPage/Page'
import SeasonsPage from './Pages/SeasonsPage/Page'
import AboutPage from "./Pages/AboutPage/Page"
import Header from "./header/Header"
import React, {useState,useEffect} from 'react'
import EpisodeListPage from "./Pages/EpisodeList/Page";
import EpisodeDetailPage from "./Pages/EpisodeDetail/Page";

function App() {
  
  const [loginStat, changeLoginStat] = useState(() => {
    const storedLoginStat = localStorage.getItem('loginStat');
    return storedLoginStat ? JSON.parse(storedLoginStat) : false;
  });

  useEffect(() => {
    localStorage.setItem('loginStat', JSON.stringify(loginStat));
  }, [loginStat]);

  return (
    <>
    {
      loginStat ? (
      <Router>
        <Header onClickFunc={() => {changeLoginStat(false)}}/>
        <Routes>
          <Route path = '/' element = {<SeasonsPage firstIndex={0} lastIndex={5} />} />
          <Route path = '/postTS' element = {<SeasonsPage firstIndex={6} lastIndex={14} />} />
          <Route path = '/about' element = {<AboutPage />} />
          <Route path = '/episodes/:seasonId' element = {<EpisodeListPage />} />
          <Route path = '/epDetail/:seasonId/:indexArr' element = {<EpisodeDetailPage />} />
        </Routes>
        <BottomNavbar />
      </Router>  
      ) : (
        <LoginPage onLogin = {() => {changeLoginStat(true)}}/>
      )
    }
    </>
  )
}

export default App