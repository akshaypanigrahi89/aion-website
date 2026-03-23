import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section className="section" id="about" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="gradient-text">Your Growth Partners, Not Just an Agency.</h2>
          <p>We sit on the same side of the table as you.</p>
        </div>

        <div className="grid-3 mb-6">
          <div className="glass-card">
            <Target className="mb-1" size={32} color="var(--primary-accent)" />
            <h3>Democratizing AI</h3>
            <p>Our mission is to make enterprise-grade AI, automation, and marketing strategies accessible, affordable, and easy to understand for startups and MSMEs.</p>
          </div>
          <div className="glass-card">
            <Eye className="mb-1" size={32} color="var(--secondary-accent)" />
            <h3>Frictionless Work</h3>
            <p>We envision a world where founders and business owners can focus on what they do best, while our smart systems handle marketing and support.</p>
          </div>
          <div className="glass-card">
            <ShieldCheck className="mb-1" size={32} color="#10b981" />
            <h3>Results First</h3>
            <p>We measure our success by your operational efficiency and revenue growth. No corporate red tape. We launch, test, and iterate quickly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
