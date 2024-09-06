import React from "react";
import Image from "next/image";
import Link from "next/link";
import trac from "../../../../public/assets/media/case-details/trac.png";
import planet from "../../../../public/assets/media/case-details/planet-fill.png";
import tracyc from "../../../../public/assets/media/case-details/tracyc.png";
import research from "../../../../public/assets/media/case-details/research.png";
import design from "../../../../public/assets/media/case-details/design.png";
import development from "../../../../public/assets/media/case-details/development.png";
import testing from "../../../../public/assets/media/case-details/testing.png";
import marketing from "../../../../public/assets/media/case-details/marketing.png";
import suppport from "../../../../public/assets/media/case-details/suppport.png";
import traccen from "../../../../public/assets/media/case-details/traccen.png";
import keytrac1 from "../../../../public/assets/media/case-details/keytrac1.png";
import keytrac2 from "../../../../public/assets/media/case-details/keytrac2.png";
import tracoptimized1 from "../../../../public/assets/media/case-details/tracoptimized1.png";
import tracoptimized2 from "../../../../public/assets/media/case-details/tracoptimized2.png";
import tracoptimized3 from "../../../../public/assets/media/case-details/tracoptimized3.png";
import tracoptimized4 from "../../../../public/assets/media/case-details/tracoptimized4.png";
import case_d_mongo1 from "../../../../public/assets/media/case-details/case_d_mongo1.png";
import case_d_ex from "../../../../public/assets/media/case-details/case_d_ex.png";
import case_d_react1 from "../../../../public/assets/media/case-details/case_d_react1.png";
import case_d_node1 from "../../../../public/assets/media/case-details/case_d_node1.png";
import case_d_python from "../../../../public/assets/media/case-details/case_d_python.png";
import case_d_html1 from "../../../../public/assets/media/case-details/case_d_html1.png";
import case_d_js1 from "../../../../public/assets/media/case-details/case_d_js1.png";

import case_d_aws1 from "../../../../public/assets/media/case-details/case_d_aws1.png";
import common_contact from "../../../../public/assets/media/common/common-contact.png";

const Case_trac = () => {
  return (
    <>
      <section className="case-back-studies common_margin_space">
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

      <section className="common_margin_space">
        <div className="container-fluid work-area-lower-sides">
          <div className="container">
            <div className="row work-area-lower-sides">
              {/* <div className="work-area-lower-side"> */}
              <div className="work-lower-left col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="work-area-logo">
                  <Image className="work-logo" src={trac} alt="" />
                </div>
                <h1 className="work-area-lower-heading">
                  Trac91 is a a one-step solution for all online shopping order
                  tracking
                </h1>
                <p className="work-area-lower-paragraph">
                  Trac91 simplifies online shopping by making order tracking
                  effortless. Instead of juggling multiple tracking apps or
                  searching through your email, just enter your phone number,
                  and Trac91 does the rest. It automatically pulls up real-time
                  updates for all your orders, so you can easily keep tabs on
                  your deliveries from one convenient place. With Trac91, you’ll
                  always know exactly where your purchases are, without the
                  usual tracking stress.
                </p>
                <div className="work-area-log">
                  <Link
                    className="work-area-lower-anchor-blue"
                    href="https://trac91.com/"
                  >
                    <Image src={planet} /> www.trac91.com
                  </Link>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3 mt-36">
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">12%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>Overall Growth</p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">30%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>Improvement in System Efficiency</p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">20%</span>
                      <span>
                        <i class="fa-solid fa-arrow-up uparrow_header"></i>
                      </span>
                      <hr />
                      <p>Improvement in User Retention Rate.</p>
                    </div>
                  </div>
                  <div class="col">
                    <div class="case-d-result text-white p-3">
                      <span class="case-d-num">80%</span>
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
      <section className="chalange-sec common_margin_space">
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
                Online shopping should be easy, but tracking your orders often
                isn't. People end up juggling different apps, sifting through
                countless emails, and dealing with confusing updates. This makes
                a simple process stressful and frustrating. Trac91 is here to
                change that. We wanted to make tracking orders as simple as
                possible. With just your phone number, Trac91 brings all your
                order updates into one easy place, so you can relax and know
                exactly where your stuff is without any hassle.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END THE CHALLENGE */}

      {/* START KEY OBJECTIVE */}
      <section className="key-object common_margin_space">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="commom-heading">
                <h2>Key Accomplishments</h2>
                <p>
                  Trac91 has made big improvements to make your online shopping
                  easier and more connected. We now offer live order tracking,
                  so you always know exactly where your package is in real-time.
                  Plus, with our new feature that works with Sazo, you can shop
                  at local stores right through our app. This means you get the
                  convenience of tracking your orders and the joy of supporting
                  nearby businesses—all in one place.
                </p>
              </div>
              <div className="sub-text">
                <h6 className="normal-heading">Live order tracking</h6>
                <p className="normal-desc">
                  Trac91 keeps you updated with live order tracking, so you
                  always know exactly where your package is in real-time.
                </p>
              </div>
              <div className="">
                <h6 className="normal-heading">Local shopping</h6>
                <p className="normal-desc">
                  Trac91 lets you easily shop from local stores right in our
                  app, bringing your neighborhood shops to your fingertips.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <Image className="case_d_right_img" src={tracyc} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* END KEY OBJECTIVE */}

      {/* START OUR PROCESS */}
      <section className="our-process common_margin_space">
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
      <section className="Empowering-sec common_margin_space">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>
                Trac91 is a a one-step solution for all online shopping order
                tracking{" "}
              </h2>
              <p>
                Trac91 simplifies online shopping by offering a straightforward
                solution for tracking all your orders. Instead of juggling
                different apps and emails, you just need to enter your phone
                number, and Trac91 handles the rest. You'll get all the updates
                in one place, making it easy to stay on top of your deliveries
                without any hassle. It’s designed to make tracking as smooth and
                stress-free as possible, so you can focus on enjoying your new
                purchases.
              </p>
            </div>
          </div>
          <div className="row emproving_secound">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <h4>Proven Success</h4>
              <p>
                Trac91 has made a real impact for over 10,000 users by
                simplifying order tracking. With all updates in one place and
                real-time notifications, users no longer have to juggle multiple
                apps. Our local shopping feature also connects them with nearby
                stores directly through the app.
              </p>
              <div className="sub-text mt-60"></div>
              <div className="sub-text mt-36 mb-60"></div>
              <h4>Expanded Reach</h4>
              <p>
                Trac91 has greatly expanded its reach, now helping more people
                and local businesses. Our app makes it easy for users everywhere
                to track their orders and shop at nearby stores with just a few
                taps. This growth means more people enjoy a smooth shopping
                experience while supporting their local communities.
              </p>
            </div>
            <div className="col-12 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center mt-md-5 mb-md-5 mb-sm-5 text-center">
              <div className="img_set">
                <Image src={traccen} alt="" className=" w-100 h-100" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 phone-mt-5">
              <div className="">
                <h4>Easy Tracking</h4>
                <p>
                  Trac91 has transformed the way users track their online
                  orders. By bringing all tracking updates into one simple app,
                  we eliminate the need to switch between different platforms.
                </p>
                <div className="sub-text mt-60"></div>
                <div className="sub-text mt-36 mb-60"></div>
                <h4>Continuous Innovation</h4>
                <p>
                  Trac91 is always evolving to make your shopping experience
                  better. We’re constantly updating our features and adding new
                  tools to keep up with the latest trends and needs. This
                  ongoing innovation ensures that our app stays fresh and
                  useful, helping you track your orders and shop locally more
                  easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END IMPOWERING */}

      {/* START KEY ACCOMPLISHEMENTS */}
      <section className="key-sec common_margin_space">
        <div className="container">
          <div className="row">
            <div className="commom-heading">
              <h2>Key Accomplishments</h2>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 keybg">
              <Image src={keytrac1} alt="" className="case_d_img" />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 case_d_key">
              <div>
                <div className="sub-text-heading sub-text">
                  <h3>Trac91 Universal Tracker</h3>
                  <div>
                    <ul>
                      <li>
                        See updates for orders from Flipkart, Amazon, and more
                        in one app.
                      </li>
                      <li>
                        Manage and check orders from different retailers in a
                        single place.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sub-text-heading">
                  <h3>Lives Status</h3>
                  <div>
                    <ul>
                      <li>
                        Get live status updates for all your purchases
                        instantly.
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
                  <h3>Local Shopping</h3>
                  <div>
                    <ul>
                      <li>
                        Trac91 connects you with nearby stores right through the
                        app, making it simple to discover and buy from local
                        businesses. Explore your community and support local
                        retailers all in one place.
                      </li>
                      <li>
                        Get live status updates for all your purchases
                        instantly.
                      </li>
                      <li>
                        Manage and check orders from different retailers in a
                        single place.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sub-text-heading">
                  <h3>Local Shopping</h3>
                  <ul>
                    <li>
                      Trac91 connects you with nearby stores right through the
                      app, making it simple to discover and buy from local
                      businesses. Explore your community and support local
                      retailers all in one place.
                    </li>
                  </ul>
                </div>
                <div className="sub-text-heading">
                  <h3>Live Updates</h3>
                  <ul>
                    <li>
                      Trac91 keeps you informed with real-time tracking for all
                      your orders, so you always know exactly where your package
                      is and when it will arrive.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <Image src={keytrac2} alt="" className="case_d_right_img" />
            </div>
          </div>
        </div>
      </section>
      {/* END KEY ACCOMPLISHEMENTS */}

      {/* START OPTIMIZED  */}
      <section className="Optimized-sec common_margin_space">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7">
              <div className="commom-heading">
                <div className="common-flex ">
                  <h2>
                    Optimized for <br />
                    Easy Tracking
                  </h2>
                </div>
                <p>
                  Trac91 is designed for easy tracking, making it simple to
                  follow all your online orders in one place. Our app combines
                  updates from different stores into a single, easy-to-use
                  interface. With real-time notifications and a clear layout,
                  you always know where your package is and when it will arrive,
                  making tracking hassle-free and straightforward.
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
                <img src={tracoptimized1.src}></img>
              </div>
            </div>
            <div class="col text-center">
              <div class="p-3">
                <img src={tracoptimized2.src}></img>
              </div>
            </div>
            <div class="col text-center">
              <div class="p-3">
                <img src={tracoptimized3.src}></img>
              </div>
            </div>
            <div class="col text-center">
              <div class="p-3">
                <img src={tracoptimized4.src}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OPTIMIZED  */}

      {/* START OUR TECH */}
      <section className="our-tech-sec common_margin_space">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-11 col-lg-5">
              <div className="commom-heading">
                <h2>
                  Our Tech Stack in
                  <br /> Trac91’s Success
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
                    <Image src={case_d_react1} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_ex} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_aws1} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_python} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_node1} alt="" className="w-100" />
                  </div>
                </div>

                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_html1} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col">
                  <div className="img-shadow">
                    <Image src={case_d_js1} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OUR TECH */}

      {/* START THE RESULT */}
      <section class="result-sec common_margin_space">
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
      <section className="common-contact common_margin_space mb-100">
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

export default Case_trac;
