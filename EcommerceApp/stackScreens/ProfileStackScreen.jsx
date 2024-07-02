import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from '../screens/Account';
import ProfileForm from '../commonComponents/ProfileForm';

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    // <NavigationContainer>
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Account" component={Account} options={{headerShown:false}}/>
        <ProfileStack.Screen
          name="ProfileForm"
          component={ProfileForm}
          options={{ presentation: 'modal' ,headerShown:false}}
        />
      </ProfileStack.Navigator>
    // </NavigationContainer>
  );
};

export default ProfileStackScreen;
