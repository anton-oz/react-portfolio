import Nav from "./Nav";
import signature from '../assets/name/signature.svg'


export default function Header() {
    return (
        <header>
            <img src={signature} alt='Anton Osland signature' className='signature'/>
            <Nav />
        </header>
    )
}