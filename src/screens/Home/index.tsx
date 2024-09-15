import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import User, {UserType} from '../../common/components/User';
import {Get} from '../../common/services/httpRequest';
import CustomHeader from '../../common/components/customHeader';

import useHomeController from './HomeController';
import ActivityIndic from '../../common/components/activityIndic';
import {
  StudentProvider,
  useStudentContext,
} from '../../common/context/StudentContext';

function Home() {
  const {loading, users, handlerUserClick} = useHomeController();

  return (
    <View style={{width: '100%', marginBottom: 54}}>
      <CustomHeader titlle="HOME" />
      {loading && <ActivityIndic />}
      {!loading && (
        <ScrollView>
          {users?.map((user, index) => {
            return (
              <User
                user={user}
                onUserClick={() => handlerUserClick(user)}
                key={index}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

export default Home;
