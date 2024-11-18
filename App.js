// ======= EXERCISE 1 =======
// import React from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//
// const datasource = [
//     { key: 'a' },
//     { key: 'b' },
//     { key: 'c' },
//     { key: 'd' },
//     { key: 'e' },
//     { key: 'f' },
//     { key: 'g' },
//     { key: 'h' },
//     { key: 'i' },
//     { key: 'j' },
//     { key: 'k' },
//     { key: 'l' },
//     { key: 'm' },
//     { key: 'n' },
//     { key: 'o' },
//     { key: 'p' },
//     { key: 'q' },
//     { key: 'r' },
//     { key: 's' },
//     { key: 't' },
//     { key: 'u' },
//     { key: 'v' },
//     { key: 'w' },
//     { key: 'x' },
//     { key: 'y' },
//     { key: 'z' }
// ];
//
// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// const Exercise1 = () => {
//     return (
//         <View>
//             <FlatList
//                 data={datasource}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.key}
//             />
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1,
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left',
//     },
// });
//
// export default Exercise1;

// ======= EXERCISE 2 =======
import React from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'}
        ],
        title:"Vowels"},
    {data:[
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'},
        ],
        title:"Consonants"}
];


const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const Exercise2 = () => {
    return (
            <View style={styles.container}>
                <SectionList
                    sections={datasource}
                    renderItem={renderItem}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={[styles.headerText, title === "Vowels" ? styles.vowelHeader : styles.consonantHeader]}>
                            {title}
                        </Text>
                    )}
                    keyExtractor={(item, index) => item.key + index}
                />
            </View>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 10
    },
    opacityStyle: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    textStyle: {
        fontSize: 15,
        textAlign: 'left'
    },
    headerText: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 5,
        borderRadius: 5
    },
    vowelHeader: {
        backgroundColor: '#80D4FF'
    },
    consonantHeader: {
        backgroundColor: '#FFEE99'
    },
});

export default Exercise2;

