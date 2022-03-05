import React from "react";
import styles from "./Main.module.scss";

import { Location } from "./components/Location";
import { Costs } from "./components/Costs";
import { Remote } from "./components/Remote";
import { Times } from "./components/Times";
import { Body } from "./components/Body";
import { Adjustment } from "./components/Adjustment";

import { Matter } from "types/post";

interface PropType {
  post: Matter;
}

export const Main: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main_side}>
        <Location post={post} />

        <Remote post={post} />

        <Times post={post} />

        <Costs post={post} />

        <Adjustment post={post} />
      </div>

      <Body post={post} />
    </div>
  );
};
