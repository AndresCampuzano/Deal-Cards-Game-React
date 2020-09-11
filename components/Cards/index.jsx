import React from 'react';
import { Red, Black, Card } from './styles';

const index = ({ value, icon }) => {
    return (
        <>
            {icon[0] === 'hearts' && (
                <Card>
                    <Red>
                        {value[0]} {icon[0]}
                    </Red>
                </Card>
            )}
            {icon[0] === 'diamonds' && (
                <Card>
                    <Red>
                        {value[0]} {icon[0]}
                    </Red>
                </Card>
            )}
            {icon[0] === 'spades' && (
                <Card>
                    <Black>
                        {value[0]} {icon[0]}
                    </Black>
                </Card>
            )}
            {icon[0] === 'clubs' && (
                <Card>
                    <Black>
                        {value[0]} {icon[0]}
                    </Black>
                </Card>
            )}
        </>
    );
};

export default index;
