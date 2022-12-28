import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='pt-5 mx-5'>
      <h2>Contact Me</h2>
      <form action="">
        <ul>
          <li>
            <label for='name'>Name:</label>
            <input type="text" id='name' name='user-name' />
          </li>
          <li>
            <label for='email'>Email:</label>
            <input type="text" id='email' name='user-email' />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Contact