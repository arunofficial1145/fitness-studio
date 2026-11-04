import React from 'react'
import { Link } from "react-router-dom";
function Abs() {
    return (

        <div className='muscle'>
            <h1 className="lable" > Ab Exercises</h1>
            <h5 className="h3" >Ab exercises. Build impressive "6-pack abs" with these movements.</h5>
            <div className='grid1'>
                <div>
                    <figcaption ><Link to="/AbCrunch"><img src="img/Ab Crunch.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1'>Ab Crunch</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption ><Link to="/AbominalHipThrust"> <img src="img/Abominal Hip Thrust.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1' style={{ marginLeft: '130px' }}>Abominal Hip Thrust</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption ><Link to="/DeadBug"> <img src="img/Dead Bug.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1' style={{ marginLeft: '130px' }}>Dead Bug</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption ><Link to="/DeclineBenchAlternatingLegRaise"> <img src="img/Decline Bench Alternating Leg Raise.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1' style={{ marginLeft: '100px' }} >Decline Bench <br /> AlternatingLeg Raise</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption ><Link to="/LowerAbdominalHipRoll"> <img src="img/Lower Abdominal Hip Roll.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1' style={{ marginLeft: '100px' }}>Lower Abdominal <br /> Hip Roll</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption ><Link to="/SeatedKneeTucks"> <img src="img/Seated Knee Tucks.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1' >Seated Knee Tucks</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption > <Link to="/SideCrunchWithLegLift"><img src="img/Side Crunch With Leg Lift.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1' >Side Crunch With Leg Lift</figure>
                    </figcaption>
                </div>
                <div>
                    <figcaption ><Link to="/WeightedRussianTwist"> <img src="img/Weighted Russian Twist.png" alt="" style={{ borderRadius: '50px', cursor: 'pointer', width: '200px', height: '300px', marginTop: '10px', marginLeft: '50px' }} /></Link>
                        <figure className='figcap1' >Weighted Russian Twist</figure>
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

export default Abs
