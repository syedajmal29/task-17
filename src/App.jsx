import React from 'react';
import { CartProvider } from './Cartcontext';
import Cart from './Cart';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
    return (
        <CartProvider>
            <div className="App text-center">
                <h1>Shopping Cart</h1>
              
                <Cart />
             
            </div>
        </CartProvider>
    );
}

export default App;