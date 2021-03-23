import {render} from '@testing-library/react'
import Nav from './index'

test('renders Back Arrow Icon', () => {
  const {getByTestId} = render(<Nav />)
  expect(getByTestId('backArrowIcon')).toBeInTheDocument()
})
test('renders  Switch Icon', () => {
  const {getByTestId} = render(<Nav />)
  expect(getByTestId('switchIcon')).toBeInTheDocument()
})

test('Images have alt property', () => {
  const {getByTestId} = render(<Nav />)
  expect(getByTestId('switchIcon')).toHaveAttribute('alt')
})
