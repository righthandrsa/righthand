'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>

      {/* Header band */}
      <div style={{backgroundColor: '#1a5ea5', padding: '56px 0 48px'}}>
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color: 'rgba(255,255,255,0.65)'}}>RightHand</p>
          <h1 className="text-4xl font-bold mb-4" style={{color: '#ffffff'}}>Get in touch</h1>
          <p className="text-lg" style={{color: 'rgba(255,255,255,0.75)'}}>Questions, feedback, or contributor enquiries. We would love to hear from you.</p>
        </div>
      </div>

      {/* Body */}
      <div style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="grid gap-16" style={{gridTemplateColumns: '1fr 1fr', alignItems: 'start'}}>

            {/* Left: form */}
            <div>
              {status === 'sent' ? (
                <div className="rounded-2xl p-8 text-center" style={{backgroundColor: '#E1F5EE', border: '1px solid #0F6E56'}}>
                  <div className="text-3xl mb-4">✓</div>
                  <h2 className="text-xl font-bold mb-2" style={{color: '#0F6E56'}}>Message sent</h2>
                  <p className="text-sm" style={{color: '#374151'}}>Thank you for reaching out. We will get back to you as soon as possible.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 rounded-lg text-sm font-semibold"
                    style={{backgroundColor: '#1a5ea5', color: '#ffffff'}}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{color: '#1a2340'}}>Your name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Thandi Mthembu"
                      className="w-full px-4 py-3 rounded-lg text-sm"
                      style={{border: '1px solid #c5d8ef', backgroundColor: '#f0f5fc', color: '#1a2340', outline: 'none'}}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{color: '#1a2340'}}>Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="thandi@example.com"
                      className="w-full px-4 py-3 rounded-lg text-sm"
                      style={{border: '1px solid #c5d8ef', backgroundColor: '#f0f5fc', color: '#1a2340', outline: 'none'}}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{color: '#1a2340'}}>Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm"
                      style={{border: '1px solid #c5d8ef', backgroundColor: '#f0f5fc', color: '#1a2340', outline: 'none'}}
                    >
                      <option value="">Select a subject</option>
                      <option value="General enquiry">General enquiry</option>
                      <option value="Contributor enquiry">Contributor enquiry</option>
                      <option value="Subscription question">Subscription question</option>
                      <option value="Content feedback">Content feedback</option>
                      <option value="Technical issue">Technical issue</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{color: '#1a2340'}}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what is on your mind..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg text-sm"
                      style={{border: '1px solid #c5d8ef', backgroundColor: '#f0f5fc', color: '#1a2340', outline: 'none', resize: 'vertical'}}
                    />
                  </div>
                  {status === 'error' && (
                    <div className="rounded-lg p-4 text-sm" style={{backgroundColor: '#FBEAF0', border: '1px solid #993556', color: '#993556'}}>
                      Something went wrong. Please try again or email us directly at info@righthand.org.za
                    </div>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={status === 'sending'}
                    className="w-full py-3 rounded-lg font-semibold text-sm"
                    style={{backgroundColor: status === 'sending' ? '#8fa8cc' : '#1a5ea5', color: '#ffffff', cursor: status === 'sending' ? 'not-allowed' : 'pointer'}}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </button>
                </div>
              )}
            </div>

            {/* Right: info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4" style={{color: '#1a2340'}}>Other ways to reach us</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl" style={{border: '1px solid #e2e8f0'}}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm" style={{backgroundColor: '#e8f0fa', color: '#1a5ea5'}}>@</div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{color: '#1a2340'}}>Email</p>
                      <a href="mailto:info@righthand.org.za" className="text-sm" style={{color: '#1a5ea5'}}>info@righthand.org.za</a>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl" style={{border: '1px solid #e2e8f0'}}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm" style={{backgroundColor: '#e8f0fa', color: '#1a5ea5'}}>⏱</div>
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{color: '#1a2340'}}>Response time</p>
                      <p className="text-sm" style={{color: '#374151'}}>We aim to respond within 2 business days.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4" style={{color: '#1a2340'}}>Contributor enquiries</h2>
                <p className="text-sm leading-relaxed mb-4" style={{color: '#374151'}}>Are you a practitioner, specialist, or regulator who works in a consumer-facing field? If you are interested in contributing content to RightHand, we would love to hear from you.</p>
                <p className="text-sm leading-relaxed" style={{color: '#374151'}}>Select "Contributor enquiry" in the subject field and tell us about your field and the knowledge you would like to share.</p>
              </div>

              <div className="rounded-lg p-5" style={{backgroundColor: '#e8f0fa', borderLeft: '4px solid #1a5ea5'}}>
                <p className="font-bold text-sm mb-2" style={{color: '#0C447C'}}>Please note</p>
                <p className="text-xs leading-relaxed" style={{color: '#1a1a1a'}}>RightHand is an education platform, not a law firm. We are unable to provide legal advice, act on your behalf, or assist with specific disputes. For dispute-specific assistance, please contact the relevant contributor or regulatory body directly.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}