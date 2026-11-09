import { StyleSheet, ScrollView, View } from 'react-native';
import { Button, Text } from 'react95-native-rabbl';
import examples from './examples';
import { Link, RelativePathString } from 'expo-router';
import { useMemo } from 'react';

export default function HomeScreen() {
  const exampleNames = useMemo(() => {
    const results : string[] = [];
    examples.forEach((section, i) => {
      section.items.forEach((item, j) => {
        results.push(item.name);
      })
    });
    results.sort();
    return results;
  }, []);

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      {
        exampleNames.map((item, j) => (
          <View key={item} style={styles.buttonWrapper}>
            <Link href={("/examples/" + item) as RelativePathString} asChild={true}>
              <Button>{item}</Button>
            </Link>
          </View>
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
    gap: 20,
  },
  buttonWrapper: {
    flexDirection: "row",
  },
});
