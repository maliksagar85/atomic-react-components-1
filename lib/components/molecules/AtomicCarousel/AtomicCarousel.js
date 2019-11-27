// @flow
/**
 *
 * AtomicCarousel
 *
 */
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import styles from './AtomicCarousel.style';
import type { Props } from './types';
import List from '../List';
import ListItem from '../../atoms/ListItem';
import { ButtonVanilla } from '../../atoms/Button';

const getList = (items, setItem, currentItem) => {
  const specificNode = useCallback(index => setItem(index));

  return (
    <div className="atomic-dots">
      <List>
        {items.map((item, index) => (
          <ListItem key={index} className="atomic-item">
            <ButtonVanilla disabled={currentItem === index} onClick={() => specificNode(index)}>
              {index}
            </ButtonVanilla>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const AtomicCarousel = ({ dots, navigation, children }: Props): Node => {
  const [item, setItem] = useState(0);
  const [data, setData] = useState([]);

  const handlePrev = useCallback(() => {
    setItem(item - 1);
  });

  const handleNext = useCallback(() => {
    setItem(item + 1);
  });

  useEffect(() => {
    if (children !== undefined && !Array.isArray(children)) {
      setData([children]);
    } else {
      setData(children);
    }
  }, []);

  return (
    <>
      <article className="atomic-carousel">
        {navigation && (
          <ButtonVanilla onClick={handlePrev} disabled={item === 0}>
            prev
          </ButtonVanilla>
        )}
        {data.length !== 0 && data[item]}
        {navigation && (
          <ButtonVanilla onClick={handleNext} disabled={data.length === item + 1}>
            next
          </ButtonVanilla>
        )}
      </article>
      {dots && getList(data, setItem, item)}
    </>
  );
};

AtomicCarousel.defaultProps = {
  dots: true,
  navigation: true,
};

export default styled(AtomicCarousel)`
  ${styles};
`;

export { AtomicCarousel as AtomicCarouselVanilla };
