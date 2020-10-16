import React from 'react'
import {
    View
} from 'react-native'
import {globalStyles} from '../../../styles/global'
import Posts from './components/posts'

const RestApiScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Posts/>
        </View>
    )
}

export default RestApiScreen
