function AboutCompany() {
  return (
    <div className="company-container">
      <div className="company-header">
        <h2>Şirketimizin Hikayesi</h2>
        <p className="company-tagline">
          1998'den beri geleceği şekillendiriyoruz
        </p>
      </div>

      <div className="company-content">
        <div className="company-text">
          <p>
            1998 yılında kurulan şirketimiz, sektöründe öncü ve yenilikçi
            çözümler sunmayı hedefleyerek müşterilerine en kaliteli hizmeti
            verme misyonuyla yola çıktı. Bugün, 25 yılı aşkın tecrübemizle
            sektördeki lider konumumuzu güçlendirerek yolumuza devam ediyoruz.
          </p>

          <div className="company-values">
            <h3>Değerlerimiz</h3>
            <ul>
              <li>✅ Kaliteden asla ödün vermemek</li>
              <li>✅ Müşteri memnuniyetini ön planda tutmak</li>
              <li>✅ Sürekli gelişim ve yenilik</li>
              <li>✅ Çevreye ve topluma karşı sorumluluk</li>
            </ul>
          </div>
        </div>

        <div className="company-achievements">
          <h3>Başarılarımız</h3>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-text">
                Yılın En İnovatif Şirketi Ödülü 2022
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🌍</div>
              <div className="achievement-text">20+ Ülkede Hizmet</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">⭐</div>
              <div className="achievement-text">5/5 Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
