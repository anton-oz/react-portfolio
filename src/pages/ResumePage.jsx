import { slideFunction } from "../utils/functions";
import { useEffect } from "react";

import javascript from '../assets/logos/javascript-1.svg'
import html from '../assets/logos/html.svg'
import css from '../assets/logos/css.svg'
import node from '../assets/logos/nodejs2.svg'
import react from '../assets/logos/react.svg'
import mongodb from '../assets/logos/mongodb.svg'
import postgres from '../assets/logos/postgresql.svg'

export default function ResumePage() {

    useEffect(() => {
        slideFunction();
    });

    const tech = {
        js: [javascript, 'Javascript'],
        html: [html, 'HTML5'],
        css: [css, 'CSS3'],
        node: [node, 'Node.js'],
        react: [react, 'React.js'],
        mongodb: [mongodb, 'MongoDb'],
        postgres: [postgres, 'Postgresql'],
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
                {/* <h3>test</h3> */}
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