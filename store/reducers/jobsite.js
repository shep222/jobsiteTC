import JOBSITES from '../../data/dummy-data';


const initialState = {
    jobSites: JOBSITES,
    userSites: JOBSITES.filter(job => job.ownerId === 'u1')
}

export default (state = initialState, action ) => {
    return state;
}
