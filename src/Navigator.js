import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

// Create a bottom navigation: use a create BttomTabNavigation from react-tabs
//


const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor })=>
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'Add Photo',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor })=>
                <Icon name='camera' size={28} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor })=>
            <Icon  name='user' size={30} color={tintColor} />
        }
    }    
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false
    }
}


const TabNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig);
  
export default createAppContainer(TabNavigator);

// export default MenuRoutesContainer