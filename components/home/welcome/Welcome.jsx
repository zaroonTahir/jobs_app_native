import {useState} from 'react';
import { 
  View, 
  Text, 
  Image,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  const router= useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Zaroon </Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
         style={styles.searchInput}
         placeholder="Search for Jobs"
         value=""
         onChange={() => {}}
        />
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
        <Image
         source={icons.search}
         resizeMode='contain'
         style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>
    
    <View style={styles.tabsContainer}>
      <FlatList />
    </View>


   </View>
  )
}

export default Welcome;