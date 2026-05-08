cat > app/components/About.jsx << 'EOF'
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
              Young developer with big ambitions
            </h3>
            <p style={{ color: 'var(--secondary)', marginBottom: '20px', lineHeight: 1.8, fontSize: '1.05rem' }}>
              I'm Abdulaziz, a 15-year-old backend developer from Uzbekistan. 
              I'm currently in 9th grade at PDP School, where I'm learning programming 
              and building real projects.
            </p>
            <p style={{ color: 'var(--secondary)', marginBottom: '30px', lineHeight: 1.8, fontSize: '1.05rem' }}>
              Even though I've only been coding for 6 months, I've already built working applications 
              using React, Java, HTML, CSS, and JavaScript. I love solving problems and 
              learning new technologies every day.
            </p>
            <div style={{ display: 'flex', gap: '40px' }}>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 700 }}>6</h4>
                <p style={{ color: 'var(--secondary)' }}>Months Coding</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 700 }}>15</h4>
                <p style={{ color: 'var(--secondary)' }}>Years Old</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 700 }}>9th</h4>
                <p style={{ color: 'var(--secondary)' }}>Grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
EOF