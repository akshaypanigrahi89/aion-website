import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section text-center" id="contact">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="gradient-text">Let’s Talk About Your Growth.</h2>
        <p className="mb-4">Leave your details below, and an AION strategist will be in touch within 24 hours.</p>

        <form className="glass-card text-left" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
            <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Work Email</label>
            <input type="email" placeholder="john@company.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Biggest Bottleneck</label>
            <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: '#1e293b', color: 'white' }}>
              <option>Need Leads</option>
              <option>Too Much Manual Work</option>
              <option>Need Customer Support AI</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Request Free Consultation</button>
        </form>

        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="mailto:hello@aion.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
            <Mail size={20} /> hello@aion.com
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
