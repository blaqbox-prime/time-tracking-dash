import React, {useState} from 'react'
import './dashboard.css'
import Card, {LongCard} from './Card';

function Dashboard() {
    return (
        <div className="Dashboard">
            <LongCard/>
            <Card title='Work' primaryMetrics='32hrs' secondaryMetrics='Last Week - 36hrs'/>
        </div>
    )
}

export default Dashboard
