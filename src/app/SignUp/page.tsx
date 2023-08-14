'use client';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@mui/material';

export default function LogIn() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    console.log(evt.target.email.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <InputLabel htmlFor="email">User name</InputLabel>
        <Input id="email" aria-describedby="Email input" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" aria-describedby="Email input" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="Password input" />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}
