import React, { useState } from "react";
import axios from "axios";

const JobPostForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); 

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    working_hours: "",
    preferred_experience: "BEGINNER",
    wage: "",
    skills: [],
    qualification: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value.split(",") });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("/api/postJob", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setMessage(response.data.message);
        setMessageType("success");
        setFormData({
          title: "",
          location: "",
          description: "",
          working_hours: 0,
          preferred_experience: "BEGINNER",
          wage: 0,
          skills: [],
          qualification: [],
        });
      }).catch((error) => {
        setMessage("Failed to post Job");
        setMessageType("error");
        console.log("Failed to Post Job: ", error);
      });
  };

  return (
    <>
    {message && <div className={`message ${messageType === "success" ? "success" : "error"}`}>{message}</div>}
      <button onClick={() => setShowForm(!showForm)}>{showForm ? "Hide Form" : "Show Form"}</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input className="text-black" type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div>
            <label>Location:</label>
            <input className="text-black" type="text" name="location" value={formData.location} onChange={handleChange} required />
          </div>

          <div>
            <label>Description:</label>
            <textarea className="text-black" name="description" value={formData.description} onChange={handleChange} required />
          </div>

          <div>
            <label>Working Hours:</label>
            <input className="text-black" type="number" name="working_hours" value={formData.working_hours} onChange={handleChange} required />
          </div>

          <div>
            <label>Preferred Experience:</label>
            <select name="preferred_experience" value={formData.preferred_experience} onChange={handleChange}>
              <option value="BEGINNER">BEGINNER</option>
              <option value="INTERMEDIATE">INTERMEDIATE</option>
              <option value="EXPERT">EXPERT</option>
            </select>
          </div>

          <div>
            <label>Wage:</label>
            <input className="text-black" type="number" name="wage" value={formData.wage} onChange={handleChange} required />
          </div>

          <div>
            <label>Skills (comma separated):</label>
            <input className="text-black" type="text" name="skills" onChange={(e) => handleArrayChange(e, "skills")} placeholder="Backend,Frontend,AI" required />
          </div>

          <div>
            <label>Qualification (comma separated):</label>
            <input className="text-black" type="text" name="qualification" onChange={(e) => handleArrayChange(e, "qualification")} placeholder="College Graduate,2 yrs Exp" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default JobPostForm;
