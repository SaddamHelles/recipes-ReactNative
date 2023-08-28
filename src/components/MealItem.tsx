import {
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import Meal from '../models/meal';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../App';
import MealDetails from './MealDetails';

interface Props {
    meal: Meal;
}

const MealItem = ({ meal }: Props) => {
    const { navigate } = useNavigation<StackNavigation>();

    const handleSelectMealItem = () => {
        navigate('MealDetail', { mealId: meal.id });
    };

    return (
        <View style={styles.mealItem}>
            <Pressable
                onPress={handleSelectMealItem}
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    pressed ? styles.buttonPressed : null
                }>
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: meal.imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{meal.title}</Text>
                    </View>
                    <MealDetails
                        affordability={meal.affordability}
                        complexity={meal.complexity}
                        duration={meal.duration}
                    />
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },

    buttonPressed: {
        opacity: 0.5,
    },
});
