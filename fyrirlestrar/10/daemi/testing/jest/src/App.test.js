import { test, describe, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Test suite', () => {
  test.skip('this should fail', () => {
    expect(true).toBe(false);
  });

  test('this should pass', () => {
    expect(123).toBeGreaterThanOrEqual(100);
  });
});
