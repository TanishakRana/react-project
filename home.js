import { useState } from "react";
import Footer from "../components/footer";
// import $ from 'jquery';
export default function Home() {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Disha Public School</title>
                    {/* <link href="./assets/css/contact.css" rel="stylesheet" /> */}
                    <link href="./assets/css/style.css" rel="stylesheet" />
                    {/* <link href="./assets/css/blogs.css" rel="stylesheet" /> */}
                    {/* <link href="./assets/css/acheive.css" rel="stylesheet" /> */}
                    <link href="./assets/css/mediaquery.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

                </head>
                <body>
                    <header className="container-1">
                        <div className="top-div">
                            <div className="logo">
                                <a href="./index.html"><img src="./assets/pictures/logo.png" alt="!" /></a>
                                <h3 className="main-heading">Disha Public School</h3>
                            </div>
                            <div className="navbar">
                                <nav>

                                    <ul className="nav-menu">
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
                                <span className="nav-menu2">
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
                        <div className="main-heading2">
                            <h3 className="subtitle">
                                THE PURSUIT OF EXCELLENCE BEGINS HERE.
                            </h3><br />
                            <img className="img" src="./assets/pictures/logo.png" alt="" />
                            <h4 className="substitle">The roots of education are bitter,<br />
                                &nbsp; &nbsp;but the fruit is sweet.</h4>
                            <a href="./contact.html"> <input type="button" value="Contact Us" id="btn1" /></a>
                        </div>

                    </header>


                    <main className="intro">
                        <h3 className="wel">WELCOME</h3>
                        <div className="plates">
                            <div className="pic">
                                <img src="./assets/pictures/pic.jpg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quibusdam?</h3>
                                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam et
                                    cupiditate pariatur voluptatum tenetur fuga dolore facilis eos adipisci,
                                    vitae voluptas nisi consectetur dolores minima quasi veritatis distinctio
                                    sequi nulla optio labore, a vero perferendis! Tempora quia voluptatibus
                                    non!</h4>
                                <div className="last">
                                    <h3>HEADMASTER</h3>
                                    <h4>ABC.</h4>
                                </div>
                            </div>
                        </div>
                    </main>

                    <main className="why">
                        <div className="ourschool">
                            <h3>Why Our School is Right Fit for Your Child?</h3>
                            <h4 className="or"><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quam distinctio<br />
                                laudantium soluta? Praesentium maxime voluptas nulla aut sequi reiciendis?</span></h4>
                            <div className="os">
                                <div className="os1">
                                    <i className="fa-solid fa-book"></i>
                                    <h4>Well Trained Professionals</h4>
                                </div>
                                <div className="os2">
                                    <i className="fa-solid fa-building-wheat"></i>
                                    <h4>Awesome Infra-Structure</h4>
                                </div>
                                <div className="os3">
                                    <i className="fa-brands fa-pagelines"></i>
                                    <h4>International Lesson Patterns</h4>
                                </div>
                            </div>
                        </div>
                        <div className="photo">
                            <img src="./assets/pictures/photo.jpg" alt="" />
                        </div>
                    </main>

                    <div className="container-2">
                        <div className="head">
                            <h3>From our diary's</h3>
                            <h4>We regularly share news and updates in our university’s blog. The articles we publish vary from<br />
                                announcing new events and courses to providing useful information to our students.</h4>
                        </div>
                        <div className="content">
                            <div className="content-1">
                                <img src="./assets/pictures/content1.jpg" alt="" />
                                <div className="content1-1" id="first-blog">
                                    <h4><i className="fa-solid fa-calendar-plus"></i>&nbsp; May 2023</h4>
                                    <a href="./Blogs.html"><h3>Liberal Arts Colleges Rankings</h3></a>
                                    <h5>The National Liberal Arts Colleges, including schools like Wellesley College and <br />
                                        Bowdoin College, emphasize undergraduate education and award at least half of <br />
                                        their degrees in the liberal arts fields of study.</h5>
                                </div>

                            </div>
                            <div className="content-2">
                                <div className="content1-1">
                                    <h4><i className="fa-solid fa-calendar-plus"></i>&nbsp; May 2023</h4>
                                    <a href="./Blogs.html"><h3>Liberal Arts Colleges Rankings</h3></a>
                                    <h5>The National Liberal Arts Colleges, including schools like Wellesley College and <br />
                                        Bowdoin College, emphasize undergraduate education and award at least half of <br />
                                        their degrees in the liberal arts fields of study.</h5>
                                </div>
                                <div className="content1-1">
                                    <h4><i className="fa-solid fa-calendar-plus"></i>&nbsp; May 2023</h4>
                                    <a href="./Blogs.html"><h3>Liberal Arts Colleges Rankings</h3></a>
                                    <h5>The National Liberal Arts Colleges, including schools like Wellesley College and <br />
                                        Bowdoin College, emphasize undergraduate education and award at least half of <br />
                                        their degrees in the liberal arts fields of study.</h5>
                                </div>
                                <div className="content1-1b">
                                    <h4><i className="fa-solid fa-calendar-plus"></i>&nbsp; May 2023</h4>
                                    <a href="./Blogs.html"><h3>Liberal Arts Colleges Rankings</h3></a>
                                    <h5>The National Liberal Arts Colleges, including schools like Wellesley College and <br />
                                        Bowdoin College, emphasize undergraduate education and award at least half of <br />
                                        their degrees in the liberal arts fields of study.</h5>
                                </div>
                                <div className="content1-1c">
                                    <h4><i className="fa-solid fa-calendar-plus"></i>&nbsp; May 2023</h4>
                                    <a href="./Blogs.html"><h3>Liberal Arts Colleges Rankings</h3></a>
                                    <h5>The National Liberal Arts Colleges, including schools like Wellesley College and <br />
                                        Bowdoin College, emphasize undergraduate education and award at least half of <br />
                                        their degrees in the liberal arts fields of study.</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="admission">
                        <div className="plate-1">
                            <h3>Book your child seat now.</h3>
                        </div>
                        <div className="plate-2">
                            <button type="button" className="btn3"><a href="./registration.html">Admission now!</a></button>
                        </div>
                    </div>



                    {/* footer component */}
                    <Footer />

                    {/* <script>
                        $(document).ready(function(){
                            $('#butn').Click(function () {
                                $('.nav-menu').toggle();
                            })
                        })

                    </script> */}
                </body>
            </html>
        </>
    );
};