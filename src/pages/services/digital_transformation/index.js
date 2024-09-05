import Image from "next/image";
import digital from "../../../../public/assets/media/digital/digital.png";
import mobileapp from "../../../../public/assets/media/digital/mobileapp.png";
import settings from "../../../../public/assets/media/digital/settings.png";
import uiux from "../../../../public/assets/media/digital/uiux.png";
import agile from "../../../../public/assets/media/digital/agile.png";
import AI from "../../../../public/assets/media/digital/AI.png";
import micro from "../../../../public/assets/media/digital/micro.png";
import webdevelopment from "../../../../public/assets/media/digital/webdevelopment.png";
import common_contact from "../../../../public/assets/media/common/common-contact.png";
import digitaltransformation1 from "../../../../public/assets/media/digital/digital transformation1.png";
import digitaltransformation2 from "../../../../public/assets/media/digital/digital transformation2.png";
import digitalbanner from "../../../../public/assets/media/digital/digitalbanner.png";
import Link from "next/link";
import { useState } from "react";

const Digital = () => {
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
      {/* digital transformation details title section */}
      <section className="career-banner">
        <div className="container">
          <div className="career-banner-title">
            <div className="details-new">
              <span className="commom-heading marginbtm">
                <h2>
                  We transform your business
                  <br /> through digital transformation
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
                Staff augmentation is a flexible outsourcing strategy that
                enables businesses to fill specific skill gaps and meet project
                demands by hiring external professionals on a temporary or
                project basis. This approach allows companies to scale their
                workforce according to their immediate needs without the
                long-term commitments associated with full-time employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* digital transformation banner section */}
      <section className="py-4">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={digitalbanner}
            alt="Career Banner"
          />
        </div>
      </section>

      {/* START TRANSFORM */}
      <section className="banner-area d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner-left-side-area commom-heading">
                <h2>
                  Transform your business with our Digital Transformation
                  services
                </h2>
                <p>
                  At RadarSoft Technologies, we are at the forefront of the
                  Digital Transformation revolution, empowering businesses to
                  navigate and thrive in the digital age. Our mission is to
                  seamlessly integrate cutting-edge technology solutions that
                  drive efficiency, innovation, and growth for our clients
                  across various industries.
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
                    <button className="banner-right-side-button" type="submit">
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
      {/* END TRANSFORM */}

      {/* START STAY AHED */}
      <section className="service-contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 digital_relative">
              <div className="digital_sec_bg">
                <img src={digital.src} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box">
              <div>
                <div className="digital-stay commom-heading">
                  <h2>Stay Ahead with Digital Transformation</h2>
                  <p>
                    Harness the power of digital transformation to outperform
                    your competitors. Enhance efficiency, innovate faster, and
                    adapt to market changes seamlessly.
                  </p>
                  <div className="service-d-stay">
                    <ul>
                      <li>
                        Leverage advanced technologies to accelerate your
                        innovation cycle and bring new ideas to market quickly.
                      </li>
                      <li>
                        Uncover untapped markets and revenue streams by
                        utilizing data analytics and digital tools.
                      </li>
                      <li>
                        Adapt swiftly to evolving market conditions with agile
                        processes and real-time insights.
                      </li>
                      <li>
                        Improve efficiency and reduce costs by automating
                        processes and integrating systems.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END STAY AHED */}

      {/* START SERVICE */}
      <section className="service-d-following">
        <div className="container">
          <div className="row">
            <div className="service-d-following-head commom-heading">
              <h3>Services</h3>
              <h2>Digital Transformation</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="digital-grid-container">
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <img src={mobileapp.src} alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Mobile App <br />
                        Development
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <img src={settings.src} alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Mobile App <br />
                        Development
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item bottom-set">
                    <div className="digital_img">
                      <img src={uiux.src} alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        UI/UX <br />
                        Design
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item bottom-set">
                    <div className="digital_img">
                      <img src={agile.src} alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Agile <br />
                        Development
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <img src={AI.src} alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Gen AI <br />
                        Implementation
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <img src={micro.src} alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Micro <br />
                        Services Architecture
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <img src={webdevelopment.src} alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Web <br />
                        Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SERVICE */}

      {/* START COMMON CONTACT */}
      <section className="common-contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="case_d_con">
                <img src={common_contact.src} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box">
              <div>
                <div className="sub-text-heading">
                  <h3>Want to know more! Get in touch with our team.</h3>
                  <p className="normal-desc">
                    Chat with us now to get personalized guidance and ensure all
                    your concerns are addressed promptly and accurately.
                  </p>
                  <div className="common-contact-button">
                    <Link
                      className="common-link"
                      href="/contact"
                      style={{ textDecoration: "none" }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END COMMON CONTACT */}

      {/* START HOW RADARSOFT`S` DIGITAL */}
      <section className="d-none">
        <div className="container mb-5">
          <div className="row">
            <div className="mb-5">
              <Link className="digital-case-studies" href="/casestudy">
                Case Studies
              </Link>
              &nbsp;
              <Link href="/services/digital_transformation">
                <i className="fa-solid fa-chevron-right"></i>&nbsp; Digital
                Transformation
              </Link>
            </div>

            <div className="row mb-5">
              <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                <div className="commom-heading">
                  <h2>
                    How Radarsoft’s Digital Transformation Services Simplified
                    Business for Major Companies
                  </h2>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 digital-main-set">
                <div className="">
                  <Link className="common-project-button" href="/contact">
                    Start a project with us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-2 case-pad">
            <div className="col">
              <div>
                <img
                  src={digitaltransformation1.src}
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="case-btn-set">
                <Link className="case-edtech-btn" href="">
                  ERP
                </Link>
                <Link className="case-mobile-btn" href="">
                  Web Dashboard
                </Link>
              </div>
              <div className="case-card-head">
                <h4>
                  Discover how we simplified Bajaj's Employee Management System
                  by reducing manual checks.
                </h4>
                <Link className="case-read-more" href="">
                  Read more&nbsp;
                  <span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col">
              <div>
                <img
                  src={digitaltransformation2.src}
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="case-btn-set">
                <Link className="case-edtech-btn" href="">
                  ERP
                </Link>
                <Link className="case-mobile-btn" href="">
                  Web Dashboard
                </Link>
              </div>
              <div className="case-card-head">
                <h4>
                  Discover how we streamlined Nilanjan Art’s HR module by
                  reducing manual checks.
                </h4>
                <Link className="case-read-more" href="">
                  Read more&nbsp;
                  <span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END HOW RADARSOFT`S` DIGITAL */}
    </>
  );
};

export default Digital;
