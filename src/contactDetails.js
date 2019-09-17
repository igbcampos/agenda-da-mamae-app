import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class ContactDetails extends Component {
    constructor(props) {
        super(props);

        this.state = { id: '', name: '', phone: '', email: '', description: '' };
    }

    componentDidMount() {
        let contact = this.props.navigation.getParam('contact');

        this.setState({ 
            id: contact.id, 
            name: contact.name, 
            phone: contact.phone, 
            email: contact.email, 
            description: contact.description 
        });
    }

    async updateContact() {
        let contact = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            description: this.state.description,
        }

        try {
            await firebase.firestore().collection('contacts').doc(this.state.id).set(contact);

            Alert.alert('Tudo certo', 'O contato foi atualizado com sucesso.');
        }
        catch {
            Alert.alert('Algo deu errado', 'Não foi possível atualizar o contato.');
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={ styles.container }>
                    <TextInput 
                        placeholder='Nome' 
                        value={ this.state.name }
                        onChangeText={ (name) => this.setState({ name }) }
                        style={ styles.input } />
                    
                    <TextInput 
                        placeholder='Telefone' 
                        value={ this.state.phone }
                        onChangeText={ (phone) => this.setState({ phone }) }
                        style={ styles.input } />
                        
                    <TextInput 
                        placeholder='E-mail' 
                        value={ this.state.email }
                        onChangeText={ (email) => this.setState({ email }) }
                        style={ styles.input } />
                        
                    <TextInput 
                        placeholder='Descrição' 
                        value={ this.state.description }
                        onChangeText={ (description) => this.setState({ description }) } 
                        multiline
                        style={ styles.input } />
                    
                    <View>
                        <Button 
                            title='Atualizar contato'
                            color='#593196'
                            onPress={ () => this.updateContact() } />
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
        padding: 16
    },
    input: {
        marginBottom: 16,
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#593196'
    },
});
