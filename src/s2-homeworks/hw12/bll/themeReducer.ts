const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): { themeId: number } => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): { id: number; type: string } => {
    return {type: 'SET_THEME_ID', id} as const
}

type ActionType = ReturnType<typeof changeThemeId>
