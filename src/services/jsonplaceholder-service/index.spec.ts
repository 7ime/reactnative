import nock from 'nock'

import JsonPlaceholderService from './index'
import {IJsonPlaceholder} from '../../entities/jsonplaceholder'
import Paths from '../../api/paths'
import MockJsonPlaceholder from '../../__mocks__/jsonplaceholder'

const instanceService = new JsonPlaceholderService()

describe('testing jsonPlaceholderService', () => {
    const jsonPlaceholderMatcher: IJsonPlaceholder.ModelDTO = {
        id: expect.anything(),
        userId: expect.anything(),
        body: expect.anything(),
        title: expect.anything()
    }

    it('testing getPosts', async() => {
        nock(Paths.JsonPlaceholder.getPosts()).get('/').reply(200, [
            MockJsonPlaceholder.modelDTO()
        ])

        const response = await instanceService.getPosts()

        expect(response).toContainEqual(expect.objectContaining(jsonPlaceholderMatcher))
    })
})
