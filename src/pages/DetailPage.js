import React from 'react';
import UserDetail from '../components/UserDetail';
import HOC from '../components/HOC/HOC';

const DetailPage = () => {
    return (
        <div>
            <HOC>
                <UserDetail></UserDetail>
            </HOC>
        </div>
    )
}

export default DetailPage;
