const initialState = {
    originalData: [
        {
            id: 1,
            name: 'A',
            iconCard: 'hearts'
        },
        {
            id: 2,
            name: '2',
            iconCard: 'hearts'
        },
        {
            id: 3,
            name: '3',
            iconCard: 'hearts'
        },
        {
            id: 4,
            name: '4',
            iconCard: 'hearts'
        },
        {
            id: 5,
            name: '5',
            iconCard: 'hearts'
        },
        {
            id: 5,
            name: '6',
            iconCard: 'hearts'
        },
        {
            id: 7,
            name: '7',
            iconCard: 'hearts'
        },
        {
            id: 8,
            name: '8',
            iconCard: 'hearts'
        },
        {
            id: 9,
            name: '9',
            iconCard: 'hearts'
        },
        {
            id: 10,
            name: '10',
            iconCard: 'hearts'
        },
        {
            id: 11,
            name: 'J',
            iconCard: 'hearts'
        },
        {
            id: 12,
            name: 'Q',
            iconCard: 'hearts'
        },
        {
            id: 13,
            name: 'K',
            iconCard: 'hearts'
        },
        {
            id: 14,
            name: 'A',
            iconCard: 'diamonds'
        },
        {
            id: 15,
            name: '2',
            iconCard: 'diamonds'
        },
        {
            id: 16,
            name: '3',
            iconCard: 'diamonds'
        },
        {
            id: 17,
            name: '4',
            iconCard: 'diamonds'
        },
        {
            id: 18,
            name: '5',
            iconCard: 'diamonds'
        },
        {
            id: 19,
            name: '6',
            iconCard: 'diamonds'
        },
        {
            id: 20,
            name: '7',
            iconCard: 'diamonds'
        },
        {
            id: 21,
            name: '8',
            iconCard: 'diamonds'
        },
        {
            id: 22,
            name: '9',
            iconCard: 'diamonds'
        },
        {
            id: 23,
            name: '10',
            iconCard: 'diamonds'
        },
        {
            id: 24,
            name: 'J',
            iconCard: 'diamonds'
        },
        {
            id: 25,
            name: 'Q',
            iconCard: 'diamonds'
        },
        {
            id: 26,
            name: 'K',
            iconCard: 'diamonds'
        },
        {
            id: 27,
            name: 'A',
            iconCard: 'clubs'
        },
        {
            id: 28,
            name: '2',
            iconCard: 'clubs'
        },
        {
            id: 29,
            name: '3',
            iconCard: 'clubs'
        },
        {
            id: 30,
            name: '4',
            iconCard: 'clubs'
        },
        {
            id: 31,
            name: '5',
            iconCard: 'clubs'
        },
        {
            id: 32,
            name: '6',
            iconCard: 'clubs'
        },
        {
            id: 33,
            name: '7',
            iconCard: 'clubs'
        },
        {
            id: 34,
            name: '8',
            iconCard: 'clubs'
        },
        {
            id: 35,
            name: '9',
            iconCard: 'clubs'
        },
        {
            id: 36,
            name: '10',
            iconCard: 'clubs'
        },
        {
            id: 37,
            name: 'J',
            iconCard: 'clubs'
        },
        {
            id: 38,
            name: 'Q',
            iconCard: 'clubs'
        },
        {
            id: 39,
            name: 'K',
            iconCard: 'clubs'
        },
        {
            id: 40,
            name: 'A',
            iconCard: 'spades'
        },
        {
            id: 41,
            name: '2',
            iconCard: 'spades'
        },
        {
            id: 42,
            name: '3',
            iconCard: 'spades'
        },
        {
            id: 43,
            name: '4',
            iconCard: 'spades'
        },
        {
            id: 44,
            name: '5',
            iconCard: 'spades'
        },
        {
            id: 45,
            name: '6',
            iconCard: 'spades'
        },
        {
            id: 46,
            name: '7',
            iconCard: 'spades'
        },
        {
            id: 47,
            name: '8',
            iconCard: 'spades'
        },
        {
            id: 48,
            name: '9',
            iconCard: 'spades'
        },
        {
            id: 49,
            name: '10',
            iconCard: 'spades'
        },
        {
            id: 50,
            name: 'J',
            iconCard: 'spades'
        },
        {
            id: 51,
            name: 'Q',
            iconCard: 'spades'
        },
        {
            id: 52,
            name: 'K',
            iconCard: 'spades'
        }
    ]
};

const ItemsManagement = (state = initialState, action) => {
    switch (action.type) {
        case 'SCRAMBLE':
            return {
                ...state,
                originalData: action.payload
            };
        case 'ALREADY_SHOWED_CARDS':
            return {
                ...state,
                originalData: [
                    ...state.originalData.filter(
                        item => item.id !== action.payload
                    )
                ]
            };
        default:
            return state;
    }
};

export default ItemsManagement;
