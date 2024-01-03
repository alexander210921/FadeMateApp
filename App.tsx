import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/Index';
import {Provider} from 'react-redux';
import store from './src/Store/Store';
function App() {
  return (
    <Provider store={store}>
    <View
      style={{ flex: 1 }}
    >
      <View style={styles.WrapperLogin}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <NavigationContainer>
            <Navigation></Navigation>
          </NavigationContainer>
        </ScrollView>
      </View>
    </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  WrapperApp: {
    backgroundColor: "",
  },
  WrapperLogin: {
    backgroundColor: "white",
    height: '100%',
  },
});

export default App;
