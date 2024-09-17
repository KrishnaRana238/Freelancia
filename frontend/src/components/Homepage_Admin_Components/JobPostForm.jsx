import React from "react";
import { useState } from "react";
import axios from "axios";

const JobPostForm = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>{showForm ? "Hide Form" : "Show Form"}</button>
      {showForm && (
        <form>
          <input type="text" placeholder="Job Title" />
          <input type="text" placeholder="Location" />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default JobPostForm;
