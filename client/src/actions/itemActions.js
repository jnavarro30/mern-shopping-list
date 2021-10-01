import { GET_ITEMS,  ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types'
import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading)
    axios
        .get('/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
}

export const deleteItem = id => dispatch => {
    axios
        .delete(`/items/${id}`)
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
}

export const addItem = item => dispatch => {
    axios
        .post('/items', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
}

export const setItemsLoading = _ => {
    return {
        type: ITEMS_LOADING
    }
}