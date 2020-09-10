import React from 'react';
import { Red, Black } from './styles';

const index = ({ value, icon }) => {
    // console.log('Card: ', value, icon);
    // console.log('icon: ', icon[0]);
    return (
        <>
            {icon[0] === 'hearts' && (
                <div>
                    <Red>
                        {value[0]} {icon[0]}
                    </Red>
                </div>
            )}
            {icon[0] === 'diamonds' && (
                <div>
                    <Red>
                        {value[0]} {icon[0]}
                    </Red>
                </div>
            )}
            {icon[0] === 'spades' && (
                <div>
                    <Black>
                        {value[0]} {icon[0]}
                    </Black>
                </div>
            )}
            {icon[0] === 'clubs' && (
                <div>
                    <Black>
                        {value[0]} {icon[0]}
                    </Black>
                </div>
            )}
        </>
    );
};

export default index;
