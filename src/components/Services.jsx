import { MessageSquare, Phone, BrainCircuit, Workflow, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit size={40} color="var(--primary-accent)" />,
    title: "Custom AI Solutions",
    desc: "We build AI tools custom-made for your specific business processes, from predictive analytics to document data extraction.",
    usecase: "Automatically categorize and extract data from 1,000+ monthly vendor invoices."
  },
  {
    icon: <MessageSquare size={40} color="var(--secondary-accent)" />,
    title: "Chatbot Development",
    desc: "Smart, conversational AI bots that qualify leads, book appointments, and answer tickets instantly on your website or WhatsApp.",
    usecase: "An eCommerce store recovering abandoned carts and answering sizing questions at 2 AM."
  },
  {
    icon: <Phone size={40} color="#f59e0b" />,
    title: "Voice AI Solutions",
    desc: "Human-sounding AI phone agents that can make outbound sales calls or handle inbound customer inquiries.",
    usecase: "Instantly call and qualify fresh leads from Facebook ads within 5 minutes."
  },
  {
    icon: <Workflow size={40} color="#10b981" />,
    title: "Business Automation",
    desc: "We connect your CRM, emails, and apps so they talk to each other without human intervention.",
    usecase: "Triggering a personalized email sequence and updating a Google Sheet the moment a payment is made."
  },
  {
    icon: <TrendingUp size={40} color="#f43f5e" />,
    title: "Digital Marketing",
    desc: "AI-enhanced SEO, paid ads, and content strategies designed to dramatically lower your Customer Acquisition Cost.",
    usecase: "Scaling a localized business from 10 to 50 leads per week using optimized search campaigns."
  }
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="gradient-text">Everything You Need to Scale, Automated.</h2>
          <p>Powerful yet accessible services designed to save you time and increase your bottom line.</p>
        </div>
        
        <div className="grid-3">
          {services.map((svc, i) => (
            <div className="glass-card" key={i}>
              <div className="mb-2">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p className="mb-2">{svc.desc}</p>
              <div style={{ background: 'var(--glass-bg)', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem' }}>
                <strong style={{ color: 'var(--text-color)' }}>Use Case:</strong> {svc.usecase}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
