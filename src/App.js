import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './features/Home';
import Login from './features/Login';
import NewsFeed from './features/NewsFeed';
import AnimeSearch from './features/Search/component/AnimeSearch';
import PageSearch from './features/Search/PageSearch';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCB5zT047myUSLXQw0593eQeqk77yge7AA",
  authDomain: "my-film-52dec.firebaseapp.com",
  projectId: "my-film-52dec",
  storageBucket: "my-film-52dec.appspot.com",
  messagingSenderId: "522716812590",
  appId: "1:522716812590:web:fa79a32b72e7b079ef16bf",
  measurementId: "G-L35DZ8MN1P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/search' element={<PageSearch />} />
        <Route path='/search/:query' element={<AnimeSearch />} />
        <Route path='/newsfeed' element={<NewsFeed />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
