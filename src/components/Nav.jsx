import { Link } from "react-router-dom"

export default function Nav() {


    return (
        <nav>
            <Link key={1} to='/'>
                About Me
            </Link>
            <Link key={2} to='/portfolio'>
                Portfolio
            </Link>
            <Link key={3} to='/contact'>
                Contact Form
            </Link>
        </nav>
    )
}