import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const NewJobSiteScreen = props => {
    return (
        <View>
            <Text>New Job Screen</Text>
        </View>
    )
}


NewJobSiteScreen.navigationOptions = {
        headerTitle: 'Add a Job'
}

const styles = StyleSheet.create({})

export default NewJobSiteScreen;
