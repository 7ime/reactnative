import React from 'react'
import {upperFirst} from 'lodash'
import {
    Animated,
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
    const fadeAnim = React.useRef(new Animated.Value(0)).current

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }, [fadeAnim])

    return (
        <Animated.FlatList data={props.posts}
                           initialNumToRender={6}
                           renderItem={({item}) => <PostItem post={item}/>}
                           keyExtractor={item => String(item.id)}
                           style={{
                               ...styles.list,
                               opacity: fadeAnim
                           }}/>
    )
}

export default PostList
