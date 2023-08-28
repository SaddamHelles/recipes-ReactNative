import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import { CATEGORIES } from './src/data/dummy-data';
import MealDetailScreen from './src/screens/MealDetailScreen';

export type RootStackParamList = {
    Categories: undefined;
    Meals: { categoryId: string };
    MealDetail: { mealId: string };
};
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Categories"
                    screenOptions={{
                        headerStyle: { backgroundColor: '#351401' },
                        headerTintColor: 'white',
                        contentStyle: { backgroundColor: '#3f2f25' },
                    }}>
                    <Stack.Screen
                        name="Categories"
                        component={CategoriesScreen}
                        options={{
                            title: 'All Categories',
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

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
