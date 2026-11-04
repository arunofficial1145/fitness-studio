import React from 'react'
import { Link } from 'react-router-dom'
function Obliques() {
    return (
        <div className='muscle'>
            <h1 class="lable" >Obliques Exercises</h1>
            <h5 class="h3" >Obliques exercises. Build your obliques for an impressive core.</h5>
            <div className='grid1'>
                <div>
                    <figcaption > <Link to="/Sidecrunch"><img src="img/abs31.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1'>Side Crunch <br /> (AKA Oblique Crunch)</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption > <Link to="/Seatedtwist"><img src="img/abs32.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1' style={{ marginLeft: '130px' }}>seated twist</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption ><Link to="/Dumbbellsidebends"> <img src="img/abs33.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1' style={{ marginLeft: '130px' }}>Dumbbell Side Bends</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption > <img src="img/abs34.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} />
                        <figure className='figcap1' style={{ marginLeft: '100px' }} >Side Plank with Hip Dip</figure>
                    </figcaption>
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

export default Obliques
