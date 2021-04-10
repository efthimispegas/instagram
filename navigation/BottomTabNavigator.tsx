import React from 'react';
import { Text } from '../components/Themed';
import { Entypo, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import NewPostScreen from '../screens/NewPostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import {
  BottomTabParamList,
  HomeParamList,
  MessagesParamList,
  NotificationsParamList,
  NewPostParamList,
  SearchParamList,
  ProfileParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tabIconSelected,
        inactiveTintColor: Colors[colorScheme].tabIconDefault,
      }}>
      <BottomTab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name='home-sharp' color={color} size={24} />
            ) : (
              <Ionicons name='home-outline' color={color} size={24} />
            ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} color={Colors[colorScheme].tabIconSelectedLabel} size={18} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name='search' color={color} size={24} />,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} color={Colors[colorScheme].tabIconSelectedLabel} size={18} />
          ),
        }}
      />
      <BottomTab.Screen
        name='NewPost'
        component={NewPostNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name='add-box' color={color} size={24} />
            ) : (
              <Octicons name='diff-added' color={color} size={24} />
            ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} color={Colors[colorScheme].tabIconSelectedLabel} size={18} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Notifications'
        component={NotificationsNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name='ios-heart-sharp' color={color} size={24} />
            ) : (
              <Ionicons name='ios-heart-outline' color={color} size={24} />
            ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} color={Colors[colorScheme].tabIconSelectedLabel} size={18} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name='md-person-circle-sharp' color={color} size={24} />
            ) : (
              <Ionicons name='md-person-circle-outline' color={color} size={24} />
            ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} color={Colors[colorScheme].tabIconSelectedLabel} size={18} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarLabel(props: { focused: boolean; color: string; size: number }) {
  return props.focused ? <Entypo name='dot-single' color={props.color} size={props.size} /> : <Text> </Text>;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Home' }} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='Search' component={SearchScreen} options={{ headerTitle: 'Search' }} />
    </SearchStack.Navigator>
  );
}

const MessagesStack = createStackNavigator<MessagesParamList>();

function MessagesNavigator() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen name='Messages' component={MessagesScreen} options={{ headerTitle: 'Messages' }} />
    </MessagesStack.Navigator>
  );
}

const NotificationsStack = createStackNavigator<NotificationsParamList>();

function NotificationsNavigator() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name='Notifications'
        component={NotificationsScreen}
        options={{ headerTitle: 'Notifications' }}
      />
    </NotificationsStack.Navigator>
  );
}

const NewPostStack = createStackNavigator<NewPostParamList>();

function NewPostNavigator() {
  return (
    <NewPostStack.Navigator>
      <NewPostStack.Screen name='NewPost' component={NewPostScreen} options={{ headerTitle: 'New Post' }} />
    </NewPostStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{ headerTitle: 'Profile' }} />
    </ProfileStack.Navigator>
  );
}
