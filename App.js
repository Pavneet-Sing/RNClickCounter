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
  Text,
  StatusBar,
} from 'react-native';
import CustomButton from './src/components/CustomButton';
import styles from './src/config/styles';

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
      <SafeAreaView style={styles.centerContainer}>
        <Text style={styles.bigText} >{count}</Text>
        <CustomButton style={styles.EightyWidthStyle} onPress={counterPlus} title={'+'} />
        <CustomButton style={styles.EightyWidthStyle} onPress={counterMinus} title={'-'} />
      </SafeAreaView>
    </>
  );
};

export default App;