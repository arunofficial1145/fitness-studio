import React from 'react'
import { Link } from 'react-router-dom'
function DumbbellSideBends() {
    return (
        <div className='muscle'>
            <h1 className="h1">Dumbbell Side Bends Video Exercise Guide</h1>
            <video src="video/abs18.mp4" controls autoPlay loop muted className='video'></video>
            <div className='style'>
                <ul>
                    <h1 style={{ color: 'red' }}>Dumbbell Side Bends Instructions</h1>
                    <li>Stand tall with feet shoulder-width apart, holding a pair of dumbbells at your side.</li>
                    <li>Engage your core and keep your chest up.</li>
                    <li>Slowly bend sideways at the waist toward the dumbbell, lowering it toward your knee.</li>
                    <li>Pause briefly at the bottom of the movement.</li>
                    <li>Contract your obliques to return to the starting position. This is one rep.</li>
                    <li>Complete all reps on one side before switching to the other.</li>
                    <h1 style={{ color: 'red' }}>Dumbbell Side Bends Tips</h1>
                    <li>Use a light to moderate weight to focus on form and avoid straining your lower back.</li>
                    <li>Move slowly and with control, don’t rush the bend or the return.</li>
                    <li>Don’t lean forward or backward. The movement should be strictly side-to-side.</li>
                    <li>Exhale as you return to standing to engage your obliques more effectively.</li>
                    <li>Avoid overextending. Go just far enough to feel a stretch, not strain.</li>
                </ul>
            </div>
        </div>
    )
}

export default DumbbellSideBends
