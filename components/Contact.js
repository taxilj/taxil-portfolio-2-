'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [isSending, setIsSending] = useState(false);

  // Fixed list — NEVER modify this array
  const services = [
    "AI Chatbot Integration",
    "AI Workflow & Automation",
    "Website Redesign",
    "New Website Development",
    "Next.js Development", 
    "WordPress Development",
    "Maintenance & Support",
    "Branding"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      company: form.company,
      services: selectedServices.join(", ")
    };

    try {
      await emailjs.send(
        'service_2fh53td',
        'template_bphwfjg',
        templateParams,
        'UZ_5vj7TcOTxs9UVf'
      );
      
      setForm({ name: '', email: '', company: '' });
      setSelectedServices([]);
      alert("Message sent successfully!");
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-header reveal-up" data-reveal="" data-delay="0">
        <h2 className="contact-title">
          <span className="text-outline">Let&apos;s Build</span> Something Great
          <span className="contact-arrow-wrap">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path d="M0 10h50M45 4l8 6-8 6" stroke="black" strokeWidth="2" />
            </svg>
          </span>
          <strong>Together</strong>
        </h2>
        <p className="contact-subtitle">Have a project in mind? Let&apos;s discuss and bring it to life.</p>
      </div>

      <form ref={formRef} className="contact-form reveal-up" data-reveal="" data-delay="200" onSubmit={handleSubmit} aria-label="Contact form">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Name.*</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Hello.." 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email.*</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="Where can I reply" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div className="form-group full">
          <label className="form-label">Company name</label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Your company or website?" 
            name="company" 
            value={form.company} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group full">
          <label className="form-label">What&apos;s in your mind?*</label>
          <div className="chip-list reveal-up" data-reveal="" data-delay="200">
            {services.map((service, i) => (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`service-tag ${
                  selectedServices.includes(service) ? "active" : ""
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        <div className="form-bottom">
          <button type="submit" className="btn-send" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Me'}
        </button>
          <svg className="send-squiggle" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M5 25C10 15 15 20 15 10C15 5 20 2 25 5" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 2l4 3-5 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="form-note">I&apos;ll get back to you within 24 hours</p>
      </form>
    </section>
  )
}
