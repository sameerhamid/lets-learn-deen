/* eslint-disable react-hooks/exhaustive-deps */

import {useEffect, useRef, useState} from 'react';
import {UserType} from '../../../common/components/User';
import {
  StudentType,
  useStudentContext,
} from '../../../common/context/StudentContext';
import {
  ReasonNoReasonEnum,
  StatusEnum,
  TabsEnum,
} from '../../../common/utils/enumConstants';

const tabsData = [
  {id: 1, title: TabsEnum.DAILY},
  {id: 2, title: TabsEnum.WEEKLY},
  {id: 3, title: TabsEnum.DARASOREXAM},
];
interface StudentControllerTypes {
  userRef: React.MutableRefObject<UserType>;
  handleCheckBox: (
    key: StatusEnum | ReasonNoReasonEnum,
    status: boolean,
    tabName: TabsEnum,
    reason?: ReasonNoReasonEnum,
  ) => void;
  tabName: TabsEnum;
  handleTabChange: (name: TabsEnum) => void;
  studentReport: StudentType;
  screenName: ReasonNoReasonEnum | undefined;
  handleNext: (name: ReasonNoReasonEnum) => void;
  tabs: {id: number; title: string}[];
  handleSubmit: () => void;
  handleBack: () => void;
}

const useStudentController = (
  //@ts-ignore
  routeParams,
): StudentControllerTypes => {
  const userData = routeParams as StudentType;
  const userRef = useRef<UserType>(userData);
  const [tabName, setTabName] = useState<TabsEnum>(TabsEnum.DAILY);
  const {studentReport, setStudentReport} = useStudentContext();
  const [tabs, setTabs] = useState(tabsData);
  const [screenName, setScreenName] = useState<
    ReasonNoReasonEnum | undefined
  >();

  useEffect(() => {
    if (
      screenName === ReasonNoReasonEnum.BIMAR_OR_SAFAR ||
      screenName === ReasonNoReasonEnum.OTHER
    ) {
      setTabs([
        {id: 1, title: TabsEnum.DAILY},
        {id: 2, title: TabsEnum.WEEKLY},
      ]);
    }
  }, [screenName]);

  useEffect(() => {
    setStudentReport({...studentReport, ...userData});
  }, [routeParams]);

  // console.log('studentReport>>>', studentReport);
  const handleCheckBox = (
    key: StatusEnum | ReasonNoReasonEnum,
    status: boolean,
    tabName: TabsEnum,
    reason?: ReasonNoReasonEnum,
  ) => {
    console.log('key:', key, 'status:', status, 'tabName', tabName);
    switch (tabName) {
      case TabsEnum.DAILY:
        if (key === StatusEnum.UPDATED) {
          setStudentReport({
            ...studentReport,
            daily: {
              ...studentReport.daily,
              updated: {
                ...studentReport.daily?.updated,
                status: status,
              },
            },
          });
        } else {
          setStudentReport({
            ...studentReport,
            daily: {
              ...studentReport.daily,
              notUpdated: status,
            },
          });
        }

        // for updation of reason
        if (key === ReasonNoReasonEnum.BIMAR_OR_SAFAR) {
          setStudentReport({
            ...studentReport,
            daily: {
              ...studentReport.daily,
              updated: {
                ...studentReport.daily?.updated,
                with_reason: {
                  ...studentReport.daily?.updated?.with_reason,
                  bimar_or_safar: status,
                },
              },
            },
          });
        } else if (key === ReasonNoReasonEnum.OTHER) {
          setStudentReport({
            ...studentReport,
            daily: {
              ...studentReport.daily,
              updated: {
                ...studentReport.daily?.updated,
                with_reason: {
                  ...studentReport.daily?.updated?.with_reason,
                  other: status,
                },
              },
            },
          });
        } else {
          setStudentReport({
            ...studentReport,
            daily: {
              ...studentReport.daily,
              updated: {
                ...studentReport.daily?.updated,
                noReason: status,
              },
            },
          });
        }
        break;
      case TabsEnum.WEEKLY:
        if (key === StatusEnum.UPDATED) {
          setStudentReport({
            ...studentReport,
            weekly: {
              ...studentReport.weekly,
              updated: {
                ...studentReport.weekly?.updated,
                status: status,
              },
            },
          });
        } else {
          setStudentReport({
            ...studentReport,
            weekly: {
              ...studentReport.weekly,
              notUpdated: status,
            },
          });
        }

        // for updation of reason
        if (key === ReasonNoReasonEnum.BIMAR_OR_SAFAR) {
          setStudentReport({
            ...studentReport,
            weekly: {
              ...studentReport.weekly,
              updated: {
                ...studentReport.weekly?.updated,
                with_reason: {
                  ...studentReport.weekly?.updated?.with_reason,
                  bimar_or_safar: status,
                },
              },
            },
          });
        } else if (key === ReasonNoReasonEnum.OTHER) {
          setStudentReport({
            ...studentReport,
            weekly: {
              ...studentReport.weekly,
              updated: {
                ...studentReport.weekly?.updated,
                with_reason: {
                  ...studentReport.weekly?.updated?.with_reason,
                  other: status,
                },
              },
            },
          });
        } else {
          setStudentReport({
            ...studentReport,
            weekly: {
              ...studentReport.weekly,
              updated: {
                ...studentReport.weekly?.updated,
                noReason: status,
              },
            },
          });
        }
        break;
      case TabsEnum.DARASOREXAM:
        if (key === StatusEnum.UPDATED) {
          setStudentReport({
            ...studentReport,
            daras_or_exam: {
              participated: status,
            },
          });
        } else {
          setStudentReport({
            ...studentReport,
            daras_or_exam: {
              not_participated: status,
            },
          });
        }
        break;
      default:
    }
  };
  const handleTabChange = (name: TabsEnum) => {
    setTabName(name);
  };

  const handleNext = (name: ReasonNoReasonEnum) => {
    setScreenName(name);
  };
  // add all logic here to calculate marks on basis of studentReport state
  const handleSubmit = () => {};
  const handleBack = () => {
    setScreenName(undefined);
  };

  return {
    userRef,
    handleCheckBox,
    tabName,
    handleTabChange,
    studentReport,
    screenName,
    handleNext,
    tabs,
    handleSubmit,
    handleBack,
  };
};

export default useStudentController;
