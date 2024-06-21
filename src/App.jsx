import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Articles from './components/Articles';
import ArticleIndividual from './components/ArticleIndividual';
import Topics from './components/Topics';
import TopicArticles from './components/TopicArticles';



function App() {
  const user = {
    username: 'john_doe',
    name: 'John Doe',
  };
  
  return (
    <div>
      <div className="App">
        {/* <NavBar user={user} /> */}
        <Routes>
          <Route path ="/" element={<NavBar user={user}/>}>
          <Route index element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:articleId" element={<ArticleIndividual />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:slug" element={<TopicArticles />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App
