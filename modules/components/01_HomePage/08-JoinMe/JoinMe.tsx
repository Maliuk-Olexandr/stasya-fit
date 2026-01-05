import clsx from 'clsx';
import css from './JoinMe.module.css';
import { LinkButton } from '../../ui/LinkButton/LinkButton';
import { useTranslations } from 'next-intl';



export default function JoinMe() {
  const t = useTranslations('header');
  const tJoinMe = useTranslations('joinMe');

  return (
    <section className={clsx("section", css.joinMeSection)}>
      <div className={clsx("container", css.content)}>
        <LinkButton href="/join" className={css.joinButton}>
          {tJoinMe("button")}
        </LinkButton>
        <LinkButton href="/consultation">
          {t("consultation")}
        </LinkButton>
      </div>
    </section>
  );
}