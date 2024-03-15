import logo from "./logo.svg";
import React from "react";
import "./App.css";
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
function App() {
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
          <div className="auth-buttons">
            <span>Sign Up</span>
            {/* <button>Sign Up</button> */}
          </div>
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
}

export default App;
