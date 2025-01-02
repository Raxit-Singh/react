/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  BsArrowRightCircleFill,
  BsArrowLeftCircleFill,
} from "react-icons/bs";

const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(
        `${getUrl}?page=${page}&limit=${limit}`,
      );
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== " ") fetchImages(url);
  }, [url]);

  if (loading) {
    <div>Loading</div>;
  }

  if (error) {
    <div>there is an error {error}</div>;
  }

  function handlePrevious() {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1,
    );
  }

  function handleNext() {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1,
    );
  }

  return (
    <div className="bg-black pt-4 pb-5">
    <div className="flex relative justify-center items-center h-[450px] w-[600px]">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute w-8 h-8 text-white left-4"
      />
      {images && images.length
        ? images.map((imageItems, index) => (
            <img
              key={imageItems.id}
              src={imageItems.download_url}
              alt={imageItems.download_url}
              className={
                currentSlider === index
                  ? "w-full h-full rounded-lg"
                  : "hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute w-8 h-8 text-white right-4"
      />
      <span className="flex absolute bottom-4">
        {images &&
          images.map((_, index) => (
            <button
              onClick={() => setCurrentSlider(index)}
              className={
                currentSlider === index
                  ? "bg-white h-4 w-4 rounded-2xl border-none outline-none ml-1"
                  : "bg-gray-400 h-4 w-4 rounded-2xl border-none outline-none ml-1"
              }
              key={index}
            ></button>
          ))}
      </span>
    </div>
    </div>
  );
};

export default ImageSlider;
