import globalMessages from "@/messages/en.json";
import homeMessages from "@/modules/home/i18n/home.en.json";
import trainingMessages from "@/modules/training/i18n/training.en.json";

export type Messages = typeof globalMessages & {
  home: typeof homeMessages;
  training: typeof trainingMessages;
}