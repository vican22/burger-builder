import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elemetType: "input",
        elemetConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      street: {
        elemetType: "input",
        elemetConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: ""
      },
      zipCode: {
        elemetType: "input",
        elemetConfig: {
          type: "text",
          placeholder: "ZIP Code"
        },
        value: ""
      },
      city: {
        elemetType: "input",
        elemetConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: ""
      },
      email: {
        elemetType: "input",
        elemetConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: ""
      },
      deliveryMethod: {
        elemetType: "select",
        elemetConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };

  orderHandler = async event => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
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
        <Input elemetType="..." elemetConfig="..." value="..." />
        <Input
          inputtype={"input"}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <Input
          inputtype={"input"}
          type="text"
          name="street"
          placeholder="Enter your street"
        />
        <Input
          inputtype={"input"}
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
