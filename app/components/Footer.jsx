export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark)',
      color: 'white',
      padding: '40px 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div style={{ marginTop: '15px', display: 'flex', gap: '25px', justifyContent: 'center' }}>
          <a href="#" style={{ color: 'var(--gray)', textDecoration: 'none', transition: 'color 0.3s' }}
             onMouseEnter={e => e.target.style.color = 'white'}
             onMouseLeave={e => e.target.style.color = 'var(--gray)'}>
            LinkedIn
          </a>
          <a href="#" style={{ color: 'var(--gray)', textDecoration: 'none', transition: 'color 0.3s' }}
             onMouseEnter={e => e.target.style.color = 'white'}
             onMouseLeave={e => e.target.style.color = 'var(--gray)'}>
            GitHub
          </a>
          <a href="#" style={{ color: 'var(--gray)', textDecoration: 'none', transition: 'color 0.3s' }}
             onMouseEnter={e => e.target.style.color = 'white'}
             onMouseLeave={e => e.target.style.color = 'var(--gray)'}>
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}