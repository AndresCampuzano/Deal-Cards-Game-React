import React from 'react';
import { Red, Black } from './styles';

const index = ({ value, icon }) => {
    return (
        <>
            {icon === 'hearts' && (
                <div>
                    <Red>
                        {value} {icon}
                    </Red>
                </div>
            )}
            {icon === 'diamonds' && (
                <div>
                    <Red>
                        {value} {icon}
                    </Red>
                </div>
            )}
            {icon === 'spades' && (
                <div>
                    <Black>
                        {value} {icon}
                    </Black>
                </div>
            )}
            {icon === 'clubs' && (
                <div>
                    <Black>
                        {value} {icon}
                    </Black>
                </div>
            )}
        </>
    );
};

export default index;
