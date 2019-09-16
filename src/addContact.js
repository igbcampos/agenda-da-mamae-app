import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class AddContact extends Component {
    render() {
        return (
            <ScrollView>
                <View style={ styles.container }>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
