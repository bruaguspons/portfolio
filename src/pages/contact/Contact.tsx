import Glow from "@/components/Glow";
import Section from "@/components/Section";
import Subtitle from "@/components/Subtitle";
import TextColor from "@/components/TextColor";
import { getI18N, LANGUAGES } from "@/i18n";
import ContactForm from "@/pages/contact/components/ContactForm";
import type { ClassValue } from "clsx";
import "./styles/fade.css";
import type { FieldType } from "@/pages/contact/types/contact";
interface Props {
  headerHeight: ClassValue;
}

const Contact = ({headerHeight}: Props): React.ReactNode => {
  const i18n = getI18N({currentLocale: LANGUAGES.SPANISH});
  return (
    <Section id="contact" headerHeight={headerHeight}>
      <Subtitle><TextColor>{i18n.CONTACT.TITLE["1"]}</TextColor></Subtitle>

      <div data-aos="zoom-in" className="w-full flex items-center justify-center mb-10">
        <ContactForm 
          fields={i18n.CONTACT.FIELDS.map((field) => ({
            id: field.ID,
            label: field.LABEL,
            autocomplete: field.AUTOCOMPLETE,
            type: field.TYPE as FieldType,
            required: field.REQUIRED,
            errors: field.ERRORS,
          }))}
          submitError={i18n.CONTACT.SUBMIT_ERROR}
          submitSuccess={i18n.CONTACT.SUBMIT_SUCCESS}
          sendText={i18n.CONTACT.SEND_TEXT}
        />
      </div>

      <Glow className="from-sky-500/95 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </Section>
  );
};
export default Contact;