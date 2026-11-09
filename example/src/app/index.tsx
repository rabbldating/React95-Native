import { StyleSheet, View } from 'react-native';
import { Button } from 'react95-native-rabbl';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button onPress={() => console.log("Test")}>Test</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
