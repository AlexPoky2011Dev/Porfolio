import { Mail, MapPin, Github, Bot, ChevronDown  } from 'lucide-react';

import TechStack from '../components/techstack';
import Projects from '../components/projects';
import Layout from '../components/layout'
import ContactForm from '../components/contactForm';

export default function Home() {
  return (
    <main className="bg-zinc-900">
      <Layout>
      

        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Alex Pokorný
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">Full-stack vývojář</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/AlexPoky2011Dev" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-purple-400 transition-colors"><Github size={24} /></a>
            <a href="https://discord.com/users/999318467310268496" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-purple-400 transition-colors"><Bot size={24} /></a>
          </div>
        </div>
        <a href="#about" className="absolute bottom-12 animate-bounce hover:text-purple-400 transition-colors">
          <ChevronDown size={32} />
        </a>
      </section>


      <section id="about" className="py-20 min-h-screen flex flex-col justify-center items-center relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-center">O mně</h2>
          <div className='line'/>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <p className="leading-relaxed">
            Jsem Alex Pokorný. Jsem FrontEnd vývojář webových stránek, specializuji se na vytváření jednoduchých webových stránek pomocí frameworku NextJS.
            Můj zájem o webový vývoj začal 16. února 2024, a od listopadu 2023 se také věnuji vývoji Discord robotů.
            </p>
            <p className="leading-relaxed">
              Mám zkušenosti s vývojem komplexních webových aplikací, e-shopů a mobilních aplikací.
              Vždy se snažím držet nejnovějších trendů a best practices v oblasti vývoje.
            </p>
          </div>
        </div>
      </section>


      <TechStack />
      <Projects />
      

      <section id="contact" className="py-20 min-h-screen flex flex-col justify-center items-center relative">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-extrabold bg-clip-text text-transparent text-center bg-gradient-to-r from-white to-gray-500">Kontakt</h2>
    <div className='line'/>

    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        
        
        <div className="space-y-8">
          <p className="text-gray-300 text-lg">
            Máte zájem o spolupráci? Neváhejte mě kontaktovat pomocí formuláře nebo přímo na:
          </p>
          <div className="space-y-6">
            <a href="mailto:alexpoky2011.dev@gmail.com" className="flex items-center space-x-4 hover:text-purple-400 transition-all duration-300 ease-in-out">
              <Mail size={24} />
              <span>alexpoky2011.dev@gmail.com</span>
            </a>
            <div className="flex items-center space-x-4 hover:text-purple-400 transition-all duration-300 ease-in-out">
              <MapPin size={24} />
              <span>Doma, Česká republika</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6 bg-zinc-900/60 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white">Kontaktní formulář</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</section>



      </Layout>
    </main>
  );
}