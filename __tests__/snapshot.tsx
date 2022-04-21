import { render } from '@testing-library/react'
import Home from '@/pages/index'
import mock from '../__mocks__/cockteles.json'

it('renders homepage unchanged', () => {
  const { container } = render(<Home {...mock} />)
  expect(container).toMatchSnapshot()
})
