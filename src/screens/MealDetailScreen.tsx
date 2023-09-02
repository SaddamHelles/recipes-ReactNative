import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/mealDetail/Subtitle';
import List from '../components/mealDetail/List';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import {
    addFavorite,
    removeFavorite,
} from '../features/favorites/favoritesSlice';
import { RootState } from '../app/store';

const MealDetailScreen: React.FC<
    NativeStackScreenProps<RootStackParamList, 'MealDetail'>
> = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { ids } = useSelector((state: RootState) => state.favorite);
    const { mealId } = route.params;

    const selectMeal = MEALS.find(meal => meal.id === mealId);

    const mealIsFavorite = ids.includes(mealId);
    const handleHeaderButtonPress = () => {
        console.log('handleHeaderButtonPress clicked!');
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color={mealIsFavorite ? 'gold' : 'white'}
                        onPress={handleHeaderButtonPress}
                    />
                );
            },
        });
    }, [navigation, handleHeaderButtonPress]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectMeal?.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectMeal?.title}</Text>
            <MealDetails
                affordability={String(selectMeal?.affordability)}
                complexity={String(selectMeal?.complexity)}
                duration={Number(selectMeal?.duration)}
                textStyle={styles.detailText}
            />

            <Subtitle>Ingredients</Subtitle>
            <List data={selectMeal?.ingredients || []} />
            <Subtitle>Steps</Subtitle>

            <List data={selectMeal?.steps || []} />
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
});
