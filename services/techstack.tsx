import { useEffect, useState } from 'react';

interface TechStackItem {
    id: number;
    type: string;
    name: string;
}

const TechStack = () => {
    const [techStack, setTechStack] = useState<TechStackItem[]>([]);

    useEffect(() => {
        const fetchTechStack = async () => {
            const response = await fetch('/api/techstack'); // Změňte na cestu k vašemu API
            const data = await response.json();
            setTechStack(data);
        };

        fetchTechStack();
    }, []);

    const groupedTechStack = techStack.reduce((acc: { [key: string]: TechStackItem[] }, item: TechStackItem) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <div>
            {Object.entries(groupedTechStack).map(([type, items]) => (
                <div key={type} className="flex justify-center gap-4 mt-3">
                    <div className="hover:bg-white/25 project w-[350px] bg-white/10 border border-white/15 rounded-lg p-4 shadow-lg text-center" data-aos="fade-up">
                        <h2 className="text-lg font-bold text-white">{type}</h2>
                        {items.map(item => (
                            <h4 key={item.id}>{item.name}</h4>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechStack;