import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useState,
  useEffect,
} from 'react';
import {UserType} from '../components/User';
import {Get} from '../services/httpRequest';

export interface StudentType extends UserType {
  id: string;
  daily?: {
    updated?: {
      status?: boolean;
      with_reason?: {
        bimar_or_safar?: boolean;
        other?: boolean;
      };
      noReason?: boolean;
    };
    notUpdated?: boolean;
  };
  weekly?: {
    updated?: {
      status?: boolean;
      with_reason?: {
        bimar_or_safar?: boolean;
        other?: boolean;
      };
      noReason?: boolean;
    };
    notUpdated?: boolean;
  };
  daras_or_exam?: {
    participated?: boolean;
    not_participated?: boolean;
  };
}
// Define the context type for user state management
type StudentContextType = {
  studentReport: StudentType;
  setStudentReport: React.Dispatch<React.SetStateAction<StudentType>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create a context for Student state management
const StudentContext = createContext<StudentContextType | undefined>(undefined);

// Provider component
export const StudentProvider = ({children}: {children: ReactNode}) => {
  // Context value that will be shared with consuming components
  const [studentReport, setStudentReport] = useState<StudentType>({
    id: '',
    name: 'name',
    email: 'email',
    phone: 'phone',
    daily: {
      updated: {
        status: false,
        with_reason: {
          bimar_or_safar: false,
          other: false,
        },
        noReason: false,
      },
      notUpdated: false,
    },
    weekly: {
      updated: {
        status: false,
        with_reason: {
          bimar_or_safar: false,
          other: false,
        },
        noReason: false,
      },
      notUpdated: false,
    },
    daras_or_exam: {
      participated: false,
      not_participated: false,
    },
  });
  const [loading, setLoading] = useState<boolean>(false);

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
        // setUsers(resData);
        setLoading(false);
      },
      error => {
        console.log('error', error);
        setLoading(false);
      },
    );
  }, []);

  const value = useMemo(
    () => ({
      studentReport,
      setStudentReport,
      loading,
      setLoading,
    }),
    [studentReport, setStudentReport, loading, setLoading],
  );

  // Provide the context value to children components
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

// Hook to use the Student context
export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
};
