import React, { Component } from "react";
import { View, Text, StyleSheet,
        TouchableOpacity, TextInput, Image,
        Dimensions,Platform, ScrollView, Alert } 
from "react-native";
import ImagePicker from 'react-native-image-picker';
import commonStyle from '../styles/CommonStyle'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }
    
    selectImage = async ()=>{
        ImagePicker.showImagePicker({onData:true, mediaType: 'photo'}, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
           
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({ image: response.uri })
            }
          });
    }

    //  pickImage = ()=>{
    //     //  const options = {
    //     //     title: 'Choose a picture',
    //     //      maxHeight: 600,
    //     //      maxWidth: 800
    //     //  }    //     

    //     //  ImagePicker.showImagePicker(options,(response)=>{
    //     //      if(response.didCancel){
    //     //         this.setState({ image:{ uri: response.uri, base64: response.data } })
    //     //      }
    //     //  })
    //  }

     save = async ()=>{
         Alert.alert('Image add  success', this.state.comment)
     }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Share a picture!</Text>
                    <View>
                        <Image source={{uri: this.state.image}} style={styles.image} />
                        {/* {
                            this.state.image && <Image source={{uri: this.state.image}} style={styles.image} />
                        } */}
                    </View>
                    <TouchableOpacity onPress={this.selectImage} style={commonStyle.buttonStyle}>
                        <Text style={commonStyle.buttonText} >Choose a picture</Text>
                    </TouchableOpacity>
                    <TextInput 
                        placeholder='Do you have a comment for this picture?'
                        style={styles.input}
                        value={this.state.comment}
                        onChangeText={comment =>this.setState({ comment })}
                    />
                    <TouchableOpacity onPress={this.save} style={commonStyle.buttonStyle}>
                        <Text style={commonStyle.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
export default AddPhoto;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios'?30:10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10,
    },
    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
    },        
    input: {
        marginTop: 20,
        width: '90%'
    }
});