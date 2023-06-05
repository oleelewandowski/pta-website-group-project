import React from "react";
import styles from "./our-partners.module.css";
import useTranslation from "next-translate/useTranslation";

const partners = [
  {
    id: "partner-1",
    name: "Polskie Towarzystwo Akustyczne",
    logo: "PTA",
  },
  {
    id: "partner-2",
    name: "European Acoustics Association",
    logo: "EAA",
  },
  {
    id: "partner-3",
    name: "Politechnika Gdańska",
    logo: "PG",
  },
  {
    id: "partner-4",
    name: "Polska Akademia Nauk",
    logo: "PAN",
  },
  {
    id: "partner-5",
    name: "Akademia Marynarki Wojennej",
    logo: "AMW",
  },
  {
    id: "partner-6",
    name: "International Commission for Acoustics",
    logo: "ICA",
  },
];

const OurPartners = () => {
  const { t } = useTranslation("home-page");
  return (
    <section className={styles.partners}>
      <p> {t("partners")}</p>
      <ul>
        {partners.map((partner) => (
          <li key={partner.id}> {partner.logo} </li>
        ))}
      </ul>
    </section>
  );
};

export default OurPartners;
