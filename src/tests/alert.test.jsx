import { render } from '@testing-library/react';
import { Alert } from '../components/Alert/Alert';
import React from 'react';

describe('Alert component', () => {
  const alert = (
    <Alert message="Success message !" type="success"/>
  );

  it('Alert content text', () => {
    const { baseElement } = render(alert);
    expect(baseElement).toHaveTextContent("Success message !");
  });
});
