import React from 'react'
import {upperFirst} from 'lodash'
import {
    Text, View, ScrollView
} from 'react-native'
import styles from './styles'
import {IJsonPlaceholder} from '../../../../../entities/jsonplaceholder'

interface IProps {
    posts: IJsonPlaceholder.Model[]
}

const PostList = (props: IProps) => {
    const {
        posts
    } = props

    return (
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

export default PostList
