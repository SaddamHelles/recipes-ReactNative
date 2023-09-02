import { useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';
import { RootState } from '../app/store';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';

const FavouritesScreen = () => {
    const { ids } = useSelector((state: RootState) => state.favorite);
    console.log('ids: ', ids);

    const displayMeals = MEALS.filter((meal, index) => ids.includes(meal.id));

    const renderedMealItems = (meal: Meal) => {
        return <MealItem meal={meal} />;
    };

    useEffect(() => {
        console.log('displayMeals: ', displayMeals);
    }, [ids]);
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

export default FavouritesScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
