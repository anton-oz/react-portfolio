import { NavLink } from "react-router-dom"

export default function Nav() {

    const links = [
        {
            name: 'About Me',
            route: '/'
        },
        {
            name: 'Portfolio',
            route: '/portfolio',
        },
        {
            name: 'Contact Form',
            route: '/contact',
        },
        {
            name: 'Resume',
            route: '/resume'
        }
    ]

    return (
        <nav>
            {links.map((item, i) => (
                <NavLink 
                    key={i} 
                    to={item.route}
                    className={({isActive}) => {
                        if (isActive) {
                            return 'active'
                        }
                    }}
                >
                    {item.name}
                </NavLink>
            ))}
            {/* <NavLink className={function({isActive}) {
                
            }} key={1} to='/'>
                About Me
            </NavLink>
            <NavLink key={2} to='/portfolio'>
                Portfolio
            </NavLink>
            <NavLink key={3} to='/contact'>
                Contact Form
            </NavLink>
            <NavLink key={4} to='/resume'>
                Resume
            </NavLink> */}
        </nav>
    )
}