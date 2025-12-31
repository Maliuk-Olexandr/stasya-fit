import css from './RunningText.module.css';

export default function RunningText() {
  return (
    <div className={css.marquee}>
      <div className={css.track}>
        {Array.from({ length: 30}).map((_, i) => (
          <span key={i}>Training</span>
        ))}
      </div>
      <div className={css.track}>
        {Array.from({ length: 30}).map((_, i) => (
          <span key={i}>Training</span>
        ))}
      </div>
    </div>
  );
}