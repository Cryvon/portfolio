import Image from 'next/image'

export default function About() {
  return (
    <section id="about" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            height: '400px',
            background: 'linear-gradient(135deg, #e0e7ff, #dbeafe)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '5rem'
          }}>
            🧑‍💻
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--dark)' }}>
              A dedicated professional with a passion for excellence
            </h3>
            <p style={{ color: 'var(--secondary)', marginBottom: '20px', lineHeight: 1.8, fontSize: '1.05rem' }}>
              With over 8 years in the tech industry, I've led teams and built products 
              that serve millions of users. My approach combines strategic thinking with 
              hands-on technical expertise to deliver results that matter.
            </p>
            <p style={{ color: 'var(--secondary)', marginBottom: '30px', lineHeight: 1.8, fontSize: '1.05rem' }}>
              When I'm not coding, you'll find me mentoring junior developers, 
              contributing to open-source projects, or staying updated with the latest tech trends.
            </p>
            <div style={{ display: 'flex', gap: '40px' }}>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 700 }}>50+</h4>
                <p style={{ color: 'var(--secondary)' }}>Projects Delivered</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 700 }}>30+</h4>
                <p style={{ color: 'var(--secondary)' }}>Happy Clients</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 700 }}>8+</h4>
                <p style={{ color: 'var(--secondary)' }}>Years Exp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}