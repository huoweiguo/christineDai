import React, { ReactNode } from 'react';
import styles from './SlideInFromBottom.module.scss'

interface SlideInFromBottomProps {
  children:ReactNode,
  isVisible: boolean;
}

const SlideInFromBottom: React.FC<SlideInFromBottomProps> = ({ children, isVisible }) => {
  return (
    <div>
      <div className={isVisible?`${styles.slideInFrom} ${styles.visible}`:`${styles.slideInFrom}`}>{children}</div>
    </div>
  );
};

export default SlideInFromBottom;