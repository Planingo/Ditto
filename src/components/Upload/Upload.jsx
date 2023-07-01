import React from 'react';
import PropTypes from 'prop-types';
import { Upload as AntdUpload } from 'antd';
import './upload.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/upload/
 * 
 */
export const Upload = ({ children, ...props }) => {
  return (
    <AntdUpload
      className='storybook-upload'
      {...props}
    >
      {children}
    </AntdUpload>
  );
};

Upload.propTypes = {
    /**
     * TODO property
     */
     
};

Upload.defaultProps = {
  
};
