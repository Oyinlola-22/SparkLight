import React, {useState, useRef} from "react";
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, FlatList, Animated, Easing } from "react-native";
import { useRoute } from '@react-navigation/native';
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native';

const emojis = ["👍", "❤️", "😂", "😮", "😢", "👏"];

const NewsDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;
    // State to manage follow status
    const [isFollowing, setIsFollowing] = useState(false);

    // Handle emoji press
    const onEmojiPress = (emoji) => {
        console.log(`Emoji ${emoji} pressed`);
        // Perform action on emoji press, like updating a state or sending a reaction
    };

    const goBack = () => {
        navigation.goBack();
    };

    // Animated value for scaling animation
    const scaleAnim = useRef(new Animated.Value(1)).current;

    // Handle follow button press with animation
    const onFollowPress = () => {
        // Toggle follow state
        setIsFollowing((prevState) => !prevState);

        // Start scale animation
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.2,  // Scale up to 1.2x
                duration: 200,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,  // Scale back to original size
                duration: 200,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.logo} resizeMode="cover" />
            <TouchableOpacity style={{bottom: 210, paddingHorizontal: 20,}} onPress={goBack}>
                <ArrowLeft color="white" size={35}/>
            </TouchableOpacity>
            <Text style={styles.fullText}>{item.headline}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.category}> • {item.author}</Text>
                <Text style={styles.category}> • {item.date}</Text>

                {/* Animated Follow Button */}
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <TouchableOpacity style={styles.followButton} onPress={onFollowPress}>
                        <Text style={styles.followButtonText}>
                            {isFollowing ? 'Following' : '+ Follow'}
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>

            {/* Emoji Reaction Bar */}
            <View style={styles.emojiContainer}>
                <FlatList
                    data={emojis}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.emoji} onPress={() => onEmojiPress(item)}>
                            <Text style={styles.emojiText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View>
                <Text style={styles.fullText1}>{item.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#055160",
    },
    logo: {
        width: '100%',  // Full width of the screen
        height: 200,    // Set a specific height to create a rectangle shape
        borderRadius: 10,
        marginBottom: 20,
        opacity: 0.4,
    },
    fullText: {
        color: "#fff",
        fontSize: 25,
        textAlign: 'justify',
        paddingHorizontal: 20,
        bottom: 135,
        fontWeight: 'bold',
    },
    fullText1: {
        color: "#fff",
        fontSize: 19,
        textAlign: 'justify',
        paddingHorizontal: 20,
        bottom: 130,
        fontWeight: 'bold',
    },
    infoContainer: {
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Vertically center the content
        paddingHorizontal: 20,
        bottom: 134,
    },
    category: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    followButton: {
        backgroundColor: '#008000',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginLeft: 80,
    },
    followButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    emojiContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 10,
        borderColor: '#ddd',
        // backgroundColor: '#fff',
        bottom: 130,
        paddingHorizontal: 10,
    },
    emoji: {
        padding: 10,
    },
    emojiText: {
        fontSize: 35,
    },
});

export default NewsDetail;
