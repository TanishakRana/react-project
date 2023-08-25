import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <header class="container-1">
                <div class="top-div">
                    <div class="logo">
                        <a href="./index.html"><img src="./assets/pictures/logo.png" alt="!" /></a>
                        <h3 class="main-heading">Disha Public School</h3>
                    </div>
                    <div class="navbar">
                        <nav>
                            <ul class="nav-menu" id="nm">
                                <li>
                                    <a href="./index.html">Home</a>
                                </li>
                                <li>
                                    <a href="./school.html">School Gallary</a>
                                </li>
                                <li>
                                    <a href="./Blogs.html">Blogs</a>
                                </li>
                                <li>
                                    <a href="./acheive.html">Achievement</a>
                                </li>
                                <li>
                                    <a href="./acadamic.html">Acadamics</a>
                                </li>
                                <li>
                                    <a href="./contact.html">Contact us</a>
                                </li>
                                <li>
                                    <a href="./registration.html">Registration</a>
                                </li>

                            </ul>
                        </nav>
                        <button className="toggle" id="butn" onClick={() => setToggle(!toggle)}><i class="fa-solid fa-bars fa-beats"></i></button>
                    </div>
                </div>
                {/* /*-------------mobile-view----*/}
                {toggle ?
                    <ul >
                        <span className="nav-menu2" id="nv">
                            <li>
                                <a href="./index.html">Home</a>
                            </li>
                            <li>
                                <a href="./school.html">School Gallary</a>
                            </li>
                            <li>
                                <a href="./Blogs.html">Blogs</a>
                            </li>
                            <li>
                                <a href="./acheive.html">Achievement</a>
                            </li>
                            <li>
                                <a href="./acadamic.html">Acadamics</a>
                            </li>
                            <li>
                                <a href="./contact.html">Contact us</a>
                            </li>
                            <li>
                                <a href="./registration.html">Registration</a>
                            </li>
                        </span>
                    </ul> : null}
            </header>
        </>
    )
}