import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Atomes/Breadcrumb',
  component: Breadcrumb,
  decorators: [withTests({ results })],
  parameters: { jest: ['breadcrumb.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    items: [
      {key:'home', title:"Home"},
      {key:'home2', title:<a href="/">Application Center</a>}
    ]
  },
};
