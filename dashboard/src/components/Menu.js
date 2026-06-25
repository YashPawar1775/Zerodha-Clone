import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
    const [user, setUser] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    useEffect(() => {
        axios.get("https://zerodha-clone-backend-tawny.vercel.app/profile",{withCredentials: true})
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        // axios.get("http://localhost:8080/profile",{withCredentials: true})
        //     .then((res) => {
        //         setUser(res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }, []);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = (index) => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleLogout = async () => {
        try {
            await axios.post("https://zerodha-clone-backend-tawny.vercel.app/logout",{},{
                    withCredentials: true
                }
            );
            window.location.href = "https://zerodha-clone-frontend-flax.vercel.app/";
            // await axios.post("http://localhost:8080/logout",{},{
            //         withCredentials: true
            //     }
            // );
            // window.location.href = "http://localhost:3000";
        } catch (err) {
            console.error(err);
        }
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">
            <img src="logo.png" className="object-fit-contain img-fluid" alt="Kite Logo" style={{ width: "50px" }} />
            <div className="menus">
                <ul>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                                Dashboard
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                                Orders
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                                Holdings
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                                Positions
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                                Funds
                            </p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="profile-container">
                    <div className="profile" onClick={handleProfileClick}>
                        <div className="avatar"> {user?.username? user.username.charAt(0).toUpperCase() : "U"}</div>
                        <p className="username"> {user?.username || "User"}</p>
                    </div>

                    {isProfileDropdownOpen && (
                        <div className="profile-dropdown">
                            <button className="Logout" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;