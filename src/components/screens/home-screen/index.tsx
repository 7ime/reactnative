import React from 'react'
import {
    Text
} from 'react-native'
import {ERootScreens} from '../../../navigation/screens'
import {INavigation} from '../../../navigation/model'
import Button from '../../ui/button/components'

interface IProps extends INavigation.RootProps<ERootScreens.Home> {

}

const HomeScreen = ({navigation}: IProps) => {
    return (
        <>
            <Text>Home Screen</Text>

            <Button type={'primary'} onPress={() => navigation.navigate(ERootScreens.RestApi)}>Go to Rest Api Screen</Button>
        </>
    )
}

export default HomeScreen
