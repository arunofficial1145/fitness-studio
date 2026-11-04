import React from 'react'
import { Link } from 'react-router-dom'
function StandingDumbbellDragcurl() {
   return (
        <div className='muscle'>
            <h1 className="h1">Standing Dumbbell Drag curl</h1>
            <video src="video/bicep3.mp4" autoPlay loop muted className='video'></video>
            <div className='style'>
                <ul>
                    <h1 style={{ color: 'red' }}>Standing Dumbbell Drag Curl Instructions</h1>
                    <li>Select the desired weight from the rack and assume a shoulder width stance.</li>
            <li>Using a supinated (palms up) grip, take a deep breath and curl the dumbbells directly up the front of your body.</li>
            <li>The elbows will actually drift behind the body as you try to keep the weight as close to your body as possible.</li>
            <li>Once the biceps are fully shortened, slowly lower the weight back to the starting position.</li>
            <li>Repeat for the desired number of repetitions.</li>
                    <h1 style={{ color: 'red' }}>Standing Dumbbell Drag Curl Tips</h1>
                    <li>Maintain a slight bend in the elbow at the bottom of the movement in order to keep tension through the biceps.</li>
            <li>Rotate the forearms slowly, excessive velocity may cause issues within the elbows or wrists.</li>
            <li>Using a slow eccentric (lowering portion) of the exercise can help to improve tension and mind muscle connection.</li>
                </ul>
            </div>
            <div className="page2">
                <h1 style={{ color: 'red' }} >Standing Dumbbell Drag Curl Overview :</h1>
                <h5 style={{ textIndent: '100px', paddingTop: '20px' }}>The dumbbell drag curl is a variation of the dumbbell curl and is used to build bicep muscles.</h5>
                <h5 style={{ textIndent: '100px', paddingTop: '20px' }}>The deadbug works as an anti-extension abdominal exercise in which you must keep the spine stable as you slowly raise your arm overhead.</h5>
                <h5 style={{ textIndent: '100px', paddingTop: '20px' }}>The deadbug gets its name because you look like a dead bug on its back with its legs in the air when you are performing the exercise.</h5>
            </div>
        </div>
  )
}

export default StandingDumbbellDragcurl
