import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = () => {
    const renderedCategoryItem = (item: Category) => {
        return <CategoryGridTile title={item.title} color={item.color} />;
    };
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => renderedCategoryItem(item)}
            keyExtractor={item => item.id}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
