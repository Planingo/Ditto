import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { SmileOutlined } from '../components/Icon/icon';

const meta = {
  title: 'Molécules/Dropdown',
  component: Dropdown,
  decorators: [withTests({ results })],
  parameters: { jest: ['dropdown.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: <p>Hover me</p>,
    menu: { 
      items : [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '4',
          danger: true,
          label: 'a danger item',
        },
      ]
    }
  },
};
