import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import NotificationsScreen from './NotificationsScreen';

interface MusicItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
}

interface RecommendedItem {
  id: string;
  title: string;
  author: string;
  views: number;
  image: ImageSourcePropType;
}

const imageObject = { uri: 'https://marketplace.canva.com/EAEdft48JIs/1/0/1600w/canva-orange-skyline-tumblr-aesthetic-love-songs-playlist-cover-mCNRRGaWFgU.jpg' };

const musicData: MusicItem[] = [
  { id: '1', title: 'Playlist 1', image: imageObject },
  { id: '2', title: 'Playlist 2', image: imageObject },
  { id: '3', title: 'Playlist 3', image: imageObject },
  { id: '4', title: 'Playlist 4', image: imageObject },
  { id: '5', title: 'Playlist 5', image: imageObject },
  { id: '6', title: 'Playlist 6', image: imageObject },
  { id: '7', title: 'Playlist 7', image: imageObject },
  { id: '8', title: 'Playlist 8', image: imageObject },
  { id: '9', title: 'Playlist 9', image: imageObject },
  { id: '10', title: 'Playlist 10', image: imageObject },
];

const recommendedData: RecommendedItem[] = [
  { id: '1', title: 'Recommended Song 1', author: 'Author 1', views: 1000, image: imageObject },
  { id: '2', title: 'Recommended Song 2', author: 'Author 2', views: 2000, image: imageObject },
  { id: '3', title: 'Recommended Song 3', author: 'Author 3', views: 3000, image: imageObject },
  { id: '4', title: 'Recommended Song 4', author: 'Author 4', views: 4000, image: imageObject },
];

const HomeScreen = () => {
  const navigation = useNavigation();



  const renderItem = ({ item }: { item: MusicItem }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const renderRecommendedItem = ({ item }: { item: RecommendedItem }) => (
    <View style={styles.recommendedItem}>
      <Image source={item.image} style={styles.recommendedImage} />
      <View style={styles.recommendedDetails}>
        <Text style={styles.recommendedTitle}>{item.title}</Text>
        <Text style={styles.recommendedAuthor}>{item.author}</Text>
        <Text style={styles.recommendedViews}>{item.views} views</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity>
            <Image source={imageObject} style={styles.profileImage} />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Your Name</Text>
            <Text style={styles.membership}>Membership</Text>
          </View>
      {/* <TouchableOpacity onPress={handleNotificationsPress}>
        <MaterialIcons name="notifications" size={24} color="white" />
      </TouchableOpacity> */}
    </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Listen The{"\n"}Latest Music</Text>
            <View style={styles.searchContainer}>
              <MaterialIcons name="search" size={24} color="#888" />
              <TextInput
                style={[styles.searchInput, { width: '100%' }]}
                placeholder="Search Music"
                placeholderTextColor="#888"
                maxLength={13}
              />
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle2}>Recently Played</Text>
          </View>
          <FlatList
            data={musicData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
            horizontal={true}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle2}>Recommend for you</Text>
          </View>
          <FlatList
            data={recommendedData}
            renderItem={renderRecommendedItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.recommendedList}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A071E',
  },
  scrollContainer: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    flex: 1,
    marginHorizontal: 16,
  },
  userName: {
    color: "#F2F2F2",
    fontSize: 18,
    fontWeight: 'bold',
  },
  membership: {
    fontSize: 14,
    color: '#666',
  },
  notifications: {
    color: "#F2F2F2",
    paddingHorizontal: 8,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "#F2F2F2",
  },
  sectionTitle2: {
    color: "#F2F2F2",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0A091E',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    maxWidth: '50%',
  },
  searchInput: {
    fontSize: 16,
    textAlign: 'left',
    color: '#8E8E8E',
    marginLeft: 8,
    width: '60%',
    alignSelf: 'center',
  },
  list: {
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
  item: {
    marginRight: 20,
  },
  image: {
    width: 101,
    height: 81,
    borderRadius: 10,
  },
  title: {
    color: "#F2F2F2",
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  recommendedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  recommendedImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  recommendedDetails: {
    marginLeft: 10,
  },
  recommendedTitle: {
    color: "#F2F2F2",
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendedAuthor: {
    color: "#888",
    fontSize: 14,
  },
  recommendedViews: {
    color: "#888",
    fontSize: 14,
  },
  recommendedList: {
    paddingBottom: 60,
  },
});

export default HomeScreen;
