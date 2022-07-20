import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
// import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {Component} from 'react';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   id: yup.string().required(),
// //   number:
// //   contacts:
// });

// const initialValues = {
//     contacts: [{name:'', id: '',}],
// };

const Input = styled(Field)`
  color: #2a2a2a;
`;

export class ContactForm extends Component {

  state ={
id: nanoid(3),
name: '',
number:'',
  }



  // handleSubmit = (values, { resetForm }) => {
  //   console.log(values);
  //   resetForm();
  // };

  // handleNameChange = event=>{
  //   // console.log(event.currentTargrt.value);
  //   this.setState({name:event.currentTarget.value})
  // }

  // handleNumberChange = event=>{
  //   // console.log(event.currentTargrt.value);
  //   this.setState({number:event.currentTarget.value})
  // }

//   handleChange=event=>{
//     this.setState({
//       [event.currentTarget.name]:event.currentTarget.value
//     })
//   }

handleChange=event=>{
  const {name, value}=event.currentTarget;
  this.setState({
    [name]: value,
  });
};

handleSubmit = event => {
  event.preventDefault();
  // console.log(this.state);
  this.props.onSubmit(this.state);
  this.reset();
};

// clear state:
reset = ()=> {
this.setState({name: '', number:'',});
};

render(){
  return (
    <Formik
      // initialValues={initialValues}
      // validationSchema={schema}
      // onSubmit={handleSubmit}
    >
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <Input
          value={this.state.name}
          onChange={this.handleChange}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  id={this.state.id}
/>
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="number">
          Number 
          <Input
           value={this.state.number}
           onChange={this.handleChange}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
          {/* <ErrorMessage name="number" component="div" /> */}
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
  
};