/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Tabbar from './src/screens/BottomTabbar/Tabbar';

AppRegistry.registerComponent(appName, () => Tabbar);
