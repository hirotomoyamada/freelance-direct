import React from "react";
import styles from "./Header.module.scss";
import { useFormContext } from "react-hook-form";

import { Cover } from "components/cover/Cover";
import { Icon } from "components/icon/Icon";

import { Data } from "components/modal/components/profile/Profile";

interface PropType {
  cover: boolean;
  icon: boolean;
  setCover: React.Dispatch<React.SetStateAction<boolean>>;
  setIcon: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<PropType> = ({
  cover,
  icon,
  setCover,
  setIcon,
}) => {
  const { watch } = useFormContext<Data>();

  return (
    <div className={styles.header}>
      <button onClick={() => setCover(!cover)} className={styles.header_cover}>
        <Cover src={watch("cover")} />
      </button>
      <button onClick={() => setIcon(!icon)} className={styles.header_icon}>
        <Icon src={watch("icon")} />
      </button>
    </div>
  );
};
