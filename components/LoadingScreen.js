import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 10000);
  
      return () => clearTimeout(loadingTimeout);
    }, []);
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <Icon name="rocket" size={30} color="#900" />
            <Text>Loading Complete!</Text>
          </View>
        )}
      </View>
    );
  };
  export default LoadingScreen;