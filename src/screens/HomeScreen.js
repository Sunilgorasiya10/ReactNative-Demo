import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'; 

export default class HomeScreen extends Component{

    constructor(props){
        super(props)
    }

    onPressAsync = async() => {
        let data = {
            name: 'abc',
            city: 'xyz'
        }
        await AsyncStorage.setItem('MyKey',JSON.stringify(data));
        let asyncData = await AsyncStorage.getItem('MyKey');
        console.log('Data',asyncData);
    }

    render(){
        return(
            <View style={styles.mainContainer}>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('FlexLayout1')}>
                        <Text style={styles.textStyle}>{'FlexLayout1'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('FlexLayout2')}>
                        <Text style={styles.textStyle}>{'FlexLayout2'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('DesignScreen')}>
                        <Text style={styles.textStyle}>{'DesignScreen'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('TextInput')}>
                        <Text style={styles.textStyle}>{'TextInput'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('ImageTouchable')}>
                        <Text style={styles.textStyle}>{'ImageTouchable'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('List')}>
                        <Text style={styles.textStyle}>{'List'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('Dashboard')}>
                        <Text style={styles.textStyle}>{'Navigation'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('PanResponderDemo')}>
                        <Text style={styles.textStyle}>{'PanResponder'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.onPressAsync()}>
                        <Text style={styles.textStyle}>{'AsyncStorageDemo'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('ChessBoard')}>
                        <Text style={styles.textStyle}>{'ChessBoard'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                <View>
                    <TouchableOpacity style = {styles.btnStyele} onPress = {() => this.props.navigation.navigate('DesignFlatlist')}>
                        <Text style={styles.textStyle}>{'DesignFlatlist'}</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'lightblue',
        flexWrap : 'wrap'
    },

    textStyle: {
        color: 'black',
        color: 'white',
        fontWeight: 'bold',
    },

    btnStyele: {
        height: 50,
        width: 120,
        borderRadius: 15,
        backgroundColor: 'blue',
        marginHorizontal: 20, 
        marginVertical:7,
        justifyContent: 'center',
        alignItems:'center',
    },
    

})