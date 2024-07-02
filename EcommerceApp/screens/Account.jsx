// import React, { useContext, useEffect} from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useNavigation } from '@react-navigation/native';
// import { ShoppingContext } from '../contexts/shoppingContext';

// const Account = () => {
//   const navigation = useNavigation();
//   const {authUser} = useContext(ShoppingContext)
//   const {firstName, lastname, email, image} = authUser
//   useEffect(()=>{
//     console.log('Context auth:',authUser);
//   },[])

//   const handleEditProfile = () => {
//     console.log('Edit Profile');
//     navigation.navigate('ProfileForm');
//   };

//   const handleSettings = () => {
//     console.log('Settings');
//   };

//   const handleAbout = () => {
//     console.log('About');
//   };

//   const handleLogout = () => {
//     console.log('Logout');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         {/* <AntDesign name="user" size={64} color="#1890ff" style={styles.avatarIcon} /> */}
//         <Image source={{uri:image}}/>
//         <Text style={styles.username}>{`${firstName} ${lastname}`}</Text>
//         <Text style={styles.email}>{email}</Text>
//       </View>

//       <TouchableOpacity style={styles.item} onPress={handleEditProfile}>
//         <View style={styles.itemButton}>
//           <AntDesign name="edit" size={24} color="black" style={styles.itemIcon} />
//           <Text style={styles.itemText}>Edit Profile</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.item}>
//         <View style={styles.itemButton}>
//           <AntDesign name="bells" size={24} color="black" style={styles.itemIcon} />
//           <Text style={styles.itemText}>Notifications</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.item}>
//         <View style={styles.itemButton}>
//           <AntDesign name="car" size={24} color="black" style={styles.itemIcon} />
//           <Text style={styles.itemText}>My Orders</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.item} onPress={handleSettings}>
//         <View style={styles.itemButton}>
//           <AntDesign name="setting" size={24} color="black" style={styles.itemIcon} />
//           <Text style={styles.itemText}>Settings</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.item} onPress={handleAbout}>
//         <View style={styles.itemButton}>
//           <AntDesign name="infocirlceo" size={24} color="black" style={styles.itemIcon} />
//           <Text style={styles.itemText}>About</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <View style={styles.logoutButtonInner}>
//           <Text style={styles.logoutButtonText}>Logout</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatarIcon: {
//     marginBottom: 10,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   email: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//   },
//   item: {
//     marginBottom: 10,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3, // for Android shadow
//     shadowColor: '#000', // for iOS shadow
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   itemButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//   },
//   itemIcon: {
//     marginRight: 10,
//   },
//   itemText: {
//     fontSize: 18,
//     color: '#333',
//   },
//   logoutButton: {
//     marginBottom: 10,
//     backgroundColor: 'gold', // Ant Design warning color
//     borderRadius: 8,
//     elevation: 3, // for Android shadow
//     shadowColor: '#000', // for iOS shadow
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   logoutButtonInner: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 15,
//   },
//   logoutButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });

// export default Account;


import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { ShoppingContext } from "../contexts/shoppingContext";

const Account = () => {
  const navigation = useNavigation();
  const { authUser } = useContext(ShoppingContext);
  const { email, isLoggedIn, firstName, lastName, image } = authUser;

  useEffect(() => {
    console.log("Context auth:", authUser);
  }, [authUser]);

  const handleEditProfile = () => {
    console.log("Edit Profile");
    navigation.navigate("ProfileForm");
  };

  const handleSettings = () => {
    console.log("Settings");
  };

  const handleAbout = () => {
    console.log("About");
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <AntDesign name="user" size={64} color="#1890ff" style={styles.avatarIcon} /> */}
        <Image source={{ uri: image }} />
        <Text style={styles.username}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <TouchableOpacity style={styles.item} onPress={handleEditProfile}>
        <View style={styles.itemButton}>
          <AntDesign
            name="edit"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.itemButton}>
          <AntDesign
            name="bells"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Notifications</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.itemButton}>
          <AntDesign
            name="car"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>My Orders</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleSettings}>
        <View style={styles.itemButton}>
          <AntDesign
            name="setting"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleAbout}>
        <View style={styles.itemButton}>
          <AntDesign
            name="infocirlceo"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>About</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <View style={styles.logoutButtonInner}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatarIcon: {
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemIcon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
  logoutButton: {
    marginBottom: 10,
    backgroundColor: "gold", // Ant Design warning color
    borderRadius: 8,
    elevation: 3, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  logoutButtonInner: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Account;
