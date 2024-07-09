import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const products = [
  { id: '1', title: 'Product 1', price: '$10', image: 'https://via.placeholder.com/100' },
  { id: '2', title: 'Product 2', price: '$20', image: 'https://via.placeholder.com/100' },
  { id: '3', title: 'Product 3', price: '$30', image: 'https://via.placeholder.com/100' },
  { id: '4', title: 'Product 4', price: '$40', image: 'https://via.placeholder.com/100' },
  { id: '4', title: 'Product 4', price: '$40', image: 'https://via.placeholder.com/100' },
  { id: '4', title: 'Product 4', price: '$40', image: 'https://via.placeholder.com/100' },
  // Add more products as needed
];

const ProductPage = ({ navigation }) => {
  const [cart, setCart] = useState({});

  const increaseQuantity = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1
    }));
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: Math.max((prevCart[id] || 0) - 1, 0)
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={() => decreaseQuantity(item.id)}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{cart[item.id] || 0}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(item.id)}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Page</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon name="search" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="cart" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Banner</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="notifications" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
  },
  banner: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8d7da',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default ProductPage;
