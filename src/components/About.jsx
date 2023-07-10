import React from "react";
import profile from "./img/about_img.png";
export default function About() {
  return <div className="frame frame2">
    <div className="left-section">
      <div className="about-section">
        <div className="about-txt">
          {/* about section */}
          <span><span className="bts">A propos</span> de moi</span>
        </div>
        <div className="about-body">
          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A deserunt asperiores nobis,
            corrupti officia rem dignissimos officiis quas
            veritatis porro voluptatem. Totam, natus
            perferendis non molestias quisquam mollitia maiores nihil.</p>

          <p>Nobis, cumque. Deserunt tempora dolores
            quas itaque exercitationem
            aliquam, quia, incidunt facilis
            delectus quae architecto, eum aspernatur
            !</p>

        </div>
      </div>


    </div>
    <div className="right-section">
      <div className="profil-img">
        <img src={profile} alt="profile pic" />
      </div>
    </div>
  </div>;
}
