const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0,
    itemCount: 1,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const itemInCart = state.items.find(item => item.id === id);
            if (itemInCart) {
                const itemIndex = state.items.findIndex(item => item.id === id);
                const newItem = {
                    title: item.title,
                    count: itemInCart.count + 1,
                    url: item.url,
                    price: item.price * (itemInCart.count + 1),
                    id: item.id
                };
                return {
                    ...state,
                    totalPrice: state.totalPrice + item.price,
                    items: [
                        ...state.items.slice(0,itemIndex),
                        newItem,
                        ...state.items.slice(itemIndex+1)
                    ]
                };
            } else {
            const newItem = {
                title: item.title,
                price: item.price,
                count: 1,
                url: item.url,
                id: item.id
            };
        return {
                ...state,
                totalPrice: state.totalPrice + item.price,
                items: [
                    ...state.items,
                    newItem 
                ]
            }
            };
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id ===idx);
            return {
                ...state,
                totalPrice: state.totalPrice - state.items[itemIndex].price,
                items: [
                    ...state.items.slice(0, itemIndex), 
                    ...state.items.slice(itemIndex+1)
                ],
                

            }
        default:
            return state;
    }
}

export default reducer;