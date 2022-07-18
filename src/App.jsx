
import {ContactForm} from 'components/ContactForm';
// import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import {Component} from 'react';
// import { nanoid } from 'nanoid';
//  import { Formik } from 'formik';
// import * as yup from 'yup';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  changeFilter=(e)=>{
this.setState({filter: e.currentTarget.value});

  }
  render() {
    return (
      <>
      <h1> Phonebook</h1>
        <ContactForm />
        
        <ul>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter}/>
          {/* <ContactList/> */}
          
        
        </ul>
        
      </>
    );
  }
};