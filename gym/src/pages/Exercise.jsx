import React from 'react'
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className='img'>
      <h1 class="lable">excirses by muscle group</h1>
      <h3 class="h3">Choose the muscle group you want to target. Once in the muscle group, use the sort and filter options
        to find the best exercises for the equipment you have, your training experience, and goals.</h3>
      <div className='grid'>
        <div>
          <figcaption > <Link to="/Abs"><img src="img/abs.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} /></Link>
            <figure className='figcap' > Abs</figure>
          </figcaption>
        </div>
        <div>
          <figcaption><Link to="/Obliques"><img src="img/obliques.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} /></Link>
            <figure className='figcap'>obliques</figure></figcaption>
        </div>
        <div>
          <figcaption><Link to="/Bicep"><img src="img/bicep.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} /></Link>
            <figure className='figcap'>Bicep</figure></figcaption>
        </div>
        <div>
          <figcaption><Link to="/Chest"><img src="img/chest.jpg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} /></Link>
            <figure className='figcap'>Chest</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/nick.jpg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Nick</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/sholder.jpg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Sholder</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/forearm.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Forearm</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/lat.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Lat</figure></figcaption>
        </div>
        <div>
          <figcaption > <Link to="img/traps.jpeg"><img src="img/benches.jpeg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} /></Link>
            <figure className='figcap' > Traps</figure>
          </figcaption>
        </div>
        <div>
          <figcaption><img src="img/tricep.jpg" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} />
            <figure className='figcap'>Tricep</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/quads.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} />
            <figure className='figcap'>Quads</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/hamstring (1).png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '10px' }} />
            <figure className='figcap'>Hamstring</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/glutes.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Glutes</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/calves.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Calves</figure></figcaption>
        </div>
        <div>
          <figcaption><img src="img/adductors.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '200px', marginTop: '50px' }} />
            <figure className='figcap'>Adductors</figure></figcaption>
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

export default Contact
