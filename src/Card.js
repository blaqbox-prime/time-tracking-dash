import React from 'react'
import './dashboard.css'

export default function Card() {
    return (
        <div className="Card">
            
        </div>
    )
}

// Long Card
export function LongCard(){
    return (
        <div className="LongCard">
            <div className="LongCard__top">
                <div className="LongCard__user">
                    <img src="/images/image-jeremy.png" alt="" width="70px" height="70px" className="avatar" />
                    <div className="user-detail">
                    <p className="fw-light">Report for</p>
                    <h1 className="fw-light">Jeremy Robson</h1>
                    </div>
                </div>
            </div>
            {/* Filters */}
            
        </div>
    );
}
