export default function(state = null, action) {
    switch (action.type) {
        case "PRODUCT_SELECTED":
            return action.payload;
        default:
            return state;
    }
}