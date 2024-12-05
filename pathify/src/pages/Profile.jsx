import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../components/AuthContext.jsx';
import JobCard from '../components/JobCard.jsx';
import "./Profile.css"

const Profile = () => {
  const navigate = useNavigate();
  const { profile } = useContext(AuthContext);
  
  return (
    profile ? (
    <div>
      <div className="profile-info-container">
        <h1>My Profile</h1>
        <div className="basic-profile-info">
          <div className="profile-details">
            <div className="profile-name-school-major">
              <h2>{profile.username}</h2>
              <h3>Industry: {profile.industry}</h3>
              <h3>Major: {profile.major}</h3>
            </div>
          </div>
        </div>
        <h3>Experiences: </h3>
        {profile.experiences.map((row, index) => {
          return (<JobCard key={index} expObj={row} />);
        })}
      </div>
      <div className="profile-buttons">
        <button onClick={()=> navigate('/add-new-experience')} className="add-experience">Add New Experience</button>
        <button onClick={()=> navigate('/edit-profile')} className="edit-profile">Edit Profile</button>
      </div>
    </div>
    ) : <p> Loading... </p>
  );
};

export default Profile;