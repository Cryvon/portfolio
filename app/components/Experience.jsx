'use client'

export default function Experience() {
  const experiences = [
    {
      role: 'Programming Student',
      company: 'PDP School',
      period: '2025 - Present',
      description: 'Learning full-stack development with focus on backend technologies. Building projects using Java, React, HTML, CSS, and JavaScript. Developing real-world applications while completing 9th grade studies.'
    },
  ]

  return (
    <section id="experience" style={{ background: 'var(--light)' }}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '30px 35px',
              borderRadius: '12px',
              marginBottom: '25px',
              borderLeft: '4px solid var(--primary)',
              boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateX(10px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
            >
              <span style={{
                background: '#eff6ff',
                color: 'var(--primary)',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                {exp.period}
              </span>
              <h3 style={{ marginTop: '15px', fontSize: '1.3rem', color: 'var(--dark)' }}>{exp.role}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 500, marginBottom: '10px' }}>{exp.company}</p>
              <p style={{ color: 'var(--secondary)', lineHeight: 1.7 }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
