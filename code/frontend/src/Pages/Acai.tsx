import React from "react";
import Buy from "../components/buy";
import "./acai.css";
import acai from '../assets/acai-bowl.png'
export default function Acai() {
  return (
    <section className="acai-section">
      <div className="container">
        <div className="right">
          {/* description of acai will come here */}
          <div className="acai-about-item">
            <div className="about-item__title">
              <h2>Acai Bows</h2>
            </div>

            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              incidunt dolores placeat temporibus soluta ratione sequi nesciunt
              amet doloribus velit. Eaque aliquam sequi est saepe dolor neque
              earum enim placeat. Dolorem nesciunt id adipisci magnam?
              Reprehenderit earum est ipsa, sit quae velit id fuga laborum.
              Sequi delectus ut excepturi doloremque similique, ducimus
              consequuntur eligendi, blanditiis quam, accusantium soluta! Porro,
              provident.
            </div>
            <Buy></Buy>
          </div>

          {/* tag */}
          <div className=" acai-tag">ACIA BOWLS</div>
        </div>

        <div className="left">
          {/* image of acai box */}

          <img src={acai} alt="acai  image" />
        </div>
      </div>
    </section>
  );
}
