function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>İletişim</h2>
        <p className="contact-subtitle">
          Bize ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>info@sirket.com</p>
              <p>destek@sirket.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <h3>Telefon</h3>
              <p>0555 555 55 55</p>
              <p>0212 444 44 44</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">🏢</div>
            <div className="contact-details">
              <h3>Adres</h3>
              <p>X Mahallesi, Y Sokak No:123</p>
              <p>İstanbul</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">⏰</div>
            <div className="contact-details">
              <h3>Çalışma Saatleri</h3>
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 10:00 - 16:00</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Bize Mesaj Gönderin</h3>
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Adresiniz"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Konu" className="form-input" />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Mesajınız"
                className="form-textarea"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Gönder
            </button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <h3>Harita</h3>
        <div className="map-placeholder">
          🗺️ Google Maps görünümü burada olacak
        </div>
      </div>
    </div>
  );
}

export default Contact;
