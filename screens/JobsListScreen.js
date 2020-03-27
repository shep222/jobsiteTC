import React from 'react';
import { FlatList, View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import JobItem from '../components/JobItem'
import HeaderButton from '../components/HeaderButton';

const JobListScreen = props => {
    const jobsites = useSelector(state => state.jobs.jobSites)
    return (
        <FlatList data={jobsites} keyExtractor={item => item.id}
            renderItem={itemData => <JobItem title={itemData.item.title} address={itemData.item.address}
            onViewDetail={() => {props.navigation.navigate('JobDetails', {
                JobId: itemData.item.id, jobTitle: itemData.item.title
            })}}
            />}
        />
    )
}

JobListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Active Jobs',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Add Job"
                iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={()=>{
                    navData.navigation.navigate('NewJob')
                }}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({})

export default JobListScreen
