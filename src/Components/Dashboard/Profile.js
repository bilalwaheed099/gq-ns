import React, {useState} from 'react'
import SecondaryHeading from '../../typography/SecondaryHeading';
import DashboardNav from './common/DashboardNav';
import FormInput from '../../utilities/FormInput';
import ParagraphHeading from '../../typography/ParagraphHeading';
import SubText from '../../typography/SubText';
import FormButton from '../../utilities/FormButton';


function Profile() {
    const [profileCreated, setProfileCreated] = useState(false);

    function saveProfileHandler(e){
    }

    function createProfileHandler(e){
        e.preventDefault();
        console.log("clicked")
        setProfileCreated(true);
    }

    let createProfileSection = (<div>
                                    <SecondaryHeading text="You have not created your profile yet"/>
                                    <SubText text="Your profile is the first step in your quest." />
                                    <FormButton text="Create profile now" handler={createProfileHandler}/>
                                </div>);
    let profileForm = (
        <form style={{
            display:"flex",
            flexDirection:"column",
            width:"45vw",
        }}>
            <SecondaryHeading text="Create your profile"/>
            <SubText text="* marks mandatory fields" />
            <input className="form-input" placeholder="What is your professional status?"/>
            <input className="form-input" placeholder="What goal you want to achieve?"/>
            <input className="form-input" placeholder="How would you describe yourself in regardsto your goal? (beginner, intermediate, expert)"/>
            <input className="form-input" placeholder="How many hours you want to allocate weekly?"/>
            <FormButton text="Save profile" handler={saveProfileHandler}/>
        </form>
    )   ;                         
    return (
        <div className="dashboard">
            <div className="dashboard-container">
                {/* NAVBAR (left side) */}
                <DashboardNav />

                {/* COURSE (middle part) */}

                <div className="dashboard-middle">
                    <div style={{height:"90%", width:"1px",background:"#EAEAEA", marginRight:"4vw"}}></div> 
                    {profileCreated?profileForm:createProfileSection}
                </div>
            </div>
        </div>
    )
}

export default Profile
