import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import DashboardNavLink from './common/DashboardNavLink';
import DashboardNav from './common/DashboardNav';
import SecondaryHeading from '../../typography/SecondaryHeading';
import ParagraphHeading from '../../typography/ParagraphHeading';
import SubText from '../../typography/SubText';
import FormButton from '../../utilities/FormButton';
import { useHistory } from 'react-router-dom';


const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="dashboard-container">
                {/* NAVBAR (left side) */}
                <DashboardNav />

                {/* COURSE (middle part) */}

                <div class="dashboard-middle">
                    <div style={{height:"90%", width:"1px",background:"#EAEAEA", marginRight:"4vw"}}></div> 
                    <div>
                        <SecondaryHeading text="Your Course"/>
                        <div className="course-card">
                            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
                                <ParagraphHeading text="Machine Learning" />
                                <SubText text="You have 2 hours of work left this week." />
                            </div> 
                            <FormButton text="Continue"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;