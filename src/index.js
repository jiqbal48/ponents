import React from 'react';
import reactDom from 'react-dom';

function App(){
    return <h1> hello mars from react </h1>;
}

reactDom.render(<App />, document.getElementById('app'));