const Layout = ({children}: {children: React.ReactNode}) => {



    return (
       <>
            <div className="flex justify-center items-center relative top-3 sticky top-0 z-10 pt-2">
                <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                    <a href="#" className="text-sm font-medium leading-5 text-white/70 hover:text-white transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full py-1.5 px-3">Home</a>
                    <a href="#about" className="text-sm font-medium leading-5 text-white/70 hover:text-white transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full py-1.5 px-3">About</a>
                    <a href="#techstack" className="text-sm font-medium leading-5 text-white/70 hover:text-white transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full py-1.5 px-3">Techstack</a>
                    <a href="#portfolio" className="text-sm font-medium leading-5 text-white/70 hover:text-white transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full py-1.5 px-3">Projekty</a>
                    <a href="#contact" className="text-sm font-medium leading-5 text-white/70 hover:text-white transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full py-1.5 px-3">Kontakt</a>
                </nav>
            </div>  

            {children}

            <footer className="py-[20px] bg-white/10 border-t-2 border-white/15">
                <div className="container mx-auto px-9">
                    <p className="text-center">&copy; Vytvořil Alex Pokorný</p>
                    <p className="text-center">4557724063/0800</p>
                </div>
            </footer>
        </>
    );
}

export default Layout;