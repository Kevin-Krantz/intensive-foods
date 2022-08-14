import React, { Component } from "react";
import Input from "./Input";
import DropDown from "../common/DropDown";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate() {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options); // this.schema.validate är Jois validate funktion. Den vill ha det objektet som ska valideras mot vår Joi schema, det objektet ligger i mitt state. Alltså this.state.data

    if (!error) return null; // skicka tillbaka error om falsy,

    const errors = {};
    for (const detail of error.details) // om inte falsy, i error objektet finns det en array som heter details, det är detaljerna i mina errors,
      errors[detail.context.key] = detail.message; // varje detail objekt har en context.key, i mitt fall är det username och password, och den har även detail.message som är error meddelandet som Joi har genererat baserat på kraven i mitt joi object,
    // alltså .string().required().min(2).label

    return errors;
  }

  validateProperty({ name, value }) {
    // det jag skickar in här är en input, namn och värde, och input.value är det värdet som jag skriver i den inputen just nu
    const subSchema = this.schema.extract(name); // extract är en funktion från Joi, name kommer plocka ut BARA username reglerna och ge mig en ny subschema som bara innehåller username reglerna
    const { error } = subSchema.validate(value); // här vill jag har abortEarly för att jag vill bara ha 1 meddelande, den ger mig en details array med bara 1 element

    if (!error) return null;

    return error.message;
  }

  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors }; // klonar errors objektet
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderbutton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {label}
      </button>
    );
  }

  renderDropDown(name, label, categories) {
    const { data, errors } = this.state;

    return (
      <DropDown
        categories={categories}
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderInput(name, label) {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;

// abstrakt komponent är en komponent som inte har render funktion
