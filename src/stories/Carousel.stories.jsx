import React from 'react';
import { Carousel } from '../components/Carousel/Carousel';

const meta = {
  title: 'Organismes/Carousel',
  component: Carousel,
};

export default meta;

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const Playground = {
  args: {
    datas:[
      <div><h3 style={contentStyle}>1</h3></div>,
      <div><h3 style={contentStyle}>2</h3></div>,
      <div><h3 style={contentStyle}>3</h3></div>,
      <div><h3 style={contentStyle}>4</h3></div>
    ],
    afterChange: (currentSlide) => console.log(currentSlide)
  },
};
