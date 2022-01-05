import React from 'react';
import DashboardNavLink from './DashboardNavLink';

function DashboardNav() {
    return (
        <div className="dashboard-nav">
            <div>
                <h2 className="logo">GQ</h2>
            </div>
            <div className="db-nav-links">
                <DashboardNavLink 
                    img="https://user-images.githubusercontent.com/57569861/141170870-25e67ec3-d245-4ff8-9d52-1336aaa5a499.png"
                    name="Dashboard"
                    path="#"
                />
                <DashboardNavLink 
                    img="https://user-images.githubusercontent.com/57569861/141170870-25e67ec3-d245-4ff8-9d52-1336aaa5a499.png"
                    name="My Course"
                    path="#"
                />
                <DashboardNavLink 
                    img="https://user-images.githubusercontent.com/57569861/141170870-25e67ec3-d245-4ff8-9d52-1336aaa5a499.png"
                    name="Progress"
                    path="#"
                />
                <DashboardNavLink 
                    img="https://user-images.githubusercontent.com/57569861/141170870-25e67ec3-d245-4ff8-9d52-1336aaa5a499.png"
                    name="Schedule"
                    path="#"
                />
                <DashboardNavLink 
                    img="https://user-images.githubusercontent.com/57569861/141170870-25e67ec3-d245-4ff8-9d52-1336aaa5a499.png"
                    name="My Profile"
                    path="#"
                />
            </div>
            <div className="db-nav-bottom">
                <h1></h1>
            </div>
        </div>
    )
}

export default DashboardNav
