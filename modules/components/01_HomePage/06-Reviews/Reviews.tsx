import css from './Reviews.module.css';
import ReviewsSlider from "./ReviewsSlider";

export default function Reviews() {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className={css.title}>Reviews</h2>
        <ReviewsSlider />
      </div>
    </section>
  );
};