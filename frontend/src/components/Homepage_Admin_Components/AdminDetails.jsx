import React from "react";
import { useState, useEffect } from "react";
import Posted_Jobs from "./Posted_Jobs";
import JobCard from "../Homepage/JobCard";
import Assigned_Jobs from "./Assigned_Jobs";
import axios from "axios";

const AdminDetails = () => {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/profile");
      const profile_data = response.data.profile;
      setProfileData(profile_data);
    })();
  }, []);

  return( <>

    {profileData !== null ? (
        <>
          <div className="text-white">
            <h2>Username: {profileData.username}</h2>
          </div>
          <div className="text-white">
            <h2>Name: {profileData.name}</h2>
          </div>

          {profileData.bio ? (
            <div className="text-white">
              <h2>Bio: {profileData.bio}</h2>
            </div>
          ) : (
            <p>Bio: Not set</p>
          )}

          {profileData.jobsPosted?.length != 0 ? (
            <div className="text-white">
              <h2>
              Jobs Currently Posted:
                {profileData.jobsPosted.map((job, index) => (
                  <Posted_Jobs key={index} job={job}></Posted_Jobs>
                ))}
              </h2>
            </div>
          ) : (
            <p>Jobs Currently Posted: 0</p>
          )}
          
          {profileData.jobsAssigned?.length != 0 ? (
            <div className="text-white">
              <h2>
              Jobs Assigned:
                {profileData.jobsAssigned.map((job, index) => (
                  <Assigned_Jobs key={index} job={job}></Assigned_Jobs>
                ))}
              </h2>
            </div>
          ) : (
            <p>Jobs Assigned: 0</p>
          )}

          {(profileData.reviews && profileData.reviews.length != 0 )? (
            <div className="text-white">
              <h2>
              Reviews: 
                {profileData.reviews.map((review, index) => (
                  <h2 className="text-white" key={index}>
                    {review}
                  </h2>
                ))}
              </h2>
            </div>
          ) : (
            <p>Reviews: 0</p>
          )}

          <div className="text-white">Rating: {profileData.rating}</div>
          <div className="text-white">Number of Rating: {profileData.ratingCount}</div>{" "}
        </>
      ) : (
        <h2>No data</h2>
      )}
  </>);
};

export default AdminDetails;
