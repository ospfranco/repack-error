import * as Sentry from '@sentry/react-native';
import React from 'react';
import {Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

export default Sentry.wrap(App);
