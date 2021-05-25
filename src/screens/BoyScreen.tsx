import * as React from 'react'
import {View, Text} from 'react-native'
import * as Notifications from 'expo-notifications';
import {Button, Header} from 'react-native-elements'
import { Heading, Page } from '../../components'

async function getNotificationToken() {
    const {status} = await Notifications.getPermissionsAsync()
    if(status !==  'granted'){
        const {status} = await Notifications.requestPermissionsAsync()
        if(status !== 'granted'){
            alert('failed to get notification token')
            return
        }
    }
    const tokenData = await Notifications.getExpoPushTokenAsync()
    const token = tokenData.data
    console.log({token})
    return token
}
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
                <Button title="Press to take code" onPress={getNotificationToken}/>
            </Page>
        </View>
    )
}

export default BoyScreen