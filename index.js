/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Tabbar from './src/screens/BottomTabbar/Tabbar';
import Videos from './src/screens/Home/videos';

AppRegistry.registerComponent(appName, () => Tabbar);
