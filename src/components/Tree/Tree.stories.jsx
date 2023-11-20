import React from 'react';

import { Tree } from './Tree'

export default {
  title: 'Molécules/Tree',
  component: Tree,
};

const TreeGlobal = (args) => <Tree {...args} />;

export const Default = TreeGlobal.bind({});

Default.args = {
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
};