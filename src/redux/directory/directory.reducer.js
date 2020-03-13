const INITIAL_STATE = {
  sections: [
    {
      title: 'brinquedos',
      imageUrl: 'https://images.madeiramadeira.com.br/product/images/94256880-brinquedo-arco-massageador-arranhador-gatos-com-catnipprd5mjoad8wh6d5a-179-3-600x554.jpg',
      id: 1,
      linkUrl: 'shop/brinquedos'
    },
    {
      title: 'acessórios',
      imageUrl: 'https://http2.mlstatic.com/colar-dog-pingente-cachorro-salsichinha-raca-teckel-e-caixa-D_NQ_NP_930787-MLB31688577875_082019-F.jpg',
      id: 2,
      linkUrl: 'shop/acessórios'
    },
    {
      title: 'utilidades',
      imageUrl: 'https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171229/T016832/T0168320134/source-img/195729-9976.jpg',
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