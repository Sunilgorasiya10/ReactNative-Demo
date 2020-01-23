import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import FlexLayout1 from '../screens/FlexLayout1';
import FlexLayout2 from '../screens/FlexLayout2';
import DesignScreen from '../screens/DesignScreen';
import TextInput from '../screens/TextInput';
import ImageTouchable from '../screens/ImageTouchable';
import List from '../screens/List';
import Dashboard from '../screens/Dashboard';
import PanResponderDemo from '../screens/PanResponder';
import ChessBoard from '../screens/ChessBoard';
import DesignFlatlist from '../screens/DesignFlatlist';
import Login from '../screens/Login'
import Registration from '../screens/Registration';
import FavoriteList from '../screens/FavoriteList';
import Welcome from '../screens/Welcome';
import DrawerComponent from '../components/DrawerComponent';
import AppImages from '../image';
import React from 'react';
import { Image } from 'react-native';

const AutoStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    FlexLayout1: { screen: FlexLayout1 },
    FlexLayout2: { screen: FlexLayout2 },
    DesignScreen: { screen: DesignScreen },
    TextInput: { screen: TextInput },
    ImageTouchable: { screen: ImageTouchable },
    List: { screen: List },
    Dashboard: { screen: Dashboard },
    PanResponderDemo: { screen: PanResponderDemo },
    ChessBoard: { screen: ChessBoard },
    DesignFlatlist: { screen: DesignFlatlist },
    Login: { screen: Login },
    Registration: { screen: Registration },
    FavoriteList: { screen: FavoriteList },
    Welcome: { screen: Welcome },
}, {
    // headerMode:'none',
});

const DrawerNavigator = createStackNavigator({
    List: { screen: List },
    Login: { screen: Login }
});

const DrawerStackNavigator = createDrawerNavigator({
    DrawerNavigator: { screen: DrawerNavigator }
}, {
    drawerWidth: 150,
    drawerPosition: 'left',
    drawerType: "slide",
    contentComponent: () => <DrawerComponent />
})

const tabNavigation = createBottomTabNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            activeTintColor: 'red',
            tabBarIcon: () => (
                < Image style={{ height: 20, width: 20 }} source={AppImages.password_icon} ></Image>
            ),
            labelStyle: {
                fontSize: 16,
                textAlign: 'center',
            },
            style: {
                backgroundColor: 'yellow',
            }
        }
    },
    DesignFlatlist: {
        screen: DesignFlatlist,
        navigationOptions: {
            title: 'Login',
            tabBarIcon: () => (
                < Image style={{ height: 20, width: 20 }} source={AppImages.phone_icon} ></Image>
            ),
            labelStyle: {
                fontSize: 16,
                textAlign: 'center',
            },
            style: {
                backgroundColor: 'black',
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: 'yellow',
        showIcon: true,
        showLabel: true,
        style: {
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
})

const AuthStack = createStackNavigator({
    tabNavigation,
    AutoStack,
    DrawerStackNavigator
}, {
    headerMode: 'none'
})

const AppNavigator = createAppContainer(AuthStack);

export default AppNavigator;