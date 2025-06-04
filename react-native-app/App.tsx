import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{ uri: 'https://your-nextjs-app-url.com' }}
          style={styles.webview}
          startInLoadingState={true}
          renderLoading={() => (
            <View style={styles.loadingContainer}>
              <Text>Loading...</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
