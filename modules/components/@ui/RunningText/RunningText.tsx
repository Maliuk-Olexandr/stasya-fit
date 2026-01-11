import { useTranslations } from 'next-intl';
import css from './RunningText.module.css';



export default function RunningText() {
  const t = useTranslations('runingText');
  const texts = t.raw('texts') as string[];
  console.log(texts);
  return (
    <div className={css.marquee}>
      <div className={css.track}>
        {Array.from({ length: 30 }).map((_, i) =>
          texts.map((text, textIndex) => <span key={`${i}-${textIndex}`}>{text}</span>)
        )}
      </div>
      <div className={css.track}>
        {Array.from({ length: 30 }).map((_, i) =>
          texts.map((text, textIndex) => <span key={`${i}-${textIndex}`}>{text}</span>)
        )}
      </div>
    </div>
  );
}