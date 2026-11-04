import React, { useState } from 'react'

function Store5() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => {
  setCount(prev => Math.max(0, prev - 1));
};

    return (
        <div>
            <img
                src="img/store3copy.png"
                alt=""
                style={{ width: '400px', paddingTop: '100px', paddingLeft: '30px' }}
            />

            <div className="whey1">
                <h1 className="whey"> Perfect Sports Ultra Hulk Whey Protein</h1>
                <h5>
                    A Perfect Sports Product
                    Fuel Your Goals with 24g of Pure Protein
                </h5>
                <ul>
                    <li>100% grass-fed whey protein concentrate</li>
                    <li>11g of EAAs and 5g of BCAAs</li>
                    <li>Keto-approved whey protein</li>
                    <li>No artificial colors, dyes or fillers</li>
                </ul>
            </div>

            <div>
                <h2 style={{ color: 'white', marginLeft: '40px', fontWeight: 'bold', marginTop: '40px' }}>Quantity</h2>
                <div className='count'>
                    <p onClick={increase} style={{ cursor: ' pointer' }}>+ </ p> {count}<p href="" onClick={decrease} style={{ cursor: ' pointer' }}>-</p>
                    {/* <p className='count'>share</p> */}
                    <button style={{ borderRadius: '50px', padding: '0% 20%', fontWeight: 'bold', marginLeft: '10px' }}>share </button>

                </div>
                <button type="button" class="btn btn-outline-primary" style={{ marginLeft: '35px', marginTop: '-20px', width: '400px', borderRadius: '50px' }} >add to cart</button>
                <button type="button" class="btn btn-outline-primary" style={{ marginLeft: '-28%', marginTop: '100px', width: '400px', borderRadius: '50px' }} >buy now</button>
            </div>
            <footer style={{width:'110%'}}> 

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

export default Store5
