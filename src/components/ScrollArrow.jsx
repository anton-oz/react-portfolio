import { useEffect, useState, useRef } from "react";

export default function ScrollArrow() {
    const [arrow, setArrow] = useState('down');
    const [visible, setVisible] = useState(true);
    const observerRef = useRef(null);

    const timeout = () => {
        setVisible(false);
        setTimeout(() => {
            setVisible(true);
        }, 1800);
    };

    const toggleImg = () => {
        if (arrow === 'down') {
            setArrow('up');
            timeout();
        } else {
            setArrow('down');
            timeout();
        }
    };

    useEffect(() => {
        timeout();

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionId === "aboutMe") {
                        timeout();
                        setArrow('down');
                    } else if (sectionId === "portfolio") {
                        timeout();
                        setArrow('up');
                    }
                }
            });
        };

        const observerOptions = {
            threshold: 0.5, // Adjust as necessary
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const aboutMeSection = document.getElementById("aboutMe");
        const portfolioSection = document.getElementById("portfolio");

        if (aboutMeSection) observer.observe(aboutMeSection);
        if (portfolioSection) observer.observe(portfolioSection);

        observerRef.current = observer;

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className={"scroll-svg-container " + arrow} id="arrowContainer">
            <a href={arrow === 'down' ?  "#aboutMe" : "#portfolio" } id="arrowLink" onClick={toggleImg} style={{ display: visible ? 'block' : 'none' }}>
                <img
                    src={arrow === 'down' ? "/down-arrow.svg" : "/up-arrow.svg"}
                    className="scroll-svg"
                    id="scrollArrow"
                    alt={arrow === 'down' ? "down arrow" : "up arrow"}
                />
            </a>
        </div>
    );
}
