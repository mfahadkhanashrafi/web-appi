import React from "react";
function Form() {
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }
    function handleSubmit(evt) {
        // evt.preventdefault()
        console.log('state',state)
      }


  const [state, setState] = React.useState({
    firstName: "",
    lastName: ""
  })
 
  return (
    <div>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        <button onClick={handleSubmit}>ok</button>
      </label>
    </div>
  );
}

export default Form;