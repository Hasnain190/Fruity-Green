import React from "react";
import Buy from "../components/Buy";
import "./acai.css";
import acai from '../assets/acai-bowl.png'
export default function Acai() {
  return (
    <section className="acai-section">
      <div className="container">
      {/* <img src={acai} alt="acai  image" /> */}
       
          {/* description of acai will come here */}
          <div className="acai-about-item">
            <div className="about-item__title">
              <h2 className="acai-title">Acai Bowls</h2>
            </div>

            <div className="acai-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              incidunt dolores placeat temporibus soluta ratione sequi nesciunt
              amet doloribus velit. Eaque aliquam sequi est saepe dolor neque
              earum enim placeat. Dolorem nesciunt id adipisci magnam?
              Reprehenderit earum est ipsa, sit quae velit id fuga laborum.
              Sequi delectus ut excepturi doloremque similique, ducimus
              consequuntur eligendi, blanditiis quam, accusantium soluta! Porro,
              provident.
            </div>
            <Buy Title="Grab Now" />
          </div>

          <div className=" acai-tag">SMOOTHIES</div>
          {/* tag */}
        </div>

        
     
    </section>
  );
}
