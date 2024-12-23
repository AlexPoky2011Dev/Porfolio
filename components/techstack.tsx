const techstack = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
  { name: 'Ostatní', items: ['Java', 'C++ (Učím se)'] },
];

export default function TechSkills() {
  return (
    <section id="techstack" className="py-20 bg-zinc-900/50 min-h-screen flex flex-col justify-center items-center relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-center">Techstack</h2>
        <div className='line'/>

        <div className="flex flex-wrap justify-center gap-40 mt-12">
          {techstack.map((category) => (
            <div key={category.name} className="space-y-6 text-white text-center">
              <h3 className="text-xl font-semibold text-purple-400">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((tech) => (
                  <li key={tech} className="text-gray-300">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
