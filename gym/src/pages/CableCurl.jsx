import React from 'react'
import { Link } from 'react-router-dom'
function CableCurl() {
  return (
        <div className='muscle'>
            <h1 className="h1">Cable Curl (Rope Extension) Video Exercise Guide</h1>
            <video src="video/bicep2.mp4" controls autoPlay loop muted className='video'></video>
            <div className='style'>
                <ul>
                    <h1 style={{ color: 'red' }}>Cable Curl (Rope Extension) Instructions</h1>
                    <li>Set up for this type of cable curl by attaching a rope extension to the low pulley cable and selecting the weight you want to use on the stack.</li>
                    <li>Stand facing the cable machine with your legs shoulder-width apart.</li>
                    <li>Grasp the rope extension with a neutral grip (thumbs facing the body).</li>
                    <li>With your elbows tucked in by your sides, slowly curl the rope up as far as possible.</li>
                    <li>Squeeze the biceps at the top of the movement, and then slowly lower the weight back to the starting position. This is one rep.</li>
                    <li>Repeat for desired reps.</li>
                    <h1 style={{ color: 'red' }}>Cable Curl (Rope Extension) Tips</h1>
                    <li>Keep your elbows tucked in at your sides and don't allow them to come forward as you curl the weight up.</li>
                    <li>Don't lean back or swing as you curl the weight up.
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default CableCurl
