import logo from "./logo.svg";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
// import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Switch,
// } from "react-router-dom";
// import SignUpPage from "./Components/SignupPage";
// import About from "./Components/About";
import main from "./Assets/main.mp4";
import Rectangle from "./Assets/Rectangle.png";
import Frame1 from "./Assets/Frame1.png";
import Frame2 from "./Assets/Frame2.png";
import Frame3 from "./Assets/Frame3.png";
import Frame4 from "./Assets/Frame4.png";
import w1 from "./Assets/w1.png";
import w2 from "./Assets/w2.png";
import w3 from "./Assets/w3.png";
import w4 from "./Assets/w4.png";
import w5 from "./Assets/w5.png";
import w6 from "./Assets/w6.png";
import f1 from "./Assets/f1.png";
import f2 from "./Assets/f2.png";
import f3 from "./Assets/f3.png";
import f4 from "./Assets/f4.png";
import f5 from "./Assets/f5.png";
import s1 from "./Assets/s1.png";
import s2 from "./Assets/s2.png";

// import About from "./Components/About";

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <video src={main} muted autoPlay loop type="video/mp4"></video>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* This is the alias of BrowserRouter i.e. Router */}
        </nav>
      </header>
      <div className="slider">
        <div className="slide">
          <h1>
            REVOLUTIONIZING HOME <span>BUILDING WITH TECHNOLOGY</span>{" "}
          </h1>
        </div>
      </div>

      <div className="about-us">
        <img className="firstrect" src={Rectangle} alt="" />
        <div className="about-heading">
          <h2 className="who">Who we are</h2>
          <p>
            Casa streamlines home building by offering a curated platform
            connecting homeowners with professionals and an online marketplace
            for construction materials. With transparency and efficiency, Casa
            simplifies the process from land acquisition to construction
            completion, revolutionizing the home building industry
          </p>
        </div>
      </div>
      <div className="why-us">
        <img className="secondrect" src={Rectangle} alt="" />
        <div className="why-heading">
          <h2 className="why">Why Us</h2>
          <div className="frames">
            <img className="Frame1" src={Frame1} alt="" />
            <img className="Frame2" src={Frame2} alt="" />
            <img className="Frame3" src={Frame3} alt="" />
            <img className="Frame4" src={Frame4} alt="" />
          </div>
        </div>
      </div>
      <div className="whatwedo">
        {/* <img src={Rectangle} alt="" className="fiirdrect" /> */}
        {/* <img src={Rectangle} alt="" className="thirdrect" /> */}
        <div className="whatwedo-heading">
          <img src={Rectangle} alt="" className="fiirdrect" />

          <h2 className="what">What We Do</h2>
          <div className="instance1">
            <img src={w1} alt="" className="w1" />
            <img src={w2} alt="" className="w2" />
            <img src={w3} alt="" className="w3" />
            {/* <img src={w4} alt="" className="w4" /> */}
            <img src={w5} alt="" className="w5" />
            <img src={w6} alt="" className="w6" />
          </div>
        </div>
      </div>
      <section>
        <div className="footer">
          <div className="footer-heading">
            <img src={f1} alt="" className="f1" />
            <img src={f2} alt="" className="f2" />
            <img src={f3} alt="" className="f3" />
            {/* <img src={f4} alt="" className="f4" /> */}
            {/* <hr /> */}
            <img src={f5} alt="" className="f5" />
          </div>
        </div>
      </section>
      <div className="last">
        {/* <ContactForm /> */}
        <div className="big-cont1">
          Site
          <ul className="insidebc1">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="big-cont2">
          Social
          <ul className="insidebc2">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className="big-cont3">
          Legal
          <ul className="insidebc3">
            <li>Privacy</li>
            <li>Terms of Condition</li>
          </ul>
        </div>
        <div className="big-cont4">
          Contact{" "}
          <ul className="insidebc4">
            <li>Casa@gmail.com</li>
            <li>Whatsapp</li>
          </ul>
        </div>
      </div>

      {/* <img src={f2} alt="" className="f2" /> */}
    </div>
  );
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="fullbg" style={{ background: "black" }}>
      <div className="signup_portal" style={{ background: "black" }}>
        <div className="form-container">
          {/* <h2>Contact Form</h2> */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label1" htmlFor="firstName"></label>
              <input
                className="form-input1"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label className="form-label2" htmlFor="lastName"></label>
              <input
                className="form-input2"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="username"></label>
              <input
                className="form-input3"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email"></label>
              <input
                className="form-input4"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone"></label>
              <input
                className="form-input5"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="city"></label>
              <input
                className="form-input6"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City/Locality:"
              />
            </div>
            <button type="submit" className="form-button">
              Sign Up
              {/*  */}
            </button>
          </form>
        </div>
        <div className="Sign-up">
          <h2>Sign-Up</h2>
        </div>
        <div className="sign-img">
          <img src={s1} className="s1" alt="" />
        </div>
      </div>
      <div className="imageofsign">
        {/* <img className="s2" src={s2} alt="" /> */}
      </div>
    </div>
  );
};

// import SignUpPage from "./Components/SignupPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
