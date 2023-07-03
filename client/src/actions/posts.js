import * as api from '../api'

// Action creators
// You need this format to call an async function for dispatch
export const getPosts = () => async (dispatch) => {
    try {
        // We get response, but we grab data param from it
        const {data} = await api.fetchPosts()
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch(e) {
        console.log(e)
    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)

        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post)

        dispatch({type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}