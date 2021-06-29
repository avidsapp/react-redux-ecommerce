import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
      border: none;
      color: var(--white);
      background-color: var(--primary-color);

      &:hover {
        background-color: var(--black);
      }
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    height: 30vh;

    &:hover {
      .image {
        opacity: unset;
      }
    }

    button {
      opacity: unset;
      background-color: var(--primary-color);
      border: none;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    top: 160px;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

AddButton.displayName = 'AddButton';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

BackgroundImage.displayName = 'BackgroundImage';

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

CollectionFooterContainer.displayName = 'CollectionFooterContainer';

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

NameContainer.displayName = 'NameContainer';

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

PriceContainer.displayName = 'PriceContainer';
