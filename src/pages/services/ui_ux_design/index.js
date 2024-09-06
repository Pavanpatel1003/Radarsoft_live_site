import React from "react";
import Image from "next/image";
import servicedetails1 from "../../../../public/assets/media/service-details/servicedetails1.png";
import figma from "../../../../public/assets/media/service-details/figma.png";
import ps from "../../../../public/assets/media/service-details/ps.png";
import right from "../../../../public/assets/media/service-details/right.png";
import xd from "../../../../public/assets/media/service-details/xd.png";
import ai from "../../../../public/assets/media/service-details/ai.png";
import xml from "../../../../public/assets/media/service-details/xml.png";
import trello from "../../../../public/assets/media/service-details/trello.png";
import diamond from "../../../../public/assets/media/service-details/diamond.png";
import jira from "../../../../public/assets/media/service-details/jira.png";
import heathcare from "../../../../public/assets/media/service-details/heathcare.png";
import Retail from "../../../../public/assets/media/service-details/Retail.png";
import Education from "../../../../public/assets/media/service-details/Education.png";
import Realestate from "../../../../public/assets/media/service-details/Realestate.png";
import Event from "../../../../public/assets/media/service-details/Event.png";
import Finance from "../../../../public/assets/media/service-details/Finance.png";
import Food from "../../../../public/assets/media/service-details/Food.png";
import Media from "../../../../public/assets/media/service-details/Media.png";
import uiuxbanner from "../../../../public/assets/media/service-details/uiuxbanner.png";
import Link from "next/link";
import { useState } from "react";

const Ui_ux = () => {

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = {
      email,
      fullName,
      phoneNumber,
      subject,
    };
    try {
      const response = await axios.post(
        `https://radarsoft-black.vercel.app/api/hello`,
        form
      );
      if (response.status === 200) {
        console.log("response here", response);
        setEmail("");
        setFullName("");
        setPhoneNumber("");
        setSubject("");
        alert("Your Request Submitted successfully.");
      }
    } catch (error) {
      console.log("error in reques", error);
    }
    console.log("data here", form);
  };

  return (
    <>
      {/* service details title section */}
      <section className="career-banner common_margin_space">
        <div className="container">
          <div className="career-banner-title">
            <div className="details-new">
              <span className="commom-heading marginbtm">
                <h2>
                We design experiences that 
                  <br /> make people lives easier{" "}
                </h2>
              </span>
              <span className="text-end">
                <Link
                  className="common-project-button getin"
                  href="/contact"
                  style={{ textDecoration: "none" }}
                >
                  Get in touch
                </Link>
              </span>
            </div>
            <div className="commom-heading">
              <p>
                We excel in creating intuitive UI/UX designs that enhance user
                experiences and build strong brand identities. Our team combines
                creativity with strategic thinking to craft visually stunning
                and user-friendly designs that reflect your brand's essence.
                From websites and apps to digital products, we focus on
                delivering designs that are not just aesthetically pleasing but
                also aligned with your business goals, ensuring every user
                interaction is seamless, engaging, and true to your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* service details banner section */}
      <section className="common_margin_space">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={uiuxbanner}
            alt="Career Banner"
          />
        </div>
      </section>
      {/* START EXPERIENCE */}
      <section className="banner-area d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner-left-side-area commom-heading">
                <h2>Experience Seamless Excellence: Our Software Testing</h2>
                <p>
                  We offer comprehensive software testing services to ensure
                  your applications meet the highest standards of quality and
                  performance. Our expert team conducts rigorous testing across
                  various levels, including functional, performance, and
                  security testing, to identify and resolve issues before they
                  impact users. Utilizing both automated and manual testing
                  techniques, we provide thorough validation and verification,
                  ensuring that your software is reliable, efficient, and free
                  of defects.
                </p>
                <div className="">
                  <Link
                    className="common-project-button"
                    href="/contact"
                    style={{ textDecoration: "none" }}
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-right-side-area">
                <div className="banner-right-side-box">
                  <h3 className="banner-right-side-h3">Book an Appointment</h3>
                  <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="FullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name*"
                        required
                      />
                      <input
                        type="text"
                        name="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Id*"
                        required
                      />
                     
                      <input
                        type="number"
                        placeholder="Phone No*"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Subject*"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                      <button
                        className="banner-right-side-button"
                        type="submit"
                      >
                        Enquire Now
                      </button>
                    </form>
                  <p className="banner-right-side-paragraph">
                    ⚡Available from Mon - Fri 10AM TO 7PM ⚡
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END EXPERIENCE */}

      {/* START OUR TEAM */}
      <section className="service-contact common_margin_space">
        <div className="container">
          <div className="row gx-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box">
              <div>
                <div className="commom-heading">
                  <h2>
                    Our Team brings together experts with diverse skillsets
                  </h2>
                  <p>
                    Our team is a blend of experts from various fields, each
                    bringing unique skills and perspectives. Together, we
                    combine our strengths in design, development, strategy, and
                    innovation to deliver comprehensive solutions. With a shared
                    passion for excellence, we collaborate closely to turn ideas
                    into reality, ensuring every project meets the highest
                    standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div>
                <img
                  src={servicedetails1.src}
                  alt="servicedetails"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR TEAM */}

      {/* START FOLLOWING */}
      <section className="service-d-following common_margin_space">
        <div className="container">
          <div className="row">
            <div className="service-d-following-head commom-heading">
              <h3>We use following</h3>
              <h2>UI/UX Tools & technologies</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="grid-container">
                  <div className="grid-item">
                    <img src={figma.src} alt="figma" />
                  </div>
                  <div className="grid-item">
                    <img src={ps.src} alt="ps" />
                  </div>
                  <div className="grid-item">
                    <img src={right.src} alt="right" />
                  </div>
                  <div className="grid-item">
                    <img src={xd.src} alt="xd" />
                  </div>
                  <div className="grid-item">
                    <img src={ai.src} alt="ai" />
                  </div>
                  <div className="grid-item">
                    <img src={xml.src} alt="xml.js" />
                  </div>
                  <div className="grid-item">
                    <img src={trello.src} alt="trello" />
                  </div>
                  <div className="grid-item">
                    <img src={diamond.src} alt="diamond" />
                  </div>
                  <div className="grid-item">
                    <img src={jira.src} alt="Jira" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END FOLLOWING */}

      {/* START OUR INDUSTRIES */}
      <section className="service-d-industries">
        <div className="container">
          <div className="row">
            <div className="service-d-following-industries-set">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                  <div className="commom-heading">
                    <h2>Our Industries</h2>
                    <p>
                      We're proud to work with a wide range of industries,
                      including healthcare, retail, e-commerce, education, and
                      real estate, providing expert services tailored to each
                      sector's unique needs
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 service_details_our">
                  <div className="">
                    <Link
                      className="common-project-button"
                      href="/contact"
                      style={{ textDecoration: "none" }}
                    >
                      Start a project with us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-lg-4">
                  <div className="col">
                    <div className="">
                      <div>
                        <img src={heathcare.src} alt="" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-blue">
                        <h3>Healthcare</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <div>
                        <img src={Retail.src} alt="" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-green">
                        <h3>Retail & Ecommerce</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <div>
                        <img src={Education.src} alt="" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-pink">
                        <h3>Education</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <div>
                        <img src={Realestate.src} alt="" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-yellow">
                        <h3>Real Estate</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <div>
                        <img src={Event.src} alt="" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-blue">
                        <h3>Events</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <div>
                        <img src={Finance.src} alt="" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-green">
                        <h3>Finance</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <div>
                        <img src={Food.src} alt="" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-pink">
                        <h3>Food & Restaurants</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <div>
                        <img src={Media.src} alt="" className="w-100" />
                      </div>
                      <div className="sercise-d-industries-blog bg-yellow">
                        <h3>Media & Entertainment</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR INDUSTRIES */}
    </>
  );
};

export default Ui_ux;
