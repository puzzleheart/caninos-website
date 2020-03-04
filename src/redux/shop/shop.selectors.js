import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  brinquedos: 1,
  acessorios: 2,
  utilidades: 3,
  roupas: 4,
  camas: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)