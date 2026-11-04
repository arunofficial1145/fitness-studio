import React from 'react';
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <center>
        <div style={{ height: '400px', paddingTop: '10%', paddingLeft: '0px', backgroundColor: 'whitesmoke' }}>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/shop 1.webp" className="d-block w-100" alt="" style={{ height: '400px', width: '110px' }} />
              </div>
              <div className="carousel-item">
                <img src="img/shop 2.webp" className="d-block w-100" alt="" style={{ height: '400px', width: '110px' }} />
              </div>
              <div className="carousel-item">
                <img src="img/shop 3.webp" className="d-block w-100" alt="" style={{ height: '400px', width: '110px' }} />
              </div>
              <div className="carousel-item">
                <img src="img/shop 4.webp" className="d-block w-100" alt="" style={{ height: '400px', width: '110px' }} />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </center>
      <div className='the'>
        <div class="card" >
          <img src="img/store 1.jpg" alt="" />
          <div class="card-body">
            <center><h4 >Mutant Whey</h4></center>
            <div>
              <p className='P'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 4,699</b></center>
              <center><Link to="/Store2"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 2.webp" alt="" />
          <div class="card-body">
            <center><h4 >Optimum Nutrition Gold Standard 100% Whey</h4></center>
            <div>
              <p className='P1'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 9,699</b></center>
              <center><Link to="/Store3"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 3.webp" alt="" />
          <div class="card-body">
            <center><h4 >Perfect Sports Hulk Clean Mass Gainer whey</h4></center>
            <div>
              <p className='P1'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 9,699</b></center>
              <center><Link to="/Store5"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 4.webp" alt="" />
          <div class="card-body">
            <center><h4 >Nutrex Outrage, 30 Servings</h4></center>
            <div>
              <p className='P2'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 2,999</b></center>
              <center><Link to="/Store6"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 5.webp" alt="" />
          <div class="card-body">
            <center><h4 >scivation xtend, 30 serving</h4></center>
            <div>
              <p className='P2'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 4,599</b></center>
              <center><Link to="/Store13"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 6.webp" alt="" />
          <div class="card-body">
            <center><h4 >nutrex 100% whey</h4></center>
            <div>
              <p className='P'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 4,000</b></center>
              <center><Link to="/Store8"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 7.webp" alt="" />
          <div class="card-body">
            <center><h4 >MusclePharm Combat Ready Protein Bar, Box of 12</h4></center>
            <div>
              <p className='P1'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 1,199</b></center>
              <center><Link to="/Store9"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 8.webp" alt="" />
          <div class="card-body">
            <center><h4 >BSN Syntha-6 Edge, 48 Servings</h4></center>
            <div>
              <p className='P2'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 6,400</b></center>
              <center><Link to="/Store10"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 9.webp" alt="" />
          <div class="card-body">
            <center><h4 >Force Factor Men's Multivitamin, 60 Tablets</h4></center>
            <div>
              <p className='P1'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 2,999</b></center>
              <center><Link to="/Store11"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 10.webp" alt="" />
          <div class="card-body">
            <center><h4 >Rule 1 Essential Amino 9, 30 Servings</h4></center>
            <div>
              <p className='P2'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 3,900</b></center>
              <center><Link to="/Store12"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>

      </div>
      <img src="img/shop 5.webp" alt="" style={{ width: '100%', marginTop: '-10px' }} />
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{ width: '100%' }} >watches mi.20%off extra off.</div>
      </div>
      <div className='the1'>
        <div class="card" >
          <img src="img/store 11.jpg" alt="" />
          <div class="card-body">
            <center><h4 >AllMax Nutrition Gold AllWhey</h4></center>
            <div>
              <p className='P2'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 4,699</b></center>
              <center><button type="button" class="btn btn-outline-primary">
                view product</button></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 12.jpg" alt="" />
          <div class="card-body">
            <center><h4 >Rule 1 Roar, 30 servings</h4></center>
            <div>
              <p className='P2'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 599</b></center>
              <center><button type="button" class="btn btn-outline-primary">
                view product</button></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 13.jpg" alt="" />
          <div class="card-body">
            <center><h4 >Perfect Sports Hulk Clean Mass Gainer whey</h4></center>
            <div>
              <p className='P1'>Mutant Hardcore Iso</p>
              <center><b className='b'>₹ 5,259</b></center>
              <center><button type="button" class="btn btn-outline-primary">
                view product</button></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 14.webp" alt="" />
          <div class="card-body">
            <center><h4 >AllMax Nutrition Gold AllWhey</h4></center>
            <div>
              <p className='P2'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 8,000</b></center>
              <center><button type="button" class="btn btn-outline-primary">
                view product</button></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 15.webp" alt="" />
          <div class="card-body">
            <center><h4 >Optimum Nutrition Micronized Creatine Powder</h4></center>
            <div>
              <p className='P1'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 1,500</b></center>
              <center><button type="button" class="btn btn-outline-primary">
                view product</button></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 16.jpg" alt="" />
          <div class="card-body">
            <center><h4 >Gaspari Nutrition SuperPump Sport</h4></center>
            <div>
              <p className='P2'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 566</b></center>
              <center><button type="button" class="btn btn-outline-primary">
                view product</button></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 17.webp" alt="" />
          <div class="card-body">
            <center><h4 >GAT Sport Testrol</h4></center>
            <div>
              <p className='P'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 1,199</b></center>
              <center><button type="button" class="btn btn-outline-primary">
                view product</button></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 18.webp" alt="" />
          <div class="card-body">
            <center><h4 >BN Syntha-6 Edge, 48 ServingsS</h4></center>
            <div>
              <p className='P2'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 6,400</b></center>
              <center><button type="button" class="btn btn-outline-primary">
                view product</button></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 19.webp" alt="" />
          <div class="card-body">
            <center><h4 >Animal Pak</h4></center>
            <div>
              <p className='P'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 2,999</b></center>
              <center><button type="button" class="btn btn-outline-primary">
                view product</button></center>

            </div>

          </div></div>
        <div class="card" >
          <img src="img/store 20.jpg" alt="" />
          <div class="card-body">
            <center><h4 >Perfect Sports Diesel 100% New Zealand Whey Protein Isolate</h4></center>
            <div>
              <p className='P1'>LIMITED TIME PRICE CUT</p>
              <center><b className='b'>₹ 3,900</b></center>
              <center><Link to="/Cart"><button type="button" class="btn btn-outline-primary">
                view product</button></Link></center>

            </div>

          </div></div>

      </div>
      <div className='brand'>
        <h1>TOP BRAND </h1>
        <hr />
        <div className='brand1'>
          <img src="img/brand 1.webp" alt="" />
          <img src="img/brand 2.webp" alt="" />
          <img src="img/brand 3.webp" alt="" />
          <img src="img/brand 4.webp" alt="" />
          <img src="img/brand 5.webp" alt="" />
          <img src="img/brand 6.webp" alt="" />
          <img src="img/brand 7.webp" alt="" />
          <img src="img/brand 8.webp" alt="" />
          <img src="img/brand 9.webp" alt="" />
          <img src="img/brand 10.webp" alt="" />
          <img src="img/brand 11.webp" alt="" />
          <img src="img/brand 12.webp" alt="" />
          <img src="img/brand 13.webp" alt="" />
          <img src="img/brand 14.webp" alt="" />
          <img src="img/brand 15.webp" alt="" />
          <img src="img/brand 16.webp" alt="" />
          <img src="img/brand 17.webp" alt="" />
          <img src="img/brand 18.webp" alt="" />
          <img src="img/brand 19.webp" alt="" />
          <img src="img/brand 20.webp" alt="" />
        </div>
      </div>
      <footer>

        <div className="social ">
          <b style={{ color: 'white' }}>WORKOUT</b>
          <b style={{ color: 'white' }}>HEALTHY LIVING</b>
          <b style={{ color: 'white' }}>ABOUT</b>
          <b style={{ color: 'white' }}>MEMBERSHIP</b>
          <b>WORKOUT VIDEOS</b>
          <b>FITNESS</b>
          <b>CAREERS</b>
          <b style={{ color: 'white' }}>FB PLUS</b>
          <b>CUSTOM WORKOUT</b>
          <b>HEALTH</b>
          <b>TUTORIALS</b>
          <b style={{ color: 'white' }}>COMMUNITY</b>
          <b style={{ color: 'white' }}>PROGRAMS</b>
          <b>NUTRITION</b>
          <b>OUT TEAM</b>
          <b style={{ color: 'white' }}>REFERRAL PROGRAM</b>
          <b>WORKOUTS PROGRMS</b>
          <b>HEALTHY RECIPES</b>
          <b>B2B OPTIONS</b>
          <b style={{ color: 'white' }}>BLOG</b>
          <b>MEALS PLANS</b>
          <b>EXPERTS</b>
          <b></b>
          <b style={{ color: 'white' }}>CONTUCT US</b>
          <b>PILOT PROGRAMS</b>
          <b></b>
          <b></b>
          <b style={{ color: 'white' }}>FAQ</b>
          <b>ROUTINES</b>
          <b></b>
          <b></b>
          <b style={{ color: 'white' }}>STORE</b>

        </div>
        <img src="img/stay  strong.webp" alt="" className='foo' />
        <h1 style={{ fontSize: '80px', color: 'white', paddingLeft: '400px', marginTop: '-540px' }}>fitness</h1>
        <h6 style={{ color: 'white', paddingLeft: '400px', marginTop: '-10px', fontSize: '40px' }}>STUDIO</h6>
        <h4 style={{ paddingLeft: '400px', marginTop: '20px', fontSize: '20px' }}>STAY STRONG</h4>

        <hr style={{ marginTop: '250px' }} />
        <i class="fa-brands fa-square-facebook fa-beat-fade" style={{ marginLeft: '80%', fontSize: '25px', }}></i>
        <i class="fa-brands fa-instagram fa-beat-fade" style={{ marginLeft: '1%', fontSize: '25px', }}></i>
        <i class="fa-brands fa-whatsapp fa-beat-fade" style={{ marginLeft: '1%', fontSize: '25px', }}></i>
        <i class="fa-brands fa-youtube fa-beat-fade" style={{ marginLeft: '1%', fontSize: '25px', }}></i>
        <i class="fa-brands fa-x-twitter fa-beat-fade" style={{ marginLeft: '1%', fontSize: '25px', }}></i>
        <hr style={{ marginTop: '50px' }} />
      </footer>
    </div>
  );
}

export default About;