
// import {ContactForm} from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import {Component} from 'react';
import { nanoid } from 'nanoid';
import { Form } from 'formik';
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

// For Form 
  handleSubmit = values => {
    const name = values.name;
    const names = this.state.contacts.map(contact => contact.name);

    if (!names.includes(name)) {
      const newContact = {
        id: nanoid(3),
        name,
        number: values.number,
      };
      this.setState({
        contacts: [...this.state.contacts, newContact],
      });
      return true; 
    }
    alert(`${name} is already in contacts`);
    return false;
  };

// =======
// formSubmitHandler =data=>{
//   console.log(data);
// }

// ******* For ContactForm
// addContact = ({name, number})=>{
// const contact={
// id:nanoid(3),
// name,
// number,
// };

// without destructarization 
// // this.setState(prevState=>({
// //   contacts:[contact,...prevState.contacts],
// // }))

// this.setState(({contacts})=>({
//   contacts:[contact,...contacts],
// }));

// };

// *****

changeFilter=(e)=>{
  this.setState({filter: e.currentTarget.value});
    }

getFilteredContacts =()=>{
const {filter, contacts}=this.state;

const normilezedFilter=filter.toLowerCase();
  return contacts.filter(contact=>
    contact.name.toLowerCase().includes(normilezedFilter));

};

deleteContact = contactId => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }));
};

  render() {



const filteredContacts=this.getFilteredContacts();

    return (
      <>
      <h1> Phonebook</h1>
        {/* <ContactForm onSubmit={this.addContact}/> */}
        <Form onSubmit={this.handleSubmit}/>
        

        <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter}/>
          <ContactList options={filteredContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
};

// onSubmit={this.formSubmitHandler}

// without distructurization
// const normilezedFilter=this.state.filter.toLowerCase();
// const filteredContacts=this.state.contacts.filter(contact=>
//   contact.name.toLowerCase().includes(normilezedFilter));