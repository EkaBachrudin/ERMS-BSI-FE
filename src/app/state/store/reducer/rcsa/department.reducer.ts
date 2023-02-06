
import { IDepartment } from "src/app/models/rcsa/department/department.model";
import { departmentActions, DEPARTMENT_CREATED_SUCCESS, DEPARTMENT_DELETE, DEPARTMENT_FETCH_SUCCESS, DEPARTMENT_UPDATE_SUCCESS } from "../../actions/rcsa/department.action";

  const initialState = {
    department: null,
    totalElements: null,
    totalPages: null,
    currentPage: null,
    pageSize: null,
    error: null,
    isLoading: false,
  };
  export interface State {
    department: IDepartment[];
    totalElements: null;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    error: string;
    isLoading: boolean;
  }
  
  export function DepartmentReducer(
    state = initialState,
    action: departmentActions
  ) {
    switch (action.type) {
      case DEPARTMENT_FETCH_SUCCESS:
        return {
          ...state,
          department: [...action.payload],
          totalElements: action.totalElement,
          totalPages: action.totalPages,
          currentPage: action.currentPage,
          pageSize: action.pageSize,
          isLoading: false,
          error: null,
        };
      case DEPARTMENT_CREATED_SUCCESS:
        return {
          ...state,
          department: [...state.department, action.payload],
          isLoading: false,
          error: null,
        };
      case DEPARTMENT_UPDATE_SUCCESS:
        return state.department.map((department) => {
          if (department.id == action.payload.id) {
            return { ...department, ...action.payload };
          } else {
            return department;
          }
        });
      case DEPARTMENT_DELETE:
        return state.department.filter((dir) => {
          return dir.id != action.payload.id;
        });
  
      default:
        return { ...state };
    }
  }
  