import Head from "next/head";
import Image from "next/image";
import aboutImg from "../../../public/assets/media/about-bannner.png";
import office from "../../../public/assets/media/office-image.png";
import dedication from "../../../public/assets/media/dedication.png";
import code from "../../../public/assets/media/code-management.png";
import skills from "../../../public/assets/media/skills.png";
import database from "../../../public/assets/media/database.png";
import lindIn from "../../../public/assets/logo/lindIn.png";
import team1 from "../../../public/assets/media/team-1.png";
import listIcon from "../../../public/assets/logo/list-icon.png";
import core1 from "../../../public/assets/media/core1.png";
import core2 from "../../../public/assets/media/core2.png";
import CEO from "../../../public/assets/media/CEO.png";
import mobileBanner from "../../../public/assets/media/about-mobile-banner.png";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      {/* about title section */}
      <section className="about-banner">
        <div className="container py-4">
          <div className="mt-4 about-banner-title">
            <div className="">
              <p className="about-heading">Our Journey Over the Years</p>
              <p className="about-sub-heading">
                Learn about our journey, values, and dedication to shaping the
                future.
              </p>
            </div>
            <div className="" style={{ width: "200px" }}>
              <button
                className="unique-area-button w-full"
                onClick={() => router.push("/contact")}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* about banner section */}
      <section className="py-4">
        <div className="w-100">
          <Image
            src={mobileBanner}
            className="w-100 h-auto d-lg-none d-block"
            alt=""
          />
          <Image className="w-100 d-lg-block d-none" src={aboutImg} alt="" />
        </div>
      </section>

      {/* journey section */}
      <section className="about-journey-area col-md-12">
        <div className="container">
          <div className="row justify-content-between">
            <div className="about-journey-left-side py-xl-4 col-lg-6 col-md-12 col-12">
              <h1 className="about-journey-left-heading">
                Journey to RadarSoft
              </h1>
              <hr className="mt-0" />
              <p className="about-journey-left-paragraph m-0">
                At RadarSoft, we’re proud of our 5+ years of experience in the
                industry. Over the years, we’ve always focused on keeping
                systems running smoothly and efficiently by paying close
                attention to every detail. Our dedication to innovation is clear
                through our use of Advanced Technology.
              </p>
              <p className="about-center-heading">Leading with Innovation</p>
              <hr className="mt-0" />
              <p>
                At RadarSoft, Our focus on innovation ensures that our systems
                are not only advanced but also secure and efficient. We listen
                to our customers' needs and provide solutions that are reliable
                and scalable. Our team constantly learns and improves, making
                sure we stay ahead in the tech industry. At RadarSoft, we grow
                together by sharing ideas and working as a team.
              </p>
              <div className="d-flex justify-content-between year-title">
                <div className="px-lg-3 py-lg-2 px-2 py-1">2019</div>{" "}
                <div className="px-lg-3 py-lg-2 px-2 py-1">2020</div>{" "}
                <div className="px-lg-3 py-lg-2 px-2 py-1">2021</div>{" "}
                <div className="px-lg-3 py-lg-2 px-2 py-1">2022</div>
                <div className="px-lg-3 py-lg-2 px-2 py-1">2023</div>
                <div className="px-lg-3 py-lg-2 px-2 py-1">2024</div>
              </div>
            </div>
            <div className="about-journey-right-side col-lg-6 col-md-12 col-12">
              <Image
                className="about-journey-image img-journey-fluid w-100"
                src={office}
                alt="frr"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!--about journey closed--> */}

      {/* Dedication section */}
      <section className="dedication-area col-md-12">
        <div className="container">
          <div className="px-lg-0 px-3">
            <p className="dedication-title">
              Dedication to <br /> constant growth
            </p>
            <p className="dedication-para">
              Continuously evolving to meet new challenges and exceed
              expectations, we <br />
              are committed to advancing knowledge, refining skills, and
              embracing <br />
              innovation at every opportunity.
            </p>
            <div className="dedication-img d-none d-lg-block">
              <Image src={dedication} alt="" />
            </div>
          </div>
          <div className="row px-lg-0 px-3">
            <div className="col-lg-3 col-md-6 my-lg-0 my-3 col-12">
              <div className="dedication-boxe-1 d-flex flex-column align-items-center justify-content-center text-center">
                <h1>100+</h1>
                <h6>WORLDWIDE CLIENTS</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="dedication-boxe-2 d-flex flex-column align-items-center justify-content-center text-center">
                <h1>120+</h1>
                <h6>SUCCESFUL PROJECTS</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="dedication-boxe-3 d-flex flex-column align-items-center justify-content-center text-center">
                <h1>5+</h1>
                <h6>YEARS OF INDSUTRY EXPERIENCE</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="dedication-boxe-4 d-flex flex-column align-items-center justify-content-center text-center">
                <h1>20+</h1>
                <h6>INDUSTRY MENTORS</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Dedication section--> */}

      {/* core values section */}
      <section className="core-values-area col-md-12">
        <div className="container">
          <div className="row justify-content-between core-values-row">
            <div className="about-journey-left-side py-4 col-lg-5 col-12">
              <h1 className="about-journey-left-heading">Our core values</h1>
              <p className="about-journey-left-paragraph m-0">
                At RadarSoft, we believe in giving back to our community and
                supporting everyone's mental health. We are dedicated to making
                a positive impact both inside and outside the company. By
                forming a supportive and inclusive environment, we ensure that
                our team members feel valued and motivated.
              </p>
              <div className="d-flex flex-column mt-3 gap-2">
                <div className="py-2 d-flex gap-3 align-items-center">
                  <div>
                    <Image src={listIcon} alt="list" />
                  </div>
                  <p className="mb-0">
                    We believe in giving back and making a positive impact in
                    our community.
                  </p>
                </div>

                <div className="py-2 d-flex gap-3 align-items-center">
                  <div>
                    <Image src={listIcon} alt="list" />
                  </div>
                  <p className="mb-0">
                    We prioritize the mental well-being of our team members.
                  </p>
                </div>

                <div className="py-2 d-flex gap-3 align-items-center">
                  <div>
                    <Image src={listIcon} alt="list" />
                  </div>
                  <p className="mb-0">
                    We foster a supportive and inclusive work environment.
                  </p>
                </div>
                <div className="py-2 d-flex gap-3 align-items-center">
                  <div>
                    <Image src={listIcon} alt="list" />
                  </div>
                  <p className="mb-0">
                    We believe in shared success & healthy team drive innovation
                    and success.
                  </p>
                </div>
                <div className="py-2 d-flex gap-3 align-items-center">
                  <div>
                    <Image src={listIcon} alt="list" />
                  </div>
                  <p className="mb-0">
                    Every team member is valued and appreciated.
                  </p>
                </div>
              </div>
            </div>
            <div className="core-value-right-side col-lg-6 col-12">
              <div className="core-value-img-1">
                <Image className="img-core-1" src={core2} alt="frr" />
              </div>
              <div className="core-value-img-2">
                <Image className="img-core-2" src={core1} alt="frr" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--core values closed--> */}

      {/* claim section start  */}
      <section className="claim-area">
        <div className="container">
          <div className="row">
            <div className="mb-md-5 mb-3">
              <h1 className="claim-area-upper-side-heading m-0">
                How we claim to excel
              </h1>
              <p className="claim-area-upper-side-paragraph mt-2 mb-0">
                We have a team of experts writing top-notch blogs about how we
                excel in our field.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 my-lg-0 my-3">
              <div className="claim-boxe-1">
                <Image className="service img-fluid" src={code} alt="ewf" />
                <h6>Code management system</h6>
                <p>Our technical experts have a flair for developing.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-lg-0 my-3">
              <div className="claim-boxe-2">
                <Image className="service img-fluid" src={database} alt="ewf" />
                <h6>Efficient database management</h6>
                <p>Our technical experts have a flair for developing.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-lg-0 my-3">
              <div className="claim-boxe-3">
                <Image className="service img-fluid" src={skills} alt="ewf" />
                <h6>Multi-skilled professionals</h6>
                <p>Our technical experts have a flair for developing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* claim section end */}

      {/* team section start  */}
      {/* <section className="team-area">
        <div className="container">
          <div className="row">
            <div className="mb-md-5 mb-3">
              <h1 className="team-area-upper-side-heading m-0">Team</h1>
              <p className="team-area-upper-side-paragraph mt-2 mb-0">
                Our beloved team members
              </p>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="team-boxe-1">
                <Image className="service img-fluid" src={CEO} alt="ewf" />
                <div className="px-3 border py-3 team-title-heading  align-items-center">
                  <div className="team-sub-headding w-80">
                    <h6>Jeet vithalani</h6>
                    <p>CEO & Director</p>
                  </div>
                  <div className="w-20 d-flex justify-content-end">
                    <Image src={lindIn} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="team-boxe-1">
                <Image className="service img-fluid" src={team1} alt="ewf" />
                <div className="px-3 border py-3 team-title-heading  align-items-center">
                  <div className="team-sub-headding w-80">
                    <h6>Jeet vithalani</h6>
                    <p>CEO & Director</p>
                  </div>
                  <div className="w-20 d-flex justify-content-end">
                    <Image src={lindIn} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="team-boxe-1">
                <Image className="service img-fluid" src={team1} alt="ewf" />
                <div className="px-3 border py-3 team-title-heading  align-items-center">
                  <div className="team-sub-headding w-80">
                    <h6>Jeet vithalani</h6>
                    <p>CEO & Director</p>
                  </div>
                  <div className="w-20 d-flex justify-content-end">
                    <Image src={lindIn} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="team-boxe-1">
                <Image className="service img-fluid" src={team1} alt="ewf" />
                <div className="px-3 border py-3 team-title-heading  align-items-center">
                  <div className="team-sub-headding w-80">
                    <h6>Jeet vithalani</h6>
                    <p>CEO & Director</p>
                  </div>
                  <div className="w-20 d-flex justify-content-end">
                    <Image src={lindIn} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-lg-4">
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="team-boxe-1">
                <Image className="service img-fluid" src={CEO} alt="ewf" />
                <div className="px-3 border py-3 team-title-heading  align-items-center">
                  <div className="team-sub-headding w-80">
                    <h6>Jeet vithalani</h6>
                    <p>CEO & Director</p>
                  </div>
                  <div className="w-20 d-flex justify-content-end">
                    <Image src={lindIn} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="team-boxe-1">
                <Image className="service img-fluid" src={team1} alt="ewf" />
                <div className="px-3 border py-3 team-title-heading  align-items-center">
                  <div className="team-sub-headding w-80">
                    <h6>Jeet vithalani</h6>
                    <p>CEO & Director</p>
                  </div>
                  <div className="w-20 d-flex justify-content-end">
                    <Image src={lindIn} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="team-boxe-1">
                <Image className="service img-fluid" src={team1} alt="ewf" />
                <div className="px-3 border py-3 team-title-heading  align-items-center">
                  <div className="team-sub-headding w-80">
                    <h6>Jeet vithalani</h6>
                    <p>CEO & Director</p>
                  </div>
                  <div className="w-20 d-flex justify-content-end">
                    <Image src={lindIn} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 my-lg-0 my-3">
              <div className="team-boxe-1">
                <Image className="service img-fluid" src={team1} alt="ewf" />
                <div className="px-3 border py-3 team-title-heading  align-items-center">
                  <div className="team-sub-headding w-80">
                    <h6>Jeet vithalani</h6>
                    <p>CEO & Director</p>
                  </div>
                  <div className="w-20 d-flex justify-content-end">
                    <Image src={lindIn} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* team section end */}
    </>
  );
};

export default About;
