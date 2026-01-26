import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import type { Messages } from "@/modules/shared/types/messages";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = (await requestLocale) ?? routing.defaultLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const [globalMessages, homeMessages, trainingMessages] = await Promise.all([
    import(`@/messages/${locale}.json`),
    import(`@/modules/home/i18n/home.${locale}.json`),
    import(`@/modules/training/i18n/training.${locale}.json`),
  ]);

  const messages: Messages = {
    ...globalMessages.default,
    home: homeMessages.default,
    training: trainingMessages.default,
  };
  
  return {
    locale,
    messages,
    }
});
