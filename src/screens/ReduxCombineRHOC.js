import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, FlatList } from 'react-native';
import withCounter from '../hoc/withCounter'
import withWelcome from '../hoc/withWelcome';
import withAsync from '../hoc/withAsync';

class ReduxCombineRHOC extends Component {
    render() {
        // console.log(this.props);
        const { counter, welcome: { welcomeText, sss }, counterIncrementAction, counterDecrementAction,
            createWelcomeAction, todoData: { todos }, getTodos } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.counterTitle}>Counter</Text>
                {/* <TextInput placeholder={'Enter number'} style={{ borderWidth: 1 }}
                    onChangeText={value => this.updateState(value)}></TextInput> */}
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={counterIncrementAction}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>{counter}</Text>
                    <TouchableOpacity onPress={counterDecrementAction}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text >{welcomeText}</Text>
                <Text >{sss}</Text>
                <Button title={'button 1'} onPress={() => createWelcomeAction('Button 1')}></Button>
                <Button title={'button 2'} onPress={() => createWelcomeAction('Button 2')}></Button>
                <Button title={'button 3'} onPress={() => getTodos('Button 3')}></Button>

                {/* {(todos.length > 0) ? todos[6].title : 'testing'} */}
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={todos}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: 'row', backgroundColor: 'black', margin: 1 }}>
                                <Text style={{ padding: 5, color: 'white', backgroundColor: 'red' }}>{item.userId}</Text>
                                <Text style={{ padding: 5, color: 'white', backgroundColor: 'green' }}>{item.id}</Text>
                                <Text style={{ padding: 5, color: 'white' }}>{item.title}</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    counterContainer: {
        flexDirection: 'row',

    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20,
        marginRight: 20
    }
})

export default withWelcome(withCounter(withAsync(ReduxCombineRHOC)));