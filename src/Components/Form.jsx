import React from "react";

import "../App.css";

export default function Form() {
  return (
    <div className="pizzaForm">
      <img
        className="home-image"
        src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
        alt="Pizza"
      />
      <h2>Build Your Own Pizza</h2>
      <form>
        <h3>Personal Info</h3>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          // value={formState.name}
          // onChange={inputChange}
        />
        {/* {errors.name.length > 0 ? (
          <p data-cy="nameError" className="error">
            {errors.name}
          </p>
        ) : null} */}
        <h3>What size?</h3>
        <label htmlFor="size">Size: </label>
        <select id="size" name="size">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Jumbo">Jumbo</option>
        </select>
        <h3>Choose your toppings!</h3>
        <label htmlFor="toppings[]">Choose up to 3: </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Extra Cheese" /> Extra
          Cheese
        </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Pepperoni" />
          Pepperoni
        </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Sausage" /> Sausage
        </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Mushroom" /> Mushroom
        </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Onion" /> Onion
        </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Green Pepper" /> Green
          Pepper
        </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Olives" /> Olives
        </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Fresh Basil" /> Fresh
          Basil
        </label>
        <h3>Special Instructions?</h3>
        <label htmlFor="instructions">Special Instructions: </label>
        <textarea
          id="instructions"
          type="text"
          name="instructions"
          // value={formState.name}
          // onChange={inputChange}
        />
        <button className="submitBtn">Submit Order</button>
      </form>
    </div>
  );
}
