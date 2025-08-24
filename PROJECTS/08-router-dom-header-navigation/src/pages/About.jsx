import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Hakkımızda</h1>
        <p className="about-intro">
          Kuruluşumuzdan bu yana geçen sürede, sektörümüzde öncü ve güvenilir
          bir marka olmanın haklı gururunu yaşıyoruz.
        </p>
      </div>
      <nav className="about-nav">
        <Link to="company" className="about-link">
          <div className="link-content">
            <span className="link-icon">🏢</span>
            <span>Şirketimiz</span>
          </div>
        </Link>
        <Link to="employee" className="about-link">
          <div className="link-content">
            <span className="link-icon">👥</span>
            <span>Çalışanlarımız</span>
          </div>
        </Link>
      </nav>
      <hr className="content-divider" />
      <Outlet />
    </div>
  );
}

export default About;
