import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './addItem.css';
import { useParams } from 'react-router-dom';
import { Modal } from '../Modal/Modal'
import { Button } from '../Button/Button'
import { Notif } from '../Notification/Notification'
import { useIntl } from 'react-intl';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * 
 * 
 */
export const AddItem = ({ 
	Form,
	title,
  icon,
	cta,
	secondary,
	onAdd,
	adding,
	onEdit,
	editing,
	mainActionButton,
  formId,
  ...props 
}) => {
	const { id } = useParams()
	const [item, setItem] = useState()
  const {formatMessage} = useIntl()

  return (
        <Modal
          cancelText="annuler"
          onOk={async () =>  onAdd ? await onAdd(item, id) : onEdit ? await onEdit(item, id) : null}
          title={title}
          OpenModal={(showModal) => <Button key="modal" ghost={secondary} size="large" icon={icon} onClick={showModal}>{cta || title}</Button>}
          ValidateButton={(handleOk) => <Notif key="validate"
            OpenNotification={(openNotification) => 
              <Button key="validate" className="cta" htmlType='submit' form={formId} onClick={() => {
                openNotification()
                handleOk()
              }}>
                {formatMessage({id: "valid"})}
              </Button>
            }
            />
          }
        >
          {Form}
        </Modal>
  );
};

AddItem.propTypes = {
};

AddItem.defaultProps = {
};
