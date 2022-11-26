import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";
import NewTask from "./src/pages/NewTask";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 50,
            borderTopColor: "transparent",
            paddingBottom: 5,
          },
          tabBarActiveTintColor: "#4335f4",
          tabBarInactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="NewTask"
          component={NewTask}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="add-task" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
