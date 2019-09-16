import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from './src/contacts';
import ContactDetails from './src/contactDetails';
import AddContact from './src/addContact';

const NavigationStack = createStackNavigator(
  {
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contatos',
      }
    },
    ContactDetails: {
      screen: ContactDetails,
      navigationOptions: {
        title: 'Detalhes do contato',
      }
    }, 
    AddContact: {
      screen: AddContact,
      navigationOptions: {
        title: 'Adicionar contato',
      }
    },
  },
);

const AppContainer = createAppContainer(NavigationStack);

export default function App() {
  return (
    <AppContainer />
  );
}