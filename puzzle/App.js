import {View} from 'react-native';
import AppNavigator from './src/AppNavigator';
import Context from './src/Screens/Context';




const Appp=()=>{
    return (
        <Context>
        <AppNavigator/>
        </Context>
    )
}

export default Appp;