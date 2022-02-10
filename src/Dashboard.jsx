import React, {useState, useEffect} from 'react'
import './dashboard.css'
import Card, {LongCard} from './Card';

function Dashboard() {
    const [filter, setFilter] = useState('daily');
    const [data, setData] = useState([]);
    
    // Load data into state on render
    useEffect(() => {
        fetch('data.json').then(data => {
            return data.json();
        }).then(data => {console.log(data); setData(data)});
    },[]);

    // change filter function. 
    function changeFilter(newValue){
        const validFilters = ['weekly','daily','monthly'];
        if(validFilters.includes(newValue)){
            setFilter(newValue);
            console.log(newValue);
        }else{
            console.log(validFilters.includes(newValue))
            console.log('entered value: ' + newValue);
            console.log('default Filter: daily')
        }
    }

    // Build Dash Cards
    function buildCards(){
        switch(filter){
            case 'daily' :
                return data.map((card, idx) => <Card key={idx} title={card.title} primaryMetrics={`${card.timeframes.daily.current}hrs`} secondaryMetrics={`Yesterday - ${card.timeframes.daily.previous}hrs`}/>);
            case 'weekly' :
                return data.map((card, idx) => <Card key={idx} title={card.title} primaryMetrics={`${card.timeframes.weekly.current}hrs`} secondaryMetrics={`Last week - ${card.timeframes.weekly.previous}hrs`}/>);
            case 'monthly' :
                return data.map((card, idx) => <Card key={idx} title={card.title} primaryMetrics={`${card.timeframes.monthly.current}hrs`} secondaryMetrics={`Last month - ${card.timeframes.monthly.previous}hrs`}/>);
            default: return;
        }
    }

    return (
        <div className="Dashboard">
            <LongCard filterDash={changeFilter} currentFilter={filter}/>
            {buildCards()}
            {/* <Card title='Work' primaryMetrics='32hrs' secondaryMetrics='Last Week - 36hrs'/> */}
        </div>
    )
}

export default Dashboard
