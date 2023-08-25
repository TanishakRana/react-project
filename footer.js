export default function Footer() {
    return (
        <>
            <footer className="foot">
                <div className="first-foot">
                    <img src="./assets/pictures/logo.png" alt="!" />
                    <h4>2023 © copyright<br />
                        All right reserved</h4>
                </div>
                <div className="second-foot">
                    <h3>Navigations</h3>
                    <h4 className="sf1"> <a href="./index.html">Home</a><br />
                        <a href="./school.html">School Gallary</a><br />
                        <a href="./acheive.html">Achievement</a><br />
                        <a href="./acadamic.html">Acadamics</a><br />
                        <a href="./contact.html">Contact us</a><br />
                        <a href="./registration.html">Registration</a><br />
                    </h4>

                </div>
                <div className="third-foot">
                    <h3>Contact Us</h3>
                    <h5>Phone: +0028 55 67 67<br />
                        Email: yourmail@yourdomain.com<br />
                        Address: Jl. Pirus No. 13, Cisaranten Kulon.</h5>
                    <a href="https://www.facebook.com/profile.php?id=100089317296691"><i className="fa-brands fa-facebook"></i></a>
                    &nbsp;  &nbsp;   <a href="avishal95@gmail.com"><i className="fa-solid fa-square-envelope"></i></a>
                </div>
            </footer>
        </>
    )
}