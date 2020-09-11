export const alreadyShowedCardsAction = idEachCard => {
    return {
        type: 'ALREADY_SHOWED_CARDS',
        payload: idEachCard
    };
};

export const scrambleData = array => {
    return {
        type: 'SCRAMBLE',
        payload: array
    };
};
