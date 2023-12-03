import './Steps.scss';
import mobileScreen1 from '../../assets/img/app/app-screen-1.png';
import mobileScreen2 from '../../assets/img/app/app-screen-2.png';
import mobileScreen3 from '../../assets/img/app/app-screen-3.png';

const Steps = () => {
  return (
    <>
      <section className="stepPage container">
        <span className="stepPage-span">How it works</span>
        <h2 className="stepPage-heading">
          Your dose of health in 3 simple steps
        </h2>

        <div className="steps">
          <div className="steps__step">
            <div className="steps__step-text">
              <p className="steps__step-text-no">01</p>
              <h3 className="steps__step-text-h">
                Tell us what you like (and what not)
              </h3>
              <p className="steps__step-text-p">
                Never again waste time thinking about what to eat! Findfood AI
                will create a 100% personalized meal plan just for you. It makes
                sure you get all the nutrients and vitamins you need, no matter
                what diet you follow!
              </p>
            </div>

            <div className="steps__step-imgbox">
              <img
                src={mobileScreen1}
                className="steps__step-imgbox-img"
                alt="mobile app screen"
              />
            </div>
          </div>

          <div className="steps__step">
            <div className="steps__step-text">
              <p className="steps__step-text-no">02</p>
              <h3 className="steps__step-text-h">Approve your meal</h3>
              <p className="steps__step-text-p">
                Approve the meal generated for you by Findfood AI. You can
                change ingredients, swap entire meals, or even add your own
                recipes.
              </p>
            </div>

            <div className="steps__step-imgbox steps__step-imgbox-column">
              <img
                src={mobileScreen2}
                className="steps__step-imgbox-img"
                alt="mobile app screen"
              />
            </div>
          </div>

          <div className="steps__step">
            <div className="steps__step-text">
              <p className="steps__step-text-no">03</p>
              <h3 className="steps__step-text-h">
                Receive meals at convenient time
              </h3>
              <p className="steps__step-text-p">
                We will find best and closest restaurant for you to have your
                meal as soon as possible.
              </p>
            </div>

            <div className="steps__step-imgbox">
              <img
                src={mobileScreen3}
                className="steps__step-imgbox-img"
                alt="mobile app screen"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Steps;
