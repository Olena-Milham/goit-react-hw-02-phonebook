
import {ContactForm} from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import {Component} from 'react';
import { nanoid } from 'nanoid';
//  import { Formik } from 'formik';
// import * as yup from 'yup';

export class App extends Component {
  state = {
    contacts:[
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  changeFilter=(e)=>{
this.setState({filter: e.currentTarget.value});
  }

// formSubmitHandler =data=>{
//   console.log(data);
// }


addContact = ({name, number})=>{
const contact={
id:nanoid(3),
name,
number,
};

// this.setState(prevState=>({
//   contacts:[contact,...prevState.contacts],
// }))

this.setState(({contacts})=>({
  contacts:[contact,...contacts],
}));

};

getFilteredContacts =()=>{
const {filter, contacts}=this.state;

const normilezedFilter=filter.toLowerCase();
  return contacts.filter(contact=>
    contact.name.toLowerCase().includes(normilezedFilter));
};

  render() {

// const normilezedFilter=this.state.filter.toLowerCase();
// const filteredContacts=this.state.contacts.filter(contact=>
//   contact.name.toLowerCase().includes(normilezedFilter));

const filteredContacts=this.getFilteredContacts();

    return (
      <>
      <h1> Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
        

        <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter}/>
          <ContactList options={filteredContacts}  />
       
        
      </>
    );
  }
};

// onSubmit={this.formSubmitHandler}