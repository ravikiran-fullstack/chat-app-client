import React from 'react';
import Sidebar from '../sidebar/Sidebar';

const Dashboard = ({userId}) => {
    return (
        <div>
            Welcome {userId}
            <Sidebar/>
        </div>
    )
}

export default Dashboard
