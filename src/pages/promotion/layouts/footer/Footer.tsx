import React from "react";
import styles from "./Footer.module.scss";

import { Link } from "react-router-dom";

interface PropType {
  option?: boolean;
}

export const Footer: React.FC<PropType> = ({ option }) => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer_nav}>
        <ul>
          <li>
            <a
              href="https://hitmeup.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              会社情報
            </a>
          </li>

          {!option && (
            <li>
              <Link to={"/terms"}>利用規約</Link>
            </li>
          )}

          {!option && (
            <li>
              <Link to={"/contact"}>お問い合わせ</Link>
            </li>
          )}
        </ul>
      </nav>
      <small>© Hitmeup, Inc. All Rights Reserved.</small>
    </footer>
  );
};
