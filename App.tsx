import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
    return (
        <SafeAreaView>
            <CategoriesScreen />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
