import React from 'react';

export default function Navbar() {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px', color: '#fff' }}>
          AION<span style={{ color: 'var(--primary-accent)' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#home" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500 }}>Home</a>
          <a href="#services" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500 }}>Services</a>
          <a href="#about" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500 }}>About</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Get Started</a>
        </div>
      </div>
    </nav>
  );
}
