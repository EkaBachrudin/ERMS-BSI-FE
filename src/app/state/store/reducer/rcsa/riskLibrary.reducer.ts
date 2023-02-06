import { IRiskLibrary } from "src/app/models/riskLibrary/riskLibrary.model";
import { GetRiskRegisterInterface } from "src/app/module/rcsa/maintance/tabs/risk-library/types/getRiskRegister.interface";
import { RiskLibraryInterface } from "src/app/module/rcsa/maintance/tabs/risk-library/types/risklib.interface";
import { RiskLibraryDetailInterface } from "src/app/module/rcsa/maintance/tabs/risk-library/types/riskLibraryDetail.interface";
import { riskLibraryActions, RISKLIBRARY_CREATED_SUCCESS, RISKLIBRARY_DELETE, RISKLIBRARY_DETAIL_FETCH_SUCCESS, RISKLIBRARY_FETCH_SUCCESS, RISKLIBRARY_UPDATE_SUCCESS, RISK_REGISTER_FETCH_SUCCESS } from "../../actions/rcsa/riskLibrary.action";

  const initialState = {
    riskLibrary: null,
    totalPages: null,
    currentPage: null,
    pageSize: null,
    error: null,
    isLoading: false,
  };
  const initialStateGetRiskRegister = {
    getRegister: null,
    totalPages: null,
    currentPage: null,
    pageSize: null,
    totalElements: null,
    error: null,
    isLoading: false,
  };
  const initialDetailsState = {
    riskLibraryDetail: null,
    pageable : null,
    error: null,
    isLoading: true,
  };

  export interface State {
    riskLibrary: RiskLibraryInterface[];
    totalPages: number;
    currentPage: number;
    pageSize: number;
    error: string;
    isLoading: boolean;
  }
  export interface StateGetRiskRegister {
    getRegister: GetRiskRegisterInterface[];
    error: string;
    isLoading: boolean;
  }
  export interface StateDetail {
    riskLibraryDetail: RiskLibraryDetailInterface[];
    error: string;
    isLoading: boolean;
  }

  export function RiskLibraryReducer(
    state = initialState,
    action: riskLibraryActions
  ) {
    switch (action.type) {
      case RISKLIBRARY_FETCH_SUCCESS:
        return {
          ...state,
          riskLibrary: [...action.payload],
          totalPages: action.totalPages,
          currentPage: action.currentPage,
          pageSize: action.pageSize,
          elements : action.totalElements,
          isLoading: false,
          error: null,
        };
      case RISKLIBRARY_CREATED_SUCCESS:
        return {
          ...state,
          riskLibrary: [...state.riskLibrary, action.payload],
          isLoading: false,
          error: null,
        };
      case RISKLIBRARY_UPDATE_SUCCESS:
        return state.riskLibrary.map((riskLibrary) => {
          if (riskLibrary.id == action.payload.id) {
            return { ...riskLibrary, ...action.payload };
          } else {
            return riskLibrary;
          }
        });
      case RISKLIBRARY_DELETE:
        return state.riskLibrary.filter((dir) => {
          return dir.id != action.payload.id;
        });

      default:
        return { ...state };
    }
  }
  export function RiskRegisterReducer(
    state = initialStateGetRiskRegister,
    action: riskLibraryActions
  ) {
    switch (action.type) {
      case RISK_REGISTER_FETCH_SUCCESS:
        return {
          ...state,
          getRegister: [...action.payload],
          totalPage: action.totalPages,
          currentPage: action.currentPage,
          pageSize: action.pageSize,
          totalElements: action.totalElement,
          isLoading: false,
          error: null,
        };

      default:
        return { ...initialStateGetRiskRegister };
    }
  }
  export function RiskLibraryDetailsReducer(
    state = initialDetailsState,
    action: riskLibraryActions
  ) {
    switch (action.type) {

        case RISKLIBRARY_DETAIL_FETCH_SUCCESS:
          return {
            ...state,
            riskLibraryDetail: [...action.payload],
            totalPages: action.totalPages,
            currentPage: action.currentPage,
            pageSize: action.pageSize,
            elements : action.totalElements,
            isLoading: false,
            error: null,
          };


      default:
        return { ...initialDetailsState };
    }
  }
