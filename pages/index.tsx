import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation/Navigation";
import useSwr from "swr";
import ReactGa from "react-ga";


interface indexProps {}

interface Ireply {
  id: number;
  name: string;
  userName: string;
  reply: string;
}

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const index: React.FC<indexProps> = ({}) => {
  const [speakerState, setSpeakerState] = useState("muted");
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const { data: reviews, error } = useSwr("/api/tweets", fetcher);

  if (error) console.log(error);

  const refScroll = React.useRef(null);


  React.useEffect(() => {
    ReactGa.initialize("UA-232867650-1");
    ReactGa.pageview(window.location.pathname + window.location.search);

   

   
    
   

    // image hover effect
    Array.from(document.querySelectorAll(".project-card__middle")).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll("img"));
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute("src"),
          image2: imgs[1].getAttribute("src"),
          displacementImage: el.dataset.displacement,
        });
      }
    );

    // header cursor
    const cursor = document.querySelector(".cursor");
    window.onmousemove = (e: any) => {
      cursor!.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    };

    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Shoaib %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  const handleSpeaker = () => {
    const audio = document.querySelector("#audioPlayer") as HTMLVideoElement;

    if (speakerState === "muted") {
      setSpeakerState("unmuted");
      audio.pause();
    } else {
      setSpeakerState("muted");
      audio.play();
    }
  };

  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        <Head>
          <link rel="icon" href="svg/favicon.svg" />
          <link href="https://shoaib.tk/" rel="canonical" />
          <meta name="theme-color" content="#10101A" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#10101A"
          />
          <title>Shoaib Khan 🚀 &mdash; Designer & Developer</title>
          <meta
            name="description"
            content="I'm a self-taught Designer & Developer and turning ideas into real life products is my profession."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Shoaib Khan 🚀 &mdash; Designer & Developer"
          />
          <meta property="og:url" content="https://shoaib.tk/" />
          <meta property="og:image" content="webp/preview-image.png" />
          <meta
            property="og:description"
            content="I'm a self-taught Designer & Developer and turning ideas into real life products is my profession."
          />
          <meta
            name="twitter:title"
            content="Shoaib Khan 🚀 &mdash; Designer & Developer"
          />
          <meta
            name="twitter:description"
            content="I'm a self-taught Designer & Developer and turning ideas into real life products is my profession."
          />
          <meta name="twitter:image" content="webp/preview-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://shoaib.tk/" />
        </Head>
        <audio loop id="audioPlayer" autoPlay style={{ display: "none" }}>
          <source src="sound/preloader.mp3" type="audio/mp3" />
        </audio>
        <motion.div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#menu-target"
          animate={{ top: "-100vh", transition: { ...transition, delay: 9 } }}
          className="preloader"
        >
          <div className="preloader__wrapper">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__left"
            >
              <img src="svg/adeola-logo-left.svg" alt="shoaib logo" />
            </motion.div>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__right"
            >
              <p className="preloader__text">TECH-SAVYY</p>
               <p className="preloader__text">STUDENT</p>
               <p className="preloader__text">FREELANCER</p>
              <p className="preloader__text">PROGRAMMER</p>
              <p className="preloader__text">WEB DEVELOPER</p>
              <p className="preloader__text">I AM</p>
              <p className="preloader__text">SHOAIB KHAN</p>
            </motion.div>
          </div>
        </motion.div>
        <div className="cursor"></div>
        <Navigation
          isOpen={isToggleOpen}
          toggleOpen={() => toggleBodyScroll(isToggleOpen)}
        />
        <div className="header-wrapper">
          <header className="header">
            <div className="header__hero">
              <div className="header__hero--heading">
                <span>turning</span> <span className="header__hero--heading-gradient">ideas</span> <span>into </span> <br />
                <span>real life </span>
                <span className="header__hero--heading-gradient">
                  products{" "}
                </span>
                <br />
                <span>is my profession.</span>
              </div>
              <a
                data-scroll-to
                className="header__hero--cta"
                href="#sectionProjects"
              >
                VIEW PROJECTS
              </a>
            </div>
          </header>
          <div className="header__footer">
            <div className="header__footer--left">
              <div className="speaker">
                <div
                  onClick={handleSpeaker}
                  className={`${"speaker__toggle"} ${
                    speakerState === "unmuted"
                      ? `${"speaker__toggle--anim"}`
                      : ``
                  }`}
                >
                  &nbsp;
                </div>
                <div className="speaker__muted">
                  <img src="svg/muted.svg" alt="muted icon" />
                </div>
                <div className="speaker__unmuted">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.599976"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect1-anim"
                    />
                    <rect
                      x="9"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect2-anim"
                    />
                    <rect
                      x="4.79999"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect3-anim"
                    />
                    {/* <rect
                      x="13.2"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect4-anim"
                    /> */}
                  </svg>
                </div>
              </div>
            </div>
           <div className="header__footer--right">
              <a href="https://github.com/shoaib-jamal" rel="noopener" target="_blank">
               <img src="svg/github.svg" />
              </a>
              <a href="https://www.linkedin.com/in/shoaib-jamal-web" rel="noopener" target="_blank">
                <img src="svg/linkedin.svg" />
              </a>
              <a href="https://www.instagram.com/shoaib_khan115" rel="noopener" target="_blank">
               <img src="svg/instagram.svg" />
              </a>
            </div>
          </div>
        </div>
        <main className="container">
          <p className="about-text">
            Hi there! 👋, my name is <b>Shoaib Khan</b> and I am a full stack developer and a software engineer,
            passionate about digital products that help people experience
            everyday life, not just endure it. I have completed many international commercial projects alone, and
            in my spare time I like to contribute to Open Source projects. I've been self-taught almost all web production languages and I believe that experience matters more than certification. 
            I have completed
            every tech-related work with success + client satisfaction and my portfolio shows the glimpse of the quality of my work.
          </p>
          <section id="sectionProjects" className="section-projects">
            <h1 className="heading-1">
              <span>Yes, I work hard </span> <small>💼</small>
            </h1>
            <p className="paragraph">
              My every project is unique and successful. Here are some of my featured works.
            </p>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  LARAVEL, VUE JS, SQL
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/alexxandria-1.webp" alt="alexxandria model" />
                <img src="webp/alexxandria-2.webp" alt="alexxandria logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="alexxandria-anim"
                  className="heading-2"
                >
                  QafExpress
                </h2>
                <a
                rel="noopener"
                  target="_blank"
                  href="https://qafexpress.com"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a href="https://www.instagram.com/qafexpress/">
                    <img src="svg/instagram.svg" alt="ig icon" />
                  </a>

                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">REACT JS, PHP, ANGULAR</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/pixelchef-1.webp" alt="pixelchef" />
                <img src="webp/pixelchef-2.webp" alt="pixelchef logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="pixelchef-anim"
                  className="heading-2"
                >
                  Shaino Italia
                </h2>
                <a
                rel="noopener"
                  target="_blank"
                  href="https://www.shainoitalia.com"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a href="https://www.instagram.com/shaino_italia/">
                    <img src="svg/instagram.svg" alt="ig icon" />
                  </a>
                  
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  NEXT JS, FIREBASE, PHP
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/verdanza1.png" alt="heatrow" />
                <img src="webp/verdanza2.png" alt="heatrow logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="heatrow-anim"
                  className="heading-2"
                >
                  Verdanza
                </h2>
                <a
                  href="https://verdanza.store"
                  rel="noopener"
                  target="_blank"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                
              </div>
            </div>


            
          </section>
          <section
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="section-reviews__bg"
            className="section-reviews"
          >
            <div className="section-reviews__top">
              <h1 className="heading-1">
                <span>Testimonials </span> <small>😊</small>
              </h1>
              <p className="paragraph paragraph__sub">
                What my clients are saying about my work
              </p>
            </div>
            <div className="section-reviews__bottom">
              <div className="section-reviews__bottom-wrapper review-card__anim1">
                {reviews?.data.map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div>
              <div className="section-reviews__bottom-wrapper review-card__anim2">
                {reviews?.data.sort().map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
           <section className="section-contact">
            <h1 className="heading-1">
              <span>What's next? </span> <small>🤙</small>
            </h1>
            <h2 className="section-contact__h2">
              Thanks for visiting my portfolio. My services include Graphics, Web Design, Software Development and any tech-related work. If you think I am a perfect fit, send me an
              <a
                href="mailto:hi@shoaib.tk"
                rel="noopener"
                target="_blank"
              >
                &nbsp; email 📧
              </a>
              .
            </h2>
          </section>
          <section className="section-socials">
            <h1 className="heading-1">
              <span>That's the end of my portfolio!</span> <small>👋</small>
            </h1>
            <p className="paragraph">Connect with me socially</p>
            <div className="section-socials--links">
              <a href="https://github.com/shoaib-jamal" rel="noopener" target="_blank">
                               <img src="svg/github.svg" />

              </a>
              <a href="https://www.linkedin.com/in/shoaib-jamal-web" rel="noopener" target="_blank">
                              <img src="svg/linkedin.svg" />

              </a>
              <a href="https://www.instagram.com/shoaib_khan115" rel="noopener" target="_blank">
                               <img src="svg/instagram.svg" />

              </a>
            </div>
          </section>
        </main>
       <footer className="footer">
           <p className="about-text">© 2022 Shoaib Khan. All rights reserved</p>
          <div className="footer__socials">
           
          </div>
        </footer>
      </div>
    </>
  );
};

export default index;
