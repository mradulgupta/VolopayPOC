import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {useColorScheme} from 'react-native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {HomeScreen} from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  const scheme = useColorScheme();
  const {t} = useTranslation();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: t('toolbarTitle')}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
