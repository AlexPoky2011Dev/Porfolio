import { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"; 

export interface Repository {
    id: number;
    name: string;
    fw: string;
    link: string;
    desc: string;
    date: string;
    img: string;
}

const Portfolio = () => {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getProjects();
        AOS.init({ duration: 3000 });
    }, []);

    const getProjects = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/portfolio');
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
      <section id="portfolio" className="py-20 bg-zinc-900/50 min-h-screen flex flex-col justify-center items-center relative">
        <div className="portfolio py-10 pb-[150px] backdrop-blur-[10px]">

          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-center">Portfolio</h2>
          <div className='line'/>

            {isLoading ? (
                <div className="loading">
                    <div className="w-full gap-x-2 flex justify-center items-center">
                        <div className="w-5 bg-[#00e1ff] animate-pulse h-5 rounded-full animate-bounce"></div>
                        <div className="w-5 animate-pulse h-5 bg-[#16B6B6] rounded-full animate-bounce"></div>
                        <div className="w-5 h-5 animate-pulse bg-[#107F7F] rounded-full animate-bounce"></div>
                    </div>
                    <div className="text-center text-[20px] animate-pulse animate-bounce">
                        <span className="text-[#00e1ff]">Loa</span>
                        <span className="text-[#16B6B6]">di</span>
                        <span className="text-[#107F7F]">ng</span>
                    </div>
                </div>
            ) : (
                <div className="projects flex flex-wrap justify-center gap-[50px]">
                    {projects.map(project => (
                        <div key={project.id} className="project w-[350px] bg-white/10 border border-white/15 rounded-lg p-4 shadow-lg" data-aos="fade-up">
                            <img src={project.img} alt={project.name} className="max-w-full rounded-md filter" />
                            <div className="flex mt-2"> 
                                <p className="text-white/70">{project.date} |</p>
                                <p className="ml-[4px] text-white/70">{project.fw}</p>
                            </div>
                            <br />  
                            <h1 className="mt-[-20px] text-[23px] uppercase font-bold">{project.name}</h1>  
                            <p className="text-[15px]">{project.desc}</p>

                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <p className="border border-white/15 rounded-md bg-white/10 backdrop-blur h-8 w-full font-semibold inline-flex items-center hover:bg-white/70 justify-center gap-2 mt-2 mb-4">
                                    Otevřít
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </section> 
    );
};

export default Portfolio;