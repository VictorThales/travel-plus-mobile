import React, {useState} from 'react';
import * as S from './index.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingStars = ({maxStars = 5, onRatingChange}) => {
  const [rating, setRating] = useState(0);

  const handleStarPress = star => {
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
            onPress={() => handleStarPress(starNumber)}>
            <Icon
              name={starNumber <= rating ? 'star' : 'star-o'}
              size={32}
              color="#FFD700"
            />
          </S.StarButton>
        );
      })}
    </S.Container>
  );
};

export default RatingStars;
