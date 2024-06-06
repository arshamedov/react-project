import { Link } from "react-router-dom"

const Layout:React.FC = ():JSX.Element => {
    return <div>
        <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tickets'>Choose your seat</Link></li>
                    <li><Link to='/events'>Choose event</Link></li>
                    </ul>
                </nav>
        </header>
    </div>
}

export default Layout;