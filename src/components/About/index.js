import React from 'react';
 //import './styles.scss';

function About(){

    return(
        <div>
        <div className="conatiner">
            <div className="row">
                <div className="col-sm-8 offset-sm-2">

                    <h4>rgh.hasmy (Pvt) Ltd.</h4>
                    <p>Rathnapura road</p>
                    <h5>Agalawatta-Mathugama</h5>
                    <h5>Tel - 0776808389</h5>
                    <hr/>
                    <div id="map"></div>

                </div>
            </div>
        </div>
        <br/>
        <section className="page-section ">
        <div className="container bg-primary">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">We've got what you need!</h2>
                    <hr className="divider light my-4" />
                    <p className="text-white-50 mb-4">You love the way they treat you. Employees are friendly, knowledgeable, and quick to respond. They are there to take care of you, and in turn, you take care of them by doing business with them. !</p>
                    <h6>Our Vission</h6>
                    <p2>To lead with integrity through innovation, excellence and services.</p2><br/><br/>
                    <h6>Our Mission</h6>
                    <p2>We strive to be the leading natural stone distributor, fabricator and installer in Sri Lanka by providing superior products and services with dedication and enthusiasm of employees.</p2><br/><br/>
                    <button class="btn btn-primary">
                    <a className="btn btn-light btn-xl js-scroll-trigger" href="/Contact" >Get Started!</a>
                    </button>
                </div>
            </div>
        </div>
        </section>
        </div>
    );

}

export default About;