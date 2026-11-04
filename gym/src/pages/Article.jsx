import React from 'react';
import { Link } from "react-router-dom";

function Article() {
  return (
    <div>
      <h1 class="lable">Articles & Guides</h1>
      <h3 class="h3">Learn how to build muscle, burn fat and stay motivated. These guides will teach you how to reach your
        health and fitness goals.</h3>
      <div className='grid'>
        <div>
          <figcaption > <Link to="/muscle-building"><img src="img/benches.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} /></Link>
            <figure className='figcap' >Muscle Building</figure>
          </figcaption>
        </div>
        <div>
          <figcaption> <Link to="/Training"><img src="img/chest press.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} /></Link>
            <figure className='figcap'>Training</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/running.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} />
            <figure className='figcap'>fat loss</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/food3.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} />
            <figure className='figcap'>Nutrition</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/supplements.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Supplements</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/women workout.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>for women</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/fitness lifestail.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Fitness Lifestyle</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/motaviting.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Motivation</figure></figcaption>
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
  )
}

export default Article;

