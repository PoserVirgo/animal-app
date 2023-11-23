import React from "react";
import "./About.css";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="about">
          <img src="/foto.jpeg" alt="profile" />
          <p>Muhamad Yahya Oktariansyah</p>
          <div className="student">Mahasiswa</div>
          <div className="line"></div>
          <p className="prak">Exopet-List App</p>
          <div className="location">
            <p className="info">
              <HiOutlineLocationMarker
                className="icon"
                size="18px"
                color="#484d49"
              />
              Asal
            </p>
            <p>Depok, Jawa Barat</p>
          </div>
          <div className="location">
            <p className="info">
              <AiOutlinePhone className="icon" size="18px" color="#484d49" />
              Kontak
            </p>
            <p>0813-8224-9250</p>
          </div>
          <div className="location">
            <p className="info">
              <FiMail className="icon" size="18px" color="#484d49" />
              Email
            </p>
            <p>myahyaokta@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
