/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';

AppRegistry.registerComponent(appName, () => Screen2);
