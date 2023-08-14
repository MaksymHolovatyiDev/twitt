'use client';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

export default function LogIn() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    console.log(evt.target.email.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" aria-describedby="Email input" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="Password input" />
      </FormControl>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />

      <Button type="submit">Submit</Button>
    </form>
  );
}
