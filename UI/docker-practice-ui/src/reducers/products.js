import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../actions/product-actions';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_BEGIN:
            return {
                state: state,
                loading: true,
                error: null
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                state: state,
                loading: false,
                items: action.payload.products
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                state: state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
        /*return [
            {
                img: "/img/camera.jpg",
                name: "Camera",
                description: "Nice photo camera to save best moments of your life",
                price: "320"
            },
            {
                img: "/img/ball.jpg",
                name: "Ball",
                description: "Best ball ever",
                price: "30"
            },
            {
                img: "/img/sofa.jpeg",
                name: "Sofa",
                description: "Very comfortable sofa",
                price: "499"
            },
            {
                img: "/img/laptop.jpeg",
                name: "Laptop",
                description: "High speed, small weight",
                price: "1379"
            },
            {
                img: "/img/car.jpg",
                name: "Car",
                description: "Ready for your trip",
                price: "96999"
            }
        ];*/
    }
}