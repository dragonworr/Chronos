import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DashboardContext } from '../context/DashboardContext';
import '../stylesheets/Home.scss';

const { ipcRenderer } = window.require('electron');

const SignUp = React.memo(() => {
  const history = useHistory();
  const { updateLandingPage, setAuth, setUser } = useContext(DashboardContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputFields = e.currentTarget.querySelectorAll('input');
    const email = inputFields[0].value;
    const username = inputFields[1].value;
    const password = inputFields[2].value;

    const validSignUp:
      | boolean
      | {
          email: string;
          username: string;
          password: string;
          admin: boolean;
          awaitingApproval: boolean;
        } = ipcRenderer.sendSync('addUser', { email, username, password });
    if (typeof validSignUp === 'object') {
      setUser(validSignUp);
      setAuth(true);
      history.push('/applications');
    } else if (validSignUp) history.push('/awaitingApproval');
    else window.alert('Sorry your sign up cannot be completed at this time. Please try again.');
  };

  return (
    <div className="home">
      <p className="welcomeMessage">
        Welcome back to Chronos! Your all-in-one application monitoring tool.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="login">
          <input type="email" name="email" id="email" placeholder="your@email.here" />
          <br />
          <input type="text" name="username" id="username" placeholder="enter username" />
          <br />
          <input type="password" name="password" id="password" placeholder="enter password" />
          <hr />
        </label>
        <br />
        <br />
        <br />
        <button className="link" id="submitBtn" type="submit">
          Sign Up
        </button>
      </form>

      <br />
      {/* <Link className="link" to="/applications">
        Get Started
      </Link> */}
      <button className="link" onClick={() => updateLandingPage('login')}>
        Already have an account?
      </button>
    </div>
  );
});

export default SignUp;
