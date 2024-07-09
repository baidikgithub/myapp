import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

interface ProductDetailProps {
  product: {
    image: string;
    description: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default ProductDetail;
