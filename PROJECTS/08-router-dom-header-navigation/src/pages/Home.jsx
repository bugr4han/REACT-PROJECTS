function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Hoş Geldiniz</h1>
        <p className="hero-subtitle">
          Web sitemizde keşfedilecek birçok şey var. Hadi başlayalım!
        </p>
        <button className="cta-button">Keşfet</button>
      </div>

      <div className="features-section">
        <h2>Neler Sunuyoruz?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Modern Tasarım</h3>
            <p>Kullanıcı dostu ve çağdaş arayüzlerle oluşturulmuş sayfalar.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Hızlı Erişim</h3>
            <p>İhtiyacınız olan bilgilere kolay ve hızlı şekilde ulaşın.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Kolay Gezinme</h3>
            <p>
              Menü yapısı sayesinde istediğiniz sayfaya kolayca gidebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
