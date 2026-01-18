import clsx from "clsx";
import css from "./Services.module.css";
import Image from "next/image";
import { LinkButton } from "../../@ui/LinkButton/LinkButton";
import { useTranslations } from "next-intl";

type ServiceItem = {
  id: string;
  img: string;
  title: string;
  description: string;
};

export default function ServicesSection() {
  const t = useTranslations("services");
  const services = t.raw("items") as ServiceItem[];
  const btn=useTranslations("courseList");
  return (
    <section className= "section">
      <div className="container">
        <h2 className={css.title}>{t("title")}</h2>
        <ul className={css.servicesList}>
          {services.map((service) => (
            <li key={service.id} className={css.serviceItem}>
              <Image
                src={service.img}
                alt={service.title}
                width={347}
                height={428}
                loading="lazy"
                className={css.serviceImage}
              />
              <h3 className={css.serviceTitle}>{service.title}</h3>
              <p className={css.serviceDescription}>{service.description}</p>
              <LinkButton href="/consultation" className={css.button}>
                {btn("button")}
              </LinkButton>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
