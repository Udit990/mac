import React, { useContext } from 'react';
import { View, Image, Text, FlatList, Button, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';

const CartScreen = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.cartItem}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.itemDetails}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text>{item.description}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                </View>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
            <Button title="Remove From Cart" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
      <Button title="Clear Cart" onPress={clearCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#192A56',
    borderRadius: 30,
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 40,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#99AAAB',
    textAlign: 'center',
    marginVertical: 20,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#DAE0E2',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    gap: 30,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default CartScreen;
