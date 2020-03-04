const INITIAL_STATE = {
  sections: [
    {
      title: 'brinquedos',
      imageUrl: 'https://i.imgur.com/Zoh0VkJ.jpg',
      id: 1,
      linkUrl: 'shop/brinquedos'
    },
    {
      title: 'acessórios',
      imageUrl: 'https://i.imgur.com/dguWqsU.jpg',
      id: 2,
      linkUrl: 'shop/acessorios'
    },
    {
      title: 'utilidades',
      imageUrl: 'https://i.imgur.com/sQWwQqZ.jpg',
      id: 3,
      linkUrl: 'shop/utilidades'
    },
    {
      title: 'roupas',
      imageUrl: 'https://i.imgur.com/JOBw8mx.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/roupas'
    },
    {
      title: 'camas',
      imageUrl: 'https://i.imgur.com/pTgDy9Q.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/camas'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default directoryReducer;