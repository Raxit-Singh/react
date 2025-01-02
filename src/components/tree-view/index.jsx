/* eslint-disable react/prop-types */
import MenuList from "./menu-list";

const TreeView = ({ menu = [] }) => {
  return (
    <div className="bg-black">
      <div className="bg-gray-500 h-screen w-[400px]">
        <MenuList list={menu} />
      </div>
    </div>
  );
};

export default TreeView;
