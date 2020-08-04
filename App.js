/**
 * @author Pavneet Singh
 * Click-Counter React Native App
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  View
} from 'react-native';

const App: () => React$Node = () => {

  const [count, setCount] = useState(0);

  const counterPlus = () => {
    setCount(count + 1 <= Number.MAX_SAFE_INTEGER ? count + 1 : count)
  }

  const counterMinus = () => {
    setCount(count - 1 >= Number.MIN_SAFE_INTEGER ? count - 1 : count)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.textCounter} >{count}</Text>
        <View style={styles.buttonStyle}>
          <Button
            onPress={counterPlus}
            title='+' />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            onPress={counterMinus}
            title='-' />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
  },
  textCounter: {
    fontSize: 28,
    color: '#000',
  },
  buttonStyle: {
    width: "80%",
    margin: 10,
  }
});

export default App;