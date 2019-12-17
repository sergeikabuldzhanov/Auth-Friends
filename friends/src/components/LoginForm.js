import React, { useState } from "react";

export default function LoginForm(props) {
  const [form, setForm] = useState({ login: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  function onInput(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }
  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  }
  return (
    <form onSubmit={onSubmit}>
      <label>
        Login:
        <input type="text" name="login" onChange={onInput} value={form.login} />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={onInput}
          value={form.password}
        />
      </label>
      <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
    </form>
  );
}
