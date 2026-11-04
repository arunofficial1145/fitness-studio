import React from 'react'
import { Link } from 'react-router-dom'
function Seatedtwist() {
    return (
        <div className='muscle'>
            <h1 className="h1">Seated Twist (On Floor) Video Exercise Guide</h1>
            <video src="video/abs19.mp4" controls autoPlay loop muted className='video'></video>
            <div className='style'>
                <ul>
                    <h1 style={{ color: 'red' }}>Seated Twist (On Floor) Instructions</h1>
                    <li>Sit on the floor with your legs extended straight out in front of you.</li>
                    <li>Hold a barbell across the back of your shoulders (not your neck), gripping it just outside shoulder-width.</li>
                    <li>Keep your chest tall and back straight, and engage your core for stability.</li>
                    <li>Slowly rotate your torso to one side, keeping your hips and legs still.</li>
                    <li>Pause briefly at the end of the twist, feeling the contraction in your obliques.</li>
                    <li>Return to center, then rotate to the alternate side.</li>
                    <li>Continue alternating sides for the desired number of reps.</li>
                    <h1 style={{ color: 'red' }}>Seated Twist (On Floor) Tips</h1>
                    <li>Don't look from side to side. Keep your head facing forward.</li>
                    <li>Keep your abs tight throughout the whole set.</li>
                    <li>Keep your back straight.</li>
                </ul>
            </div>
        </div>
    )
}

export default Seatedtwist
