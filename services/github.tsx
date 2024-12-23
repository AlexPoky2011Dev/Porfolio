import { useEffect, useState } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"; // Ujistěte se, že importujete CSS pro AOS

export interface Repository {
    svn_url: string;
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
}

const GitHub = () => {
    const [projects, setProjects] = useState<Repository[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getProjects();
        AOS.init({ duration: 3000 });
    }, []);

    const getProjects = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://api.github.com/users/AlexPoky2011Dev/repos');
            const data = await res.json();

            if (data.length > 0) {
                const filteredProjects = data.filter((project: { name: string; }) => project.name !== 'AlexPoky2011Dev');
                setProjects(filteredProjects);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="github py-10 pb-[150px] backdrop-blur-[10px]">
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
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project w-[350px] bg-white/10 border border-white/15 rounded-lg p-4 shadow-lg"
                            data-aos="fade-up"
                        >
                            <h1 className="text-[23px] uppercase font-bold">{project.name}</h1>
                            <div className="flex">
                                <p className="text-white/70">{project.language}</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-[15px] text-white">{project.description}</p>
                            </div>
                            <a href={project.svn_url} target="_blank" rel="noopener noreferrer">
                                <p className="border border-white/15 rounded-md bg-white/10 backdrop-blur h-8 w-full font-semibold inline-flex items-center justify-center gap-2 mt-2 hover:bg-white/70 transition duration-300">
                                    Otevřít
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GitHub;