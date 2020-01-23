import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const [LIST, LOGIN] = [1, 2];
const DRAWER = [
    {
        id: 1,
        name: 'List'
    },
    {
        id: 2,
        name: 'Login'
    }
]

class DrawerComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Drawer Did Mount')
    }

    onPressTab = (item) => {

    }

    render() {
        console.log('r4ender')
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <FlatList
                    data={DRAWER}
                    renderItem={({ item, key }) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => this.onPressTab(item)}>
                                    <text>{item.name}</text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})