import React from 'react'
import styled from 'styled-components/native'
import {
    Text, useWindowDimensions
} from 'react-native'
import {ERootScreens} from '../../../navigation/screens'
import {INavigation} from '../../../navigation/model'
import Button from '../../ui/button/components'

interface IProps extends INavigation.RootProps<ERootScreens.Home> {

}

const StyledRow = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 20px 0;
`

const StyledCol = styled.View`
  width: 50%;
  padding: 0 10px;
`

const StyledDimsInfo = styled.View`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`

const HomeScreen = ({navigation}: IProps) => {
    const windowDimensions = useWindowDimensions()

    return (
        <>
            <Text>Home Screen</Text>

            <StyledRow>
                <StyledCol>
                    <StyledDimsInfo>
                        <Text numberOfLines={1}>width: {windowDimensions.width}</Text>
                        <Text numberOfLines={1}>height: {windowDimensions.height}</Text>
                    </StyledDimsInfo>
                </StyledCol>

                <StyledCol>
                    <StyledDimsInfo>
                        <Text>font scale: {windowDimensions.fontScale}</Text>
                        <Text>scale: {windowDimensions.scale}</Text>
                    </StyledDimsInfo>
                </StyledCol>
            </StyledRow>

            <Button type={'primary'} onPress={() => navigation.navigate(ERootScreens.RestApi)}>Go to Rest Api Screen</Button>
            <Button type={'primary'} onPress={() => navigation.navigate(ERootScreens.ExampleCarousel)}>Go to Example Carousel</Button>
        </>
    )
}

export default HomeScreen
