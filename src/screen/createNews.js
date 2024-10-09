import { ArrowLeft, ImagesSquare } from "phosphor-react-native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const WriteArticle = () => {
    const navigation = useNavigation();
    const [headline, setHeadline] = useState('');
    const [writeArticle, setWriteArticle] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [articleCover, setArticleCover] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false); // State for form validation

    const goBack = () => {
        navigation.goBack();
    };

    // Function to limit the input to 200 words for the headline
    const handleHeadlineChange = (text) => {
        const words = text.split(/\s+/); // Split text by spaces
        if (words.length <= 200) {
            setHeadline(text);
        } else {
            setHeadline(words.slice(0, 200).join(' ')); // Limit to 200 words
        }
    };

    // Function to handle article text input without affecting the headline
    const handleArticleChange = (text) => {
        setWriteArticle(text);
    };

    // Function to toggle category selection
    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            // Remove category if it is already selected
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            // Add category if it is not selected
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const categories = ['Politics', 'Technology', 'Health', 'Entertainment', 'Sports', 'Business'];

    // Function to pick an image from the gallery
    const pickImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 1, // Image quality setting
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.assets && response.assets.length > 0) {
                    setArticleCover(response.assets[0].uri); // Set the selected image URI
                }
            },
        );
    };

    // Function to simulate submission process
    const handleSubmit = () => {
        setLoading(true); // Start loading spinner

        // Simulate an asynchronous operation (e.g., API call)
        setTimeout(() => {
            setLoading(false); // Stop loading spinner after 2 seconds
            alert('Article submitted successfully!');
        }, 2000);
    };

    // Validate form whenever there's a change in inputs
    useEffect(() => {
        if (headline && writeArticle && selectedCategories.length > 0 && articleCover) {
            setIsFormValid(true);  // Enable button when all conditions are met
        } else {
            setIsFormValid(false); // Disable button when any condition is not met
        }
    }, [headline, writeArticle, selectedCategories, articleCover]);

    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity onPress={goBack}>
                    <ArrowLeft color="white" size={30} style={{ left: 12 }} />
                </TouchableOpacity>
                <Text style={styles.Header}>Create New Article</Text>
            </View>

            {/* Submit Button */}
            <View style={{ alignItems: 'center', marginTop: 10, bottom: "6.5%", marginLeft: "70%"}}>
                <TouchableOpacity
                    style={[styles.submitButton, { opacity: isFormValid ? 1 : 0.5 }]} // Change opacity based on validity
                    onPress={handleSubmit}
                    disabled={!isFormValid || loading} // Disable when form is invalid or loading
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.submitButtonText}>Submit</Text>
                    )}
                </TouchableOpacity>
            </View>

            <View style={{bottom: "5%"}}>
                {/* Choose Article Cover */}
                <TouchableOpacity style={styles.rectangle} onPress={pickImage}>
                    {articleCover ? (
                        <Image source={{ uri: articleCover }} style={styles.coverImage} />
                    ) : (
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                            <ImagesSquare size={35} />
                            <Text style={{ fontSize: 25, color: "black", top: 3, fontWeight: 'bold' }}>Add Article Cover</Text>
                        </View>
                    )}
                </TouchableOpacity>

                {/* Article Headline */}
                <View style={{ marginTop: 20, left: 12 }}>
                    <Text style={{ fontSize: 25, color: "white" }}>Article Headline</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your headline here..."
                        placeholderTextColor="#888"
                        value={headline}
                        onChangeText={handleHeadlineChange}
                        multiline
                        maxLength={2000} // Set a high character limit to ensure space for 200 words
                    />
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: 20, left: 12 }}>
                    <Text style={{ fontSize: 25, color: "white" }}>Choose your Category</Text>
                    <View style={styles.categoriesContainer}>
                        {categories.map((category, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.categoryButton,
                                    selectedCategories.includes(category) && styles.categoryButtonSelected,
                                ]}
                                onPress={() => toggleCategory(category)}
                            >
                                <Text style={[
                                    styles.categoryButtonText,
                                    selectedCategories.includes(category) && styles.categoryButtonTextSelected
                                ]}>{category}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Write Article */}
                <View style={{ marginTop: 20, left: 12 }}>
                    <Text style={{ fontSize: 25, color: "white" }}>Write Article</Text>
                    <TextInput
                        style={styles.write}
                        placeholder="Input your article here....."
                        placeholderTextColor="#888"
                        value={writeArticle}
                        onChangeText={handleArticleChange}
                        multiline={true}
                        textAlignVertical="top"
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#055160",
    },
    Header: {
        color: "#fff",
        fontSize: 25,
        marginLeft: 30,
        top: 1,
    },
    rectangle: {
        width: 300,
        height: 150,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginLeft: 45,
        marginTop: 10,
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center',
    },
    coverImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        color: '#333',
        paddingHorizontal: 15,
        fontSize: 18,
        lineHeight: 24,
        width: "90%",
        marginTop: 10,
    },
    write: {
        height: "50%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        paddingLeft: 20,
        marginTop: "2%",
        marginBottom: "2%",
        width: "90%",
        marginLeft: "1%",
        backgroundColor: "#f2f2f2",
        color: 'black'
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    categoryButton: {
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
        marginBottom: 10,
    },
    categoryButtonSelected: {
        backgroundColor: '#c45628',
    },
    categoryButtonText: {
        color: '#333',
        fontSize: 16,
    },
    categoryButtonTextSelected: {
        color: '#fff',
    },
    submitButton: {
        backgroundColor: '#c45628',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', // Align spinner and text horizontally if needed
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default WriteArticle;
