import {SCHED_ACT_TYPES} from '../actions/_ACTION_TYPES';

export default (state={
            // Schedule returned to users looking at sched  
            activeSchedId: 'schedId1',
            // Changed when generating new schedule
            generating: false, 
            errorMsg: '',
            allScheds: {
                'schedId1': {
                    id: 'schedId1',
                    startDate: '2017-09-01',
                    endDate: '2017-09-15',
                    sched: {
                        '2017-09-01': {
                            id: '2017-09-01', 
                            date : 'Sep 1',
                            name: 'Friday',
                            tasks: {
                                'taskId1': {
                                    id: 'taskId1',
                                    name: 'Swab cannons',
                                    assigned: {
                                        'membId1': {
                                            id: 'membId1',
                                            name: 'Smackjax',
                                        }
                                    }
                                }
                            }
                        },
                        '2017-09-02': {
                            id: '2017-09-02', 
                            date : 'Sep 2',
                            name: 'Saturday',
                            tasks: {
                                'taskId3': {
                                    id: 'taskId3',
                                    name: 'Captain ship',
                                    assigned: {
                                        'membId2': {
                                            id: 'membId2',
                                            name: 'Livvy Bivvy',
            
                                        }
                                    }
                                },
                            }
                        },
                        '2017-09-03': {
                            id: '2017-09-03', 
                            date : 'Sep 3',
                            name: 'Sunday',
                            tasks: {
                                'taskId1': {
                                    id: 'taskId1',
                                    name: 'Swab cannons',
                                    assigned: {
                                        'membId1': {
                                            id: 'membId1',
                                            name: 'Smackjax',
                                        }
                                    }
                                },
                                'taskId3': {
                                    id: 'taskId3',
                                    name: 'Captain ship',
                                    assigned: {
                                        'membId2': {
                                            id: 'membId2',
                                            name: 'Livvy Bivvy',
            
                                        }
                                    }
                                },
                            }
                        },
                        '2017-09-04': {
                            id: '2017-09-04', 
                            date : 'Sep 4',
                            name: 'Monday',
                            tasks: {
                                'taskId1': {
                                    id: 'taskId1',
                                    name: 'Swab cannons',
                                    assigned: {
                                        'membId1': {
                                            id: 'membId1',
                                            name: 'Smackjax',
                                        }
                                    }
                                },
                                'taskId2': {
                                    id: 'taskId2',
                                    name: 'Hoist Sail',
                                    assigned: {
                                        'membId1': {
                                            id: 'membId1',
                                            name: 'Smackjax',
                                        }
                                    }
                                },
                                'taskId3': {
                                    id: 'taskId3',
                                    name: 'Captain ship',
                                    assigned: {
                                        'membId2': {
                                            id: 'membId2',
                                            name: 'Livvy Bivvy',
            
                                        }
                                    }
                                },
                                'taskId4': {
                                    id: 'taskId4',
                                    name: 'Scrub deck',
                                    assigned: {
                                        'membId1': {
                                            id: 'membId1',
                                            name: 'Smackjax',
                                        },
                                        'membId3': {
                                            id: 'membId3',
                                            name: 'Teri Bernard'
                                        }
                                    }
                                },
                            }
                        },
            
                    }
                }     
            }
}, action)=>{
    switch(action.type){
        case SCHED_ACT_TYPES.START_GEN_NEW:{
            return {...state,
                    generating: true
                }
        }
        case SCHED_ACT_TYPES.SCHED_GEN_FAIL:{
            return {...state, 
                generating: false,
                errorMsg: action.errorMsg
                }
        }
        case SCHED_ACT_TYPES.SCHED_GEN_SUCCESS:{
            return {
                ...state, 
                generating: false,
                errorMsg: '',
                allScheds: {
                    ...state.allScheds,
                    [action.newSched.id] :{
                        ...action.newSched
                    }
                },
            }
        }
        case SCHED_ACT_TYPES.CHANGE_ACTIVE_SCHED:{
            return {
                ...state, 
                activeSchedId: action.newSchedId
            }
        }
        default: return state
    }
}