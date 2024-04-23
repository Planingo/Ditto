import { withTests } from '@storybook/addon-jest';
import React from 'react';
import results from '../../.jest-test-results.json';
import { Tree } from '../components/Tree/Tree';

const meta = {
  title: 'Molécules/Tree',
  component: Tree,
  decorators: [withTests({ results })],
  parameters: { jest: ['tree.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    checkable: true,
    defaultExpandedKeys: ['0-0-0', '0-0-1'],
    defaultSelectedKeys: ['0-0-0', '0-0-1'],
    defaultCheckedKeys: ['0-0-0', '0-0-1'],
    treeData: [{
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              disableCheckbox: true,
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
        },
      ],
    },]
  },
};
