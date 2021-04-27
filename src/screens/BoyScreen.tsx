import * as React from 'react'
import {View, Text} from 'react-native'
import {Button, Header} from 'react-native-elements'
import { Heading, Page } from '../../components'


const BoyScreen: React.FC = () => {
    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'For my boy 👱', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
            <Page>
                <Heading>Take the code and give it to your girl friend ❤️‍🔥</Heading>
                <Button title="Press to take code"/>
            </Page>
        </View>
    )
}

export default BoyScreen