import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = async event => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Vedran Knezevic",
        address: {
          street: "Teststret 12",
          zipCode: 42152,
          city: "Frankfurt"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    try {
      await axios.post("/orders.json", order);
      console.log(this.props.history.push("/"));
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }

    console.log(this.props);
  };

  render() {
    let contactForm = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Enter your street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Enter your postal code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      contactForm = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {contactForm}
      </div>
    );
  }
}

export default ContactData;
