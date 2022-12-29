import React, { useState } from 'react'

const Contact = () => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === 'userName' ? setUserName(value) : setUserEmail(value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`BAM! ${userName} your email is ${userEmail}`);
    setUserName('');
    setUserEmail('');
  }

  return (
    <div id='contact' className='pt-5 mx-5'>
      <h2>Contact Me</h2>
      <form action="">
        <ul>
          <li>
            <label>Name:</label>
            <input type="text" id='name' name='userName' onChange={handleInputChange} value={userName} />
          </li>
          <li>
            <label>Email:</label>
            <input type="text" id='email' name='userEmail' onChange={handleInputChange} value={userEmail} />
          </li>
          <li>
            <button type='submit' onClick={handleFormSubmit}>Submit</button>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Contact