import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import { CATEGORIES } from './src/data/dummy-data';
import MealDetailScreen from './src/screens/MealDetailScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { RootState, store } from './src/app/store';
import { Provider, useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: 'white',
                sceneContainerStyle: { backgroundColor: '#3f2f25' },
                drawerContentStyle: { backgroundColor: '#351401' },
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e4baa1',
            }}>
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favourites"
                component={FavouritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
export type RootStackParamList = {
    Drawer: undefined;
    Meals: { categoryId: string };
    MealDetail: { mealId: string };
};

export type RootTabsParamList = {
    CategoriesMeal: undefined;
    Favourites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type StackNavigation = NavigationProp<RootStackParamList>;

function App() {
    const { value } = useSelector((state: RootState) => state.counter);

    useEffect(() => {
        console.log('value: ', value);
    }, [value]);
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    // initialRouteName="Categories"
                    screenOptions={{
                        headerStyle: { backgroundColor: '#351401' },
                        headerTintColor: 'white',
                        contentStyle: { backgroundColor: '#3f2f25' },
                    }}>
                    <Stack.Screen
                        name="Drawer"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Meals"
                        component={MealsOverviewScreen}
                        options={({ navigation, route }) => {
                            const { categoryId } = route.params;
                            const cat = CATEGORIES.find(
                                cat => cat.id === categoryId
                            );
                            return {
                                title: cat?.title,
                            };
                        }}
                    />
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default () => {
    // const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
