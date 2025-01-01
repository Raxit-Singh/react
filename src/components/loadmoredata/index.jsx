import { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const[disableButton, setDisableButton] = useState(false)

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`,
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(()=> {
    products.length === 100
     ? setDisableButton(true): setDisableButton(false)
  },[count])

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex flex-col gap-[20px] bg-black">
      <div className="grid grid-cols-5 gap-[10px]">
        {products && products.length
          ? products.map((items) => (
              <div
                key={items.id}
                className="flex flex-col p-5 rounded-lg border-solid border gap-[10px] justify-center items-center"
              >
                <img
                  className="w-[200px] h-[200px]"
                  src={items.thumbnail}
                  alt={items.title}
                />
                <p className="text-white">{items.title}</p>
              </div>
            ))
          : null}
      </div>
      <button
      disabled={disableButton}
        onClick={() => setCount(count + 1)}
        className="bg-gray-500 text-white flex justify-center items-center"
      >
        Load More
      </button>
      {disableButton&& <div className="flex justify-center items-center text-white">U have reached the end</div> }
    </div>
  );
};

export default LoadMoreData;
