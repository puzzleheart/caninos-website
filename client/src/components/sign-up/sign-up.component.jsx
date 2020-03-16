import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>Ainda não possuo uma conta</SignUpTitle>
      <span>Cadastre-se com seu email e senha.</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='nome de usuário'
          required></FormInput>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='email'
          required></FormInput>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='senha'
          required></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='confirme sua senha '
          required></FormInput>
        <CustomButton type='submit'>CRIAR CONTA</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
