import React from 'react';
import './menu-list-item.scss';
import pizza from './pizza.svg';
import steak from './steak.svg';
import salad from './salad.svg';
import restaurant from './restaurant.svg';
const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} =menuItem;

    let categoryImg = '';
    switch (category) {
        case 'salads':
            categoryImg = salad;
            break;
        case 'pizza':
            categoryImg = pizza;
            break;
        case 'meat':
            categoryImg = steak;
            break;
        default: 
            categoryImg = restaurant;
        break;
    }

    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <img className="menu__icon" src={categoryImg} alt={category}></img> <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
    )
}

export default MenuListItem;