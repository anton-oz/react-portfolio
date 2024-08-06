export default function Resume() {

    const tech = {
        js: [`/logos/javascript-1.svg`, 'Javascript'],
        html: [`/logos/html.svg`, 'HTML5'],
        css: [`/logos/css.svg`, 'CSS3'],
        node: [`logos/nodejs.svg`, 'Node.js'],
        react: [`/logos/react.svg`, 'React.js'],
        mongodb: [`/logos/mongodb.svg`, 'MongoDb'],
        postgres: [`/logos/postgresql.svg`, 'Postgresql'],
    };

    const logos = [];

    for (let lang in tech) {
        logos.push(
            <div className='logo hidden' key={tech[lang][1]}>
                <img className='svg' src={tech[lang][0]} alt={tech[lang][1] + " Badge"} />
                <span className='tooltip'>
                    {tech[lang][1]}
                </span>
            </div>
        )
    }

    return (
        <section className="hidden">
            <div className="container">
                <p>
                    I am experienced with the following technologies:
                </p>
                <div className="logos">
                    {logos}
                </div>
                <a className="link-a" href="/resume/sample.pdf" download='sample'>
                    Download my Resume
                </a>
            </div>
        </section>
    )
}