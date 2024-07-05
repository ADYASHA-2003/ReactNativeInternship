import React from "react";
// import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const MainHome = () => {
  // const navigation = useNavigation();

  const reviews = [
    {
      id: 1,
      userName: "John Doe",
      rating: 4.5,
      reviewText:
        "Great products and fast delivery! Would definitely recommend.",
      personImage:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      userName: "Jane Smith",
      rating: 5.0,
      reviewText: "Amazing service and quality. Will shop here again!",
      personImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      userName: "Alex Johnson",
      rating: 3.5,
      reviewText: "Products are good but shipping took longer than expected.",
      personImage:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    },
  ];

  const categories = [
    {
      name: "Grocery",
      image:
        "https://images.unsplash.com/photo-1526470498-9ae73c665de8?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Furniture",
      image:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFrZXVwfGVufDB8fDB8fHww",
    },
    {
      name: "Fragrances",
      image:
        "https://images.unsplash.com/photo-1701291927826-c7775869d822?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const banners = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwc2FsZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Summer Sale",
      description: "Up to 50% off on selected items!",
    },
    {
      id: 2,
      image:
        "https://st2.depositphotos.com/18984178/45771/i/450/depositphotos_457719952-stock-photo-wooden-podium-table-for-displaying.jpg",
      title: "New Arrivals",
      description: "Discover our latest products!",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/ab/95/ab/ab95ab2e56830b8534b71fefad0b0f10.jpg",
      title: "Top Trends",
      description: "Explore top trends of this season!",
    },
  ];

  const brands = [
    { name: "Calvin Klein" },
    { name: "Dolce" },
    { name: "Dior" },
    { name: "Chanel" },
    { name: "Knoll" },
    { name: "Annibale" },
    { name: "Furniture Co." },
    { name: "Glamour" },
  ];

  const pastelColors = [
    "#FFB3BA", // Light Pink
    "#FFDFBA", // Light Orange
    "#FFFFBA", // Light Yellow
    "#BAFFC9", // Light Green
    "#BAE1FF", // Light Blue
    "#E1BAFF", // Light Purple
    "#FFDFD3", // Light Peach
    "#D3FFCE", // Light Mint
  ];

  return (
    <ImageBackground
      source={{
        uri: "https://previews.123rf.com/images/lux100/lux1001603/lux100160300058/54243109-illustration-of-seamless-pattern-wiht-doodle-supermarket-elements.jpg",
      }} // Replace with your image path
      style={styles.background}
      imageStyle={{ opacity: 0.6 }}
    >
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainer}
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryCard}
                onPress={() => console.log("Category selected:", category.name)}
              >
                <ImageBackground
                  source={{ uri: category.image }}
                  style={styles.categoryImage}
                  imageStyle={styles.categoryImage}
                >
                  <Text style={styles.categoryText}>{category.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={styles.exploreButton}
          // onPress={() => navigation.navigate("Product")}
          onPress={() => console.log("Explore All Categories")}
        >
          <Text style={styles.exploreText}>EXPLORE ALL</Text>
        </TouchableOpacity>

        <View style={styles.bannerSection}>
          <Text style={styles.title}>Top Sales of this Week</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bannerContainer}
          >
            {banners.map((banner) => (
              <TouchableOpacity key={banner.id} style={styles.bannerContainer}>
                <Image
                  source={{ uri: banner.image }}
                  style={styles.bannerImage}
                />
                <View style={styles.bannerTextContainer}>
                  <Text style={styles.bannerTitle}>{banner.title}</Text>
                  <Text style={styles.bannerDescription}>
                    {banner.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.brandsSection}>
          <Text style={styles.title}>Luxury Brands We Deal In</Text>
          <View style={styles.brandsContainer}>
            {brands.map((brand, index) => (
              <View
                key={index}
                style={[
                  styles.brandCircle,
                  {
                    backgroundColor: pastelColors[index % pastelColors.length],
                  },
                ]}
              >
                <Text style={styles.brandText}>{brand.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Reviews or Ratings Section */}
        <View style={styles.reviewsSection}>
          <Text style={styles.title}>Hear From Our Customers</Text>
          {reviews.map((item, index) => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View key={index} style={styles.reviewContainer}>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>
                    {item.rating.toFixed(1)}
                  </Text>
                  {/* Replace with your star icon */}
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/128/2107/2107957.png",
                    }}
                    style={styles.starIcon}
                  />
                  <Image
                    source={{ uri: item.personImage }}
                    style={styles.personImages}
                  />
                </View>
                <Text style={styles.reviewUser}>{item.userName}</Text>
                <Text style={styles.reviewText}>{item.reviewText}</Text>
              </View>
            </ScrollView>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
    textAlign: "center",
  },
  categoryContainer: {
    alignItems: "center",
  },
  categoryCard: {
    borderRadius: 10,
    marginHorizontal: 5,
    width: 120,
    height: 120,
    overflow: "hidden",
  },
  categoryImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  exploreButton: {
    padding: 10,
    backgroundColor: "gold",
    margin: 20,
    borderRadius: 10,
    width: "40%",
    alignSelf: "center",
  },
  exploreText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  bannerSection: {
    marginTop: 20,
  },
  bannerContainer: {
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  bannerImage: {
    width: 300,
    height: 150,
  },
  bannerTextContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  bannerDescription: {
    fontSize: 14,
    color: "#fff",
  },
  brandsSection: {
    marginTop: 30,
  },
  brandsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  brandCircle: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
    margin: 13,
  },
  brandText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  furnitureSection: {
    marginTop: 20,
    marginBottom: 400,
  },
  furnitureList: {
    paddingHorizontal: 10,
  },
  reviewsSection: {
    marginTop: 30,
    // paddingHorizontal: 5,
    marginBottom: 20,
    gap: 5,
  },
  reviewContainer: {
    backgroundColor: "#f9f9f9",
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gold",
    marginHorizontal: 10,
    // paddingHorizontal:10
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // justifyContent:'space-between'
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
    color: "gold",
  },
  starIcon: {
    width: 20,
    height: 20,
    tintColor: "gold",
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  reviewText: {
    fontSize: 14,
    color: "#666",
    flexWrap: "wrap",
  },
  personImages: {
    width: 60,
    height: 60,
    marginLeft: 50,
    borderRadius: 20,
  },
});

export default MainHome;
