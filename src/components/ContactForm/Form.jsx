import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
// import { nanoid } from 'nanoid';
// import {Component} from 'react';

const schema = yup.object.shape({
    name:yup.string().required('Please enter your name'),
    number: yup.string().min(5).max(13).required('Phone number is required'),
})

const initialValues={
  name: '',
 number:'',
   }

const Input = styled(Field)`
  color: #2a2a2a;
`;

export const ContactForm = ()=> {
const handleSubmit =(values, {resetForm})=>{
    console.log(values);
    // console.log(actions);//{resetForm}
    resetForm();
}
const ErrorText = styled.p`
  color: red;
`;
const FormError = ({name})=>{
    return (
        <ErrorMessage
          name={name}
          render={message => <ErrorText>{message}</ErrorText>}
        />
      );

}

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor='name'>
          Name
          <Input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  id='name'
/>

{/* ErrorMassage=FormError */}
          <FormError name="name" component="div" />
        </label>
        <label htmlFor='name'>
          Number 
          <Input      
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  id='number'
/>
          <FormError name="number" component="div" />

        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );  
};