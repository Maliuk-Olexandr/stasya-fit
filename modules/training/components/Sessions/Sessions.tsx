import clsx from "clsx";
import css from "./Sessions.module.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { formatPrice } from "@/modules/shared/utils/formatPrice";

type Item = {
  id: string;
  title: string;
  price: number;
  currency: string;
};

export default function SessionsSection() {
  const t = useTranslations("training.sessions");
  const items = t.raw("items") as Item[];
  const locale = useLocale();

  return (
    <section className="section">
      <div className={clsx("container", css.container)}>
        <h2 className={css.title}>
          {t("title.0")} <span className={css.brBlock}>{t("title.1")}</span>
        </h2>
        <ul className={css.list}>
          {items.map((item) => (
            <li key={item.id} className={css.item}>
              <h3 className={css.header}>{item.title}</h3>
              <p className={css.price}>
                {formatPrice({
                  value: item.price,
                  currency: item.currency,
                  locale,
                })}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
