import { useEffect, useState } from "react"
import Footer from "../components/footer"

export default function Contact() {
    const initialValues = {
        firstname: "",
        email: "",
        mobile: "",
        messege: ""
    }
    const [formValues, setFormvalues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const [toggle, setToggle] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormvalues({ ...formValues, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        const { firstname, email, mobile, messege } = formValues

        if (firstname && email && mobile && messege) {
            const res = await fetch(
                'https://school-messege-system-default-rtdb.firebaseio.com/schoolmessegesystem.json', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname,
                    email,
                    mobile,
                    messege
                })
            }

            );
            if (res) {
                setFormvalues(initialValues);
                alert("form submitted successfully");
            } else {
                alert("please fill the form values!")
            }
        }
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors, formValues, isSubmit])


    const validate = (value) => {
        const error = {};
        if (!value.firstname) {
            error.firstname = "Please enter your name";
        }
        if (!value.email) {
            error.email = "Please enter your email";
        }
        if (!value.mobile) {
            error.mobile = "Please enter your mobile";
        }
        if (!value.messege) {
            error.messege = "Please enter your messege";
        }
        return error;
    }



    return (
        <>

            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Disha Public School</title>
                    <link href="./assets/css/contact.css" rel="stylesheet" />
                    <link href="./assets/css/style.css" rel="stylesheet" />
                    {/* <link href="./assets/css/blogs.css" rel="stylesheet" />
                    <link href="./assets/css/acheive.css" rel="stylesheet" />*/}
                    <link href="./assets/css/mediaquery.css" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
                    <script src="./main.js"></script>
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
                                            <a href="./school.html">Gallary</a>
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

                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.8367705141886!2d76.73746352911708!3d32.01749166607491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904c0aa0f40e0b9%3A0x72148b58ebafb14e!2sDisha%20Public%20School!5e1!3m2!1sen!2sin!4v1687710047640!5m2!1sen!2sin" width={1000} height={600} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="custom title"></iframe>
                        </div>
                    </header>
                    <div className="line">
                        <h3 className="c">Contact Us</h3>
                    </div>

                    <main className="contact">
                        <div className="address">
                            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, officia.</h4>
                            <h5>Phone: +0028 55 67 67<br />
                                Email: yourmail@yourdomain.com<br />
                                Address: Jl. Pirus No. 13, Cisaranten Kulon, Arcamanik, Bandung, Jawa Barat.</h5>
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit} method="POST">
                                <label for="Name">Name</label><br />
                                <input type="text" name="firstname" onChange={handleChange} value={formValues.firstname} placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter your name" id="name" /><br /><br />
                                <p className="error">{formErrors.firstname}</p>

                                <label for="Name">Email</label><br />
                                <input type="text" name="email" onChange={handleChange} value={formValues.email} placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter your Email" id="email" /><br /><br />
                                <p className="error">{formErrors.email}</p>

                                <label for="Name">Contact no.</label><br />
                                <input type="" name="mobile" onChange={handleChange} value={formValues.mobile} placeholder="&nbsp;&nbsp; &nbsp;&nbsp;Enter your Number" id="contact" /><br /><br />
                                <p className="error">{formErrors.mobile}</p>

                                <label for="messege">Message</label><br />
                                <textarea rows="10" cols="55" name="messege" onChange={handleChange} value={formValues.messege} placeholder="&nbsp;&nbsp;&nbsp;your message" id="mes"></textarea><br /><br />
                                <p className="error">{formErrors.messege}</p>

                                <button type="submit" id="btn" className="btn btn-warning" >submit</button>
                            </form>
                        </div>

                    </main>
                    <hr className="hr1" />


                    {/* footer component */}
                    <Footer />

                </body>
            </html>
        </>
    )
}