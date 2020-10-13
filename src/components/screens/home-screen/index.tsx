import React from 'react'
import {
    Text,
    Button
} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {IRootStackParamList} from '../../../navigation/stack-param-list'
import {EScreens} from '../../../navigation/screens'

interface IProps extends StackScreenProps<IRootStackParamList, EScreens.Home> {

}

const HomeScreen = ({navigation}: IProps) => {
    return (
        <>
            <Text>Home Screen</Text>

            <Button
                title="Go to Rest Api Screen"
                onPress={() => navigation.navigate(EScreens.RestApi)}
            />
        </>

    )
}

export default HomeScreen
