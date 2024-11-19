// src/pages/ContactPage.js

import React from 'react';

const ContactPage = () => (
  <div>
    <h1>Contact Us</h1>
    <p>If you have any questions or feedback, feel free to reach out to us.</p>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default ContactPage;
