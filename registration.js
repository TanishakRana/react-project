
import Footer from "../components/footer"
import React, { useEffect, useState } from 'react';

export default function Registration() {
    const initialValues = {
        firstname: "",
        lastname: "",
        fathername: "",
        mothername: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        gender: "",
        dob: "",
        email: "",
        mobile: ""
    }
    const [formValues, setFormvalues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const [toggle, setToggle] = useState(false)

    const userhandler = (e) => {
        const { name, value } = e.target;
        setFormvalues({ ...formValues, [name]: value })


    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        const { firstname, lastname, fathername, mothername, address, city, state, zip, gender, dob, email, mobile } = formValues;


        if (firstname && lastname && fathername && mothername && address && city && state && zip && gender && dob && email && mobile) {
            const res = await fetch(
                'https://school-admin-data-default-rtdb.firebaseio.com/schooladmindata.json', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    fathername,
                    mothername,
                    address,
                    city,
                    state,
                    zip,
                    gender,
                    dob,
                    email,
                    mobile,
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
            console.log(formValues);
        }

    }, [formErrors, formValues, isSubmit]);
    const validate = (value) => {
        const errors = {};
        // const regex = /'^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/i; 
        if (!value.firstname) {
            errors.firstname = "Please Enter your first Name !";
        }
        if (!value.lastname) {
            errors.lastname = "Please Enter your last Name !";
        }
        if (!value.fathername) {
            errors.fathername = "Please Enter your father Name !";
        }
        if (!value.mothername) {
            errors.mothername = "Please Enter your mother Name !";
        }
        if (!value.address) {
            errors.address = "Please Enter your address !";
        }
        if (!value.city) {
            errors.city = "Please Enter your city !";
        }
        if (!value.state) {
            errors.state = "Please Enter your state !";
        }
        if (!value.zip) {
            errors.zip = "Please Enter zip !";
        }
        if (!value.gender) {
            errors.gender = "Please Enter gender !";
        }
        if (!value.dob) {
            errors.dob = "Please Enter date of birth !";
        }

        if (!value.mobile) {
            errors.mobile = "Please Enter your mobile number !";
        }
        return errors;
    }

    return (
        <>
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Disha Public School</title>
                    {/* <link href="./assets/css/contact.css" rel="stylesheet" />*/}
                    {/* <link href="./assets/css/style.css" rel="stylesheet" /> */}
                    {/* <link href="./assets/css/blogs.css" rel="stylesheet" />
                    <link href="./assets/css/acheive.css" rel="stylesheet" /> */}
                    <link href="./assets/css/mediaquery.css" rel="stylesheet" />
                    <link href="./assets/css/registration.css" rel="stylesheet" />
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
                        {/* <div className="main-heading2">
                            <h3 className="subtitle">
                                THE PURSUIT OF EXCELLENCE BEGINS HERE.
                            </h3><br />
                            <img className="img" src="./assets/pictures/logo.png" alt="" />
                            <h4 className="substitle">The roots of education are bitter,<br />
                                &nbsp; &nbsp;but the fruit is sweet.</h4>
                            <a href="./contact.html"> <input type="button" value="Contact Us" id="btn1" /></a>
                        </div> */}

                    </header>


                    <div className="text">
                        Registration form
                    </div>

                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="container col-md-6">
                            {/* name */}
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control  border border-secondary"
                                        onChange={userhandler}
                                        name="firstname"
                                        id="first-name"
                                        placeholder="First name"
                                        aria-label="First name"
                                        value={formValues.firstname} />
                                    <p className="text-danger">{formErrors.firstname}</p>
                                </div>

                                <div className="col">
                                    <input type="text" className="form-control  border border-secondary"
                                        onChange={userhandler}
                                        name="lastname"
                                        id="last-name"
                                        placeholder="Last name"
                                        aria-label="Last name"
                                        value={formValues.lastname}
                                    />
                                    <p className="text-danger">{formErrors.lastname}</p>
                                </div>
                            </div>
                            {/* father name */}
                            <div className="input-group mt-3">
                                <span className="input-group-text border border-secondary">Father name</span>
                                <input type="text" aria-label="First name" className="form-control border border-dark"
                                    placeholder="Father Name"
                                    name="fathername"
                                    id="fathername"
                                    onChange={userhandler}
                                    value={formValues.fathername} />

                            </div>
                            <p className="text-danger">{formErrors.fathername}</p>
                            {/* mother name */}
                            <div className="input-group mt-3">
                                <span className="input-group-text border border-secondary">Mother name</span>
                                <input type="text" aria-label="First name" className="form-control border border-dark"
                                    placeholder="Mother Name"
                                    name="mothername"
                                    id="mothername"
                                    onChange={userhandler}
                                    value={formValues.mothername} />

                            </div>
                            <p className="text-danger">{formErrors.mothername}</p>
                            {/* address */}
                            <div className="col-12 mt-3">
                                <label for="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control  border border-secondary" id="inputAddress" placeholder="Address 1"
                                    name="address" onChange={userhandler}
                                    value={formValues.address} />
                                <p className="text-danger">{formErrors.address}</p>
                            </div>
                            <div className="col-12 mt-3">
                                <label for="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control  border border-secondary" id="inputAddress2" name="address" onChange={userhandler} placeholder="Address 2" />
                            </div>
                            {/* city */}
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">City</label>
                                <select id="city" name="city" onChange={userhandler} value={formValues.city} className="form-select border border-secondary">

                                    <option selected>Choose...</option>
                                    <option>Mandi</option>
                                </select>
                                <p className="text-danger">{formErrors.city}</p>
                            </div>
                            {/* state */}
                            <div className="col-md-6">
                                <label for="inputState" className="form-label">State</label>
                                <select id="state" name="state" onChange={userhandler} value={formValues.state} className="form-select border border-secondary">

                                    <option selected>Choose...</option>
                                    <option>Himanchal pradesh</option>
                                </select>
                            </div>
                            <p className="text-danger">{formErrors.state}</p>
                            {/* zip */}
                            <div className="col-md-4">
                                <label for="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control border border-secondary" value={formValues.zip} id="zip" onChange={userhandler} name="zip" />
                                <p className="text-danger">{formErrors.zip}</p>
                            </div>
                            {/* gender */}
                            <fieldset className="row mt-3">
                                <legend className="col-form-label col-sm-2 pt-0 ">Gender:</legend>
                                <div className="col-sm-10 " value={formValues.gender} onChange={userhandler}>

                                    <div className="form-check ">
                                        <input className="form-check-input border border-secondary" type="radio" name="gender" id="1" value="option1" />
                                        <label className="form-check-label " for="gridRadios1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input border border-secondary" type="radio" name="gender" id="1" value="option2" />
                                        <label className="form-check-label" for="gridRadios2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <p className="text-danger">{formErrors.gender}</p>

                            {/* dob */}
                            <fieldset className="row mt-3 pt-3">
                                <legend className="col-form-label col-sm-2 pt-0 ">Date of birth:</legend>
                                <div className="col" value={formValues.dob} onChange={userhandler} name="dob" id="dob">

                                    <select id="date" name="dob" className="form-select border border-secondary">
                                        <option selected>Date</option>
                                        <option>1</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select id="month" name="dob" className="form-select border border-secondary">
                                        <option selected>Month</option>
                                        <option>1</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select id="year" name="dob" className="form-select border border-secondary">
                                        <option selected>Year</option>
                                        <option>1001</option>
                                    </select>
                                </div>

                            </fieldset>
                            <p className="text-danger">{formErrors.dob}</p>
                            {/* Email */}
                            <div className="input-group mt-3">
                                <span className="input-group-text border border-secondary">Email</span>
                                <input type="email" aria-label="First name" className="form-control border border-dark"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your Email"
                                    onChange={userhandler}
                                    value={formValues.email} />
                                <p>{formErrors.email}</p>
                            </div>
                            {/* mobile */}
                            <div className="input-group mt-3">
                                <span className="input-group-text border border-secondary">Mobile Number</span>
                                <input type="text" aria-label="First name" className="form-control border border-dark"
                                    name="mobile"
                                    id="mobile"
                                    placeholder="Enter Mobile number"
                                    onChange={userhandler}
                                    value={formValues.mobile} />

                            </div>
                            <p className="text-danger">{formErrors.mobile}</p>
                            <button type="submit" className="btn btn-primary mt-3 mb-5" >Submit</button>
                        </div>
                    </form>

                    {/* footer component */}
                    <Footer />

                </body>
            </html >
        </>
    )
}