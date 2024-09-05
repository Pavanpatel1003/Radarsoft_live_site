import React from "react";
import Image from "next/image";
import Link from "next/link";
import acad from "../../../../public/assets/media/case-details/acad.png";
import planet from "../../../../public/assets/media/case-details/planet-fill.png";
import keyacad from "../../../../public/assets/media/case-details/keyacad.png";
import research from "../../../../public/assets/media/case-details/research.png";
import design from "../../../../public/assets/media/case-details/design.png";
import development from "../../../../public/assets/media/case-details/development.png";
import testing from "../../../../public/assets/media/case-details/testing.png";
import marketing from "../../../../public/assets/media/case-details/marketing.png";
import suppport from "../../../../public/assets/media/case-details/suppport.png";
import iPhone15 from "../../../../public/assets/media/case-details/iPhone15.png";
import acadkey1 from "../../../../public/assets/media/case-details/acadkey1.png";
import acadkey2 from "../../../../public/assets/media/case-details/acadkey2.png";
import acadoptimized1 from "../../../../public/assets/media/case-details/acadoptimized1.png";
import acadoptimized2 from "../../../../public/assets/media/case-details/acadoptimized2.png";
import acadoptimized3 from "../../../../public/assets/media/case-details/acadoptimized3.png";
import acadoptimized4 from "../../../../public/assets/media/case-details/acadoptimized4.png";
import case_d_mongo1 from "../../../../public/assets/media/case-details/case_d_mongo1.png";
import case_d_ex from "../../../../public/assets/media/case-details/case_d_ex.png";
import case_d_react1 from "../../../../public/assets/media/case-details/case_d_react1.png";
import case_d_node1 from "../../../../public/assets/media/case-details/case_d_node1.png";
import case_d_python from "../../../../public/assets/media/case-details/case_d_python.png";
import case_d_html1 from "../../../../public/assets/media/case-details/case_d_html1.png";
import case_d_flutter1 from "../../../../public/assets/media/case-details/case_d_flutter1.png";
import case_d_aws1 from "../../../../public/assets/media/case-details/case_d_aws1.png";
import common_contact from "../../../../public/assets/media/common/common-contact.png";

const Case_acad = () => {
  return (
    <>
      <section className="case-back-studies">
        <div className="container">
          <div className="row">
            <div className="case-back-btn">
              <span className="me-2">
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              <Link href="/casestudy">Back</Link>
            </div>
            <div className="case-studies-btn-main">
              <button className="case-studies-btn">Case Study</button>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container-fluid work-area-lower-sides">
          <div className="container">
            <div className="row work-area-lower-sides">
              {/* <div className="work-area-lower-side"> */}
              <div className="work-lower-left col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="work-area-logo">
                  <Image className="work-logo" src={acad} alt="" />
                </div>
                <h1 className="work-area-lower-heading">
                  Google Maps for Career Prep Empowering Students and Supporting
                  Schools
                </h1>
                <p className="work-area-lower-paragraph">
                  AcadSpace helps students discover their passions and plan
                  their careers with confidence. Through licensed counselors, we
                  offer personalized, trustworthy guidance to empower students
                  in pursuing their dreams. Whether you're a student or an
                  institute, we're here to support your journey to success.
                </p>
                <div className="work-area-log">
                  <Link className="work-area-lower-anchor-blue" href="https://acadspace.org/">
                    <Image src={planet} /> www.acadspace.org
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 mt-36">
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">20%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>Overall Growth</p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">48%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>Improvement in System Efficiency</p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">40%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>Improvement in User Retention Rate.</p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">60%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>
                        Improvement in feature <br />
                        Adoption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* START THE CHALLENGE */}
      <section className="chalange-sec">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <div className="common-flex ">
                <h2>The Challenge</h2>
                <Link className="common-project-button" href="">
                  Start a project with us
                </Link>
              </div>
              <p>
                In building the AcadSpace app, we faced the challenge of
                creating a simple yet powerful platform to help students get
                personalized career advice. We needed to make it easy for
                students to connect with the right counselors while ensuring
                their data stayed secure. Adding real-time chat and scheduling
                made it more interactive, and we also made sure the app could
                grow as AcadSpace helps more students. Our focus was on making
                the app user-friendly, aesthetically pleasing, secure, and
                scalable.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END THE CHALLENGE */}

      {/* START KEY OBJECTIVE */}
      <section className="key-object">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="commom-heading">
                <h2>Key Objectives</h2>
                <p>
                  AcadSpace’s goal is to help students find their passion and
                  plan their careers with confidence. By connecting them with
                  trusted counselors, AcadSpace provides personalized guidance
                  and the support they need to pursue their dreams and succeed.
                </p>
              </div>
              <div className="sub-text">
                <h6 className="normal-heading">Career Guidance</h6>
                <p className="normal-desc">
                  Providing personalized career guidance through our aptitude
                  tests to help you make informed decisions for your future.
                </p>
              </div>
              <div className="sub-text">
                <h6 className="normal-heading">
                  AI based Career Recommendations{" "}
                </h6>
                <p className="normal-desc">
                  Get AI-powered career recommendations customized to your
                  unique traits, like sharing a personality profile with
                  visionaries such as Abdul Kalam.
                </p>
              </div>
              <div className="">
                <h6 className="normal-heading">Career Counselling</h6>
                <p className="normal-desc">
                  Providing career counseling through interactive webinars and
                  personalized sessions.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <Image className="case_d_right_img" src={keyacad} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* END KEY OBJECTIVE */}

      {/* START OUR PROCESS */}
      <section className="our-process">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Our Process</h2>
              <p>
                Our streamlined process ensures the highest quality and
                efficiency at every stage. From thorough research and innovative
                design to precise development, rigorous testing, strategic
                marketing, and ongoing support, we cover all bases to deliver
                exceptional results.
              </p>
            </div>
            <div class="process-container">
              <div class="process-step research">
                <Image src={research} alt="Research Icon" />
                <p>Research</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step design">
                <Image src={design} alt="Design Icon" />
                <p>Design</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step development">
                <Image src={development} alt="Development Icon" />
                <p>Development</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step testing">
                <Image src={testing} alt="Testing Icon" />
                <p>Testing</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step marketing">
                <Image src={marketing} alt="Testing Icon" />
                <p>Marketing</p>
              </div>
              <div class="process-arrow">&#8594;</div>
              <div class="process-step support">
                <Image src={suppport} alt="Testing Icon" />
                <p>Support</p>
              </div>
            </div>
            <div class="container mt-5 d-none">
              <div class="row text-center">
                <div class="col-md-2 col-sm-12">
                  <div class="process-step research">
                    <Image src={research} alt="Research Icon" />
                    <p>Research</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step design">
                    <Image src={design} alt="Design Icon" />
                    <p>Design</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step development">
                    <Image src={development} alt="Development Icon" />
                    <p>Development</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step testing">
                    <Image src={testing} alt="Testing Icon" />
                    <p>Testing</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step marketing">
                    <Image src={marketing} alt="marketing Icon" />
                    <p>Marketing</p>
                  </div>
                </div>
                <div class="col-md-1 d-none d-md-flex align-items-center justify-content-center">
                  <div class="process-arrow">&#8594;</div>
                </div>
                <div class="col-md-2 col-sm-12">
                  <div class="process-step support">
                    <Image src={suppport} alt="support Icon" />
                    <p>Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR PROCESS */}

      {/* START IMPOWERING */}
      <section className="Empowering-sec">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>
                Google Maps for Career Prep Empowering Students and Supporting
                Schools
              </h2>
              <p>
                Google Maps for Career Prep empowers students with personalized
                career paths, guiding them like a GPS. We support schools with
                tools and resources to boost career readiness, ensuring students
                are equipped for success.
              </p>
            </div>
          </div>
          <div className="row emproving_secound">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <h4>Proven Success</h4>
              <p>
                Since launch, AcadSpace has helped over 18,000 learners in
                India. Our vernacular courses boast a 40% higher completion rate
                than English-only options, highlighting the effectiveness of
                mother tongue education.
              </p>
              <div className="sub-text mt-60"></div>
              <div className="sub-text mt-36 mb-60"></div>
              <h4>Expanded Reach</h4>
              <p>
                AcadSpace is broadening its impact by bringing accessible career
                guidance and skill development to more communities. We aim to
                bridge educational gaps, ensuring every student has the tools to
                succeed, regardless of location.
              </p>
            </div>
            <div className="col-12 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mt-md-5 mb-md-5 mb-sm-5 text-center">
              <div className="img_set">
                <Image src={iPhone15} alt="" className=" w-100 h-100" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 phone-mt-5">
              <div className="">
                <h4>Industry Partnerships</h4>
                <p>
                  AcadSpace partners with MyCooIQ, SpellAThon, and OLYMPIADS to
                  revolutionize education with personalized learning and
                  competitive platforms. Supported by over 1,600 parents and
                  Artha99 Venture Capital Fund, we are transforming education
                  and career guidance.
                </p>
                <div className="sub-text mt-60"></div>
                <div className="sub-text mt-36 mb-60"></div>
                <h4>Continuous Innovation</h4>
                <p>
                  At AcadSpace, we drive continuous innovation by leveraging AI
                  and cutting-edge technologies to deliver the best results for
                  our users. Our commitment to integrating advanced solutions
                  ensures personalized and effective educational experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END IMPOWERING */}

      {/* START KEY ACCOMPLISHEMENTS */}
      <section className="key-sec">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Key Accomplishments</h2>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 keybg">
              <Image src={acadkey1} alt="" className="case_d_img" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key">
              <div>
                <div className="sub-text-heading sub-text">
                  <h3>User Engagement</h3>
                  <div>
                    <ul>
                      <li>Increased daily active users by 16%.</li>
                      <li>
                        Achieved overall 12% improvement in user rentention.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sub-text-heading">
                  <h3>Career Counselling Outcomes</h3>
                  <div>
                    <ul>
                      <li>
                        15% of the user’s reported that they have found their
                        careers.
                      </li>
                      <li>
                        Career aptitude test participation has increased by 20%.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row key_sec_row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key">
              <div>
                <div className="sub-text-heading">
                  <h3>Career Library</h3>
                  <div>
                    <ul>
                      <li>
                        Our enhanced interactive quiz system has significantly
                        improved user engagement and learning outcomes.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sub-text-heading">
                  <h3>Career Paths</h3>
                  <ul>
                    <li>
                      Our career library offers diverse paths, including
                      computer engineering, life sciences, and medicine,
                      allowing students to select their preferred track.
                    </li>
                  </ul>
                </div>
                <div className="sub-text-heading">
                  <h3>Competitions</h3>
                  <ul>
                    <li>
                      We offer various activities such as chess, painting, and
                      writing, allowing students to join competitions based on
                      their interests.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <Image src={acadkey2} alt="" className="case_d_right_img" />
            </div>
          </div>
        </div>
      </section>
      {/* END KEY ACCOMPLISHEMENTS */}

      {/* START OPTIMIZED  */}
      <section className="Optimized-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7">
              <div className="commom-heading">
                <div className="common-flex ">
                  <h2>
                    Optimized for <br />
                    Career Guidance
                  </h2>
                </div>
                <p>
                  AcadSpace is dedicated to transforming education through
                  innovative solutions and industry partnerships. By leveraging
                  advanced technologies like AI, we offer personalized learning
                  experiences and diverse career pathways.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 case_d_opt">
              <div>
                <Link className="common-project-button" href="">
                  Start a project with us
                </Link>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3 mt-2">
            <div class="col text-center">
              <div class="p-3">
                <img src={acadoptimized1.src}></img>
              </div>
            </div>
            <div class="col text-center">
              <div class="p-3">
                <img src={acadoptimized2.src}></img>
              </div>
            </div>
            <div class="col text-center">
              <div class="p-3">
                <img src={acadoptimized3.src}></img>
              </div>
            </div>
            <div class="col text-center">
              <div class="p-3">
                <img src={acadoptimized4.src}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OPTIMIZED  */}

      {/* START OUR TECH */}
      <section className="our-tech-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-11 col-lg-5">
              <div className="commom-heading">
                <h2>
                  Our Tech Stack in
                  <br /> AcadSpace’s Success
                </h2>
                <div className="sub-text"></div>
                <p>
                  At RadarSoft Technologies, we use top tools to build great
                  solutions. MongoDB for strong databases, PHP for web
                  development, and React and Flutter for smooth web and mobile
                  apps. Node.js powers our backend, AWS ensures secure cloud
                  services, and JavaScript adds interactivity. Our tech stack
                  helps us create reliable and innovative solutions for our
                  clients.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="row row-cols-2 row-cols-lg-2 g-5 g-lg-5">
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_mongo1} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_ex} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_react1} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_node1} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_python} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_html1} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_flutter1} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_aws1} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR TECH */}

      {/* START THE RESULT */}
      <section class="result-sec">
        <div class="container case-d-main-result">
          <div className="commom-heading">
            <h2>The results</h2>
          </div>

          <div class="row row-cols-2 row-cols-sm-2 row-cols-lg-3 g-2 g-lg-3">
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">4.5</span>
                {/* <span><i class="fa-solid fa-arrow-up uparrow"></i></span> */}
                <hr />
                <p>Ratings by students</p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">24%</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>Overall Growth</p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">50%</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>
                  Improvement in System
                  <br /> Efficiency
                </p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">50%</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>
                  Improvement in
                  <br /> User Retention Rate.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">20,000+</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>Students Enrolled</p>
              </div>
            </div>
            <div class="col">
              <div class="case-d-result p-3">
                <span class="case-d-num">80%</span>
                <span>
                  <i class="fa-solid fa-arrow-up uparrow"></i>
                </span>
                <hr />
                <p>
                  Improvement in feature <br />
                  Adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END THE RESULT */}

      {/* START COMMON CONTACT */}
      <section className="common-contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="case_d_con">
                <Image src={common_contact} alt="" className="w-100" />
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
                    <Link className="common-link" href="/contact">
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
    </>
  );
};

export default Case_acad;
