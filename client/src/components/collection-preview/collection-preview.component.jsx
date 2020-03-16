import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

// import './collection-preview.styles.scss';
import {
  PreviewContainer,
  CollectionPreviewContainer,
  TitleContainer
} from './collection-preview.styles';

// receives data from the shop page
const CollectionPreview = ({ title, items, history, match, routeName}) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
