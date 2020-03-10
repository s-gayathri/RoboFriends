import React from 'react';

//props = {id,name,email} function (props) == function ({id,name,email})
const Card = ({ id, name, email }) => {
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} width="200px" height="200px"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;