import React from 'react';
import {
    CardRed,
    CardBlack,
    ContentUp,
    ContentDown,
    Container
} from './styles';

const index = ({ value, icon }) => {
    return (
        <>
            {icon[0] === 'hearts' && (
                <CardRed>
                    <Container>
                        <ContentUp>
                            {value[0]}
                            <img
                                src='https://storage.googleapis.com/deal_cards_game_next/heartImage%20(1).png'
                                alt='hearts'
                            />
                        </ContentUp>
                        <ContentDown>
                            {value[0]}
                            <img
                                src='https://storage.googleapis.com/deal_cards_game_next/heartImage%20(1).png'
                                alt='hearts'
                            />
                        </ContentDown>
                    </Container>
                </CardRed>
            )}
            {icon[0] === 'diamonds' && (
                <CardRed>
                    <Container>
                        <ContentUp>
                            {value[0]}
                            <img
                                src='https://storage.googleapis.com/deal_cards_game_next/diamondImage%20(1).png'
                                alt='hearts'
                            />
                        </ContentUp>
                        <ContentDown>
                            {value[0]}
                            <img
                                src='https://storage.googleapis.com/deal_cards_game_next/diamondImage%20(1).png'
                                alt='hearts'
                            />
                        </ContentDown>
                    </Container>
                </CardRed>
            )}
            {icon[0] === 'spades' && (
                <CardBlack>
                    <Container>
                        <ContentUp>
                            {value[0]}
                            <img
                                src='https://storage.googleapis.com/deal_cards_game_next/spadeImage.png'
                                alt='hearts'
                            />
                        </ContentUp>
                        <ContentDown>
                            {value[0]}
                            <img
                                src='https://storage.googleapis.com/deal_cards_game_next/spadeImage.png'
                                alt='hearts'
                            />
                        </ContentDown>
                    </Container>
                </CardBlack>
            )}

            {icon[0] === 'clubs' && (
                <CardBlack>
                    <Container>
                        <ContentUp>
                            {value[0]}
                            <img
                                src='https://storage.googleapis.com/deal_cards_game_next/clubImage.png'
                                alt='hearts'
                            />
                        </ContentUp>
                        <ContentDown>
                            {value[0]}
                            <img
                                src='https://storage.googleapis.com/deal_cards_game_next/clubImage.png'
                                alt='hearts'
                            />
                        </ContentDown>
                    </Container>
                </CardBlack>
            )}
        </>
    );
};

export default index;
