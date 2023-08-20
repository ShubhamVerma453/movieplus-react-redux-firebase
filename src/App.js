import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';
import Header from './components/Header';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Alert from './components/Alert';
import Watchlist from './components/Watchlist';

function App() {
  const dispatch = useDispatch();
  let isUser = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
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
    return () => {
      unsubscribe(); // Cleanup function to unsubscribe from the listener
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        {isUser == null ? <Login /> :
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route exact path="/watchlist" element={<Watchlist />} />
          </Routes>
        }
        <Alert />
      </Router>
    </div>
  );
}

export default App;
