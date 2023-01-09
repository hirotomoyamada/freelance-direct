import React from 'react';
import styles from './Header.module.scss';

import { Position } from './components/Position';
import { Handles } from './components/Handles';
import { Tools } from './components/Tools';
import { Industry } from './components/Industry';

import { Matter } from 'types/post';

interface PropType {
  post: Matter;
}

export const Header: React.FC<PropType> = ({ post }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrap}>
        <Industry post={post} />
        <Position post={post} />
      </div>

      <Handles post={post} />
      <Tools post={post} />
    </div>
  );
};
