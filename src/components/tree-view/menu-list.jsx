/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import MenuItem from "./menu-item";

const MenuList = ({ list = [] }) => {
  return (
    <div className="">
      {list && list.length
        ? list.map((listItem) => (
            <div className="">
              <MenuItem items={listItem} />
            </div>
          ))
        : null}
    </div>
  );
};

export default MenuList;
