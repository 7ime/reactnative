import React from 'react'
import {upperFirst} from 'lodash'
import {
    FlatList,
    Text, View
} from 'react-native'
import styles from './styles'
import {IJsonPlaceholder} from '../../../../../entities/jsonplaceholder'

interface IPropsPostItem {
    post: IJsonPlaceholder.Model
}

const PostItem = (props: IPropsPostItem) => {
    const {
        post
    } = props

    return (
        <View style={styles.item}>
            <Text numberOfLines={1} style={styles.title}>{post.title}</Text>
            <Text numberOfLines={3} style={styles.text}>{upperFirst(post.body)}</Text>
        </View>
    )
}

interface IPropsPostList {
    posts: IJsonPlaceholder.Model[]
}

const PostList = (props: IPropsPostList) => {
    return (
        <FlatList data={props.posts}
                  initialNumToRender={6}
                  renderItem={({item}) => <PostItem post={item}/>}
                  keyExtractor={item => String(item.id)}
                  style={styles.list}/>
    )
}

export default PostList
