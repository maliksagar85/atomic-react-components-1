import { shallow } from 'enzyme';

import AtomicCarousel from '../index';

describe('<AtomicCarousel />', () => {
  let AtomicCarouselComponent = '';
  beforeEach(() => {
    AtomicCarouselComponent = shallow(<AtomicCarousel>Test</AtomicCarousel>);
  });

  test('should render correctly', () => {
    expect(AtomicCarouselComponent).toMatchSnapshot();
  });
});
