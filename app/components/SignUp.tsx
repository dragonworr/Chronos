/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardContext } from '../context/DashboardContext';
import '../stylesheets/Home.scss';

const { ipcRenderer } = window.require('electron');

const SignUp = React.memo(() => {
  const navigate = useNavigate();
  const { setUser } = useContext(DashboardContext);
  const [failedSignUp, setFailedSignUp] = useState<JSX.Element>(<></>);

  return (
    <div className="home">
      <div className="welcome" data-testid="SignUp">
        <h1 className="welcomeMessage">Welcome Chronos!</h1>
        <h2>Your all-in-one application monitoring tool.</h2>

        <form className="form" onSubmit={handleSubmit}>
          <label className="username">
            <input type="text" name="username" id="username" placeholder="enter username" />
          </label>
          <label className="email">
            <input type="email" name="email" id="email" placeholder="your@email.here" />
          </label>
          <label className="password">
            <input type="password" name="password" id="password" placeholder="enter password" />
          </label>
          {failedSignUp}
          <button className="link" id="submitBtn" type="submit">
            Sign Up
          </button>
          <button className="link needAccount" onClick={() => navigate('/login')}>
            Already have an account?
          </button>
        </form>
      </div>
    </div>
  );

  function handleSubmit(e: any) {
    e.preventDefault();
    const inputFields = e.currentTarget.querySelectorAll('input');
    const username = inputFields[0].value;
    const email = inputFields[1].value;
    const password = inputFields[2].value;
    // eslint-disable-next-line no-return-assign
    inputFields.forEach(input => (input.value = ''));

    const validSignUp:
      boolean
      | {
          email: string;
          username: string;
          password: string;
          admin: boolean;
          awaitingApproval: boolean;
        } = ipcRenderer.sendSync('addUser', { email, username, password });
    if (typeof validSignUp === 'object') {
      setUser(validSignUp);
      navigate('/applications');
    } else if (validSignUp) navigate('/awaitingApproval');
    else
      setFailedSignUp(<p>Sorry your sign up failed. Please try a different email and password.</p>);
  };

});

export default SignUp;
