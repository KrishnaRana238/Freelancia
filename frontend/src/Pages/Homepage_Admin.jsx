import React from "react";
import AdminDetails from "../components/Homepage_Admin_Components/AdminDetails";
import JobPostForm from "../components/Homepage_Admin_Components/JobPostForm";
const Homepage_Admin = () => {
    return (
        <>
            <JobPostForm></JobPostForm>
            <AdminDetails></AdminDetails>
        </>
    )
}
export default Homepage_Admin;