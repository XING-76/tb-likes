import { ADDLIKES, DISLIKES } from '../constant'


export const createAddLikes = data => ({type: ADDLIKES, data})
export const createDislikes = data => ({type: DISLIKES, data})