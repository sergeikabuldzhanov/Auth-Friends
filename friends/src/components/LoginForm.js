import React, { useState } from "react";
import axios from 'axios';

export default function LoginForm(props) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  function onInput(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={event=>{
      event.preventDefault();
      setIsLoading(true);
      props.onSubmit(form);
      props.history.push('/friends');
    }}>
      <label>
        Login:
        <input type="text" name="username" onChange={onInput} value={form.username} />
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
