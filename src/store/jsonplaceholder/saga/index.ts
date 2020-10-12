import {call, put, all, takeLatest} from 'redux-saga/effects'
import {JsonPlaceholderAction} from '../index'
import getService from '../../../services'
import {IService} from '../../../services/model'

const service: IService = getService()

export function* getPosts() {
    try {
        const response = yield call(service.jsonPlaceholderService.getPosts)

        yield put(JsonPlaceholderAction.getPostsSuccess(response))
    } catch (error) {
        yield put(JsonPlaceholderAction.getPostsError())
    }
}

function* getPostsSaga() {
    yield takeLatest([JsonPlaceholderAction.getPosts], getPosts)
}

export function* rootSaga() {
    yield all([
        getPostsSaga()
    ])
}
