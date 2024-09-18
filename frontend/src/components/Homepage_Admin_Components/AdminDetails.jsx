// import React from "react";
// import { useState, useEffect } from "react";
// import Posted_Jobs from "./Posted_Jobs";
// import JobCard from "../Homepage/JobCard";
// import axios from "axios";

// const AdminDetails = () => {
//   const [profileData, setProfileData] = useState(null);
//   useEffect(() => {
//     (async () => {
//       const response = await axios.get("/api/profile");
//       const profile_data = response.data.profile;
//       setProfileData(profile_data);
//     })();
//   }, []);

//   return( <>

//     {profileData !== null ? (
//         <>
//           <div className="text-white">
//             <h2>Username: {profileData.username}</h2>
//           </div>
//           <div className="text-white">
//             <h2>Name: {profileData.name}</h2>
//           </div>

//           {profileData.bio ? (
//             <div className="text-white">
//               <h2>Bio: {profileData.bio}</h2>
//             </div>
//           ) : (
//             <p>Bio: Not set</p>
//           )}

//           {profileData.jobsPosted?.length != 0 ? (
//             <div className="text-white">
//               <h2>
//               Jobs Currently Posted:
//                 {profileData.jobsPosted.map((job, index) => (
//                   <Posted_Jobs key={index} job={job}></Posted_Jobs>
//                 ))}
//               </h2>
//             </div>
//           ) : (
//             <p>Jobs Currently Posted: 0</p>
//           )}
          
//           {profileData.jobsAssigned?.length != 0 ? (
//             <div className="text-white">
//               <h2>
//               Jobs Assigned:
//                 {profileData.jobsAssigned.map((job, index) => (
//                   <h2 className="text-white" key={index}>
//                     {job}
//                   </h2>
//                 ))}
//               </h2>
//             </div>
//           ) : (
//             <p>Jobs Assigned: 0</p>
//           )}

//           {(profileData.reviews && profileData.reviews.length != 0 )? (
//             <div className="text-white">
//               <h2>
//               Reviews: 
//                 {profileData.reviews.map((review, index) => (
//                   <h2 className="text-white" key={index}>
//                     {review}
//                   </h2>
//                 ))}
//               </h2>
//             </div>
//           ) : (
//             <p>Reviews: 0</p>
//           )}

//           <div className="text-white">Rating: {profileData.rating}</div>
//           <div className="text-white">Number of Rating: {profileData.ratingCount}</div>{" "}
//         </>
//       ) : (
//         <h2>No data</h2>
//       )}
//   </>);
// };

// export default AdminDetails;
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

  return (
    <>
      {profileData !== null ? (
        <>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-xl  text-orange-400 mb-4">
              Username:{" "}
              <span className="text-white">{profileData.username}</span>
            </h2>

            <div className="mb-4">
              <h2 className="text-lg  text-orange-400">
                Name: <span className="text-white">{profileData.name}</span>
              </h2>
            </div>

            {profileData.bio ? (
              <div className="mb-4">
                <h2 className="text-lg  text-orange-400">
                  Bio: <span className="text-white">{profileData.bio}</span>
                </h2>
              </div>
            ) : (
              <p className="text-lg text-orange-400">Bio: <span className="text-white"> Not set </span> </p>
            )}

            {/* Jobs Posted */}
            {profileData.jobsPosted?.length !== 0 ? (
              <div className="mb-4">
                <h2 className="text-lg mt-5 font-semibold text-orange-400">
                  Jobs Currently Posted:
                </h2>
                <div className="mt-2 space-y-3">
                  {profileData.jobsPosted.map((job, index) => (
                    <Posted_Jobs
                      key={index}
                      job={job}
                      className="bg-gray-700 p-4 rounded-md"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-white">Jobs Currently Posted: 0</p>
            )}

            {/* Jobs Assigned */}
            {profileData.jobsAssigned?.length !== 0 ? (
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-orange-400">
                  Jobs Assigned:
                </h2>
                <ul className="mt-2 list-disc list-inside text-white">
                  {profileData.jobsAssigned.map((job, index) => (
                    <li key={index}>{job}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-white">Jobs Assigned: 0</p>
            )}

            {/* Reviews */}
            {profileData.reviews?.length !== 0 ? (
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-orange-400">
                  Reviews:
                </h2>
                <div className="mt-2 space-y-2">
                  {profileData.reviews && profileData.reviews.map((review, index) => (
                    <p className="text-white" key={index}>
                      {review}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-white">Reviews: 0</p>
            )}

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-orange-400">
                Rating: <span className="text-white">{profileData.rating}</span>
              </h2>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-orange-400">
                Number of Ratings:{" "}
                <span className="text-white">{profileData.ratingCount}</span>
              </h2>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-white">No data available</h2>
      )}
    </>
  );
};

export default AdminDetails;
