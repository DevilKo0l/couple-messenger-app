import * as React from 'react'
import {View, Text} from 'react-native'
import {Header} from 'react-native-elements'

const BoyScreen: React.FC = () => {
    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'For my boy 👱', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
            <Text>Cho gau duc</Text>
        </View>
    )
}

export default BoyScreen