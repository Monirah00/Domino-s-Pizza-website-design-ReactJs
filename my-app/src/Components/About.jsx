import React from "react";
import AboutImg from "../imges/About js.jpg";

function About() {
  return (
    <div>
      <section className="About-bg">
        <h2 className="text-center text-white About-US ">About Us</h2>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="colum-1">
              <img className="AboutImg" src={AboutImg} alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="colum-2">
              <h2 className="text-center">Domino's Pizza</h2>
              <hr />
              <p>
                In 1960,[11] Tom Monaghan and his brother, James, took over the
                operation of DomiNick's, an existing location of a small pizza
                restaurant chain that had been owned by Dominick DeVarti, at 507
                Cross Street (now 301 West Cross Street)[12] in Ypsilanti,
                Michigan,[13] near Eastern Michigan University.[14] The deal was
                secured by a $500 down payment, then the brothers borrowed $900
                to pay for the store.[15] The brothers planned to split the work
                hours evenly, but James did not want to quit his job as a
                full-time postman to keep up with the demands of the new
                business. Within eight months, James traded his half of the
                business to Tom for the Volkswagen Beetle they used for pizza
                deliveries.[15] By 1965, Tom Monaghan had purchased two
                additional pizzerias; he now had a total of three locations in
                the same county. Monaghan wanted the stores to share the same
                branding, but the original owner forbade him from using the
                DomiNick's name. One day, an employee, Jim Kennedy, returned
                from a pizza delivery and suggested the name "Domino's".[12]
                Monaghan immediately loved the idea and officially renamed the
                business Domino's Pizza, Inc. in 1965.[15] The company logo
                originally had three dots, representing the three stores in
                1965.[15] Monaghan planned to add a new dot with the addition of
                every new store, but this idea quickly faded, as Domino's
                experienced rapid growth.[15] Domino's Pizza opened its first
                franchise location in 1967 and by 1978, the company had expanded
                to 200 stores.[16] In 1975, Domino's faced a lawsuit by Amstar
                Corporation, the maker of Domino Sugar, alleging trademark
                infringement and unfair competition. On May 2, 1980, the Fifth
                Circuit Court of Appeals in New Orleans found in favor of
                Domino's Pizza.[17] In 1998, after 38 years of ownership,
                Domino's founder Tom Monaghan announced his retirement, sold 93
                percent of the company to Bain Capital, Inc. for about $1
                billion, and ceased being involved in day-to-day operations of
                the company.[18] A year later, the company named Dave Brandon as
                its CEO.[19]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
