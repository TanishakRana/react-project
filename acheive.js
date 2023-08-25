import Header from "../components/header"
import Footer from "../components/footer"
export default function Acheive() {
    return (
        <>

            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Disha Public School</title>
                    {/* <link href="./assets/css/contact.css" rel="stylesheet" />
                    <link href="./assets/css/style.css" rel="stylesheet" />
                    <link href="./assets/css/blogs.css" rel="stylesheet" /> */}
                    <link href="./assets/css/acheive.css" rel="stylesheet" />
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

                    {/* header component */}
                    <Header />



                    <div className="text2">
                        Our Achievement's
                    </div>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-3 mt-5 mb-5 pb-5">
                                <div className="card">
                                    <img src="./assets/pictures/content1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">lorem ipsum</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore modi exercitationem delectus!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 mt-5 mb-5 pb-5">
                                <div className="card">
                                    <img src="./assets/pictures/content1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">lorem ipsum</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore modi exercitationem delectus!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 mt-5 mb-5 pb-5">
                                <div className="card">
                                    <img src="./assets/pictures/content1.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">lorem ipsum</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore modi exercitationem delectus!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* footer component */}
                    <Footer />

                </body>
            </html>
        </>
    )
}