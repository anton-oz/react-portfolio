import Nav from "./Nav";

export default function Header() {
    return (
        <header>
            <img src='/name/signature.svg' alt='Anton Osland signature' className='signature'/>
            <Nav />
        </header>
    )
}