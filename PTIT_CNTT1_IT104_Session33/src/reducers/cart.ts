import type { CartItem } from "../interfaces/listProducts.interface";
import type { ActionType } from "../stores/store";

const initialState: CartItem[] = [];

export const cartReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const addPayload = action.payload as CartItem;
            const existingItem = state.find(item => item.id === addPayload.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === addPayload.id
                        ? { ...item, quantity: item.quantity + addPayload.quantity }
                        : item
                );
            } else {
                return [...state, addPayload];
            }
        
        case 'UPDATE_CART_ITEM':
            const updatePayload = action.payload as { id: number; quantity: number };
            return state.map(item =>
                item.id === updatePayload.id
                    ? { ...item, quantity: updatePayload.quantity }
                    : item
            );
        
        case 'REMOVE_FROM_CART':
            const removePayload = action.payload as { id: number };
            return state.filter(item => item.id !== removePayload.id);
        
        case 'CLEAR_CART':
            return [];
        
        default:
            return state;
    }
};
