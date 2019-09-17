import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class AddContact extends Component {
    constructor(props) {
        super(props);

        this.state = { name: '', phone: '', email: '', description: '' };
    }

    async addContact() {
        let contact = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            description: this.state.description,
        }

        try {
            await firebase.firestore().collection('contacts').add(contact);

            Alert.alert('Tudo certo', 'O contato foi cadastrado com sucesso.');

            this.setState({ name: '', phone: '', email: '', description: '' });
        }
        catch {
            Alert.alert('Algo deu errado', 'Não foi possível cadastrar o contato.');
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={ styles.container }>
                    <TextInput 
                        placeholder='Nome' 
                        value={ this.state.name }
                        onChangeText={ (name) => this.setState({ name }) } />
                    
                    <TextInput 
                        placeholder='Telefone' 
                        value={ this.state.phone }
                        onChangeText={ (phone) => this.setState({ phone }) } />
                        
                    <TextInput 
                        placeholder='E-mail' 
                        value={ this.state.email }
                        onChangeText={ (email) => this.setState({ email }) } />
                        
                    <TextInput 
                        placeholder='Descrição' 
                        value={ this.state.description }
                        onChangeText={ (description) => this.setState({ description }) } 
                        multiline />
                    
                    <View>
                        <Button 
                            title='Adicionar contato'
                            onPress={ () => this.addContact() } />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
