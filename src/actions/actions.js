import { SET_CHANNELS, SET_PROGRAMS, SET_SORT } from './actionTypes';
import axios from 'axios';
import { api } from '../config';

export const setChannels = channels => {
    return {
        type: SET_CHANNELS,
        channels
    }
}

export const setSort = (programs, sort) => {
    const [field , type] = sort.split("-");    
    const compare = (a,b) => {
      if( type === 'asc'){
        return (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0) 
      }
      else {
        return (a[field] > b[field]) ? -1 : ((b[field] > a[field]) ? 1 : 0)
      }
    };

    return {
        type: SET_SORT,
        programs: programs.sort(compare)
    }
}

export const setPrograms = programs => {
    return {
        type: SET_PROGRAMS,
        programs
    }
}

export const fetchChannels = () => dispatch => {
    axios.get(`${api}/channels`).then(res => {
        dispatch(setChannels(res.data.channels))
    });
}

export const fetchPrograms = () => dispatch => {
    axios.get(`${api}/schedule/live`).then(res => {
        const programs = res.data.schedule.map(element => {
            return element.programs
        }).filter(element => {
            return element.length !== 0
        })

        const programsMerged = [].concat.apply([], programs);
        dispatch(setPrograms(programsMerged))
    });
}