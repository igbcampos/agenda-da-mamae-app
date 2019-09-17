import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

import Contacts from './src/contacts';
import ContactDetails from './src/contactDetails';
import AddContact from './src/addContact';
import Util from './src/util';

firebase.initializeApp(Util);

const NavigationStack = createStackNavigator(
  {
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contatos',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#593196',
        },
      }
    },
    ContactDetails: {
      screen: ContactDetails,
      navigationOptions: {
        title: 'Detalhes do Contato',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#593196',
        },
      }
    }, 
    AddContact: {
      screen: AddContact,
      navigationOptions: {
        title: 'Adicionar Contato',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#593196',
        },
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