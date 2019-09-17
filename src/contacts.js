import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Contacts extends Component {
    constructor(props) {
        super(props);

        this.state = { contacts: [], search: '', refreshing: false };
    }

    componentDidMount() {
        this.getContacts();
    }

    async getContacts() {
        let contacts = [];
        
        await firebase.firestore().collection('contacts').get()
        .then((snapshot) => {
            snapshot.forEach((contact) => {
                let data = contact.data();
                data.id = contact.id;
                
                contacts.push(data);
            });
        });

        this.setState({ contacts });
    }

    renderItem(item) {
        if(item.name.toLowerCase().includes(this.state.search.toLowerCase()) || item.email.toLowerCase().includes(this.state.search.toLowerCase()) || item.phone.toLowerCase().includes(this.state.search.toLowerCase())) {
            return (
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('ContactDetails', { contact: item }) }>
                    <Text>{ item.name }</Text>
                    <Text>{ item.phone }</Text>
                </TouchableOpacity>
            );
        }
        else {
            return;
        }
    }
    
    render() {
        let emptyList = <View>
            <Text>Ainda não há contatos salvos.</Text>
        </View>

        return (
            <ScrollView>
                <View>
                    <Button 
                        title='Adicionar contato' 
                        onPress={ () => this.props.navigation.navigate('AddContact') } />
                </View>

                <TextInput
                    placeholder='Buscar'
                    value={ this.props.value }
                    onChangeText={ (search) => this.setState({ search }) } />

                <View style={ styles.container }>
                    <FlatList
                        data={ this.state.contacts }
                        keyExtractor={ (item) => item.id }
                        renderItem={ ({item}) => this.renderItem(item) }
                        ListEmptyComponent={ emptyList }
                        refreshing={ this.state.refreshing }
                        onRefresh={ this.getContacts } />
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
