import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { RootStackParamList } from '../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

const CategoriesScreen: React.FC<
    Partial<NativeStackScreenProps<RootStackParamList>>
> = ({ navigation }) => {
    const handleOnPress = () => {
        navigation?.navigate('Meals');
    };
    const renderedCategoryItem = (item: Category) => {
        return (
            <CategoryGridTile
                title={item.title}
                color={item.color}
                onPress={handleOnPress}
            />
        );
    };
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => renderedCategoryItem(item)}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
