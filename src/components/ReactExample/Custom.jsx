import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "react-formio";
import settingsForm from "./ReactExample.settingsForm";

/**
 * An example React component
 *
 * Replace this with your custom react component. It needs to have two things.
 * 1. The value should be stored is state as "value"
 * 2. When the value changes, call props.onChange(null, newValue);
 *
 */
const Custom = class extends Component {
  state = {
    value: this.props.value,
    options: [],
    _isMounted: false,
  };
  constructor(props) {
    // get component settings from props
    const { label, privacy, aggregation } = props.component;
    // console.log(label, privacy, aggregation);
    super(props);
  }
  componentDidMount() {
    this._isMounted = true;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({ options: data }, () => {
            console.log(this.state.options);
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSelect = (event) => {
    const index = event.target.value;
    console.log(this.state.options[index]);
    const { id, name, username } = this.state.options[index];
    this.setState({ value: { id, name, username } }, () => {
      console.log(this.state.options);
      console.log(this.state.value);
      this.props.onChange(null, { id, name, username });
    });
  };

  render() {
    return (
      <select name="select" onChange={this.handleSelect}>
        {this.state.options.map((user, index) => (
          <option value={index} key={index}>
            {user.username}
          </option>
        ))}
      </select>
    );
  }
};

export default class ReactExample extends ReactComponent {
  /**
   * This function tells the form builder about your component. It's name, icon and what group it should be in.
   *
   * @returns {{title: string, icon: string, group: string, documentation: string, weight: number, schema: *}}
   */
  static get builderInfo() {
    return {
      title: "Assignee",
      icon: "fa fa-user-circle",
      group: "custom",
      documentation: "",
      weight: -10,
      schema: ReactExample.schema(),
    };
  }

  /**
   * This function is the default settings for the component. At a minimum you want to set the type to the registered
   * type of your component (i.e. when you call Components.setComponent('type', MyComponent) these types should match.
   *
   * @param sources
   * @returns {*}
   */
  static schema() {
    return ReactComponent.schema({
      type: "assignee",
      label: "Assignee",
    });
  }

  /*
   * Defines the settingsForm when editing a component in the builder.
   */
  static editForm = settingsForm;

  /**
   * This function is called when the DIV has been rendered and added to the DOM. You can now instantiate the react component.
   *
   * @param DOMElement
   * #returns ReactInstance
   */
  attachReact(element) {
    return ReactDOM.render(
      <Custom
        component={this.component} // These are the component settings if you want to use them to render the component.
        value={this.dataValue} // The starting value of the component.
        onChange={this.updateValue} // The onChange event to call when the value changes.
      />,
      element
    );
  }

  /**
   * Automatically detach any react components.
   *
   * @param element
   */
  detachReact(element) {
    console.log("detachReact", element);
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
}
