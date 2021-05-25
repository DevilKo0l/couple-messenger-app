import * as React from 'react'
import styled from 'styled-components/native'
import {View, Text, TouchableOpacity} from 'react-native'
import {Button, Header, Input} from 'react-native-elements'
import { Heading, Page } from '../../components'

const ButtonContainer = styled.Text`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`
const SummonButton = styled.TouchableOpacity<{color?: string}>`
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

const GirlScreen: React.FC = () => {
    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'For my girl', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
            <Page>
                
                <View>
                    <Input label="Boyfriend's code" placeholder="Enter your boyfriend's code"/>
                    <Button title="Confirm"/>
                </View>
                
                <View style={{marginTop: 30}}>
                    <Heading>Summon your boyfriend here</Heading>
                    <ButtonContainer>
                        <SummonButton color="#e74c3c">
                            <SummonButtonText> I am hungy 🍜</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#2980b9">
                            <SummonButtonText> i want to eat you 🥺</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#2ecc71">
                            <SummonButtonText> Call me bae 🤙</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="#f1c40f">
                            <SummonButtonText> I am alone 🤙</SummonButtonText>
                        </SummonButton>
                    </ButtonContainer>
                </View>
                
                
            </Page>            
        </View>
    )
}

export default GirlScreen