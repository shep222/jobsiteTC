import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import JobListScreen from '../screens/JobsListScreen';
import NewJobSiteScreen from '../screens/NewJobSiteScreen';
import JobDetailScreen from '../screens/JobDetailScreen';

import Colors from '../constants/Colors';

const JobSiteNavigator = createStackNavigator({
    Jobs: JobListScreen,
    JobDetails: JobDetailScreen,
    NewJob: NewJobSiteScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})


export default createAppContainer(JobSiteNavigator);
