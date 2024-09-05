import React from "react";
import { openApplyModal } from "@/components/common/data";
import Apply from "@/components/model/Apply";

const Job = ({title}) => {

  const handleOpenApplyModel = () => {
    openApplyModal();
  };
  return (
    <>
      <div
        id="jobModel"
        className="modal fade"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <span className="me-2">
                  <a href="#">
                    <i className="fa-solid fa-arrow-left"></i>
                  </a>
                </span>
                Web developer
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-lg-5">
                <div className="col set-text">
                  <p>
                    <i className="fas fa-map-marker-alt"></i> Pune, India
                  </p>
                </div>
                <div className="col set-text">
                  <p>
                    <i className="fas fa-clock"></i> 10AM - 7PM
                  </p>
                </div>
                <div className="col set-text">
                  <p>
                    <i className="fas fa-briefcase"></i> Full-Time
                  </p>
                </div>
              </div>
              <div className="job-body">
                <h5 className="mt-2 mb-2">
                  <strong>Job Description</strong>
                </h5>
                <div className="job-details">
                  <p>
                    <strong>Skill required:</strong> Trust &amp; Safety -
                    Anti-Money Laundering (AML)
                  </p>
                  <p>
                    <strong>Designation:</strong> Business Advisory New
                    Associate
                  </p>
                  <p>
                    <strong>Qualifications:</strong> Any Graduation
                  </p>
                  <p>
                    <strong>Years of Experience:</strong> 0 to 1 years
                  </p>
                </div>
                <p>
                  We are seeking a skilled and experienced Web developer
                  proficient in WordPress and Shopify to join our team. As a Web
                  developer, you will be responsible for developing,
                  customizing, and maintaining websites on both platforms to
                  meet our clients' needs and specifications. The ideal
                  candidate will have a strong background in front-end and
                  back-end development, with expertise in WordPress and Shopify
                  development.
                </p>
                <div>
                  <div className="mb-1 job-body">
                    <h5 className="mt-2 mb-2">
                      <strong>Qualifications</strong>
                    </h5>
                  </div>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <strong>Qualification Details</strong>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            <strong>Technical Skills</strong>
                          </p>
                          <ul className="list-style">
                            <li>
                              Experience with e-commerce integrations and
                              payment gateways.
                            </li>
                            <li>Knowledge of SEO best practices.</li>
                            <li>
                              Familiarity with graphic design tools like Adobe
                              Photoshop or Illustrator.
                            </li>
                            <li>Experience with RESTful APIs and AJAX.</li>
                            <li>
                              Understanding of cross-browser compatibility
                              issues and solutions.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="co-button"
                data-bs-dismiss="modal"
                onClick={handleOpenApplyModel}
              >
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Apply />
    </>
  );
};

export default Job;
