import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#D2D2D2" barStyle="dark-content" />
        {
          Platform.OS === "web" ? (
            <iframe src="https://gurdening.vercel.app" style={{ height: '100%', width: '100%' }} />
          ) : (
            <SafeAreaView style={styles.safeArea}>
              <WebView
                source={{ uri: "https://gurdening.vercel.app" }}
                style={styles.webView}
                javaScriptEnabled={true}
              />
            </SafeAreaView>
          )
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#D2D2D2' // 이 색상은 SafeAreaView의 배경색을 설정합니다.
  },
  webView: {
    flex: 1 // WebView가 전체 화면을 차지하도록 설정합니다.
  },
});
