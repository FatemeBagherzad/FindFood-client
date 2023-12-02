import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';

const Menu = ({ menu }) => {
  return (
    <>
      {menu &&
        menu.map((menuObj) => {
          return <MenuItem menuObj={menuObj} />;
        })}
    </>
  );
};
export default Menu;
