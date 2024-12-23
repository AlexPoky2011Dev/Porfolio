"use client";
import { useState } from 'react';
// import { Send } from 'lucide-react'; // Zakomentováno pro odstranění ESLint chyby

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
        alert('Zpráva byla úspěšně odeslána!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      alert('Došlo k chybě při odesílání zprávy.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Jméno
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Zpráva
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {/* Zakomentovaný kód pro tlačítko
      <button
        type="submit"
        className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center space-x-2 transition-colors"
      >
        <Send size={20} />
        <span>Odeslat zprávu</span>
      </button>
      */}

      <h1 className='text-center bg-red-500/10 font-medium border-[#ef4444] border-2 rounded-[15px] p-[5px]'>Mimo provoz</h1>
    </form>
  );
}
