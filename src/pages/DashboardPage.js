import React from 'react';
import Dashboard from '../components/Dashboard';
import HOC from '../components/HOC/HOC';

const DashboardPage = () => {
    return (
        <div>
            <HOC>
                <Dashboard></Dashboard>
            </HOC>
        </div>
    )
}

export default DashboardPage;
