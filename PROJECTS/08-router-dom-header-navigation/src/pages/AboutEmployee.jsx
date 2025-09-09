function AboutEmployee() {
  return (
    <div className="employee-container">
      <div className="employee-header">
        <h2>Ekibimiz</h2>
        <p className="employee-subtitle">
          Deneyimli ve dinamik ekibimizle tanışın
        </p>
      </div>

      <div className="employee-grid">
        <div className="employee-card">
          <div className="employee-avatar">A</div>
          <div className="employee-info">
            <h3>Ahmet Yılmaz</h3>
            <p className="employee-role">Yazılım Geliştirici</p>
            <p className="employee-desc">
              10 yılı aşkın tecrübesiyle full-stack development konusunda uzman.
            </p>
            <div className="employee-contact">
              <span className="contact-item">📧 ahmet@firma.com</span>
              <span className="contact-item">📱 0555 123 45 67</span>
            </div>
          </div>
        </div>

        <div className="employee-card">
          <div className="employee-avatar">A</div>
          <div className="employee-info">
            <h3>Ayşe Demir</h3>
            <p className="employee-role">Tasarımcı</p>
            <p className="employee-desc">
              Kullanıcı deneyimi ve arayüz tasarımında sektörün önde gelen
              isimlerinden.
            </p>
            <div className="employee-contact">
              <span className="contact-item">📧 ayse@firma.com</span>
              <span className="contact-item">📱 0555 234 56 78</span>
            </div>
          </div>
        </div>
      </div>

      <div className="team-stats">
        <h3>Ekip İstatistiklerimiz</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Ortalama Deneyim</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Müşteri Memnuniyeti</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Tamamlanan Proje</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEmployee;
