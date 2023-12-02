import './TryForm.scss';
import { useState } from 'react';
import Menu from '../Menu/Menu';

const TryForm = ({ menu }) => {
  // const [data, setData] = useState();
  const [activeTab, setActiveTab] = useState('prefer');
  const [inputContent, setInputContent] = useState('');
  const [preferContent, setPreferContent] = useState([]);
  const [avoidContent, setAvoidContent] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleAdd = () => {
    if (inputContent.trim() === '') {
      return;
    }

    if (activeTab === 'prefer') {
      setPreferContent([...preferContent, inputContent]);
    } else {
      setAvoidContent([...avoidContent, inputContent]);
    }

    setInputContent('');
  };

  const handleRemove = (itemToRemove) => {
    if (activeTab === 'prefer') {
      setPreferContent(preferContent.filter((item) => item !== itemToRemove));
    } else {
      setAvoidContent(avoidContent.filter((item) => item !== itemToRemove));
    }
  };

  return (
    <>
      <section className="tryForm">
        <div className="tryForm-list">
          <h2 className="tryForm-list-heading">Choose ingrediantes!</h2>
          <p className="tryForm-list-desc">
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating as you like today.
          </p>
          {/* from Justin code */}
          <form className="preferences__form">
            <div>
              <div>
                <label
                  className={`preferences__label ${
                    activeTab === 'prefer' ? 'selected__tab' : ''
                  }`}
                  onClick={() => handleTabChange('prefer')}
                >
                  Prefer
                </label>
                <label
                  className={`preferences__label ${
                    activeTab === 'avoid' ? 'selected__tab' : ''
                  }`}
                  onClick={() => handleTabChange('avoid')}
                >
                  Avoid
                </label>
              </div>
              <input
                className="preferences__input"
                placeholder="Search"
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
              />
              <button
                className="preferences__btn"
                type="button"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </form>

          <h1>Preferences</h1>
          <div className="preferences__container">
            <ul id="prefer" className="preferences">
              <h4>Prefer</h4>
              {preferContent.map((item, index) => (
                <li key={index}>
                  <button
                    className="prefrences__list--clear"
                    type="button"
                    onClick={() => handleRemove(item)}
                  >
                    x
                  </button>
                  {item}
                </li>
              ))}
            </ul>
            <ul id="avoid" className="preferences">
              <h4>Avoid</h4>
              {avoidContent.map((item, index) => (
                <li key={index}>
                  <button
                    className="preferences__list--clear"
                    type="button"
                    onClick={() => handleRemove(item)}
                  >
                    x
                  </button>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* End of Justin code */}
        </div>
        <div className="tryForm-imgbox"></div>
      </section>

      <Menu menu={menu} />
    </>
  );
};
export default TryForm;
