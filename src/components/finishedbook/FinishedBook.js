import React, { useEffect } from "react";
import "./FinishedBook.css";
import M from "materialize-css";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function FinishedBook() {
  useEffect(() => {
    initializeComponents();
  }, []);

  const initializeComponents = () => {
    const elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  };

  return (
    <div className="finished__book__view">
      <div className="row margin__top">
        <div className="col s12 l7">
          <div className="row">
            <div className="col s12 l3 disable__padding__on__small">
              <div className="image__wrapper">
                <img
                  className="book__cover__finished"
                  src="https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale"
                  alt=""
                />
              </div>
            </div>
            <div className="col s12 l9">
              <div className="row">
                <div className="book__bio padding__on__small">
                  <div className="col s12">
                    <h4 className="finished__title">Martian</h4>
                    <p className="finished__author">by Andrew Weiz</p>
                    <p className="rating">
                      5/10<i class="fab fa-canadian-maple-leaf"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="review z-depth-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem corporis distinctio asperiores magni cupiditate,
                    facilis obcaecati nisi hic. Veniam sapiente nisi nemo quasi
                    vitae deleniti nostrum culpa fugit provident excepturi?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem corporis distinctio asperiores magni cupiditate,
                    facilis obcaecati nisi hic. Veniam sapiente nisi nemo quasi
                    vitae deleniti nostrum culpa fugit provident excepturi?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorem corporis distinctio asperiores magni cupiditate,
                    facilis obcaecati nisi hic. Veniam sapiente nisi nemo quasi
                    vitae deleniti nostrum culpa fugit provident excepturi?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l8">
              <span
                class="new badge"
                data-badge-caption="custom caption custom caption custom caption"
              >
                4
              </span>
              <span class="new badge red accent-2" data-badge-caption="custom ">
                4
              </span>
              <span class="new badge" data-badge-caption="custom caption">
                4
              </span>
              <span
                class="new badge indigo lighten-3"
                data-badge-caption="custom caption"
              >
                4
              </span>
              <span class="new badge" data-badge-caption="custom caption">
                4
              </span>
              <span class="new badge" data-badge-caption="custom caption">
                4
              </span>
              <span
                class="new badge  green lighten-1"
                data-badge-caption="Satisfied"
              >
                <i class="fas fa-check"></i>
              </span>
              <span
                class="new badge  amber lighten-1"
                data-badge-caption="Recommended"
              >
                <i class="fas fa-users"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col s12 l5 margin__bottom">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <span className="note__name">
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              </span>
              <span className="page__range">
                12
                <hr />
                234
              </span>
              <span className="note__date">21.08.2023</span>
            </AccordionSummary>
            <AccordionDetails>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <span className="note__name">Nulla facilisi.</span>
              <span className="page__range">
                12
                <hr />
                234
              </span>
              <span className="note__date">21.08.2023</span>
            </AccordionSummary>
            <AccordionDetails>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
