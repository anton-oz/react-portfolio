

export default function Portfolio() {

    const sample = [];
    let i = 1;
    while (sample.length < 9) {
        sample.push(`${i}`);
        i++;
    };

    const cards = sample.map((i) => (
        <div className="project-card" key={i}>
            <h4>Project Placeholder {i}</h4>
        </div>
    ))

    return (
        <section className='hidden'>
            <div className="portfolio">
                <h2>
                    My Projects
                </h2>
                <div className="portfolio-container">    
                    {cards}
                </div>
            </div>
        </section>
    )
}