import { Button } from '../components/Button/Button';
import { Notif } from '../components/Notification/Notification';
import { Modal } from '../components/Modal/Modal';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

const meta = {
  title: 'Molécules/Modal',
  component: Modal,
  decorators: [withTests({ results })],
  parameters: { jest: ['modal.test.jsx'] }
};

export default meta;

export const Playground = {
  args: {
    children: "Ananas",
    title: "Envoyer le calendrier",
    OpenModal: (showModal) => <Button type="primary" onClick={showModal}>
      Ouvrir la modale
    </Button>,
    ValidateButton: (handleOk) => <Notif
      OpenNotification={(openNotification) => 
        <Button key="validate" className="cta" onClick={() => {
          openNotification()
          handleOk()
        }}>Valider</Button>
      }
      title="C'est un titre"
      description="C'est une description !"
      />
  },
};
