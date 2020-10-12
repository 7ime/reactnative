import {JsonPlaceholderState, JsonPlaceholderSelector} from '../index'
import {IAppState} from '../../app-reducer'
import MockAppState from '../../../__mocks__/app-state'
import MockJsonPlaceholder from '../../../__mocks__/jsonplaceholder'

describe('jsonPlaceholder selector', () => {
    it('getTotalCountOfPosts when posts not exist', () => {
        const state: IAppState = MockAppState.initialAppState()

        const result = JsonPlaceholderSelector.getTotalCountOfPosts(state)
        expect(result).toBeNull()
    })

    it('getTotalCountOfPosts when posts exist', () => {
        const state: IAppState = {
            ...MockAppState.initialAppState(),
            jsonPlaceholder: {
                ...JsonPlaceholderState.initialState,
                posts: [MockJsonPlaceholder.modelDTO()]
            }
        }

        const result = JsonPlaceholderSelector.getTotalCountOfPosts(state)
        expect(result).toEqual(1)
    })
})
