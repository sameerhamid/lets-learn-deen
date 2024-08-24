import { View, Text } from 'react-native';
import React, { ReactElement } from 'react';
import CustomSwitch from '../../../common/components/customSwitch';
import CustomHeader from '../../../common/components/customHeader';
import { IMAGES } from '../../../common/constants/images';
import { goBack } from '../../../common/utils/navigatorUtils';
import CustomCheckbox from '../../../common/components/customCheckbox';
import PageSkelton from '../../../common/components/pageSkelton';
import Spacer from '../../../common/components/utility/spacer';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import useStudentController from './SutdentDetailsController';

const tabsData = [
  { id: 1, title: 'Daily' },
  { id: 2, title: 'Weakly' },
  { id: 3, title: 'Daras/Exam' },
];

type StudentDetailsParams = RouteProp<ParamListBase, 'HomeScreen'>;
interface Props {
  route: StudentDetailsParams;
}
const StudentDetails = (props: Props): ReactElement => {
  const { route } = props;
  const routeParams = route.params;
  const { userRef } = useStudentController(routeParams);

  console.log(routeParams);
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <CustomHeader
        leftAccessories={IMAGES.BACK}
        titlle={userRef.current.name}
        showSpace
        leftAccessoriesPress={goBack}
      />
      <Spacer height={10} />
      <PageSkelton>
        <CustomSwitch switchData={tabsData} onTabChange={(index, title) => {
          console.log(index + " " + title);
        }} />
        <Spacer height={20} />
        <CustomCheckbox label="Abc" onValueChange={(isChecked) => {
          console.log(isChecked);
        }} />
      </PageSkelton>
    </View>
  );
};

export default StudentDetails;
