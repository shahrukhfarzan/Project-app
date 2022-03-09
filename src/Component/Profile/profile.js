import '../Profile/profile.css';

const Profile = ()=>{
    return(
        <div className="profile-wrapper">
        <h1>User profile</h1>
        
        <div className='profile-card'>
           <center> <img src={localStorage.getItem('organisationLogo')}  alt="logo"/></center>
            <p>{localStorage.getItem('email')}</p>
            <p>{localStorage.getItem('firstName')}</p>
            <p>{localStorage.getItem('lastName')}</p>
            <p>{localStorage.getItem('mobile')}</p>
            <p>{localStorage.getItem('organisationName')}</p>
            <button className='btn'>log out</button>
            </div>
        </div>
    );
}

export default Profile;