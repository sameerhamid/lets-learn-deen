import {Text, View} from 'react-native';
import React, {ReactElement, useCallback} from 'react';
import CustomSwitch from '../../../common/components/customSwitch';
import CustomHeader from '../../../common/components/customHeader';
import {IMAGES} from '../../../common/constants/images';
import {goBack} from '../../../common/utils/navigatorUtils';
import CustomCheckbox from '../../../common/components/customCheckbox';
import PageSkelton from '../../../common/components/pageSkelton';
import Spacer from '../../../common/components/utility/spacer';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import useStudentController from './SutdentDetailsController';
import {
  ReasonNoReasonEnum,
  StatusEnum,
  TabsEnum,
} from '../../../common/utils/enumConstants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const checkboxData = [
  {
    id: 1,
    label: StatusEnum.UPDATED,
  },
  {
    id: 2,
    label: StatusEnum.NOT_UPDATED,
  },
];

const reasonsCheckboxData = [
  {
    id: 1,
    label: ReasonNoReasonEnum.BIMAR_OR_SAFAR,
  },
  {
    id: 2,
    label: ReasonNoReasonEnum.OTHER,
  },
  {
    id: 2,
    label: ReasonNoReasonEnum.NO_REASON,
  },
];

type StudentDetailsParams = RouteProp<ParamListBase, 'HomeScreen'>;
interface Props {
  route: StudentDetailsParams;
}
const StudentDetails = (props: Props): ReactElement => {
  const {route} = props;
  const routeParams = route.params;
  const {
    userRef,
    handleCheckBox,
    handleTabChange,
    tabName,
    studentReport,
    screenName,
    handleNext,
    tabs,
    handleSubmit,
    handleBack,
  } = useStudentController(routeParams);

  const renderReasonsCheckbox = useCallback((): React.JSX.Element => {
    return (
      <>
        <View style={{marginTop: 10}}>
          <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>
            Reason
          </Text>
        </View>
        <View style={{gap: 20, marginTop: 30}}>
          {reasonsCheckboxData.map(checkbox => {
            let dailyChecked = false;
            let weeklyChecked = false;
            if (tabName === TabsEnum.DAILY) {
              if (checkbox.label === ReasonNoReasonEnum.BIMAR_OR_SAFAR) {
                dailyChecked =
                  studentReport.daily?.updated?.with_reason?.bimar_or_safar ??
                  false;
              } else if (checkbox.label === ReasonNoReasonEnum.OTHER) {
                dailyChecked =
                  studentReport.daily?.updated?.with_reason?.other ?? false;
              } else {
                dailyChecked = studentReport.daily?.updated?.noReason ?? false;
              }
            } else if (tabName === TabsEnum.WEEKLY) {
              if (checkbox.label === ReasonNoReasonEnum.BIMAR_OR_SAFAR) {
                weeklyChecked =
                  studentReport.weekly?.updated?.with_reason?.bimar_or_safar ??
                  false;
              } else if (checkbox.label === ReasonNoReasonEnum.OTHER) {
                weeklyChecked =
                  studentReport.weekly?.updated?.with_reason?.other ?? false;
              } else {
                dailyChecked = studentReport.daily?.updated?.noReason ?? false;
              }
            }

            return (
              <>
                {tabName === TabsEnum.DAILY && (
                  <CustomCheckbox
                    key={`${checkbox.id}-daily`}
                    label={checkbox.label}
                    isChecked={dailyChecked}
                    onValueChange={isChecked => {
                      handleCheckBox(checkbox.label, isChecked, TabsEnum.DAILY);
                    }}
                  />
                )}

                {tabName === TabsEnum.WEEKLY && (
                  <CustomCheckbox
                    key={`${checkbox.id}-weekly`}
                    label={checkbox.label}
                    isChecked={weeklyChecked}
                    onValueChange={isChecked => {
                      handleCheckBox(
                        checkbox.label,
                        isChecked,
                        TabsEnum.WEEKLY,
                      );
                    }}
                  />
                )}
              </>
            );
          })}
        </View>
      </>
    );
  }, [tabName, studentReport]);

  const renderCheckbox = (): React.JSX.Element => {
    return (
      <View style={{gap: 20, marginTop: 30}}>
        {tabName === TabsEnum.DAILY &&
          checkboxData.map(checkbox => {
            return (
              <CustomCheckbox
                key={checkbox.id}
                label={checkbox.label}
                isChecked={
                  checkbox.label === StatusEnum.UPDATED
                    ? studentReport.daily?.updated?.status
                    : studentReport.daily?.notUpdated
                }
                onValueChange={isChecked => {
                  handleCheckBox(checkbox.label, isChecked, TabsEnum.DAILY);
                }}
              />
            );
          })}

        {tabName === TabsEnum.WEEKLY &&
          checkboxData.map(checkbox => {
            return (
              <>
                <CustomCheckbox
                  key={checkbox.id}
                  label={checkbox.label}
                  isChecked={
                    checkbox.label === StatusEnum.UPDATED
                      ? studentReport.weekly?.updated?.status
                      : studentReport.weekly?.notUpdated
                  }
                  onValueChange={isChecked => {
                    handleCheckBox(checkbox.label, isChecked, TabsEnum.WEEKLY);
                  }}
                />
              </>
            );
          })}

        {tabName === TabsEnum.DARASOREXAM &&
          checkboxData.map(checkbox => {
            return (
              <CustomCheckbox
                key={checkbox.id}
                isChecked={
                  checkbox.label === StatusEnum.UPDATED
                    ? studentReport.daras_or_exam?.participated
                    : studentReport.daras_or_exam?.not_participated
                }
                label={
                  checkbox.label === StatusEnum.UPDATED
                    ? 'Participated'
                    : 'Not Participated'
                }
                onValueChange={isChecked => {
                  handleCheckBox(
                    checkbox.label,
                    isChecked,
                    TabsEnum.DARASOREXAM,
                  );
                }}
              />
            );
          })}
      </View>
    );
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <CustomHeader
        leftAccessories={IMAGES.BACK}
        titlle={userRef.current.name}
        showSpace
        leftAccessoriesPress={goBack}
      />
      <Spacer height={10} />
      <PageSkelton>
        <CustomSwitch
          switchData={tabs}
          onTabChange={(index, title) => {
            const name = title as TabsEnum;
            handleTabChange(name);
          }}
        />
        <Spacer height={20} />
        {!screenName && renderCheckbox()}
        {(screenName === ReasonNoReasonEnum.BIMAR_OR_SAFAR ||
          screenName === ReasonNoReasonEnum.OTHER) &&
          renderReasonsCheckbox()}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 50,
          }}>
          {screenName && (
            <TouchableOpacity
              style={{
                backgroundColor: 'teal',
                paddingVertical: 12,
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-start',
                borderRadius: 100,
              }}
              onPress={handleBack}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                }}>
                Back
              </Text>
            </TouchableOpacity>
          )}
          {!screenName && <View />}
          <TouchableOpacity
            style={{
              backgroundColor: 'teal',
              paddingVertical: 12,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-end',
              borderRadius: 100,
            }}
            onPress={() =>
              screenName
                ? handleSubmit()
                : handleNext(ReasonNoReasonEnum.BIMAR_OR_SAFAR)
            }>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
              }}>
              {screenName && 'Submit'}
              {!screenName && 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </PageSkelton>
    </View>
  );
};

export default StudentDetails;
