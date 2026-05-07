export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      paddingTop: '80px'
    }}>
      <div className="container">
        <div style={{ maxWidth: '700px' }}>
          <p style={{ color: '#60a5fa', fontWeight: 600, marginBottom: '15px', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Hello, I'm
          </p>
          <h1 style={{ fontSize: '3.8rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
            Your Full Name
          </h1>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 400, color: '#94a3b8', marginBottom: '25px' }}>
            Senior Software Engineer & Tech Lead
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', marginBottom: '40px', lineHeight: 1.8, maxWidth: '550px' }}>
            Building scalable solutions with 8+ years of experience in full-stack development. 
            Passionate about clean architecture and delivering business value through technology.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}