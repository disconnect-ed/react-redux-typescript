import * as UserActionCreator from './user-action'
import * as TodoActionCreator from './todo-action'

export default {
    ...TodoActionCreator,
    ...UserActionCreator
}