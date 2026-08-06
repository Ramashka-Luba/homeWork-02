import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedName = state
            if(action.payload === 'up') {
                return sortedName.sort((a,b) => a.name.localeCompare(b.name))
            } else {
                return sortedName.sort((a,b) => b.name.localeCompare(a.name))
            }
        }
        case 'check': {
            const filteredName = state
            filteredName.filter(s => s.age >= action.payload )
                        .sort((a,b) => a.age - b.age)
            return filteredName // need to fix
        }
        default:
            return state
    }
}


