import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size === 'large' ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  text-transform: uppercase;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const ContentTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: black;
`;

export const ContentSubtitle = styled.span`
  color: rgb(14, 14, 14);
  font-size: 16px;
`;
