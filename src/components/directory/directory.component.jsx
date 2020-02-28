import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

export default class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({title, id, imageUrl, size}) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
