import {View, Text} from 'react-native';
import React from 'react';
import CustomSwitch from '../../../common/components/customSwitch';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';
import {goBack} from '../../../common/utils/navigatorUtils';

const tabsData = [
  {id: 1, title: 'Daily'},
  {id: 2, title: 'Weakly'},
  {id: 3, title: 'Daras/Exam'},
];
const StudentDetails = () => {
  return (
    <View>
      <CustomHeader
        leftAccessories={IMAGES.BACK}
        titlle="Student Details"
        showSpace
        leftAccessoriesPress={goBack}
      />
      <CustomSwitch switchData={tabsData} />
    </View>
  );
};

export default StudentDetails;
