import { ISettingTopRisk } from 'src/app/models/rcsa/setting-top-risk/settingTopRisk';
import {
  settingTopRiskActions,
  SETTING_TOP_RISK_CREATED_SUCCESS,
  SETTING_TOP_RISK_DELETE,
  SETTING_TOP_RISK_FETCH_SUCCESS,
  SETTING_TOP_RISK_UPDATE_SUCCESS,
} from '../../actions/rcsa/settingTopRisk.action';

const initialState = {
  settingTopRisk: null,
  error: null,
  isLoading: false,
};
export interface State {
  settingTopRisk: ISettingTopRisk[];
  error: string;
  isLoading: boolean;
}

export function SettingTopRiskReducer(
  state = initialState,
  action: settingTopRiskActions
) {
  switch (action.type) {
    case SETTING_TOP_RISK_FETCH_SUCCESS:
      return {
        ...state,
        settingTopRisk: [...action.payload],
        isLoading: false,
        error: null,
      };
    case SETTING_TOP_RISK_CREATED_SUCCESS:
      return {
        ...state,
        settingTopRisk: [...state.settingTopRisk, action.payload],
        isLoading: false,
        error: null,
      };
    case SETTING_TOP_RISK_UPDATE_SUCCESS:
      return state.settingTopRisk.map((directorat) => {
        if (directorat.id == action.payload.id) {
          return { ...directorat, ...action.payload };
        } else {
          return directorat;
        }
      });
    case SETTING_TOP_RISK_DELETE:
      return state.settingTopRisk.filter((dir) => {
        return dir.id != action.payload.id;
      });

    default:
      return { ...state };
  }
}
