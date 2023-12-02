import './footer.scss';
import restrauntIcon from '../../assets/Icons/restaurant.png';
import settingsIcon from '../../assets/Icons/settings.png';
import preferencesIcon from '../../assets/Icons/preferences.png';


function Footer() {

    return (
        <div className='footer'>
            <div className='footer__icon--cont'>
                <img className='footer__icon' src={restrauntIcon} />
                <h6>Restruants</h6>
            </div>
            <div>
                <img className='footer__icon' src={preferencesIcon} />
                <h6>Preferences</h6>
            </div>
            <div>
                <img className='footer__icon' src={settingsIcon} />
                <h6>Settings</h6>
            </div>
        </div>
    )
}

export default Footer;