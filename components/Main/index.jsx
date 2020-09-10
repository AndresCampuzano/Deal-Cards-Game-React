import React, { useState, useEffect } from 'react';
import Container from './styles';
import Card from '../Cards';
import NoCards from '../NoCards';

const Main = () => {
    const [slot01, setSlot01] = useState();
    const [slot02, setSlot02] = useState();
    const [slot03, setSlot03] = useState();
    const [slot04, setSlot04] = useState();
    const [game, setGame] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    // console.log('objectsToDelete: ', objectsToDelete);
    // console.log('counter: ', counter);

    // Data cards
    // const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    // const values = [
    //     'A',
    //     '2',
    //     '3',
    //     '4',
    //     '5',
    //     '6',
    //     '7',
    //     '8',
    //     '9',
    //     '10',
    //     'J',
    //     'Q',
    //     'K'
    // ];

    let eachCard = [
        {
            name: 'A',
            iconCard: 'hearts'
        },
        {
            name: '2',
            iconCard: 'hearts'
        },
        {
            name: '3',
            iconCard: 'hearts'
        },
        {
            name: '4',
            iconCard: 'hearts'
        },
        {
            name: '5',
            iconCard: 'hearts'
        },
        {
            name: '6',
            iconCard: 'hearts'
        },
        {
            name: '7',
            iconCard: 'hearts'
        },
        {
            name: '8',
            iconCard: 'hearts'
        },
        {
            name: '9',
            iconCard: 'hearts'
        },
        {
            name: '10',
            iconCard: 'hearts'
        },
        {
            name: 'J',
            iconCard: 'hearts'
        },
        {
            name: 'Q',
            iconCard: 'hearts'
        },
        {
            name: 'K',
            iconCard: 'hearts'
        },
        {
            name: 'A',
            iconCard: 'diamonds'
        },
        {
            name: '2',
            iconCard: 'diamonds'
        },
        {
            name: '3',
            iconCard: 'diamonds'
        },
        {
            name: '4',
            iconCard: 'diamonds'
        },
        {
            name: '5',
            iconCard: 'diamonds'
        },
        {
            name: '6',
            iconCard: 'diamonds'
        },
        {
            name: '7',
            iconCard: 'diamonds'
        },
        {
            name: '8',
            iconCard: 'diamonds'
        },
        {
            name: '9',
            iconCard: 'diamonds'
        },
        {
            name: '10',
            iconCard: 'diamonds'
        },
        {
            name: 'J',
            iconCard: 'diamonds'
        },
        {
            name: 'Q',
            iconCard: 'diamonds'
        },
        {
            name: 'K',
            iconCard: 'diamonds'
        },
        {
            name: 'A',
            iconCard: 'clubs'
        },
        {
            name: '2',
            iconCard: 'clubs'
        },
        {
            name: '3',
            iconCard: 'clubs'
        },
        {
            name: '4',
            iconCard: 'clubs'
        },
        {
            name: '5',
            iconCard: 'clubs'
        },
        {
            name: '6',
            iconCard: 'clubs'
        },
        {
            name: '7',
            iconCard: 'clubs'
        },
        {
            name: '8',
            iconCard: 'clubs'
        },
        {
            name: '9',
            iconCard: 'clubs'
        },
        {
            name: '10',
            iconCard: 'clubs'
        },
        {
            name: 'J',
            iconCard: 'clubs'
        },
        {
            name: 'Q',
            iconCard: 'clubs'
        },
        {
            name: 'K',
            iconCard: 'clubs'
        },
        {
            name: 'A',
            iconCard: 'spades'
        },
        {
            name: '2',
            iconCard: 'spades'
        },
        {
            name: '3',
            iconCard: 'spades'
        },
        {
            name: '4',
            iconCard: 'spades'
        },
        {
            name: '5',
            iconCard: 'spades'
        },
        {
            name: '6',
            iconCard: 'spades'
        },
        {
            name: '7',
            iconCard: 'spades'
        },
        {
            name: '8',
            iconCard: 'spades'
        },
        {
            name: '9',
            iconCard: 'spades'
        },
        {
            name: '10',
            iconCard: 'spades'
        },
        {
            name: 'J',
            iconCard: 'spades'
        },
        {
            name: 'Q',
            iconCard: 'spades'
        },
        {
            name: 'K',
            iconCard: 'spades'
        }
    ];

    const [list, updateList] = useState(eachCard);
    console.log('list: ', list);

    const scramble = () => {
        let currentIndex = list.length,
            temporaryValue,
            randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = list[currentIndex];
            list[currentIndex] = list[randomIndex];
            list[randomIndex] = temporaryValue;
        }
        updateList(list);
    };

    const handleDealCards = () => {
        if (list.length === 0) {
            setGame(false);
            setGameFinished(true);
        } else {
            setGame(true);
            setGameFinished(false);
        }
        scramble();
        // ---

        let pod01 = list[list.length - 4];
        let pod02 = list[list.length - 3];
        let pod03 = list[list.length - 2];
        let pod04 = list[list.length - 1];

        // console.log('pod01: ', pod01);
        // console.log('pod02: ', pod02);
        // console.log('pod03: ', pod03);
        // console.log('pod04: ', pod04);
        setSlot01([pod01]);
        setSlot02([pod02]);
        setSlot03([pod03]);
        setSlot04([pod04]);

        updateList(
            list.filter(item => item.name !== list[list.length - 1].name)
        );
        updateList(
            list.filter(item => item.name !== list[list.length - 2].name)
        );
        updateList(
            list.filter(item => item.name !== list[list.length - 3].name)
        );
        updateList(
            list.filter(item => item.name !== list[list.length - 4].name)
        );

        // scramble();
    };
    return (
        <Container>
            <button onClick={handleDealCards}>Deal cards</button>
            <section>
                {game && (
                    <>
                        <div>
                            <Card
                                icon={slot01.map(i => i.iconCard)}
                                value={slot01.map(i => i.name)}
                            />
                        </div>
                        <div>
                            <Card
                                icon={slot02.map(i => i.iconCard)}
                                value={slot02.map(i => i.name)}
                            />
                        </div>
                        <div>
                            <Card
                                icon={slot03.map(i => i.iconCard)}
                                value={slot03.map(i => i.name)}
                            />
                        </div>
                        <div>
                            <Card
                                icon={slot04.map(i => i.iconCard)}
                                value={slot04.map(i => i.name)}
                            />
                        </div>
                    </>
                )}
                {gameFinished && <NoCards />}
            </section>
        </Container>
    );
};

export default Main;
