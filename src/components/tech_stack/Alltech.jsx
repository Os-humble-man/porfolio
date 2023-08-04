import React, { useState } from "react";
import "../tech_stack/style.css";
import { tabContent } from "../data";

export default function Alltech() {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (i) => setActiveTab(i);
  console.log(tabContent[activeTab].icon);

  return (
    <div className="container frame frame6">
      <div className="tech-content">
        <div className="section-title">
          <h1>Tech Stack</h1>
        </div>
        <div className="tech-stack">
          <ul className="tab-item">
            {tabContent.map((tab, index) => (
              <li
                key={index}
                className={activeTab === index ? "active-tab" : ""}
                onClick={() => handleClick(index)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tech-stack-content">
        {tabContent[activeTab].content.map((tab, index) => (
          <div key={index} className="tab-content">
            <div className="tab-icon">
              <div className="tab-img">
                <img src={tab.icon} alt={tab.title} />
              </div>
              <p>{tab.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
