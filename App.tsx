import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';

export type RootStackParamList = {
    Categories: undefined;
    Meals: { categoryId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Categories">
                    <Stack.Screen
                        name="Categories"
                        component={CategoriesScreen}
                    />
                    <Stack.Screen
                        name="Meals"
                        component={MealsOverviewScreen}
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
