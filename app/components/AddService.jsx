import React, { useState, useContext } from 'react';
import SetupContext from '../context/SetupContext';
import '../stylesheets/AddService.css';

const { ipcRenderer } = window.require('electron');

const AddService = () => {
  let { setupRequired, toggleSetup } = useContext(SetupContext);

  const [field, setField] = useState({
    database: 'SQL',
    URI: '',
    name: '',
  });

  // Submit form data and save to database
  const handleSubmit = e => {
    e.preventDefualt();
    const { database, URI, name } = field;
    ipcRenderer.send('submit', JSON.stringify([name, database, URI]));
    setupRequired = toggleSetup(true);

    // Refresh window after submit.
    document.location.reload();
  };

  // Handle form field changes
  const handleChange = event => {
    const { name, value } = event;
    setField({
      ...field,
      [name]: value,
    });
  };

  // const tooltipWriteup = `Chronos utilizes user-owned databases to store communications and system health data.
  //   Please enter a valid connection string to a SQL or noSQL database to begin monitoring.`;

  const { database, URI, name } = field;
  return (
    <div className="mainContainer">
      <h2 className="signUpHeader">Enter Your Database Information</h2>
      <form className="inputForm" onSubmit={handleSubmit}>
        Database Type:
        <select name="database" value={database} onChange={e => handleChange(e.target)}>
          <option value="SQL">SQL</option>
          <option value="MongoDB">MongoDB</option>
        </select>
        Database URI:
        <input
          className="userInput"
          name="URI"
          value={URI}
          onChange={e => handleChange(e.target)}
          placeholder="Database URI"
          required
        />
        Database Name:
        <input
          className="userInput"
          type="text"
          name="name"
          value={name}
          onChange={e => handleChange(e.target)}
          placeholder="Database Name"
          required
        />
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
