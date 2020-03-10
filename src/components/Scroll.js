import React from 'react';

//props.children - children of the tag Scroll
//used to create components that wrap components
const Scroll = (props) => {
    return (
        <div 
        style = {{ overflowY: 'scroll',
                 border:'0px',
                 height:'700px'
                }}
        >
            {props.children}
        </div>
    );
}

export default Scroll;

//CSS: overflow-y JSX: overflowY
//style {...bracket for JS{...object with css properties...}...}