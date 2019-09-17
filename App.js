import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAu8_xl_qscGIz7RLPO-j9hRsr4vFI29I8",
  authDomain: "agenda-da-mamae.firebaseapp.com",
  databaseURL: "https://agenda-da-mamae.firebaseio.com",
  projectId: "agenda-da-mamae",
  storageBucket: "agenda-da-mamae.appspot.com",
  messagingSenderId: "502785445712",
  appId: "1:502785445712:web:4bb1a8cc904fc036"
};

Firebase.initializeApp(firebaseConfig);

import Contacts from './src/contacts';
import ContactDetails from './src/contactDetails';
import AddContact from './src/addContact';

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