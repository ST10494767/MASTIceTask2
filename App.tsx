import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style= {styles.container}>
      <Text style= {styles.heading}>Hello to your favourite book app.</Text>
      <Text style= {styles.subheading}>Enjoy the app</Text>
      <Text style= {styles.text}>This is a simple Books App.
      </Text>
    </View>
  );
}

function BooksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Page is coming.</Text>
    </View>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} ></Tab.Screen>
          <Tab.Screen name="Books" component={BooksScreen} ></Tab.Screen>
        </Tab.Navigator>
        <StatusBar style="auto" ></StatusBar>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc0320',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center'
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: '#000000'
  },
});
