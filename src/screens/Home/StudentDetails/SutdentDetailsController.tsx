/* eslint-disable react-hooks/exhaustive-deps */

import {useRef} from 'react';
import {UserType} from '../../../common/components/User';

interface StudentControllerTypes {
  userRef: React.MutableRefObject<UserType>;
}

const useStudentController = (
  //@ts-ignore
  routeParams,
): StudentControllerTypes => {
  const userRef = useRef<UserType>(routeParams);

  return {
    userRef,
  };
};

export default useStudentController;
