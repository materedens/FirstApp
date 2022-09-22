import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Image style={{ width: 100, height: 100, margin: 10 }} source={require('../assets/logo.jpg')} />
            <Button title='Go To Details'
                onPress={() => navigation.navigate('Details')} />
        </View>
    )
}

export default HomeScreen