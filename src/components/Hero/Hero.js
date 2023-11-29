import './Hero.scss';
import { Link, useNavigate } from 'react-router-dom';
import personImg1 from '../../assets/img/customers/customer-1.jpg';
import personImg2 from '../../assets/img/customers/customer-2.jpg';
import personImg3 from '../../assets/img/customers/customer-3.jpg';
import personImg4 from '../../assets/img/customers/customer-4.jpg';
import personImg5 from '../../assets/img/customers/customer-5.jpg';
import personImg6 from '../../assets/img/customers/customer-6.jpg';
import heroImg from '../../assets/img/hero.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="heroBack">
        <div className="hero container">
          <div className="hero__text">
            <h2 className="hero__heading">
              A healthy meal delivered to your door, every single day
            </h2>
            <p className="hero__desc">
              The smart food subscription that will make you enjoy your chosen
              ingerediant meal. Tailored to your personal tastes and nutritional
              needs.
            </p>
            <p className="hero__btn" onClick={() => navigate(`/form`)}>
              Start making your list
            </p>

            <div className="hero__delivered">
              <div className="hero__delivered-imgs">
                <img src={personImg1} alt="Customer photo" />
                <img src={personImg2} alt="Customer photo" />
                <img src={personImg3} alt="Customer photo" />
                <img src={personImg4} alt="Customer photo" />
                <img src={personImg5} alt="Customer photo" />
                <img src={personImg6} alt="Customer photo" />
              </div>
              <p class="hero__delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>

          <div className="hero__img">
            <img
              src={heroImg}
              className="hero__img-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
