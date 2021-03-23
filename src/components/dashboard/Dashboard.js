import React from 'react';
import Sidebar from '../sidebar/Sidebar';

const Dashboard = ({userId}) => {
    return (
        <div className="d-flex" style={{height: '100vh'}}>
            <Sidebar userId={userId}/>
        </div>
    )
}

export default Dashboard
