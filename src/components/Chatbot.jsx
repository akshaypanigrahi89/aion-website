import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Note: Storing API keys in Vite frontend is insecure for production.
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm AION's intelligent virtual assistant, powered by Google Gemini. How can I help you scale today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInput('');
    setIsLoading(true);

    if (!apiKey) {
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "⚠️ API Key is missing. Please add VITE_GEMINI_API_KEY to your .env file.", sender: 'bot' }]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: apiKey });
      
      // We pass the full conversation history to give the AI context.
      const historyText = messages.map(m => `${m.sender === 'bot' ? 'Assistant' : 'User'}: ${m.text}`).join('\n');
      const prompt = `You are an AI assistant for a digital marketing agency named AION. Keep responses concise, professional, and helpful.\n\nConversation so far:\n${historyText}\nUser: ${userMessage}\nAssistant:`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      setMessages(prev => [...prev, { 
        text: response.text || "I'm sorry, I couldn't understand that.", 
        sender: 'bot' 
      }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting to my AI brain right now.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Chatbot">
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      <div className={`glass chatbot-window ${isOpen ? '' : 'hidden'}`}>
        <div className="chatbot-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
            <strong style={{ color: 'white' }}>AION Support</strong>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} aria-label="Send">
            <Send size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
