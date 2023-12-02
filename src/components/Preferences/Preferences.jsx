import { useState } from 'react';
import './Preferences.scss';


function Preferences() {

    const [activeTab, setActiveTab] = useState('prefer');
    const [inputContent, setInputContent] = useState('');
    const [preferContent, setPreferContent] = useState([]);
    const [avoidContent, setAvoidContent] = useState([]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    const handleAdd = () => {
        if (inputContent.trim() === '') {
            return;
        }

        if (activeTab === 'prefer') {
            setPreferContent([...preferContent, inputContent])
        } else {
            setAvoidContent([...avoidContent, inputContent])
        }

        setInputContent('');
    };

    const handleRemove = (itemToRemove) => {
        if (activeTab === 'prefer') {
          setPreferContent(preferContent.filter(item => item !== itemToRemove));
        } else {
          setAvoidContent(avoidContent.filter(item => item !== itemToRemove));
        }
      };

    const handleClearAll = () => {
          setPreferContent([]);
          setAvoidContent([]);
        };


    return (
        <div>
            <h1>Select Preferences</h1>
            <form className='preferences__form'>
                <div>
                    <div>
                        <label
                            className={`preferences__label ${activeTab === 'prefer' ? 'selected__tab' : ''}`}
                            onClick={() => handleTabChange('prefer')}
                        >
                        Prefer
                        </label>
                        <label
                            className={`preferences__label ${activeTab === 'avoid' ? 'selected__tab' : ''}`}
                            onClick={() => handleTabChange('avoid')}
                        >
                        Avoid
                        </label>
                    </div>
                        <input
                            className='preferences__input'
                            placeholder='Search'
                            value={inputContent}
                            onChange={(e) => setInputContent(e.target.value)}
                        />
                        <button className='preferences__btn--add' type="button" onClick={handleAdd}>Add</button>
                </div>
            </form>
            <h1>Preferences</h1>
            <div className='preferences__container'>
                <ul id='prefer' className='preferences'>
                    <h4>Prefer</h4>
                    {preferContent.map((item, index) => (
                    <li key={index}>
                        <button className='preferences__list--clear' type="button" onClick={() => handleRemove(item)}>x</button>
                        {item}
                    </li>
                    ))}
                
                </ul>
                <ul id='avoid' className='preferences'>
                    <h4>Avoid</h4>
                    {avoidContent.map((item, index) => (
                    <li key={index}>
                        <button className='preferences__list--clear' type="button" onClick={() => handleRemove(item)}>x</button>
                        {item}
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className='preferences__btn'>
                <button className='preferences__clear-all' type="button" onClick={handleClearAll}>Clear All</button>
                <button>Menu</button>
            </div>
        </div>
    );
}

export default Preferences;