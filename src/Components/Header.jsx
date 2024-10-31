import React from 'react'
import appleLogo from '../assets/images/icons/logo-sm.png'
import searchIcon from '../assets/images/icons/search-icon-sm.png'
import cart from '../assets/images/icons/cart-sm.png'

function Header() {

    // Render the header
    return (
        // Header container
        <div className="nav-wrapper fixed-top">
            <div className="container">
                <nav className="navbar navbar-toggleable-sm navbar-expand-md">

                    {/* Navbar toggler button */}
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target=".navbar-collapse">
                        ☰
                    </button>

                    {/* Navbar brand logo*/}
                    <a className="navbar-brand mx-auto" href="#"><img src={appleLogo} /></a>

                    {/* Navbar collapse menu items*/}
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav nav-justified w-100 nav-fill">

                            {/* Navbar menu items */}
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">Mac</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">iphone</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">ipad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">watch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">tv</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">Music</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#"><img src={searchIcon} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#"><img src={cart} /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;
