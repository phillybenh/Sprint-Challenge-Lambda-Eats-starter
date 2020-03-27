import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

import "../App.css";

//schema for form validation
const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "Name must have at least 2 characters")
  //   size: yup.string().required("Size is a required field"),
  //   toppings: yup.array().max(4, "Maximum of 4 toppings")
});

export default function Form() {
  //state for order
  const [orderState, setOrderState] = useState({
    name: "",
    size: "",
    extraCheese: "",
    pepperoni: "",
    sausage: "",
    mushroom: "",
    onion: "",
    instructions: ""
  });

  //state for errors
  const [errors, setErrors] = useState({
    name: ""
    // size: ""
    //   toppings: ""
  });

  //other states
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [post, setPost] = useState([]);

  //    const [order, setOrder] = useState([]);

  //useEffect to validate w/ schema every time orderState updates
  useEffect(() => {
    formSchema.isValid(orderState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [orderState]);

  const validateChange = event => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [event.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors
        });
      });
  };

  //event handlers
  const inputChange = event => {
    event.persist();
    const newFormData = {
      ...orderState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    };
    validateChange(event);
    setOrderState(newFormData);
  };

  const inputChange2 = event => {
    event.persist();
    const newFormData = {
      ...orderState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    };
    setOrderState(newFormData);
  };

  const formSubmit = event => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", orderState)
      .then(res => {
        setPost(res.data);
        // console.log(res.data);
        // console.log("success", post);
        //   const newUser = {
        //     createdAt: res.data.createdAt,
        //     email: res.data.email,
        //     id: res.data.id,
        //     name: res.data.name,
        //     pwd: res.data.pwd,
        //     terms: res.data.terms
        //   };
        //   setUsers([...users, newUser]);
        //   console.log("users", users);

        setOrderState({
          name: "",
          size: "",
          extraCheese: "",
          pepperoni: "",
          sausage: "",
          mushroom: "",
          onion: "",
          instructions: ""
        });
      })
      .catch(err => {
        console.log(err.res);
      });
  };

  return (
    <div className="pizzaForm">
      <img
        className="home-image"
        src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
        alt="Pizza"
      />
      <h2>Build Your Own Pizza</h2>
      <form onSubmit={formSubmit} className="byoForm" id="byoForm">
        <h3>Personal Info</h3>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          value={orderState.name}
          onChange={inputChange}
        />
        {errors.name.length > 0 ? (
          <p data-cy="nameError" className="error">
            {errors.name}
          </p>
        ) : null}
        <h3>What size?</h3>
        <label htmlFor="size">Size: </label>
        <select
          id="size"
          name="size"
          value={orderState.size}
          onChange={inputChange2}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Jumbo">Jumbo</option>
        </select>
        <h3>Choose your toppings!</h3>
        <label htmlFor="toppings[]">Choose up to 3: </label>
        <label>
          <input
            type="checkbox"
            name="extraCheese"
            value="Extra Cheese"
            onChange={inputChange2}
          />
          Extra Cheese
        </label>
        <label>
          <input
            type="checkbox"
            name="pepperoni"
            value="Pepperoni"
            onChange={inputChange2}
          />
          Pepperoni
        </label>
        <label>
          <input
            type="checkbox"
            name="sausage"
            value="Sausage"
            onChange={inputChange2}
          />{" "}
          Sausage
        </label>
        <label>
          <input
            type="checkbox"
            name="mushroom"
            value="Mushroom"
            onChange={inputChange2}
          />{" "}
          Mushroom
        </label>
        <label>
          <input
            type="checkbox"
            name="onion"
            value="Onion"
            onChange={inputChange2}
          />{" "}
          Onion
        </label>
        {/* <label>
          <input type="checkbox" name="toppings[]" value="Green Pepper" /> Green
          Pepper
        </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Olives" /> Olives
        </label>
        <label>
          <input type="checkbox" name="toppings[]" value="Fresh Basil" /> Fresh
          Basil
        </label> */}
        <h3>Special Instructions?</h3>
        <label htmlFor="instructions">Special Instructions: </label>
        <textarea
          id="instructions"
          type="text"
          name="instructions"
          value={orderState.instructions}
          onChange={inputChange2}
        />
        <button className="submitBtn" disabled={buttonDisabled}>
          Submit Order
        </button>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </form>
    </div>
  );
}
