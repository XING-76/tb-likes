import { ADDLIKES, DISLIKES } from '../constant'

const initState = []
export default function likesReducer(preState = initState, action) {
  // 從 action 對象中獲取 type、data
  const {type, data} = action
  // 根據 type 決定如何加工數據
  switch (type) {
    case ADDLIKES:
      const updateState = preState.filter(( preObj => preObj.id !== data.id ))
      return [data, ...updateState]
    case DISLIKES:
      const lastState = preState.filter( preObj => preObj.id !== data.id )
      return lastState
    default:
      return preState
  }
}