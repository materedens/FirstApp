import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Image style={{ width: 100, height: 100, margin: 10 }}
                source={require('../assets/logo.jpg')} />
            <Button title='Back to Details Again' onPress={() => navigation.push('Details')} />
            <Button title='Back Home' onPress={() => navigation.popToTop()} />
        </View>
    )
}

export default DetailsScreen