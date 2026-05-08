cat > app/components/Contact.jsx << 'ENDOFFILE'
'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = 'mailto:abdulazizzuhriddinov055@gmail.com?subject=Portfolio Contact from ' + form.name + '&body=' + form.message + '%0D%0A%0D%0AFrom: ' + form.email
  }

  return (
    <section id="contact" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'var(--light)',
          padding: '45px',
          borderRadius: '16px',
          border: '1px solid var(--border)'
        }}>
          <p style={{ textAlign: 'center', color: 'var(--secondary)', marginBottom: '35px', fontSize: '1.05rem' }}>
            Have a project in mind? Let&apos;s work together to make it happen.
          </p>
          <p style={{ textAlign: 'center', marginBottom: '25px' }}>
            Email: abdulazizzuhriddinov055@gmail.com<br/>
            Telegram: @zuhriddinov055
          </p>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--dark)' }}>
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  fontFamily: 'inherit'
                }}
                placeholder="Your name"
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--dark)' }}>
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
                placeholder="your@email.com"
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--dark)' }}>
                Message
              </label>
              <textarea
                required
                rows="5"
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                placeholder="Tell me about your project..."
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
ENDOFFILE