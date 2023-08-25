import Header from "../components/header"
import Footer from "../components/footer"
export default function Blogs() {
    return (
        <>

            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Disha Public School</title>
                    {/* <!-- <link href="./css/style.css" rel="stylesheet"> --> */}
                    <link href="./assets/css/blogs.css" rel="stylesheet" />
                    <link href="./assets/css/mediaquery.css" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@1,200&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                </head>
                <body>
                    {/* header component */}
                    <Header />

                    <div className="text">
                        Blog's
                    </div>

                    <div className="container my-3 ">
                        <div className="row" >

                            <div className="col-4  gx-2 mt-3">
                                <div className="card border-3 border-dark">
                                    <img src="./assets/pictures/content1.jpg" alt="" />
                                    <div className="card-body">
                                        <h1 className="card-title">lorem ipsum</h1>
                                        <div className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, distinctio. Cumque tempore ut numquam illo?</div>
                                        <button className="btn btn-warning my-3" id="1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                            Read more
                                        </button>
                                        <div className="collapse" id="collapseExample1">
                                            <div className="card card-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestias assumenda voluptatibus totam non enim obcaecati est commodi consequatur sunt fugit explicabo maiores facilis dolorem, ratione quas laborum tempora quam. Alias dolor ipsam odit eos!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4  gx-2 mt-3">
                                <div className="card border-3 border-dark">
                                    <img src="./assets/pictures/content1.jpg" alt="" />
                                    <div className="card-body">
                                        <h1 className="card-title">lorem ipsum</h1>
                                        <div className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, distinctio. Cumque tempore ut numquam illo?</div>
                                        <button className="btn btn-warning my-3" id="2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                            Read more
                                        </button>
                                        <div className="collapse" id="collapseExample2">
                                            <div className="card card-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate officiis impedit, adipisci mollitia accusamus saepe quasi magnam consequatur qui necessitatibus unde deserunt omnis. Eum magnam cumque earum hic itaque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 gx-2 mt-3">
                                <div className="card border-3 border-dark">
                                    <img src="./assets/pictures/content1.jpg" alt="" />
                                    <div className="card-body">
                                        <h1 className="card-title">lorem ipsum</h1>
                                        <div className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, distinctio. Cumque tempore ut numquam illo?</div>
                                        <button className="btn btn-warning my-3" id="3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                            Read more
                                        </button>
                                        <div className="collapse" id="collapseExample3">
                                            <div className="card card-body">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit praesentium accusantium natus distinctio eaque consectetur, blanditiis quisquam. Deserunt voluptatem blanditiis, quaerat atque sapiente dolores numquam.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <!---------------------main-content-----------------------> */}
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-3  gx-2 mt-5 mb-5">
                                <div className="card border-3 border-dark">
                                    <img src="./assets/pictures/content1.jpg" alt="" />
                                    <div className="card-body">
                                        <h1 className="card-title">lorem ipsum</h1>
                                        <div className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, distinctio. Cumque tempore ut numquam illo?</div>
                                        <button className="btn btn-warning my-3" id="2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                                            Read more
                                        </button>
                                        <div className="collapse" id="collapseExample5">
                                            <div className="card card-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate officiis impedit, adipisci mollitia accusamus saepe quasi magnam consequatur qui necessitatibus unde deserunt omnis. Eum magnam cumque earum hic itaque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3  gx-2 mt-5 mb-5">
                                <div className="card border-3 border-dark">
                                    <img src="./assets/pictures/content1.jpg" alt="" />
                                    <div className="card-body">
                                        <h1 className="card-title">lorem ipsum</h1>
                                        <div className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, distinctio. Cumque tempore ut numquam illo?</div>
                                        <button className="btn btn-warning my-3" id="2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
                                            Read more
                                        </button>
                                        <div className="collapse" id="collapseExample6">
                                            <div className="card card-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate officiis impedit, adipisci mollitia accusamus saepe quasi magnam consequatur qui necessitatibus unde deserunt omnis. Eum magnam cumque earum hic itaque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3  gx-2 mt-5 mb-5">
                                <div className="card border-3 border-dark">
                                    <img src="./assets/pictures/content1.jpg" alt="" />
                                    <div className="card-body">
                                        <h1 className="card-title">lorem ipsum</h1>
                                        <div className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, distinctio. Cumque tempore ut numquam illo?</div>
                                        <button className="btn btn-warning my-3" id="2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
                                            Read more
                                        </button>
                                        <div className="collapse" id="collapseExample7">
                                            <div className="card card-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptate officiis impedit, adipisci mollitia accusamus saepe quasi magnam consequatur qui necessitatibus unde deserunt omnis. Eum magnam cumque earum hic itaque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer component */}
                    <Footer />


                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
                </body>
            </html >
        </>
    )
}