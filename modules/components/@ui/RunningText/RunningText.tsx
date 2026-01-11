import { useTranslations } from 'next-intl';
import css from './RunningText.module.css';



export default function RunningText() {
  const t = useTranslations('runingText');
  const texts = t.raw('texts') as string[];
  return (
    <div className={css.marquee}>
      <div className={css.track}>
        {Array.from({ length: 5 }).map((_, i) =>
          texts.map((text, textIndex) => <span key={`${i}-${textIndex}`}>{text}</span>)
        )}
      </div>
      <div className={css.track}>
        {Array.from({ length: 5 }).map((_, i) =>
          texts.map((text, textIndex) => <span key={`${i}-${textIndex}`}>{text}</span>)
        )}
      </div>
    </div>
  );
}