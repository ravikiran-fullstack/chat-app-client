import React, {useContext} from 'react';

import Sidebar from '../sidebar/Sidebar';
import OpenChat from '../openChat/OpenChat';

const Dashboard = ({userId}) => {
    

    return (
        <div className="d-flex" style={{height: '100vh'}}>
            <Sidebar userId={userId}/>
            <OpenChat/>
        </div>
    )
}

export default Dashboard
