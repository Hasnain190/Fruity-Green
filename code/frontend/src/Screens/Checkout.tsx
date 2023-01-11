import React, { useState } from 'react';

interface Customer {
  name: string;
  email: string;
  shippingAddress: string;
}

const CheckoutPage: React.FC = () => {
  // useState hook to keep track of the customer's information
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    email: '',
    shippingAddress: ''
  });

  // useState hook to keep track of the items in the cart
  const [cart, setCart] = useState<string[]>([]);

  // function to handle changes to the customer's information
  const handleCustomerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  }

  // function to handle adding an item to the cart
  const handleAddToCart = (item: string) => {
    setCart([...cart, item]);
  }

  // function to handle removing an item from the cart
  const handleRemoveFromCart = (item: string) => {
    setCart(cart.filter(i => i !== item));
  }

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h2>Customer Information</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" onChange={handleCustomerChange} value={customer.name} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" onChange={handleCustomerChange} value={customer.email} />
          </label>
          <br />
          <label>
            Shipping Address:
            <input type="text" name="shippingAddress" onChange={handleCustomerChange} value={customer.shippingAddress} />
          </label>
        </form>
      </div>
      <br />
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item}>
              {item}
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h2>Available Items</h2>
        <ul>
          <li onClick={() => handleAddToCart('Item 1')}>Item 1</li>
          <li onClick={() => handleAddToCart('Item 2')}>Item 2</li>
          <li onClick={() => handleAddToCart('Item 3')}>Item 3</li>
        </ul>
      </div>
      <br />
      <button>Place Order</button>
    </div>
  );
}

export default CheckoutPage;
