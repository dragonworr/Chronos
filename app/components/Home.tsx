import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Home.scss';

const Home = () => (
  <div className="home">
    <img src={'../assets/pangolin.png'} alt="Chronos logo" />
    <h1 id="welcome">Welcome to Chronos!</h1>
    <Link className="get-started-btn" to="/applications">Get Started</Link>
  </div>
);

export default Home;
