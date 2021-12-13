import React from 'react'
import './dashboard.css'

export default function Card({title, primaryMetrics, secondaryMetrics}) {

    const iconPath = () => {
        switch(title){
            case 'Work': 
               return "images/icon-work.svg";
            case 'Play':
                return "images/icon-play.svg";
            case 'Study':
                return 'images/icon-study.svg';
            case 'Exercise':
                return 'images/icon-exercise.svg';
            case 'Social':
                return 'images/icon-social.svg';
            case 'Self Care':
                return 'images/icon-self-care.svg'; 
            default: return;
        }
    }

    return (
        <div className={`Card ${title.replace(' ','_')}`} >
           <img src={iconPath()} alt="" className="Card__icon" />
            <div className="Card__details">
                <div className="row-sb Card__header">
                    <h1 className='fw-heavy'>{title}</h1>
                    <img src="images/icon-ellipsis.svg" alt="more" className='more-icon'/>
                </div>
                <div className="row-sb">
                    <h2 className='primaryMetrics fw-light'>{primaryMetrics}</h2>
                    <p className='secondaryMetrics'>{secondaryMetrics}</p>
                </div>
            </div>
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
                <ul className="filters">
                    <li>Daily</li>
                    <li className='active'>Weekly</li>
                    <li>Monthly</li>
                </ul>
            
        </div>
    );
}
