import './MenuItem.scss';

const MenuItem = ({ menuObj }) => {
  return (
    <>
      <div className="menuItem">
        <div className="menuItem__txt">
          <h2 className="menuItem__txt-h">{menuObj.name}</h2>
          <p className="menuItem__txt-ing">{menuObj.Ingredient}</p>
          <p className="menuItem__txt-price">{menuObj.price}</p>
        </div>
        <div className="menuItem__img">
          <img
            className="menuItem__img-img"
            alt={menuObj.name}
            src={menuObj.mealThumb}
          />
        </div>
      </div>
    </>
  );
};
export default MenuItem;
