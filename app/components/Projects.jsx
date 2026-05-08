'use client'

export default function Projects() {
  const projects = [
    {
      title: 'Customer Control',
      description: 'A customer management app where you can select a time slot and view customer details like name, phone number, and Telegram username.',
      tech: ['React', 'Java', 'HTML', 'CSS', 'JavaScript'],
      color: '#2563eb'
    },
  ]

  return (
    <section id="projects" style={{ background: 'var(--light)' }}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)'
            }}
            >
              <div style={{
                height: '180px',
                background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem'
              }}>
                🚀
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ color: 'var(--secondary)', marginBottom: '20px', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tech.map(tech => (
                    <span key={tech} style={{
                      background: '#f1f5f9',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--secondary)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
