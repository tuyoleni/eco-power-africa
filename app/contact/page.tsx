'use client';

import { useState } from 'react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="container mx-auto relative w-full bg-white py-20">
      {/* Header */}
      <div className="px-4 md:px-8 mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#003366]">
          Contact Us
        </h2>
        <p className="text-[#003366]/70 mt-6 max-w-3xl">
          Get in touch with us to learn more about our sustainable energy solutions and how we can help power your future.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-24">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2 mb-2">
                  <User className="w-4 h-4" />
                  Your Name
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-[#003366]/20 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] bg-white/50"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-[#003366]/20 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] bg-white/50"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <span className="text-sm font-medium text-[#003366]/50 flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </span>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 rounded-lg border border-[#003366]/20 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] bg-white/50"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-4 px-6 rounded-lg hover:bg-[#003366]/90 flex items-center justify-center gap-2 font-medium"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-[#003366] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2">Office Location</p>
                <p className="text-sm leading-relaxed text-white/80">
                  Windhoek, Namibia
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">Email Us</p>
                <p className="text-sm leading-relaxed text-white/80">
                  info@ecopowerafrica.com
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">Business Hours</p>
                <p className="text-sm leading-relaxed text-white/80">
                  Monday - Friday: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
