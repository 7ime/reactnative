import React from 'react'
import {upperFirst} from 'lodash'
import {
    Text, View, ScrollView, ActivityIndicator
} from 'react-native'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../../../store/jsonplaceholder'
import {useDispatch, useSelector} from 'react-redux'
import {Maybe} from '../../../toolbox/custom-types'
import {IJsonPlaceholder} from '../../../entities/jsonplaceholder'
import {globalStyles} from '../../../styles/global'
import styles from './styles'
import {COLORS} from '../../../styles/variables'

const RestApiScreen = () => {
    const dispatch = useDispatch()

    const posts: Maybe<IJsonPlaceholder.Model[]> = useSelector(JsonPlaceholderSelector.makeGetCertainNumberOfPosts(10))

    React.useEffect(() => {
        dispatch(JsonPlaceholderAction.getPosts())
    }, [])

    return (
        <View style={globalStyles.container}>
            {!posts && <ActivityIndicator size="small" color={COLORS.primary}/>}
            {
                posts && (
                    <ScrollView style={styles.list}>
                        {
                            posts.map(({id, title, body}) => {
                                return (
                                    <View key={id} style={styles.item}>
                                        <Text numberOfLines={1} style={styles.title}>{title}</Text>
                                        <Text numberOfLines={3} style={styles.text}>{upperFirst(body)}</Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                )
            }
        </View>
    )
}

export default RestApiScreen
