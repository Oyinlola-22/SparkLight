import React, {useState} from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import Logo from "../../assets/sparklight.jpg";
import { DotOutline } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

const newsData = [
    {
        id: "1",
        headline: "President Tinubu and Buhari to Settle Dispute in the Ring",
        text: "In an unprecedented turn of events, President Tinubu and former President Buhari have agreed to settle their differences in a boxing match. Tinubu reportedly stated that the fight would be 'bloody', while Buhari responded with a calm 'Hakuna Matata'.",
        category: "Politics",
        author: "By: John Doe",
        date: "12/00/2002",
        image: Logo
    },
    {
        id: "2",
        headline: "President Tinubu and Buhari to Settle Dispute in the Ring",
        text: "In an unprecedented turn of events, President Tinubu and former President Buhari have agreed to settle their differences in a boxing match. Tinubu reportedly stated that the fight would be 'bloody', while Buhari responded with a calm 'Hakuna Matata'.",
        category: "Politics",
        author: "By: John Doe",
        date: "12/00/2002",
        image: Logo
    },
    {
        id: "3",
        headline: "President Tinubu and Buhari to Settle Dispute in the Ring",
        text: "In an unprecedented turn of events, President Tinubu and former President Buhari have agreed to settle their differences in a boxing match. Tinubu reportedly stated that the fight would be 'bloody', while Buhari responded with a calm 'Hakuna Matata'.",
        category: "Politics",
        author: "By: John Doe",
        date: "12/00/2002",
        image: Logo
    },
    {
        id: "4",
        headline: "President Tinubu and Buhari to Settle Dispute in the Ring",
        text: "In an unprecedented turn of events, President Tinubu and former President Buhari have agreed to settle their differences in a boxing match. Tinubu reportedly stated that the fight would be 'bloody', while Buhari responded with a calm 'Hakuna Matata'.",
        category: "Politics",
        author: "By: John Doe",
        date: "12/00/2002",
        image: Logo
    },
    {
        id: "5",
        headline: "President Tinubu and Buhari to Settle Dispute in the Ring",
        text: "In an unprecedented turn of events, President Tinubu and former President Buhari have agreed to settle their differences in a boxing match. Tinubu reportedly stated that the fight would be 'bloody', while Buhari responded with a calm 'Hakuna Matata'.",
        category: "Politics",
        author: "By: John Doe",
        date: "12/00/2002",
        image: Logo
    },
];

const NewsItem = ({ item }) => {
    const navigation = useNavigation()
    const [showFullText, setShowFullText] = useState(false);

    const handleReadMore = () => {
        navigation.navigate('NewsDetail', { item });
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={item.image} style={styles.logo} resizeMode="contain" />
                <Text style={styles.newsText}>
                    {showFullText ? item.headline : `${item.headline.slice(0, 100)}... `}
                    {!showFullText && (
                        <TouchableOpacity onPress={handleReadMore}>
                            <Text style={styles.readMore}>Read More</Text>
                        </TouchableOpacity>
                    )}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 96, bottom: 20 }}>
                <Text style={styles.category}>{item.category}</Text>
                <DotOutline weight='fill' color="green" style={{ bottom: 3 }} />
                <Text style={styles.category}>{item.author}</Text>
                <DotOutline weight='fill' color="green" style={{ bottom: 3 }} />
                <Text style={styles.category}>{item.date}</Text>
            </View>
            <View style={styles.bottomBorder} />
        </View>
    );
}

const News = () => {
    return (
        <FlatList
            data={newsData}
            renderItem={({ item }) => <NewsItem item={item} />}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginBottom: 10,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    newsText: {
        color: "#fff",
        fontSize: 15,
        textAlign: 'justify',
        marginRight: '30%',
        left: 13,
    },
    category: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomBorder: {
        borderBottomWidth: 2,
        borderBottomColor: '#c45628',
        marginRight: 30,
        bottom: 10,
    },
    readMore: {
        color: "#1e90ff",
        fontSize: 15,
        top: 4
    },
});

export default News;
