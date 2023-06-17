import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [mentors, setMentors] = useState([]);
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    // Fetch current user data
    axios
      .get("/user/getUser")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch available mentors
    axios
      .get("/user/getMentors")
      .then((response) => {
        setMentors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mentors:", error);
      });

    // Fetch available mentees
    axios
      .get("/user/getMentees")
      .then((response) => {
        setMentees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mentees:", error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userData.name}</h1>
      <h2>Your Profile</h2>
      {/* Render user profile data */}
      <div>Name: {userData.name}</div>
      <div>Contact: {userData.contact}</div>
      <div>Bio: {userData.bio}</div>
      <div>Field: {userData.field}</div>

      <h2>Available Mentors</h2>
      {/* Render available mentors */}
      {mentors.map((mentor) => (
        <div key={mentor._id}>
          <div>Name: {mentor.name}</div>
          <div>Contact: {mentor.contact}</div>
          <div>Bio: {mentor.bio}</div>
          <div>Field: {mentor.field}</div>
        </div>
      ))}

      <h2>Available Mentees</h2>
      {/* Render available mentees */}
      {mentees.map((mentee) => (
        <div key={mentee._id}>
          <div>Name: {mentee.name}</div>
          <div>Contact: {mentee.contact}</div>
          <div>Bio: {mentee.bio}</div>
          <div>Field: {mentee.field}</div>
        </div>
      ))}
    </div>
  );
}

export default ProfilePage;
