import React, { useState } from 'react';
import Container from './styles';
import Card from '../Cards';

const Main = () => {
    const [slot01, setSlot01] = useState();
    const [slot02, setSlot02] = useState();
    const [slot03, setSlot03] = useState();
    const [slot04, setSlot04] = useState();
    const [icon01, setIcon01] = useState();
    const [icon02, setIcon02] = useState();
    const [icon03, setIcon03] = useState();
    const [icon04, setIcon04] = useState();

    // Data cards
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K'
    ];

    const handleDealCards = () => {
        // Card number
        const randomNumberSlot01 = Math.round(Math.random() * 12);
        const randomNumberSlot02 = Math.round(Math.random() * 12);
        const randomNumberSlot03 = Math.round(Math.random() * 12);
        const randomNumberSlot04 = Math.round(Math.random() * 12);
        setSlot01(values[randomNumberSlot01]);
        setSlot02(values[randomNumberSlot02]);
        setSlot03(values[randomNumberSlot03]);
        setSlot04(values[randomNumberSlot04]);
        // Card icon
        const randomIconSlot01 = Math.round(Math.random() * 3);
        const randomIconSlot02 = Math.round(Math.random() * 3);
        const randomIconSlot03 = Math.round(Math.random() * 3);
        const randomIconSlot04 = Math.round(Math.random() * 3);
        setIcon01(suits[randomIconSlot01]);
        setIcon02(suits[randomIconSlot02]);
        setIcon03(suits[randomIconSlot03]);
        setIcon04(suits[randomIconSlot04]);
    };
    return (
        <Container>
            <button onClick={handleDealCards}>Deal cards</button>
            <section>
                {slot01 && (
                    <>
                        {' '}
                        <div>
                            <Card value={slot01} icon={icon01} />
                        </div>
                        <div>
                            <Card value={slot02} icon={icon02} />
                        </div>
                        <div>
                            <Card value={slot03} icon={icon03} />
                        </div>
                        <div>
                            <Card value={slot04} icon={icon04} />
                        </div>
                    </>
                )}
            </section>
        </Container>
    );
};

export default Main;
