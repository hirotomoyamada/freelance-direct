import React from 'react';
import styles from './Header.module.scss';

import { At } from './components/At';
import { Position } from './components/Position';
import { Title } from './components/Title';
import { Industry } from './components/Industry';

import { Matter } from 'types/post';

interface PropType {
  post: Matter;
}

export const Header: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.header}>
      <At post={post} />

      <div className={styles.header_container}>
        <Industry post={post} />
        <Position post={post} />
      </div>

      <Title post={post} />
    </div>
  );
};
