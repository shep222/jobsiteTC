const initialState = {
    jobId: '',
    employeeId: '',
    date: '',
    startTime: '',
    endTime: ''
}


export default (state = initialState, action) => {
    console.log(state);
    return state;
}
