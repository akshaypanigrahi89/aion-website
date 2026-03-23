import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      
      <footer className="text-center" style={{ padding: '2rem 0', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} AION Digital Marketing & AI Agency. All rights reserved.</p>
      </footer>

      {/* Floating Chatbot Widget as requested */}
      <Chatbot />
    </>
  );
}

export default App;
