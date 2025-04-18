import { NavigationContainer } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper'
import { DataProvider } from '../Helpers/DataProvider';

import Fishes from './Fishes';
import AllKinds from './AllKinds';
import FishMap from './FishMap';
import Login from './Login';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';

import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Authentication from './Authentication';

const Navigator = () => {
    const [user, setUser] = useState(null);
    const Tab = createBottomTabNavigator();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    if (!user) {
        return <Authentication />;
    }

    return (
        <DataProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    tabBar={({ navigation, state, descriptors, insets }) => (
                        <BottomNavigation.Bar
                            navigationState={state}
                            safeAreaInsets={insets}
                            activeIndicatorStyle={{ backgroundColor: 'lightgray' }}
                            style={{
                                backgroundColor: '#ffffff',
                                borderTopWidth: 1,
                                borderColor: 'gray',
                            }}
                            onTabPress={({ route, preventDefault }) => {
                                const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                    canPreventDefault: true,
                                });

                                if (event.defaultPrevented) {
                                    preventDefault();
                                } else {
                                    navigation.dispatch({
                                        ...CommonActions.navigate(route.name, route.params),
                                        target: state.key,
                                    });
                                }
                            }}
                            renderIcon={({ route, focused, color }) => {
                                const { options } = descriptors[route.key];
                                if (options.tabBarIcon) {
                                    return options.tabBarIcon({ focused, color, size: 24 });
                                }

                                return null;
                            }}
                            getLabelText={({ route }) => {
                                const { options } = descriptors[route.key];
                                const label =
                                    options.tabBarLabel !== undefined
                                        ? options.tabBarLabel
                                        : options.title !== undefined
                                            ? options.title
                                            : route.title;

                                return label;
                            }}
                        />

                    )}
                >
                    <Tab.Screen
                        name="FISHES"
                        component={Fishes}
                        options={{
                            tabBarLabel: 'Fishes',
                            tabBarIcon: ({ color, size }) => {
                                return <Icon name="bucket" size={size} color={color} />;
                            },
                        }}
                    />

                    <Tab.Screen
                        name="Fish Map"
                        component={FishMap}
                        options={{
                            tabBarLabel: 'Fish Map',
                            tabBarIcon: ({ color, size }) => {
                                return <Icon name="map" size={size} color={color} />;
                            },
                        }}
                    />

                    <Tab.Screen
                        name="ALL KINDS"
                        component={AllKinds}
                        options={{
                            tabBarLabel: 'All Kinds',
                            tabBarIcon: ({ color, size }) => {
                                return <Icon name="fish" size={size} color={color} />;
                            },

                        }}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            tabBarLabel: 'Settings',
                            tabBarIcon: ({ color, size }) => {
                                return <Icon name="cog" size={size} color={color} />;
                            },
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </DataProvider>               
    );
}

export default Navigator;