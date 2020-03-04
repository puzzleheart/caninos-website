// This is just placeholder data not related to pet shops at all, to be replaced later.
const SHOP_DATA = [
  {
    id: 1,
    title: 'Brinquedos',
    routeName: 'brinquedos',
    items: [
      {
        id: 1,
        name: 'Corda de Mastigar',
        imageUrl:
          'https://i.pinimg.com/564x/fd/71/01/fd71012eb32b2be2d7f559533762cab6.jpg',
        price: 15
      },
      {
        id: 2,
        name: 'Arco Massageador',
        imageUrl:
          'https://images.madeiramadeira.com.br/product/images/94256880-brinquedo-arco-massageador-arranhador-gatos-com-catnipprd5mjoad8wh6d5a-179-3-600x554.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Chave de Morder',
        imageUrl:
          'https://images.tcdn.com.br/img/img_prod/573283/brinquedo_chave_para_cachorro_mordedor_super_resistente_odontopet_mastigacao_reducao_de_tartaros_par_536379_1_20190919135703.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Bolinha resistente',
        imageUrl:
          'https://www11.barganhamoeda.best/6040-1-large_default/Interativo-elasticidade-bola-de-borracha-brinquedo-do-c%C3%A3o-filhote-de-cachorro-mastigar-brinquedos-para-c%C3%A3o-dente-limpo-dur%C3%A1vel-forma%C3%A7%C3%A3o-brinquedos.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Macaco de Pelúcia',
        imageUrl: 'https://staticpetz.stoom.com.br/fotos/1531491431642.jpg',
        price: 18
      }
    ]
  },
  {
    id: 2,
    title: 'Acessórios',
    routeName: 'acessorios',
    items: [
      {
        id: 10,
        name: 'Coleira Z',
        imageUrl:
          'https://i.pinimg.com/564x/97/98/77/979877f8655485475d407146589c3657.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Coleira X',
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/61CAmnCjrhL._AC_SX425_.jpg',
        price: 280
      },
      {
        id: 14,
        name: 'Linguicinha de Ouro',
        imageUrl:
          'https://http2.mlstatic.com/colar-dog-pingente-cachorro-salsichinha-raca-teckel-e-caixa-D_NQ_NP_930787-MLB31688577875_082019-F.jpg',
        price: 650
      },
      {
        id: 13,
        name: 'Coleira VIP',
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/91xgR7D9S2L._AC_SL1500_.jpg',
        price: 400
      },
      {
        id: 12,
        name: 'Coleira Y',
        imageUrl:
          'https://i.etsystatic.com/5209931/c/2400/1905/0/262/il/04af0b/1295242024/il_340x270.1295242024_d3vd.jpg',
        price: 110
      },
      {
        id: 15,
        name: 'Pingente com Nome',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVmLkBa802zx1H3YCnBXmPHyEgfQA2hfaA67zEjoA4PeQi_fx8',
        price: 160
      },
      {
        id: 16,
        name: 'Esmalte de Cachorro',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6k5UoIo3nnchZn9hNXH2nlHPU8YIoLlePIoZkYcS1RwaOwvhX',
        price: 190
      }
    ]
  },
  {
    id: 3,
    title: 'Utilidades',
    routeName: 'utilidades',
    items: [
      {
        id: 18,
        name: 'Cortador de Unha Pet',
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/81MYEhusk8L._AC_SX425_.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Pente Pet',
        imageUrl:
          'https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171229/T016832/T0168320134/source-img/195729-9976.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Pente Duplo',
        imageUrl:
          'https://img.chewy.com/is/image/catalog/128193_MAIN._AC_SL1500_V1497272617_.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Massageador de Gato',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSO-utwzQiePPOEiyc8lkiZDELY6xaVbGHkEW8f3yGJ4lGqm93C',
        price: 165
      }
    ]
  },
  {
    id: 4,
    title: 'Roupas',
    routeName: 'roupas',
    items: [
      {
        id: 23,
        name: 'Vestido 1',
        imageUrl:
          'https://img.elo7.com.br/product/original/235DB6C/vestidos-pet-cachorro.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Vestido 2',
        imageUrl:
          'https://www.dhresource.com/0x0/f2/albu/g7/M00/08/2F/rBVaSVsWNoaACoqrAAHPsNQ7U8k088.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Moletom 1',
        imageUrl:
          'https://images-americanas.b2w.io/produtos/01/00/img/175602/6/175602652_2GG.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Capa de Chuva',
        imageUrl: 'https://cdn-cosmos.bluesoft.com.br/products/713831970472',
        price: 80
      },
      {
        id: 27,
        name: 'Roupa de Pirata',
        imageUrl:
          'https://http2.mlstatic.com/party-pet-clothes-cat-dog-upright-pirate-dog-jumpsuit-police-D_NQ_NP_600318-MLB29465747242_022019-F.jpg',
        price: 45
      },
      {
        id: 28,
        name: 'Flanela',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk-_AiG4Xi9GNJL81EtWzIwpuzPYCaEcxfYAwSjxaKB5PSvAn5',
        price: 135
      }
    ]
  },
  {
    id: 5,
    title: 'Camas',
    routeName: 'camas',
    items: [
      {
        id: 30,
        name: 'Cama 1',
        imageUrl:
          'https://ae01.alicdn.com/kf/HTB1TYa5SFXXXXXuXXXXq6xXFXXXU/Pet-Bed-For-Dogs-cat-house-dog-beds-for-large-dogs-Pets-Products-For-Puppies-dog.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Cama 2',
        imageUrl:
          'https://img1.bgxcdn.com/thumb/large/oaupload/banggood/images/54/DD/2bc97718-1d86-41cb-9ee3-18621e7625df.JPG',
        price: 20
      },
      {
        id: 32,
        name: 'Cama 3',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRy-A7Hk-_XWRvv7Mc0ks1jb69dVbVa1JDekmEtQnpCSapmq2l',
        price: 25
      },
      {
        id: 34,
        name: 'Almofada 1',
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/I/81cx86MGy9L._SL1500_.jpg',
        price: 40
      },

      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      },
      {
        id: 33,
        name: 'Cama Banana',
        imageUrl:
          'https://contestimg.wish.com/api/webimage/5c4093c24cd45636d565b34d-large.jpg?cache_buster=2db0c8409a220864bcd1e36643e3083a',
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;
