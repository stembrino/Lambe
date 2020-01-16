import React, { Component } from "react";
import { View, Text, StyleSheet, Platform,
        Image } from "react-native";
import icon from '../assets/imgs/icon.png'


class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Lambe Lambe</Text>
                </View>
            </View>
        );
    }
}
export default Header;

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios'? 20:0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',        
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 35,        
        fontSize: 28
    }
});

