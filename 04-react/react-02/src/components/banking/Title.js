import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const title = 'Sean\'s Bank and BBQ Shack';
        const subTitle = 'Calgary\'s only financial institution serving high interest and tasty BBQ!';
        return (  
            <header>
                <h1>{title}</h1>
                <h3>{subTitle}</h3>
            </header>
        );
    }
}
 
export default Title;