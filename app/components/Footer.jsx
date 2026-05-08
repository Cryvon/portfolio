cat > app/components/Footer.jsx << 'ENDOFFILE'
'use client'

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
          © {new Date().getFullYear()} Abdulaziz Zuhriddinov. All rights reserved.
        </p>
        <div style={{ marginTop: '15px', display: 'flex', gap: '25px', justifyContent: 'center' }}>
          <a href="https://github.com/Cryvon" target="_blank" rel="noopener noreferrer" 
             style={{ color: 'var(--gray)', textDecoration: 'none', transition: 'color 0.3s' }}
             onMouseEnter={e => e.target.style.color = 'white'}
             onMouseLeave={e => e.target.style.color = 'var(--gray)'}>
            GitHub
          </a>
          <a href="https://t.me/zuhriddinov055" target="_blank" rel="noopener noreferrer" 
             style={{ color: 'var(--gray)', textDecoration: 'none', transition: 'color 0.3s' }}
             onMouseEnter={e => e.target.style.color = 'white'}
             onMouseLeave={e => e.target.style.color = 'var(--gray)'}>
            Telegram
          </a>
          <a href="mailto:abdulazizzuhriddinov055@gmail.com" 
             style={{ color: 'var(--gray)', textDecoration: 'none', transition: 'color 0.3s' }}
             onMouseEnter={e => e.target.style.color = 'white'}
             onMouseLeave={e => e.target.style.color = 'var(--gray)'}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
ENDOFFILE