import React, { Component, useState } from 'react';
import { ScrollView, Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


const JobDetailScreen = props => {
    const jobId = props.navigation.getParam('JobId')
    const selectedJob = useSelector(state => state.jobs.jobSites.find(job => job.id === jobId))

    const [date, setDate] = useState(new Date())
    const [startTime, setStartTime ] = useState(new Date())
    const [endTime, setEndTime ] = useState(new Date())


    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [showStartTime, setShowStartTime] = useState(false);
    const [showEndTime, setShowEndTime] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setShow(false)
  };

  const onTimeChange = (event, selectedDate) => {
      const currentStartTime = selectedDate || startTime;
      setStartTime(currentStartTime);

  }

  const onEndTimeChange = (event, selectedDate) => {
      const currentEndTime = selectedDate || startTime;
      setEndTime(currentEndTime);
  }

  const toggleEndTime = () => {
      setShowEndTime(!showEndTime)
  }

  const toggleStartTime = () => {
      setShowStartTime(!showStartTime)
  }



  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };



 return (
     <View>
      <View style={styles.dateContainer}>

       <Text style={styles.date}>{moment(date).format('MMMM DD YYYY')} </Text>
       <Button onPress={showDatepicker} title="Change Date" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <View>
        <View style={styles.timeContainer}>
            <Text style={styles.date}>Start Time:</Text>
            <TouchableOpacity onPress={toggleStartTime}>
                <Text style={styles.date}>{moment(startTime).format('h:mm a')}</Text>
            </TouchableOpacity>
        </View>

        {showStartTime && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={-360}
            value={startTime}
            mode='time'
            is24Hour={true}
            display="default"
            onChange={onTimeChange}
          />
        )}
      </View>

      <View>
        <View style={styles.timeContainer}>
            <Text style={styles.date}>End Time:</Text>
            <TouchableOpacity onPress={toggleEndTime}>
                <Text style={styles.date}>{moment(endTime).format('h:mm a')}</Text>
            </TouchableOpacity>
        </View>
        {showEndTime && (
          <DateTimePicker
            testID="dateTimePicker2"
            timeZoneOffsetInMinutes={-360}
            value={endTime}
            mode='time'
            is24Hour={true}
            display="default"
            onChange={onEndTimeChange}
          />
        )}
      </View>
      <View style={styles.submit}>
          <Button title="Submit Hours" onPress={()=>{
              console.log(endTime);
              const totalTime = (endTime - startTime)/3600000
              console.log(totalTime);
          }}/>
      </View>
    </View>


 )
}

JobDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('jobTitle')
    }
}


const styles = StyleSheet.create({
    dateContainer: {
        marginTop: 30
    },
    date:{
        fontSize: 30,
        textAlign: 'center'
    },
    picker: {
        marginTop: 40
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    timeContainer: {
        marginTop: 50
    },
    submit: {
        marginTop: 100
    }
})

export default JobDetailScreen;
