import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Dashboard = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>Dashboard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 30
    }
})

export default Dashboard;