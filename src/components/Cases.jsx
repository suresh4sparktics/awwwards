import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
import curology from "../assets/curology-min.png";
import yourspace from "../assets/yourspace-min.png";
import lumin from "../assets/lumin-min.png";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formule for your skin's unique needs",
    img: curology,
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: yourspace,
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: lumin,
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img src={caseItem.img} alt={caseItem.subtitle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
