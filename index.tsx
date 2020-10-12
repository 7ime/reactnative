import React from 'react'

import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'

import appData from './app.json'
import './src/i18n'
import {sagaMiddleware} from './src/store/middleware'
import saga from './src/store/saga'
import getAppStore from './src/store'
import App from './src/components/app'

sagaMiddleware.run(saga)

const RN = () => (
    <Provider store={getAppStore()}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appData.name, () => RN)
