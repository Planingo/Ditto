import React from 'react'
import { SkeletonImage } from '../components/Skeleton/SkeletonImage'

describe('<SkeletonImage />', () => {
  it('renders', () => {
    cy.mount(<SkeletonImage />)
  })
})