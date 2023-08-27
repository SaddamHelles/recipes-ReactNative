import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Meal from '../models/meal';

interface Props {
    meal: Meal;
}
const MealItem = ({ meal }: Props) => {
    return (
        <View>
            <Text>{meal.title}</Text>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({});
