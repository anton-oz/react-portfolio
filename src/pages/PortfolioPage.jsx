import Portfolio from "../components/Portfolio";
import { slideFunction } from "../utils/functions";
import { useEffect } from "react";

export default function PortfolioPage() {

    useEffect(() => {
        slideFunction();
    })

    return (
        <>
            <Portfolio />
        </>
    )
}