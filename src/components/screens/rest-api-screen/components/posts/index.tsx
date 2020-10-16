import React from 'react'
import {
    View
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import styles from './styles'
import {Maybe} from '../../../../../toolbox/custom-types'
import {IJsonPlaceholder} from '../../../../../entities/jsonplaceholder'
import {JsonPlaceholderAction, JsonPlaceholderSelector} from '../../../../../store/jsonplaceholder'
import Button from '../../../../ui/button/components'
import PostList from '../post-list'

const Posts = () => {
    const dispatch = useDispatch()

    const posts: Maybe<IJsonPlaceholder.Model[]> = useSelector(JsonPlaceholderSelector.makeGetCertainNumberOfPosts(10))
    const isLoadingPosts: boolean = useSelector(JsonPlaceholderSelector.getIsLoadingPosts)

    const handlePressLoadPosts = React.useCallback(() => {
        dispatch(JsonPlaceholderAction.getPosts())
    }, [])

    return (
        <View style={styles.container}>
            {
                posts ? (
                    <PostList posts={posts}/>
                ) : (
                    <Button loading={isLoadingPosts}
                            onPress={handlePressLoadPosts}
                            type={'primary'}>Load Posts</Button>
                )
            }
        </View>
    )
}

export default Posts
