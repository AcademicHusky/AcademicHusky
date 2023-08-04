import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Screens/Dashboard';
import About from '../Screens/About';
import ToDoList from '../Screens/ToDoList';
import Task from '../Screens/Task';
import Calendar from '../Screens/calendarScreen'
import {Avatar, Title, Caption, Paragraph} from 'react-native-paper';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen 
                key = 'dashboard'
                name = 'Academic Weapon'
                component = {Dashboard} />
                <Drawer.Screen 
                key = 'about'
                name = 'About'
                component = {About} />
                <Drawer.Screen
                key = 'To Do List'
                name = 'To Do List'
                component={ToDoList} />
                <Drawer.Screen
                key = 'Task'
                name = 'Task'
                component={Task} />
                <Drawer.Screen
                key = 'Calendar'
                name = 'Calendar'
                component={Calendar} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Sidebar;