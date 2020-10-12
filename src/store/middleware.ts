import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export const getMiddleware = () => {
    return [
        sagaMiddleware
    ]
}
