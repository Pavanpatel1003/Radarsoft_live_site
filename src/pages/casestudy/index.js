import { useRouter } from "next/router";
import Image from "next/image";
import case1 from "../../../public/assets/media/case/case1.png";
import case2 from "../../../public/assets/media/case/case2.png";
import case3 from "../../../public/assets/media/case/case3.png";
import case4 from "../../../public/assets/media/case/case4.png";
import casestudybanner from "../../../public/assets/media/case/casestudybanner.png";
import Link from "next/link";

const CaseStudy = () => {
  const router = useRouter();
  return (
    <>
      <section className="case-back-studies d-none">
        <div className="container">
          <div className="row">
            <div className="case-back-btn">
              <span className="me-2">
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              <Link href="/">Back to the homepage</Link>
            </div>
            <div className="case-studies-btn-main">
              <button className="case-studies-btn">Case Studies</button>
            </div>
          </div>
        </div>
      </section>

      {/* casestudy title section */}
      <section className="career-banner common_margin_space">
        <div className="container">
          <div className="career-banner-title">
            <div className="commom-heading">
              <h2>Our Work</h2>
              <p>
                Discover how we've helped businesses overcome challenges and
                achieve their goals. Our case studies showcase the innovative
                solutions and tangible results we've delivered for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* casestudy banner section */}
      <section className="common_margin_space">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={casestudybanner}
            alt="Career Banner"
          />
        </div>
      </section>

      <section className="case-studies-start common_margin_space">
        <div className="container">
          <div className="row">
            <div className="case-studies-flex">
              <div className="commom-heading">
                <h2>Case Studies</h2>
                <p>
                  Discover how we've helped businesses overcome challenges and
                  achieve
                  <br /> their goals. Our case studies showcase the innovative
                  solutions and
                  <br /> tangible results we've delivered for our clients.
                </p>
              </div>
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
      </section>

      <section className="case-blog mb-100">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 case-pad">
            <div className="col">
              <div className="">
                <div>
                  <img src={case3.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Hub for students & professionals to learn new skills -
                    Abhyan
                  </h4>
                  <Link className="case-read-more" href="/casestudy/abhyan/1">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div>
                  <img src={case4.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Shopping
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Trac91 is a a one-step solution for all online shopping
                    order tracking
                  </h4>
                  <Link className="case-read-more" href="/casestudy/trac/2">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col d-none">
              <div className="">
                <div>
                  <img src={case2.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Ecommerce
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Streamlining Employee Management with Fewer Manual Checks -
                    Bajaj Alliance
                  </h4>
                  <Link className="case-read-more" href="/casestudy/acad/2">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div>
                  <img src={case1.src} alt="" className="w-100" />
                </div>
                <div className="case-btn-set">
                  <Link className="case-edtech-btn" href="">
                    Edtech
                  </Link>
                  <Link className="case-mobile-btn" href="">
                    Mobile + Web
                  </Link>
                </div>
                <div className="case-card-head">
                  <h4>
                    Turn your dreams into reality with AcadSpace - Google Maps
                    for your career journey.
                  </h4>
                  <Link className="case-read-more" href="/casestudy/acad/2">
                    Read more&nbsp;
                    <span>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
