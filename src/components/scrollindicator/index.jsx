/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  }

  function handleScroll() {
    const userScrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((userScrolled / height) * 100);
  }

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>{error}</div>;
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="text-center bg-black text-white">
        <h1 className="text-4xl mb-4">Scroll Tester</h1>
      <div className="w-screen border-4 border-gray-200 fixed top-0">
        <div style={{width: `${scrollPercentage}%`}} className={`border-4 border-gray-600 fixed left-0 top-0`}></div>
      </div>
      {data && data.length
        ? data.map((dataItems) => <p>{dataItems.title}</p>)
        : null}
    </div>
  );
};

export default ScrollIndicator;
