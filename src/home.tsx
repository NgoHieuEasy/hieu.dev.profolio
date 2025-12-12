import { useState } from "react";
import LOGO from "./assets/logo.png";
import { PROJECT_EN, PROJECT_VN, YOURSELF_EN, YOURSELF_VN } from "./lang";
const Home = () => {
  const [lang, setLang] = useState("en");

  const projectData = lang === "vi" ? PROJECT_VN : PROJECT_EN;
  const yourSelfData = lang === "vi" ? YOURSELF_VN : YOURSELF_EN;
  return (
    <div>
      <div className="header">
        <div className="logo">Hieu.Dev</div>
        <div className="lang-switch">
          <button onClick={() => setLang("vi")}>VI</button>
          <button onClick={() => setLang("en")}>EN</button>
        </div>
      </div>

      <div className="hero">
        <div>
          <h1 id="title">
            {yourSelfData.title} <span>Hiếu(Lewis)</span>
          </h1>

          <p id="desc">{yourSelfData.desc}</p>
        </div>
      </div>
      <div className="section">
        <div className="section" id="projectSection">
          <div>
            {projectData.map((p) => (
              <section key={p.id} className="section">
                <h2>{p.projectTitle}</h2>

                <div className="project-showcase">
                  <div className="project-visual">
                    <div className="mockup">
                      <img src={p.screenshot} alt={p.metaTitle} />
                      <div className="ribbon">{p.ribbon}</div>
                    </div>

                    <div className="mini-cards">
                      <div className="mini-card">
                        <div className="mc-title">
                          {lang === "vi" ? "Thời gian" : "Duration"}
                        </div>
                        <div className="mc-value">{p.duration}</div>
                      </div>

                      <div className="mini-card">
                        <div className="mc-title">
                          {lang === "vi" ? "Vai trò" : "Role"}
                        </div>
                        <div className="mc-value">{p.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="project-meta">
                    <h3>{p.metaTitle}</h3>
                    <p>{p.summary}</p>

                    <div className="roles">
                      <div className="role-head">{p.roleTitle}</div>
                      <ul>
                        {p.roles.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="tech-and-action">
                      <div className="tech">
                        <div className="tech-head">{p.techTitle}</div>
                        <div className="badges">
                          {p?.tech?.map((t) => (
                            <span key={t} className="badge">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {p.link && (
                      <div className="actions">
                        <a
                          className="btn"
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {lang === "vi" ? "Xem website →" : "Visit website →"}
                        </a>
                      </div>
                    )}

                    {/* CASE STUDY */}
                    <div className="case-study">
                      <h4>{p.caseStudy.title}</h4>

                      <ol>
                        {p.caseStudy.list.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ol>

                      <div className="case-footer">
                        <div className="tag">{p.caseStudy.footer.duration}</div>

                        {p.caseStudy.footer.role && (
                          <div className="tag">{p.caseStudy.footer.role}</div>
                        )}

                        {p.caseStudy?.footer?.role && (
                          <div className="tag">{p.caseStudy.footer.role}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <section className="section tech-section">
            <h2 className="tech-title"> {yourSelfData.titleTech}</h2>
            <p className="tech-sub"> {yourSelfData.desTech}</p>

            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-header">Frontend</div>
                <ul>
                  <li>⚛️ ReactJS</li>
                  <li>🎨 Tailwind CSS</li>
                  <li>🟦 TypeScript</li>
                  <li>🧠 Zod Validation</li>
                  <li>📦 Zustand State</li>
                </ul>
              </div>

              <div className="tech-card">
                <div className="tech-header">Mobile App</div>
                <ul>
                  <li>📱 Flutter</li>
                  <li>🔥 Firebase</li>
                  <li>📦 Hive Storage</li>
                </ul>
              </div>

              <div className="tech-card glow">
                <div className="tech-header">Blockchain</div>
                <ul>
                  <li>⛓ Web3</li>
                  <li>👛 Wallet Connect</li>
                  <li>📈 CEX / DEX</li>
                  <li>💰 Deposit / Withdraw</li>
                </ul>
              </div>

              <div className="tech-card">
                <div className="tech-header">Dev Tools</div>
                <ul>
                  <li>🧑‍💻 Git / GitHub</li>
                  <li>🖥 Linux Server</li>
                  <li>📦 Docker</li>
                  <li>⚡ Vite</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="about-container">
              <div className="about-left">
                <div className="about-avatar">
                  <div className="avatar-ring"></div>
                  <img src={LOGO} alt="avatar" />
                </div>
              </div>

              <div className="about-right">
                <h2 className="about-title">
                  {lang === "vi" ? "Tổng Quan Bản Thân" : "Personal overview"}
                </h2>
                <p className="about-desc">{yourSelfData.yourSelf}</p>

                <div className="about-info-grid">
                  <div className="about-card">
                    <span className="about-icon">🎓</span>
                    <div>
                      <div className="about-label">
                        {" "}
                        {lang === "vi" ? "Trình độ" : "Qualifications"}
                      </div>
                      <div className="about-value">
                        {lang === "vi"
                          ? "Tốt nghiệp Công nghệ Thông tin"
                          : "Bachelor’s Degree in Information Technology"}
                      </div>
                    </div>
                  </div>

                  <div className="about-card glow-green">
                    <span className="about-icon">🏆</span>
                    <div>
                      <div className="about-label">
                        {lang === "vi" ? "Thành tích" : "Achievement"}
                      </div>
                      <div className="about-value">
                        {lang === "vi"
                          ? " Chứng chỉ NCKH Xuất sắc cấp Trường"
                          : "Outstanding Scientific Research Certificate (University Level)"}
                      </div>
                    </div>
                  </div>

                  <div className="about-card">
                    <span className="about-icon">📞</span>
                    <div>
                      <div className="about-label">
                        {lang === "vi" ? "Số điện thoại" : "Phone Number"}
                      </div>
                      <div className="about-value">
                        {lang === "vi" ? "0862 289 117" : "+84 86 2289 117"}
                      </div>
                    </div>
                  </div>

                  <div className="about-card">
                    <span className="about-icon">📧</span>
                    <div>
                      <div className="about-label">Email</div>
                      <div className="about-value">ngohieuez@gmail.com</div>
                    </div>
                  </div>

                  <div className="about-card glow-blue">
                    <span className="about-icon">🌎</span>
                    <div>
                      <div className="about-label">
                        {lang === "vi" ? "Tiếng Anh" : "English"}
                      </div>
                      <div className="about-value">Nghe – Nói – Đọc – Viết</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer>
          © 2025 Hiếu | Frontend Developer | ReactJS • E-commerce • Blockchain
        </footer>
      </div>
    </div>
  );
};

export default Home;
