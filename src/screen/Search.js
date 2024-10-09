import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ArrowLeft, MagnifyingGlass, XCircle } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(["Politics", "Technology", "Sports"]);
  const [searchResults, setSearchResults] = useState([
    {
      id: "1",
      title: "Latest Advances in Technology",
      description: "A quick overview of the latest trends in technology.",
      image: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      id: "2",
      title: "Political Changes in Europe",
      description: "An insight into recent political changes in Europe.",
      image: "https://via.placeholder.com/150", // Placeholder image URL
    },
  ]);

  // Function to handle search input
  const handleSearch = (text) => {
    setSearchQuery(text);
    // Filter or fetch search results based on input here
  };

  // Function to handle clearing the search input
  const clearSearch = () => {
    setSearchQuery("");
  };

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={goBack}>
            <ArrowLeft style={styles.searchIcon}/>
        </TouchableOpacity>
        
        <MagnifyingGlass size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search news..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={clearSearch}>
            <XCircle size={20} color="#555" />
          </TouchableOpacity>
        )}
      </View>

      {/* Recent Searches or Suggestions */}
      {recentSearches.length > 0 && (
        <View style={styles.recentSearchesContainer}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <View style={styles.chipsContainer}>
            {recentSearches.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.chip}
                onPress={() => setSearchQuery(item)}
              >
                <Text style={styles.chipText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Image source={{ uri: item.image }} style={styles.resultImage} />
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultTitle}>{item.title}</Text>
                <Text style={styles.resultDescription}>{item.description}</Text>
              </View>
            </View>
          )}
          style={styles.resultsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#055160",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "black"
  },
  recentSearchesContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "#ddd",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  chipText: {
    fontSize: 14,
    color: "#555",
  },
  resultsList: {
    paddingHorizontal: 10,
  },
  resultItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
  },
  resultImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  resultTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  resultDescription: {
    fontSize: 14,
    color: "#555",
  },
});

export default Search;
