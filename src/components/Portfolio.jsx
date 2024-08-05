export default function Portfolio() {
    
    const projects = [
        {
            name: 'Weather Dashboard', 
            url: 'https://anton-oz.github.io/Weather-Dashboard/', 
            repo: 'https://github.com/anton-oz/Weather-Dashboard',
            img: 'url(/project-imgs/weather.png)'
        },
        {
            name: 'Kanban Taskboard',
            url: 'https://anton-oz.github.io/KanBan-TaskBoard/',
            repo: 'https://github.com/anton-oz/KanBan-TaskBoard',
            img: 'url(/project-imgs/kanbanboard.png'
        },
        {
            name: 'More projects coming soon...',
            url: 'none',
            img: '/ufo1.svg'
        },
        {
            name: 'More projects coming soon...',
            url: 'none',
            img: '/ufo1.svg'
        },
        {
            name: 'More projects coming soon...',
            url: 'none',
            img: '/ufo1.svg'
        },
        {
            name: 'More projects coming soon...',
            url: 'none',
            img: '/ufo1.svg'
        }
    ];

    const projCards = projects.map((project, i) => (
        <div className="project-card hidden" style={{backgroundImage: project.img}} key={i}>
            <a href={project.url} target='_blank'>
                <h4>{project.name}</h4>
            </a>
            <a href={project.repo} target="_blank">
                <img className="github-logo" src="github-mark.svg" alt="github logo" />
            </a>
        </div>
    ))

    return (
        <section id='portfolio' className='hidden'>
            <div className="portfolio">
                <div className="portfolio-container">    
                    {projCards}
                </div>
            </div>
        </section>
    )
}