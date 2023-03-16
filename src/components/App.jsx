import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };


  addContact = newContact => {
    this.state.contacts.find(contact =>
      contact.name.toLowerCase() === (newContact.name.toLowerCase())
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };


 componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);

    savedContacts !== null
      ? this.setState({
          contacts: JSON.parse(savedContacts),
        })
      : this.setState({
          contacts: [],
        });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }


  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <GlobalStyles />
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addContact} />

        <h2>Contacts</h2>
        <Filter stateFilter={this.state.filter} onChange={this.changeFilter} />

        <ContactList items={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}
