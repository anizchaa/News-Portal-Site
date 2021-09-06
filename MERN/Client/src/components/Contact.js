import React from "react";
import "./style.css";

const Form = () => {
  return (
    <div>
      <div id="contact">
        <h1>Contact us</h1>
        <p>Send a message and we will get back to you as soon as possible.</p>

        <form
          class="contact-form"
          action="https://formsubmit.co/anizmrzn666@gmail.com"
          method="POST"
        >
          <label for="">Name</label>
          <input
            class="name"
            name="Name"
            type="text"
            placeholder="Enter your full name"
            required
          />
          <br />
          <label for="">Email</label>
          <input
            class="email"
            name="Email"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <br />
          <label for="">Message</label>
          <textarea
            class="message"
            name="Message"
            id=""
            cols="10"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
