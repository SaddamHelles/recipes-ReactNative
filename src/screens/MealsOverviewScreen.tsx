import { StyleSheet, FlatList, View, Text } from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../../App';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';

const MealsOverviewScreen: React.FC<
    NativeStackScreenProps<RootStackParamList, 'Meals'>
> = ({ route }) => {
    const { categoryId } = route.params;

    const displayMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );

    const renderedMealItems = (meal: Meal) => {
        return <MealItem meal={meal} />;
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                renderItem={({ item }) => renderedMealItems(item)}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
