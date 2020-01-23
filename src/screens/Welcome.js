import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class Welcome extends Component{
    render(){
        return(
            <View style = {{ flex: 1,justifyContent : 'center', alignItems: 'center'}}>
                <Text style = {{fontSize : 20,}}>Welcome To Q Allure</Text>
            </View>
        );
    }
}