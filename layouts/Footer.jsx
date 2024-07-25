import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});

export default Footer;
