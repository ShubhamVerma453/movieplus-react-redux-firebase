import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';
import Header from './components/Header';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';

function App() {
  const dispatch = useDispatch();
  let isUser = useSelector(selectUser);

  useEffect(() => {
    const unscribs = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          name: userAuth.displayName,
          email: userAuth.email,
          photoURL: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
    return unscribs;
  }, []);

  return (
    <div className="App">
      <Header />
      {isUser == null ? <Login /> :
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
