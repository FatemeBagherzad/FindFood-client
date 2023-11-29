import './TryForm.scss';

const TryForm = () => {
  return (
    <section className="tryForm">
      <div className="tryForm-list">
        <h2 className="tryForm-list-heading">Choose ingrediantes!</h2>
        <p className="tryForm-list-desc">
          Healthy, tasty and hassle-free meals are waiting for you. Start eating
          as you like today.
        </p>

        <form className="tryForm-list-form">
          {/*we have to create two other component -one for single item and one for mapping all of it from dtatabase and import it here. below just to have styles on them. */}
          <div className="tryForm-list-form-div">
            <input type="checkbox" name="cheese" value="cheese" />
            <label for="cheese"> Cheese</label>
          </div>
          <div className="tryForm-list-form-div">
            <input type="checkbox" name="chicken" value="chicken" />
            <label for="chicken"> Chicken</label>
          </div>

          <button className="tryForm-list-form-submit" type="submit">
            Find a meal!
          </button>
        </form>
      </div>
      <div className="tryForm-imgbox"></div>
    </section>
  );
};
export default TryForm;
