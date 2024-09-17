// import React from "react";
// import axios from "axios";
// const JobCard = ({ job }) => {
//     const applyforJob = () => {
//         const url = `/api/applyJob/${job._id}`;
//         axios.post(url, {
//             headers: {
//               "Content-Type": "application/json", 
//             },
//           });
//     }
//   return (
//     <div id={job._id}>
//       <h2 className="text-white">Title: {job.title}</h2>
//       <h2 className="text-white">Location: {job.location}</h2>
//       <h2 className="text-white">Description: {job.description}</h2>
//       <h2 className="text-white">Preferred Working Hours: {job.working_hours}</h2>
//       <h2 className="text-white">Preferred Experience: {job.preferred_experience}</h2>
//       <h2 className="text-white">Wage: {job.wage}</h2>
//       <h2 className="text-white">Skills:</h2>
//       {job.skills.map((skill, index) => (
//         <h2 className="text-white" key={index}>
//           {skill}
//         </h2>
//       ))}

//       <h2 className="text-white">Qualification:</h2>
//       {job.qualification.map((qualification, index) => (
//         <h2 className="text-white" key={index}>
//           {qualification}
//         </h2>
//       ))}
//       <h2 className="text-white">Proposals: {job.proposals}</h2>
//       <h2 className="text-white">Posted By: {job.postedBy.name}</h2>
//       <button onClick={applyforJob} className="btn btn-primary">Apply</button>
//     </div>
//   );
// };

// export default JobCard;
import React from "react";
import axios from "axios";

const JobCard = ({ job, client }) => {
  const applyforJob = async () => {
    const url = `/api/applyJob/${job._id}`;
    try {
      await axios.post(url, {}, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  return (
    <>
    <div className="flex space-x-4">
      {/* Job Card */}
      <div className="flex-1 bg-gray-900 text-white hover:bg-gray-600 p-4 mt-4 rounded-lg shadow-md space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{job.title}</h2>
          <span className="text-sm bg-orange-500 px-3 py-1 rounded-full">
            {job.location}
          </span>
        </div>

        <p className="text-white-300">{job.description}</p>

        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Working Hours:</h3>
            <p>{job.working_hours}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Experience:</h3>
            <p>{job.preferred_experience}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Wage:</h3>
          <p>{job.wage}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Skills:</h3>
          <ul className="list-disc list-inside">
            {job.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Qualifications:</h3>
          <ul className="list-disc list-inside">
            {job.qualification.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm">Proposals: {job.proposals}</span>
          <span className="text-sm">Posted By: {job.postedBy.name}</span>
        </div>

        <button
          onClick={applyforJob}
          className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
        >
          Apply
        </button>
      </div>

      {/* Client Profile */}
    </div>
    </>
  );
};

export default JobCard;
