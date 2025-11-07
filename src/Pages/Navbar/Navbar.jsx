import React from 'react'
import appLogo from "../../assets/appLogo.webp"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <nav>
                <div className='heading'>
                    <img src={appLogo} alt="sjdf" className='appLogo' />
                    <h1>SpendTrack</h1>
                </div>

                <div className='nav-items'>
                    <ul>

                        <li>
                            <NavLink to="/" className="navLink">
                                <span><i class="fas fa-chart-bar" area-hidden="true"></i>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/visualize" className="navLink">
                                <span id='addUser'><i class="fa-solid fa-square-poll-vertical" area-hidden="true"></i>Visualize</span>
                            </NavLink>

                        </li>

                    </ul>
                    <div className='settingsIcon'>
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        <p>Log out</p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
