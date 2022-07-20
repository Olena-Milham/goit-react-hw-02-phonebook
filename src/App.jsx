
import {ContactForm} from 'components/ContactForm';
// import { ContactList } from 'components/ContactList';
// import { Filter } from 'components/Filter';
import {Component} from 'react';
// import { nanoid } from 'nanoid';
//  import { Formik } from 'formik';
// import * as yup from 'yup';

export class App extends Component {
  // state = {
  //   contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  //   filter: '',
  // }

  state = {
    contacts: [],
    name: ''
  }

  changeFilter=(e)=>{
this.setState({filter: e.currentTarget.value});
  }

formSubmitHandler =data=>{
  console.log(data);
}

  render() {
    return (
      <>
      <h1> Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        
        <ul>
          <h2>Contacts</h2>
          {/* <Filter value={this.state.filter} onChange={this.changeFilter}/> */}
          {/* <ContactList/> */}
          
        
        </ul>
        
      </>
    );
  }
};