import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './AtomicCarousel.mock';

// Import Styled Component to showcase variations
import AtomicCarousel, { AtomicCarouselVanilla } from '.';

// TODO: indentation is not working fine in editor. Need to check for .hbs files
// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['AtomicCarousel', 'AtomicCarouselVanilla'] })
  .add('CTA Knobs', () => (
    <AtomicCarouselVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    >
      <div>1</div>
    </AtomicCarouselVanilla>
  ))
  .add('CTA', () => (
    <AtomicCarousel {...defaultConfig}>
      <h1>Aman</h1>
      <h1>Jain</h1>
    </AtomicCarousel>
  ));
