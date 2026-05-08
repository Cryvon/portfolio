cat > app/components/Skills.jsx << 'EOF'
'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'Backend',
      skills: ['Java', 'Node.js']
    },
    {
      title: 'Currently Learning',
      skills: ['Next.js', 'Databases', 'APIs']
    },
  ]

  return (
    <section id="skills" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {skillCategories.map((cat, index) => (
            <div key={index} style={{
              background: 'var(--light)',
              padding: '35px',
              borderRadius: '14px',
              border: '1px solid var(--border)',
            }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '25px', color: 'var(--dark)' }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {cat.skills.map(skill => (
                  <span key={skill} style={{
                    background: 'white',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--dark)',
                    border: '1px solid var(--border)',
                    transition: 'all 0.3s',
                    cursor: 'default'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--primary)'
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.borderColor = 'var(--primary)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'white'
                    e.currentTarget.style.color = 'var(--dark)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
EOF