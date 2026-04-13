"use client";

import Glow from "@/components/ui/Glow";
import Section from "@/components/ui/Section";
import Subtitle from "@/components/ui/Subtitle";
import TextColor from "@/components/ui/TextColor";
import { useTranslations } from "next-intl";
import ContactForm from "./components/ContactForm";
import type { ClassValue } from "clsx";
import "./styles/fade.css";
import type { ContactField } from "./types/contact";

interface Props {
  headerHeight: ClassValue;
}

const Contact = ({ headerHeight }: Props): React.ReactNode => {
  const t = useTranslations("CONTACT");
  const fields = t.raw("FIELDS") as ContactField[];

  return (
    <Section id="contact" headerHeight={headerHeight}>
      <Subtitle><TextColor>{t("TITLE.1")}</TextColor></Subtitle>

      <div data-aos="zoom-in" className="w-full flex items-center justify-center mb-10">
        <ContactForm
          fields={fields}
          submitError={t("SUBMIT_ERROR")}
          submitSuccess={t("SUBMIT_SUCCESS")}
          sendText={t("SEND_TEXT")}
        />
      </div>

      <Glow className="from-cyan-400/95 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </Section>
  );
};

export default Contact;
