import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let lyhage=18;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App age={lyhage} />);
const refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App age={lyhage} />
    )
}
  
setInterval(() => {
    refresh()
    lyhage += 1
}, 1000)
