import { ArrowRight, Bot, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section text-center" style={{ paddingTop: '8rem' }} id="home">
      <div className="container">
        <h1 className="mb-2">
          Scale Your Business with <br />
          <span className="gradient-text">Smart AI & Digital Growth</span>
        </h1>
        <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.25rem' }}>
          We help startups and MSMEs automate workflows, build intelligent AI solutions, and drive revenue—without the technical headache.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
          <a href="#contact" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Book a Free Discovery Call <ArrowRight size={20} />
          </a>
          <a href="#services" className="btn btn-secondary">
            Explore Our Solutions
          </a>
        </div>

        <div className="grid-3 text-left">
          <div className="glass-card">
            <Zap className="mb-1" size={32} color="var(--primary-accent)" />
            <h3>Tailored for Growth</h3>
            <p>Solutions built specifically for the unique challenges of startups and smaller businesses.</p>
          </div>
          <div className="glass-card">
            <Bot className="mb-1" size={32} color="var(--secondary-accent)" />
            <h3>Zero Jargon</h3>
            <p>We don't confuse you with technical speak; we focus purely on your ROI and business outcomes.</p>
          </div>
          <div className="glass-card">
            <svg className="mb-1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3>End-to-End Execution</h3>
            <p>From deploying your first chatbot to running your campaigns, we handle it all.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
