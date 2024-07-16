import React, { useState } from 'react';
import * as S from './index.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface RatingStarsProps {
  maxStars?: number;
  onRatingChange?: (rating: number) => void;
  ratingValue?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  maxStars = 5,
  onRatingChange,
  ratingValue = 0,
}) => {
  const [rating, setRating] = useState(ratingValue !== 0 ? ratingValue : 0);

  const handleStarPress = (star: number) => {
    setRating(star);
    if (onRatingChange) {
      onRatingChange(star);
    }
  };

  return (
    <S.Container testID="rating-stars-container">
      {[...Array(maxStars)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <S.StarButton
            testID={`star-button-${starNumber}`}
            key={starNumber}
            onPress={() =>
              ratingValue !== 0 ? null : handleStarPress(starNumber)
            }
          >
            <Icon
              name={starNumber <= rating ? 'star' : 'star-o'}
              size={ratingValue !== 0 ? 20 : 32}
              color="#FFD700"
            />
          </S.StarButton>
        );
      })}
    </S.Container>
  );
};

export default RatingStars;
