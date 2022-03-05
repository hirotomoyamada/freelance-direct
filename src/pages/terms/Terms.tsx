import React, { useEffect } from "react";
import styles from "./Terms.module.scss";

import { useLocation } from "react-router";

import { Header } from "components/header/Header";

import { Body } from "./components/Body";
import { Section } from "./components/Section";
import { BackNumber } from "./components/BackNumber";

import { definition } from "./data/definition";
import { application } from "./data/application";
import { examination } from "./data/examination";
import { account } from "./data/account";
import { data } from "./data/data";
import { price } from "./data/price";
import { secret } from "./data/secret";
import { ban } from "./data/ban";
import { suspension } from "./data/suspension";
import { limited } from "./data/limited";
import { withdrawal } from "./data/withdrawal";
import { attribution } from "./data/attribution";
import { privacy } from "./data/privacy";
import { reparation } from "./data/reparation";
import { disclaimer } from "./data/disclaimer";
import { service } from "./data/service";
import { corporation } from "./data/corporation";
import { notification } from "./data/notification";
import { transfer } from "./data/transfer";
import { rules } from "./data/rules";
import { separation } from "./data/separation";
import { law } from "./data/law";

interface PropType {
  create?: boolean;
  setTerms?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type Sections = (
  | {
      ttl: string;
      body: (
        | string
        | {
            ttl: string;
            body: string[];
          }
      )[];
    }
  | {
      ttl: string;
      body: {
        ttl: string;
        body: (
          | string
          | {
              ttl: string;
              body: string[];
            }
        )[];
      }[];
    }
)[];

export const Terms: React.FC<PropType> = ({ create, setTerms }) => {
  const location = useLocation<{ setting: string }>();
  const terms = !location?.state?.setting;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    definition,
    application,
    examination,
    account,
    data,
    price,
    secret,
    ban,
    suspension,
    limited,
    withdrawal,
    attribution,
    privacy,
    reparation,
    disclaimer,
    service,
    corporation,
    notification,
    transfer,
    rules,
    separation,
    law,
  ];

  return (
    <div className={styles.terms}>
      <Header
        create={create}
        terms={terms}
        handleCancel={() => setTerms && setTerms(false)}
        type="terms"
        back
      />

      <div
        className={`${styles.terms_inner} ${
          !terms && styles.terms_inner_setting
        }`}
      >
        <Body />
        {sections.map((section, index) => (
          <Section key={index} index={index + 1} section={section} />
        ))}
        <BackNumber />
      </div>
    </div>
  );
};
