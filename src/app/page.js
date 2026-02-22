import Image from "next/image";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div id="top">
      <nav className="top-nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-brand">Phone Thit Min Tun</a>
          <div className="nav-links">
            <a href="#what-i-am">About</a>
            <a href="#what-i-can">Skills</a>
            <a href="#growth">Career</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <header className="hero centered">
        <div className="container hero-layout">
          <div className="hero-right">
            <div className="photo-frame">
              <Image
                src="/profile.png"
                alt="Phone Thit Min Tun"
                width={1024}
                height={1536}
                sizes="(max-width: 980px) 188px, 230px"
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="hero-left">
            <h1 className="hero-name">Phone Thit Min Tun</h1>
            <p className="hero-role">C# developer and Data Analyst</p>
          </div>

          
        </div>
      </header>

      <main>
        <section id="what-i-am" className="section">
          <div className="container">
            <p className="section-label">What I am..</p>
            <h2>Software Developer</h2>
            <p className="section-text">
              I’m a software developer specializing in <strong>C#</strong> and the
              <strong> .NET ecosystem</strong>. My main focus is building
              <strong> ERP</strong> and <strong>Point of Sale</strong> solutions for
              small and medium businesses – from inventory and purchasing to
              invoicing and reporting.
            </p>
            <p className="section-text">
              I enjoy understanding real business workflows and turning them into
              clean, maintainable code. I care about performance, reliability,
              and a good user experience for the people who use the system every
              day.
            </p>
          </div>
        </section>

        <section id="what-i-can" className="section section-alt">
          <div className="container">
            <p className="section-label">What I can..</p>
            <h2>Technologies & skills</h2>

            <div className="tech-icons">
              <div className="tech-icon">
                <i className="devicon-csharp-plain"></i>
                <span>C#</span>
              </div>
              <div className="tech-icon">
                <i className="devicon-dotnetcore-plain"></i>
                <span>.NET / .NET Core</span>
              </div>
              <div className="tech-icon">
                <i className="devicon-html5-plain"></i>
                <span>HTML5</span>
              </div>
              <div className="tech-icon">
                <i className="devicon-css3-plain"></i>
                <span>CSS3</span>
              </div>
              <div className="tech-icon">
                <i className="devicon-javascript-plain"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech-icon">
                <i className="devicon-microsoftsqlserver-plain"></i>
                <span>SQL Server</span>
              </div>
              <div className="tech-icon">
                <i className="devicon-git-plain"></i>
                <span>Git</span>
              </div>
              <div className="tech-icon">
                <i className="devicon-github-original"></i>
                <span>GitHub</span>
              </div>
            </div>

            <div className="grid skills-grid">
              <div className="card">
                <h3 className="skill-group-title">Backend</h3>
                <ul>
                  <li>C#, .NET / .NET Core</li>
                  <li>ASP.NET MVC / Web API</li>
                  <li>Entity Framework, LINQ</li>
                  <li>REST API design</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="skill-group-title">Frontend</h3>
                <ul>
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>Responsive layouts for desktop/web apps</li>
                  <li>Razor pages / basic SPA</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="skill-group-title">Database</h3>
                <ul>
                  <li>Microsoft SQL Server</li>
                  <li>Schema design (ERP / POS)</li>
                  <li>Stored procedures & queries</li>
                  <li>Basic performance tuning</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="skill-group-title">Dev & Tools</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Debugging & troubleshooting</li>
                  <li>Basic CI/CD & deployment</li>
                  <li>Working with business users</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="growth" className="section">
          <div className="container">
            <p className="section-label">How I'v been growing..</p>
            <h2>Career path</h2>
            <div className="timeline milestones">
              <article className="timeline-item">
                <p className="timeline-date-pill">Nov 2025 - Present</p>
                <div className="timeline-content">
                  <h3>C# Developer</h3>
                  <p className="timeline-company">
                    <span className="logo-wrap">
                      <img src="/nekoconsulting-logo.png" alt="Neko Consulting Sagl" className="company-logo" />
                    </span>
                    <a href="https://nekoconsulting.com/" target="_blank" rel="noreferrer">
                      Neko Consulting Sagl
                    </a>
                  </p>
                  <a
                    href="https://nekoconsulting.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="company-website-btn"
                  >
                    Company Website
                  </a>
                  <p className="timeline-location">Remote</p>
                </div>
              </article>

              <article className="timeline-item">
                <p className="timeline-date-pill">Nov 2022 - Feb 2024</p>
                <div className="timeline-content">
                  <h3>Analyst Programmer</h3>
                  <p className="timeline-company">
                    <span className="logo-wrap logo-wrap-dark">
                      <img src="/kbzms-logo.png" alt="KBZMS General Insurance" className="company-logo" />
                    </span>
                    <a href="https://www.kbzms.com/" target="_blank" rel="noreferrer">
                      KBZMS General Insurance
                    </a>
                  </p>
                  <a
                    href="https://www.kbzms.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="company-website-btn"
                  >
                    Company Website
                  </a>
                  <p className="timeline-location">Yangon, Myanmar</p>
                </div>
              </article>

              <article className="timeline-item">
                <p className="timeline-date-pill">May 2020 - Oct 2022</p>
                <div className="timeline-content">
                  <h3>Channel Support</h3>
                  <p className="timeline-company">
                    <span className="logo-wrap">
                      <img src="/mab-logo.png" alt="Myanma Apex Bank" className="company-logo" />
                    </span>
                    <a href="https://www.mabbank.com/" target="_blank" rel="noreferrer">
                      Myanma Apex Bank
                    </a>
                  </p>
                  <a
                    href="https://www.mabbank.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="company-website-btn"
                  >
                    Company Website
                  </a>
                  <p className="timeline-location">Yangon, Myanmar</p>
                </div>
              </article>

              <article className="timeline-item">
                <p className="timeline-date-pill">Early Career</p>
                <div className="timeline-content">
                  <h3>Internship(IT)</h3>
                  <p className="timeline-company">
                    <span className="logo-wrap">
                      <img src="/huawei-logo.svg" alt="Huawei" className="company-logo" />
                    </span>
                    Huawei
                  </p>
                  <p className="timeline-location">Yangon,Myanmar</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="what-i-have" className="section section-alt">
          <div className="container">
            <p className="section-label">What I have..</p>
            <h2>Education & background</h2>

            <div className="what-i-have-layout">
              <div className="what-i-have-details">
                <h3>University of Computer Studies, Yangon, Myanmar</h3>
                <p className="degree">Bachelor Degree of Computer Science (2020)</p>
                <p className="section-text">
                  My computer science background gave me strong fundamentals in
                  algorithms, data structures, databases, and software
                  engineering – which I now apply to building real-world ERP and
                  POS solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="section-label">What I did..</p>
            <h2>Projects</h2>

            <div className="grid projects-grid">
              <article className="card project-card">
                <img
                  src="/erp-login.PNG"
                  alt="ERP login screen"
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                />
                <p className="project-type">Enterprise Resource Planning</p>
                <p>
                  A comprehensive, modular ERP solution designed to bridge the
                  gap between human resource management and operational sales
                  workflows.
                </p>
                <ul className="project-list">
                  <li>Human Capital Management (HCM).</li>
                  <li>CRM and Scheduling.</li>
                  <li>Financial & Contract Operations.</li>
                </ul>
                <p className="project-stack">
                  <strong>Stack:</strong> C#, .NET Blazor, JavaScript, CSS, Dev
                  express, SQL Server, Git
                </p>
                <p className="project-link">
                  <strong>Website:</strong>{" "}
                  <a href="https://sicurachiave.ch/" target="_blank" rel="noreferrer">
                    sicurachiave.ch
                  </a>
                </p>
              </article>

              <article className="card project-card">
                <img
                  src="/Possible-login.PNG"
                  alt="Possible POS login screen"
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                />
                <p className="project-type">Retail Shop/Restaurant POS</p>
                <p>
                  A sleek, mission-critical Point of Sale solution designed for
                  high-traffic retail environments.
                </p>
                <ul className="project-list">
                  <li>Inventory & Stock Control.</li>
                  <li>Analytics & Reporting.</li>
                  <li>Multi-Payment Processing.</li>
                  <li>Digital Receipts.</li>
                </ul>
                <p className="project-stack">
                  <strong>Stack:</strong> C#, .NET WPF, .Net Web Core API, SQL
                  Server, Git
                </p>
                <p className="project-link">
                  <strong>Website:</strong>{" "}
                  <a href="https://possible.ch/" target="_blank" rel="noreferrer">
                    possible.ch
                  </a>
                </p>
              </article>

              <article className="card project-card">
                <img
                  src="/gymerp-menu.PNG"
                  alt="Gym ERP menu screen"
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                />
                <p className="project-type">Gym ERP Project</p>
                <p>
                  A next-generation management platform designed for gym and
                  sports club owners to automate facility operations.
                </p>
                <ul className="project-list">
                  <li>Resource & Facility Management.</li>
                  <li>Member Booking Portal (Web-Integrated).</li>
                  <li>Smart Access Control.</li>
                </ul>
                <p className="project-stack">
                  <strong>Stack:</strong> C#, .NET, SQL Server
                </p>
                <p className="project-link">
                  <strong>Website:</strong>{" "}
                  <a href="https://gymerp.possible.ch/" target="_blank" rel="noreferrer">
                    gymerp.possible.ch
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container">
            <p className="section-label">Feel free to reach out</p>
            <h2>Contact</h2>

            <div className="contact-grid">
              <div>
                <p className="section-text">
                  Looking for a developer for your ERP / POS system or business
                  application? Feel free to contact me.
                </p>
                <ul className="contact-list">
                  <li>
                    <strong>Email:</strong>
                    <a href="mailto:phonethitmin.mm@gmail.com">phonethitmin.mm@gmail.com</a>
                  </li>
                  <li>
                    <strong>WhatsApp:</strong> +66 99 101 88 36
                  </li>
                </ul>
              </div>

              <div>
                <h3>Links</h3>
                <ul className="contact-list">
                  <li>
                    <strong>GitHub:</strong>
                    <a href="https://github.com/phonethit123" target="_blank" rel="noreferrer">
                      github.com/phonethit123
                    </a>
                  </li>
                  <li>
                    <strong>LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/phone-thit-min-tun/" target="_blank" rel="noreferrer">
                      linkedin.com/in/phone-thit-min-tun
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-content">
            <p>© {year} Phone Thit Min Tun. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}



