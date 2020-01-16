import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from '../components/Header'
import Post from '../components/Post'




class Feed extends Component {

    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Rafael Pereira Filho',
                email: 'rafaelprrflh@gmail.com',
                image: require('../assets/imgs/fence.jpg'),
                comments:
                [
                    {
                        nickname: 'John De La Rosa',
                        comment: 'Stunning Fence'
                    },
                    {
                        nickname: 'Ana Julia Arruda',
                        comment: 'Amazing Picture'
                    }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Laura Martins Filho',
                email: 'lauMF@gmail.com',
                image: require('../assets/imgs/bw.jpg'),
                comments:
                [
                    {
                        nickname: 'John De La Rosa',
                        comment: 'Nice'
                    },
                    {
                        nickname: 'Ana Julia Arruda',
                        comment: 'Fuck that all'
                    }
                ]
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item })=>
                        <Post key={item.id} {...item} />
                    }
                />
            </View>
        );
    }
}
export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});