import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // if(true; ideally some condition...) {
    //     throw new Error("Oops!");
    // }
    return (
        <div>
            {
                robots.map((user, index) => {
                    return (
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    ); 
}

export default CardList;