// pages/index.js

import Head from 'next/head';
import '../styles/styles.css';  // Import your CSS file

export default function Home() {
  return (
     <>
  <meta charSet="utf-8" />
  <title>MADHU'S</title>
  <meta content="width=device-width,initial-scale=1" name="viewport" />
  <link href="style.css" rel="stylesheet" />
  <div className="navbar">
    <div className="navbar-left">
      <a href="#" className="logo">
        <img src="images/Logo.jpg" alt="" />
      </a>
    </div>
    <ul className="nav-links">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#services">Service</a>
      </li>
      <li>
        <a href="#process">Process</a>
      </li>
      <li>
        <a href="#testimonial">Testimonial</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#pricing">Pricing</a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
  <br />
  <br />
  <div className="home-section" id="home">
    <p style={{ fontSize: "medium" }}>MADHU'S TEMPLATE</p>
    <h1>
      Transform Your Business with
      <br /> Cutting-Edge Analytics Tools
    </h1>
    <p style={{ fontSize: "small" }}>
      Embrace our expertise to launch your campaign with confidence
      <br /> and achieve outstanding results.
      <br /> LET'S GO.
    </p>
    <a href="#" className="btn">
      Get Started Now
    </a>
  </div>
  <div className="custom-container">
    <div className="services">
      <div className="service">
        <div className="icon">📊</div>
        <h3>Analysis</h3>
        <p>
          Delivering exceptional brand experiences that leave a lasting
          impression.
        </p>
      </div>
      <div className="service">
        <div className="icon">🎯</div>
        <h3>Strategy</h3>
        <p>Building category-defining brand experiences with lasting impact.</p>
      </div>
      <div className="service">
        <div className="icon">🔍</div>
        <h3>Research</h3>
        <p>
          Fostering memorable brand experiences that leave a lasting impression.
        </p>
      </div>
    </div>
    <section id="services">
      <div>
        <div>
          <div>
            <div>
              <div className="services-container">
                <p style={{ textAlign: "center" }}>Services Provided</p>
                <h1 className="services-title">
                  Specializing in comprehensive creative services.
                </h1>
                <p className="services-subtitle">
                  We excel in blending digital, graphic, and dimensional
                  creativity to craft unparalleled brand experiences that
                  resonate with meaning and deliver exceptional value.
                </p>
                <div className="services-grid">
                  <div className="service-item">
                    <img src="images/Webdevloper.png" alt="Web Design" />
                    <h3>Web design</h3>
                    <p>
                      Failure to pursue pleasure with wisdom often results in
                      enduring consequences of great discomfort.
                    </p>
                  </div>
                  <div className="service-item">
                    <img src="images/Devlopment.png" alt="Development" />
                    <h3>Development</h3>
                    <p>
                      Given its widespread use as filler text for layouts,
                      readability is of utmost importance.
                    </p>
                  </div>
                  <div className="service-item">
                    <img src="images/Branding.png" alt="Branding" />
                    <h3>Branding</h3>
                    <p>
                      There are many variations of passages available, but the
                      majority alteration in some form.
                    </p>
                  </div>
                </div>
                <div className="services-grid">
                  <div className="service-item">
                    <img src="images/Customize.png" alt="Customize" />
                    <h3>Customize</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis, atque!.
                    </p>
                  </div>
                  <div className="service-item">
                    <img src="images/Quality.png" alt="quality" />
                    <h3>Quality</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In quos error sint at maiores omnis fugiat sed minus illo
                      odio
                    </p>
                  </div>
                  <div className="service-item">
                    <img src="images/Marketing.png" alt="marketing" />
                    <h3>Online Marketing</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis in enim consequuntur at non quas!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="agency-section">
        <div className="agency-info">
          <h3>ABOUT AGENCY</h3>
          <h2>"Premier Digital Agency Providing Business Solutions".</h2>
          <p>
            When a great idea emerges, part of my role is to circulate it, gauge
            reactions, and stimulate discussion around it.
          </p>
          <div className="progress-bar">
            <label>
              Web Design <span>80%</span>
            </label>
            <div className="progress">
              <div className="progress-inner web-design" />
            </div>
          </div>
          <div className="progress-bar">
            <label>
              Development <span>60%</span>
            </label>
            <div className="progress">
              <div className="progress-inner development" />
            </div>
          </div>
          <div className="progress-bar">
            <label>
              Branding <span>40%</span>
            </label>
            <div className="progress">
              <div className="progress-inner branding" />
            </div>
          </div>
          <div className="progress-bar">
            <label>
              Code <span>75%</span>
            </label>
            <div className="progress">
              <div className="progress-inner code" />
            </div>
          </div>
        </div>
        <div className="agency-image">
          <img src="images/Background4.jpg" alt="Person working" />
        </div>
      </div>
    </section>
    <br />
    <section id="process">
      <div className="process">
        <h2>Our Process</h2>
        <p>
          "We specialize in cultivating digital, graphic, and dimensional
          creativity to craft industry-leading brand experiences that resonate
          with purpose and deliver substantial value."
        </p>
        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h4>Concept</h4>
            <p>
              "In the realm of creativity, the concept is the spark of
              inspiration that ignites the journey toward realization. It's the
              blueprint of ideas, the seed from which innovation blooms."
            </p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h4>Plan</h4>
            <p>
              "In the planning stage, we meticulously strategize to align every
              detail for seamless execution, ensuring optimal success and
              effective implementation."
            </p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h4>Design</h4>
            <p>
              "In design, we blend creativity with strategic insight to deliver
              visually captivating solutions that resonate with your audience
              and elevate your brand's identity."
            </p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <h4>Development</h4>
            <p>
              "In development, we leverage advanced technologies to create
              scalable solutions that deliver reliable performance and meet
              business objectives effectively."
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <section className="achievements-section">
    <div className="achievements-content">
      <h2>Our Impactful Milestones</h2>
      <p>
        Over the years, our dedication to excellence and innovation has set us
        apart in the industry. We have continuously pushed boundaries and
        achieved remarkable milestones, influencing the landscape of technology
        and creativity.
      </p>
      <div className="achievements-stats">
        <div className="stat">
          <div className="stat-icon">🏆</div>
          <div className="stat-value">789</div>
          <div className="stat-label">Awards Earned</div>
        </div>
        <div className="stat">
          <div className="stat-icon">🌐</div>
          <div className="stat-value">35</div>
          <div className="stat-label">Global Partnerships</div>
        </div>
        <div className="stat">
          <div className="stat-icon">📈</div>
          <div className="stat-value">2,100+</div>
          <div className="stat-label">Clients Served</div>
        </div>
        <div className="stat">
          <div className="stat-icon">💡</div>
          <div className="stat-value">150+</div>
          <div className="stat-label">Innovative Solutions</div>
        </div>
      </div>
    </div>
    <div className="achievements-image">
      <img src="images/Background 3.jpg" alt="Team Meeting" />
    </div>
  </section>
  <section id="testimonial">
    <div className="carousel-section">
      <br />
      <br />
      <h2>Client Reviews</h2>
      <p>
        Explore what our clients have shared about their experiences working
        with us. We pride ourselves on delivering exceptional results and
        building strong relationships with our clients.
      </p>
      <br />
      <br />
      <div className="carousel-arrows">
        <div className="carousel-arrow" id="prev-review" disabled="">
          &lt;
        </div>
        <div className="carousel-arrow" id="next-review">
          &gt;
        </div>
      </div>
      <div className="carousel-images">
        <div className="carousel-image inactive" id="client-1">
          <img src="images/Comment1.jpg" alt="Client 1" />
        </div>
        <div className="carousel-image" id="client-2">
          <img src="images/Comment4.jpg" alt="Client 2" />
        </div>
        <div className="carousel-image inactive" id="client-3">
          <img src="images/Comment3.jpg" alt="Client 3" />
        </div>
      </div>
      <div className="carousel-review" id="review-text">
        "We are very pleased with the outcome of our collaboration. The team's
        professionalism and dedication have made this project a success. Their
        attention to detail and innovative solutions exceeded our expectations."
      </div>
      <div className="review-author" id="review-author">
        Sarah Johnson
      </div>
      <div className="review-author-title" id="review-author-title">
        Operations Manager
      </div>
    </div>
  </section>
  <section>
    <div className="team-container">
      <p style={{ textAlign: "center" }}>MEET OUR PROFESSIONALS</p>
      <h1 className="team-title">
        "Our team comprises talented individuals who bring exceptional skills
        and dedication to every project."
      </h1>
      <p className="team-subtitle">
        Our employees are extraordinary individuals who consistently exceed
        expectations with their dedication, creativity, and commitment to
        excellence.
      </p>
      <div className="team-grid">
        <div className="team-member">
          <img src="images/Devloper4.jpg" alt="Madhu" />
          <h3>Madhu</h3>
          <p>CEO &amp; Founder</p>
        </div>
        <div className="team-member">
          <img src="images/Devloper7.jpg" alt="Tyler Raymer" />
          <h3>Mahesh</h3>
          <p>Project Manager</p>
        </div>
        <div className="team-member">
          <img src="images/Devloper6.jpg" alt="Chris Lewis" />
          <h3>Chris Lewis</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="team-member">
          <img src="images/Devloper1.jpeg" alt="Juliana Waddell" />
          <h3>Juliana Waddell</h3>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
  </section>
  <section className="section" id="portfolio">
    <div className="portfolio-section">
      <h2>Our Works</h2>
      <p>
        We craft digital, graphic and dimensional thinking, to create category
        leading brand experiences that have meaning and add a value.
      </p>
      <br />
      <div className="filter">
        <button className="active">All</button>
        <button>Projects</button>
        <button>Designs</button>
        <button>Photographs</button>
        <button>Developments</button>
      </div>
      <div className="portfolio-items">
        <div className="item">
          <img src="images/Product3.jpg" alt="Work 1" />
        </div>
        <div className="item">
          <img src="images/Product1.jpg" alt="Work 2" />
        </div>
        <div className="item">
          <img src="images/Product2.jpg" alt="Work 3" />
        </div>
        <div className="item">
          <img src="images/Product4.jpg" alt="Work 1" />
        </div>
        <div className="item">
          <img src="images/Product5.jpg" alt="Work 2" />
        </div>
        <div className="item">
          <img src="images/Product6.jpg" alt="Work 3" />
        </div>
        <div className="item">
          <img src="images/Product7.jpg" alt="Work 3" />
        </div>
        <div className="item">
          <img src="images/Profuct8.jpg" alt="Work 1" />
        </div>
        <div className="item">
          <img src="images/Product9.jpg" alt="Work 3" />
        </div>
      </div>
    </div>
  </section>
  <section className="section bg-light" id="pricing">
    <div className="plans-container">
      <p style={{ textAlign: "center" }}>OFFERS</p>
      <h1 className="plans-title">
        Select the optimal plan that suits your needs best.
      </h1>
      <p className="plans-subtitle">
        Discover our diverse range of plans and offers designed to cater to your
        specific needs and maximize value.
      </p>
      <div className="plans-grid">
        <div className="plan-item">
          <h3>Classic</h3>
          <p className="price">$34.99</p>
          <p>Customized Plans</p>
          <p>Billing Report</p>
          <p>Access to Asana</p>
          <a className="button" href="#">
            Purchase Now
          </a>
        </div>
        <div className="plan-item">
          <h3>Popular</h3>
          <p className="price">$49.99</p>
          <p>Customized Plans</p>
          <p>Billing Report</p>
          <p>Access to Asana</p>
          <a className="button" href="#">
            Purchase Now
          </a>
        </div>
        <div className="plan-item">
          <h3>Ultimate</h3>
          <p className="price">$89.99</p>
          <p>Customized Plans</p>
          <p>Billing Report</p>
          <p>Access to Asana</p>
          <a className="button" href="#">
            Purchase Now
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="section" id="blog">
    <div className="page1-container">
      <br />
      <p style={{ textAlign: "center" }}>NEWS</p>
      <div className="page1-header">Latest Articles And News</div>
      <div className="page1-subheader">
        Stay updated with our latest articles and news, keeping you informed and
        inspired.
      </div>
      <div className="page1-articles">
        <div className="page1-article">
          <img src="images/News1.jpg" alt="Article 1" />
          <h3>How to be appreciated for your hard work as a developer</h3>
          <p>
            Being appreciated as a developer involves delivering quality work
            consistently, seeking feedback for improvement, communicating
            effectively about your contributions, collaborating well with
            others, and staying updated with industry trends.
          </p>
        </div>
        <div className="page1-article">
          <img src="images/News3.jpg" alt="Article 2" />
          <h3>Developers watch out for these burnout symptoms</h3>
          <p>
            Developers should watch for signs of burnout like decreased
            productivity, persistent fatigue, increased cynicism, and difficulty
            concentrating.
          </p>
        </div>
        <div className="page1-article">
          <img src="images/News5.jpg" alt="Article 3" />
          <h3>How designers and developers can collaborate better</h3>
          <p>
            Effective collaboration between designers and developers is fostered
            through clear communication, mutual respect for expertise, shared
            early-stage concepts, and regular alignment meetings.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="section" id="contact">
    <div className="page3-container">
      <p style={{ textAlign: "center" }}>CONTACT</p>
      <div className="page3-header">GET IN TOUCH</div>
      <div className="page3-subheader">
        "Reach out to discover how our website can meet your needs. We look
        forward to connecting with you!"
      </div>
      <div className="page3-contact-details">
        <div className="page3-contact-item">
          <h4>Main Office</h4>
          <p>MG Road</p>
          <p>Suryapet</p>
        </div>
        <div className="page3-contact-item">
          <h4>Phone &amp; Email</h4>
          <p>Phone: +91 9876543218</p>
          <p>Fax: +954-627-9727</p>
        </div>
        <div className="page3-contact-item">
          <h4>Contact</h4>
          <p>www.Madhu's.com</p>
          <p>Mexample@design.com</p>
        </div>
        <div className="page3-contact-item">
          <h4>Working Hours</h4>
          <p>Monday-Friday: 9:00-06:00</p>
          <p>Saturday-Sunday: WeekOff</p>
        </div>
      </div>
    </div>
    <div className="page2-container">
      <div className="page2-header">
        Become a part of MADHU'S business community today
      </div>
      <br />
      <div className="page2-subheader">
        Start working with MADHU'S that can provide everything you need to
        generate awareness, drive traffic, connect.
      </div>
      <br />
      <a href="#" className="page2-button">
        Get Started
      </a>
    </div>
    <div className="custom-form">
      <label htmlFor="name">Name* :</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" />
      <div className="row">
        <div style={{ flex: 1, marginRight: 10 }}>
          <label htmlFor="email">Email address* :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="phone">Phone number* :</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter your number"
          />
        </div>
      </div>
      <label htmlFor="comments">Comments :</label>
      <textarea
        id="comments"
        name="comments"
        placeholder="Leave a comment here"
        defaultValue={""}
      />
      <button type="submit">Send Message</button>
    </div>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img
              src="images/Logo.jpg"
              alt="Zoric Logo"
              style={{ height: 24 }}
            />
            <p>
              It is a long established fact that a reader will be of a page
              reader will be of at its layout.
            </p>
          </div>
          <div className="footer-social">
            <a href="#">
              <img
                src="images/Linkedin.png"
                alt="linkedin"
                style={{ height: 24 }}
              />
            </a>
            <a href="#">
              <img
                src="images/Facebook.png"
                alt="Facebook"
                style={{ height: 24 }}
              />
            </a>
            <a href="#">
              <img
                src="images/Whatsapp.png"
                alt="whatsapp"
                style={{ height: 24 }}
              />
            </a>
            <a href="#">
              <img
                src="images/Insta.png"
                alt="instagram"
                style={{ height: 24 }}
              />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Company History</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Term &amp; Service</a>
            </li>
            <li>
              <a href="#">Components</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Latest News</h3>
          <ul>
            <li>New study reveals breakthrough in renewable energy storage.</li>
            <li>
              Tech giant announces launch of next-generation smartphone lineup.
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        2024 © MADHU'S - Landing Page Template by
        <a href="" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          <i>MADHU</i>
        </a>
      </div>
    </footer>
  </section>
</>

  );
}
