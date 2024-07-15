import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RatingStars from '../../RatingStars';
const mockOnRatingChange = jest.fn();

describe('RatingStars component', () => {
  test('shoud be render correctly', () => {
    const { getByTestId } = render(
      <RatingStars onRatingChange={mockOnRatingChange} maxStars={5} />
    );

    const container = getByTestId('rating-stars-container');
    expect(container).toBeTruthy();
  });

  test('shoud be return a star number', () => {
    const { getByTestId } = render(
      <RatingStars onRatingChange={mockOnRatingChange} maxStars={5} />
    );

    const secondStarButton = getByTestId('star-button-2');
    fireEvent.press(secondStarButton);

    expect(mockOnRatingChange).toHaveBeenCalledWith(2);
  });
});
