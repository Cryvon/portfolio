'use client'
export default function Experience() {
  const experiences = [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Corp Inc.',
      period: '2022 - Present',
      description: 'Lead a team of 5 engineers, architecting and implementing microservices that handle 1M+ requests daily. Reduced infrastructure costs by 40%.'
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client-facing applications using React and Node.js. Improved application performance by 60%.'
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2018 - 2020',
      description: 'Developed features for the companys SaaS platform. Collaborated with design and product teams to deliver quarterly roadmap items.'
    },
  ]

  return (
    <section id="experience" style={{ background: 'var(--light)' }}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
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