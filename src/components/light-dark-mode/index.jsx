import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  console.log(theme);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-black text-white h-screen flex flex-col items-center pt-[400px] gap-5 transition-all duration-1000"
          : "bg-white text-black h-screen flex flex-col items-center pt-[400px] gap-5 transition-all duration-1000"
      }
    >
      <h1>Hello!</h1>
      <button
        className={
          theme === "dark"
            ? "bg-white text-black rounded-lg p-3"
            : "bg-black text-white rounded-lg p-3"
        }
        onClick={handleTheme}
      >
        Change Theme
      </button>
    </div>
  );
};

export default LightDarkMode;
