import React from "react";

export default function Section({ title, subtitle, htmlcode, htmlIntroduction, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        {subtitle}
        {htmlcode}
        <p>{htmlIntroduction}</p>
      </div>
    </div>
  );
}
