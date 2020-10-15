import React from 'react'
import {upperFirst} from 'lodash'
import {
    Text, View, ScrollView
} from 'react-native'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../../../store/jsonplaceholder'
import {useDispatch, useSelector} from 'react-redux'
import {Maybe} from '../../../toolbox/custom-types'
import {IJsonPlaceholder} from '../../../entities/jsonplaceholder'
import {globalStyles} from '../../../styles/global'
import styles from './styles'
import Button from '../../ui/button/components'

const RestApiScreen = () => {
    const dispatch = useDispatch()

    const posts: Maybe<IJsonPlaceholder.Model[]> = useSelector(JsonPlaceholderSelector.makeGetCertainNumberOfPosts(10))
    const isLoadingPosts: boolean = useSelector(JsonPlaceholderSelector.getIsLoadingPosts)

    const handlePressLoadPosts = React.useCallback(() => {
        dispatch(JsonPlaceholderAction.getPosts())
    }, [])

    return (
        <View style={globalStyles.container}>
            {
                !posts && (
                    <Button loading={isLoadingPosts}
                            onPress={handlePressLoadPosts}
                            type={'primary'}>Load Posts</Button>
                )
            }
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
