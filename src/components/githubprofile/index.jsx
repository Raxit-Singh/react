import React, { useEffect, useState } from "react";
import User from "./user";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("raxit-singh");
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUserData() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.github.com/users/${username}`,
      );
      const data = await res.json();
      if (data) {
        setUserData(data);
        setLoading(false);
        setUsername("");
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>{error}</div>;
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  function handleSubmit() {
    fetchUserData();
  }

  return (
    <div className="bg-black h-screen text-white flex  flex-col justify-center items-center">
      <div>
        <input
          type="text"
          name="github-username"
          placeholder="Enter your Github profile username.."
          onChange={(event) => setUsername(event.target.value)}
          className="p-2 rounded-lg "
        />
        <button
          className="ml-4 bg-gray-400 p-2 rounded-lg"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {userData ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
