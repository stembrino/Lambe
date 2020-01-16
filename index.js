
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import Navigator from './src/Navigator'
AppRegistry.registerComponent(appName, () => Navigator);
