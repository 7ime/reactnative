import React from 'react'
import {
    Text, View
} from 'react-native'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../../../store/jsonplaceholder'
import {useDispatch, useSelector} from 'react-redux'
import {Maybe} from '../../../toolbox/custom-types'
import {IJsonPlaceholder} from '../../../entities/jsonplaceholder'
import {globalStyles} from '../../../styles/global'
import styles from './styles'

const RestApiScreen = () => {
    const dispatch = useDispatch()

    const posts: Maybe<IJsonPlaceholder.Model[]> = useSelector(JsonPlaceholderSelector.makeGetCertainNumberOfPosts(10))

    React.useEffect(() => {
        dispatch(JsonPlaceholderAction.getPosts())
    }, [])

    return (
        <View style={globalStyles.container}>
            {!posts && <Text>Loading...</Text>}
            {
                posts && (
                    <Text style={styles.title}>Rest Api Screen</Text>
                )
            }
        </View>
    )
}

export default RestApiScreen
