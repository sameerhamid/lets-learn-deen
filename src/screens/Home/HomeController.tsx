/* eslint-disable react-hooks/exhaustive-deps */

import {useEffect, useState} from 'react';
import {UserType} from '../../common/components/User';
import {Get} from '../../common/services/httpRequest';
import {navigate} from '../../common/utils/navigatorUtils';
import {NavScreenTags} from '../../common/constants/navScreenTags';

interface useHomeControllerTypes {
  users: UserType[];
  loading: boolean;
  handlerUserClick: (user: UserType) => void;
}

const useHomeController = (): useHomeControllerTypes => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handlerUserClick = (user: UserType) => {
    navigate(NavScreenTags.STUDENT_DETAILS, user);
  };

  useEffect(() => {
    setLoading(true);
    Get(
      '/users',
      (response: any) => {
        let resData = response?.map((res: any) => {
          return {
            id: res.id,
            name: res.name,
            email: res.email,
            phone: res.phone,
            profileImg: undefined,
          };
        });
        setUsers(resData);
        setLoading(false);
      },
      error => {
        console.log('error', error);
        setLoading(false);
      },
    );
  }, []);

  return {
    users,
    loading,
    handlerUserClick,
  };
};

export default useHomeController;
