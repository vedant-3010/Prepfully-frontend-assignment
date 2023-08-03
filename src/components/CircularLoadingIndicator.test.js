import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import CircularLoadingIndicator from './CircularLoadingIndicator';

jest.useFakeTimers();

describe('CircularLoadingIndicator', () => {
  it('should display the percentage indicator', () => {
    const progressValue = 75; // Progress value to be tested
    render(<CircularLoadingIndicator progress={progressValue} />);
    
    const percentageIndicator = screen.getByText(`${progressValue}%`);
    expect(percentageIndicator).toBeInTheDocument();
  });

  it('should reset percentage to 0 when play button is clicked after reaching 100%', async () => {
    render(<CircularLoadingIndicator />);
    
    // Simulate reaching 100%
    act(() => {
      jest.advanceTimersByTime(145 * 100);
    });

    const playButton = screen.getByRole('button', { name: /play/i });
    fireEvent.click(playButton);

    await waitFor(() => {
      const resetPercentageIndicator = screen.getByText(/0%/i);
      expect(resetPercentageIndicator).toBeInTheDocument();
    });
  });
});
