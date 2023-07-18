import React from "react";
import { skills } from "./data";
export default function Skills() {
  return (
    <div className="frame frame4">
      <div className="skills">
        {skills.map((skill) => (
          <div
            key={skill.id}
            style={{
              backgroundImage: `linear-gradient(${skill.gradientColor.join(
                ", "
              )}),url(${skill.imgUrl})`,
            }}
            className="skill skill1"
          >
            <div className="content-skill">
              <h1>{skill.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
