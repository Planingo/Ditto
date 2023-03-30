import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as AntdTabs } from 'antd';
import './tabs.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/tabs/
 * 
 */
export const Tabs = ({ property, ...props }) => {
  return (
    <AntdTabs
      className='storybook-tabs'
      {...props}
      property
    />
  );
};

Tabs.propTypes = {
    /**
     * TODO property
     */
     property: PropTypes.bool,
};

Tabs.defaultProps = {
  property: false,
};
