import * as React from 'react'
import styled from 'styled-components/native'
import {View, Text, TouchableOpacity} from 'react-native'
import {Button, Header, Input} from 'react-native-elements'
import { Heading, Page } from '../../components'
import { getToken, sendPushNotification, Token } from '../../services/api'

const ButtonContainer = styled(View)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const SummonButton = styled(TouchableOpacity)<{color?: string}>`
    background-color: ${p => p.color || 'red'};
    flex: 48% 0 0;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    color: white;
`

const SummonButtonText = styled.Text`
    color: white;
    font-size: 18px;
`
const token = 'ExponentPushToken[aU2W8fNlCKxfNPycaT2Wvm]'
const GirlScreen: React.FC = () => {
    const [tokenInput, setTokenInput] = React.useState('')
    const [token, setToken] = React.useState<Token | undefined>()
    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'For my girl', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
            <Page>
                {token ? (
                    <View>
                        <Heading> Your boyfriend code {token.id}</Heading>
                            <Heading>Order your boy friend now</Heading>
                    </View>                    
                    ) : (
                    <View>
                        <Input
                            value = {tokenInput}
                            onChangeText={setTokenInput}
                            label="Boyfriend's code" 
                            placeholder="Enter your boyfriend's code"/>
                        <Button 
                            title="Confirm"
                            onPress={async() => {
                                const storedToken = await getToken(tokenInput)
                                setToken(storedToken)
                            }}
                        />
                    </View>
                )}
                
                
                {token && <View style={{marginTop: 30}}>
                    <Heading>Summon your boyfriend here</Heading>
                    <ButtonContainer>
                        <SummonButton color="#e74c3c" onPress={() =>sendPushNotification(token.token,'I am hungry','Feed me bae')}>
                            <SummonButtonText>I am hungry 🍜</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#2980b9" onPress={() =>sendPushNotification(token.token,'I am crying','Make me smilee')}>
                            <SummonButtonText>I am sad🥺</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#2ecc71" onPress={() =>sendPushNotification(token.token,'Call me baby','I have something to tell you')}>
                            <SummonButtonText>Call me bae 🤙</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#f1c40f" onPress={() =>sendPushNotification(token.token,'Call me baby','I have something to tell you')}>
                            <SummonButtonText>I am alone 🤙</SummonButtonText>
                        </SummonButton>
                    </ButtonContainer>
                </View>}
            </Page>            
        </View>
    )
}

export default GirlScreen