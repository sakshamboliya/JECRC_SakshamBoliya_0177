import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the todo app with initial tasks and stats', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /todo app - communication patterns/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/learn react props/i)).toBeInTheDocument();
  expect(screen.getByText(/statistics/i)).toBeInTheDocument();
  expect(screen.getByText(/total tasks: 3/i)).toBeInTheDocument();
});
