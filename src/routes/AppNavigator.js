import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
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

const AutoStack = createStackNavigator({
    HomeScreen : {screen: HomeScreen},
    FlexLayout1 : {screen: FlexLayout1},
    FlexLayout2 : {screen: FlexLayout2},
    DesignScreen : {screen: DesignScreen},
    TextInput : {screen: TextInput},
    ImageTouchable : {screen: ImageTouchable},
    List : {screen: List},
    Dashboard : {screen: Dashboard},
    PanResponderDemo: {screen: PanResponderDemo},
    ChessBoard : {screen : ChessBoard},
    DesignFlatlist : {screen : DesignFlatlist},
},{
    headerMode:'none',
});

const AppNavigator = createAppContainer(AutoStack);

export default AppNavigator;