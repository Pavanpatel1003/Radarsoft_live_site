import Image from "next/image";
import careerBanner from "../../../public/assets/media/career-banner.png";
import { openApplyModal } from "@/components/common/data";
import Job from "@/components/model/Job";
import { jobListings } from "@/components/common/data";
import { useState } from "react";
import Apply from "@/components/model/Apply";

const Career = () => {
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const handleOpenApplyModel = (title) => {
    setSelectedJobTitle(title)
    setTimeout(() => {
      openApplyModal();
    }, 100)
  };


  return (
    <>
      {/* Career title section */}
      <section className="career-banner common_margin_space">
        <div className="container">
          <div className="career-banner-title">
            <div className="commom-heading">
              <h2>Be a part of our team</h2>
              <p>
                At RadarSoft, we provide a dynamic environment where your career
                can flourish. Join our team to enhance your skills, work on
                innovative projects, and grow professionally with support and
                opportunities for advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career banner section */}
      <section className="common_margin_space">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={careerBanner}
            alt="Career Banner"
          />
        </div>
      </section>

      {/* Careers section */}
      <section className="career-job-area col-md-12 common_margin_space">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Search jobs at RadarSoft Technologies </h2>
            </div>
            <div className="input-group career-job-input mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search jobs according to your expertise"
                aria-label="Search Jobs"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Careers job list section */}
      <section className="career-job-list-area col-md-12 common_margin_space">
        <div className="container">
          <div className="row">
            <p className="career-job-list-title">10 jobs found</p>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-3 g-5 g-lg-3">
                {jobListings.map((job, index) => (
                  <div
                    className="col"
                    style={{ cursor: "pointer" }}
                    key={index}
                    onClick={() => handleOpenApplyModel(job.title)}
                  >
                    <div className="card-body">
                      <p className="text-uppercase loc mb-2">{job.location}</p>
                      <h4 className="card-title mb-4">{job.title}</h4>
                      <p className="mb-3">
                        <strong>Skills Required - </strong>
                        {job.skillsRequired.map((skill, i) => (
                          <span key={i}>
                            {skill}
                            {i < job.skillsRequired.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>
                      <p className="mb-4">
                        <strong>Experience Required -</strong>
                        {job.experienceRequired}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="career-btn">
              <a href="#">
                NEXT&nbsp;&nbsp;
                <span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Apply selectedJobTitle={selectedJobTitle} />
    </>
  );
};

export default Career;
