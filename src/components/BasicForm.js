import React from "react";
import { useInput } from "../hooks/CustomInput";

export const BasicForm = () => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  let buttonDisabled = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    buttonDisabled = true;
  }

  const fromSubmissionHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }

    console.log(
      "First Name: " +
        firstName +
        " Last Name: " +
        lastName +
        " Email: " +
        emailInput
    );
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={fromSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="f_name">First Name</label>
          <input
            type="text"
            id="f_name"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameInputHasError && (
            <p className="error-text">Please, Enter Your First Name.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="l_name">Last Name</label>
          <input
            type="text"
            id="l_name"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Please, Enter Your Last Name.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="f_email">E-Mail Address</label>
        <input
          type="email"
          id="f_email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailInputHasError && (
          <p className="error-text">Please, Enter Valid Email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!buttonDisabled}>Submit</button>
      </div>
    </form>
  );
};
