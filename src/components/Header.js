import './Header.css'

export default function Header() {
    let isUser = "";
    return (
        <nav className="navbar bg-dark navbar-expand-md" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="images/logo.png" alt="logo" />
                    <span id="brandName">Movie+</span>
                </a>
                {isUser &&
                    <img className='userImg' src="images/user.png" alt='userImg' />
                    }
            </div>
        </nav>
    )
}