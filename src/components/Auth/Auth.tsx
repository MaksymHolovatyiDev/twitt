import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Image from 'next/image';

import { AuthData } from '@Types';

export default function Auth({ text, formData }: AuthData) {
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    // console.log(evt.target.email.value);
  };
  return (
    <div className="auth__container">
      <Image
        src={require('@assets/images/logo.png')}
        width={500}
        height={500}
        alt="Picture of the author"
        className="auth__logo"
      />
      <main>
        <p className="auth__text">{text}</p>
        <form className="auth__form" onSubmit={onSubmit}>
          {formData.map(el => (
            <FormControl>
              <InputLabel htmlFor={el.id}>{el.name}</InputLabel>
              <Input id={el.id} aria-describedby={el.description} />
            </FormControl>
          ))}

          <Button type="submit">{text}</Button>
        </form>
      </main>
    </div>
  );
}
