import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Gravatar } from 'react-native-gravatar' 
import { TouchableOpacity } from "react-native-gesture-handler";
import commonStyle from '../styles/CommonStyle'

class Profile extends Component {
    
    logout = ()=>{

    }
    
    render() {
        const options = { email:'fulanodetal@gmail.com', secure: true }
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>Fulano de Tal</Text>
                <Text style={StyleSheet.email}>fulanodetal@gmail.com</Text>
                <TouchableOpacity onPress={this.logout} style={commonStyle.buttonStyle} >
                    <Text style={commonStyle.buttonText} >Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100,
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 20,
        fontSize: 25,
    },
    
});

export default Profile;
