import "./navbar.css"
import settings from './settings.svg';
import user from './user.svg';
import search from './search.svg'
import dropdown from './dropdown.svg';


const NavBar:React.FC<{}> =() => {
    return (
        <div className="header">
            <div className="left-section">
                <a>Home</a>
                <a>Orders</a>
                <a>Integrations</a>
                <a>Tracking Page</a>
                <img src={dropdown} alt="dropdown-icon" className="dropdown-icon"/>
                <a>Partner with Us</a>
            </div>
            <div className="right-section">
            <img src={search} alt="input-icon" className="search-icon"/>
                <input type="text" placeholder="Search" className="input"/>
                <img src={user} alt="user-icon" className="user-icon" />
                <a > Account</a>
                <img src={settings} alt="settings-icon" className="settings-icon" />
                <a >Settings</a>
            </div>
        </div>
    )
}

export default NavBar;