import  React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity} from 'react-native';


const JobItem = props => {
    return (
        <TouchableOpacity onPress={props.onViewDetail}>
            <View style={styles.job}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.address}>{props.address}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    job: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 80,
        margin: 20,
        paddingLeft: 10
    },
    title: {
        fontSize: 24,
        marginVertical: 4
    },
    address: {
        fontSize: 14
    }
})

export default JobItem;
