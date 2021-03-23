import {render, screen} from '@testing-library/react'
import App from './App'

test('renders the App Component', () => {
  render(<App />)
  expect(screen.getByText('STATIONS')).toBeInTheDocument()
})
