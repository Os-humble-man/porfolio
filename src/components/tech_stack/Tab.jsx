import React from 'react'
import { useState } from 'react';
import './style.css'
export default function Tab({ tabItem }) {
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (i) => setActiveTab(i);

    return (
        <div>
            <div className="tech-stack">
                <ul className="tab-item">
                    {tabItem.map((tab, index) => (
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

            <div className="tech-stack-content">
                {tabItem[activeTab].content.map((tab, index) => (
                    <div key={index} className="tab-content">
                        <div className="tab-icon">
                            <div className="tab-img">
                                <img src={tab.icon} alt={tab.title} loading="lazy" />
                            </div>
                            <p>{tab.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
