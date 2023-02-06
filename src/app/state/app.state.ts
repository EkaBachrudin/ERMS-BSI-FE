import { ActionReducerMap } from '@ngrx/store';
import * as AuthReducer from './store/reducer/auth/auth.reducer';
import * as DirectorateReducer from './store/reducer/rcsa/directorate.reducer';
import * as GroupReducer from './store/reducer/rcsa/group.reducer';
import * as RoleReducer from './store/reducer/rcsa/role.reducer';
import * as UserReducer from './store/reducer/user/user.reducer';
import * as UserDelegateReducer from './store/reducer/userDelegate/userDelegate.reducer';
import * as KeyProcessKantorPusatReducer from './store/reducer/rcsa/keyProcessKantorPusat.reducer';
import * as KeyProcessJaringanReducer from './store/reducer/rcsa/keyProcessJaringan.reducer';
import * as keyRiskReducer from './store/reducer/rcsa/keyRisk.reducer';
import * as keyControlReducer from './store/reducer/rcsa/keyControl.reducer';
import * as KetentuanReducer from './store/reducer/rcsa/ketentuan.reducer';
import * as RiskLibraryReducer from './store/reducer/rcsa/riskLibrary.reducer';
import * as SegmenReducer from './store/reducer/rcsa/segmen.reducer';
import * as LetReducer from './store/reducer/rcsa/let.reducer';
import * as TopRiskReducer from './store/reducer/rcsa/TopRisk.reducer';
import * as DepartmentReducer from './store/reducer/rcsa/department.reducer';

import * as SettingTopRiskReducer from './store/reducer/rcsa/settingTopRisk.reducer';
import * as LikeHoodReducer from './store/reducer/rcsa/LikeHood.reducer';

import * as IhrrReducer from './store/reducer/rcsa/Ihrr.reducer';
import * as RatingCompositeReducer from './store/reducer/rcsa/RatingComposite.reducer';
import * as ImpactReducer from './store/reducer/rcsa/Impact.reducer';
import * as SettingControlReducer from './store/reducer/rcsa/Control.reducer';
import * as DcorReducer from './store/reducer/rcsa/Dcor.reducer';
import * as GroupHeadReducer from './store/reducer/rcsa/GroupHead.reducer';
import * as DeptHeadReducer from './store/reducer/rcsa/DeptHead.reducer';
import * as RcsaByIDReducer from 'src/app/state/store/reducer/rcsa/RcsaByID.reducer';

export interface AppState {
  auth: AuthReducer.State;
  directorate: DirectorateReducer.State;
  group: GroupReducer.State;
  role: RoleReducer.State;
  user: UserReducer.State;
  userDelegate: UserDelegateReducer.State;
  keyProcessKantorPusat: KeyProcessKantorPusatReducer.State;
  keyProcessJaringan: KeyProcessJaringanReducer.State;
  keyRisk: keyRiskReducer.State;
  keyControl: keyControlReducer.State;
  ketentuan: KetentuanReducer.State;
  riskLibrary: RiskLibraryReducer.State;
  riskLibraryDetails : RiskLibraryReducer.StateDetail
  getRiskRegister : RiskLibraryReducer.StateGetRiskRegister
  segmen: SegmenReducer.State;
  let: LetReducer.State;
  settingTopRisk: SettingTopRiskReducer.State;
  TopRisk: TopRiskReducer.State;
  department: DepartmentReducer.State;
  LikeHood: LikeHoodReducer.State;
  Ihrr: IhrrReducer.State;
  ratingComposite: RatingCompositeReducer.State;
  impact: ImpactReducer.State;
  settingControl: SettingControlReducer.State;
  Dcor: DcorReducer.State;
  groupHead: GroupHeadReducer.State;
  DeptHead: DeptHeadReducer.State;
  RcsaByID: RcsaByIDReducer.State;
}

export const actionReducerMap: ActionReducerMap<AppState> = {
  auth: AuthReducer.AuthReducer,
  directorate: DirectorateReducer.DirectorateReducer,
  group: GroupReducer.GroupReducer,
  role: RoleReducer.RoleReducer,
  user: UserReducer.UserReducer,
  userDelegate: UserDelegateReducer.UserDelegateReducer,
  keyProcessKantorPusat: KeyProcessKantorPusatReducer.KeyProcessKantorPusatReducer,
  keyProcessJaringan: KeyProcessJaringanReducer.KeyProcessJaringanReducer,
  keyRisk: keyRiskReducer.keyRiskReducer,
  keyControl: keyControlReducer.KeyControlReducer,
  ketentuan: KetentuanReducer.KetentuanReducer,
  riskLibrary: RiskLibraryReducer.RiskLibraryReducer,
  riskLibraryDetails : RiskLibraryReducer.RiskLibraryDetailsReducer,
  getRiskRegister : RiskLibraryReducer.RiskRegisterReducer,
  segmen: SegmenReducer.SegmenReducer,
  let: LetReducer.LetReducer,
  settingTopRisk: SettingTopRiskReducer.SettingTopRiskReducer,
  TopRisk: TopRiskReducer.TopRiskReducer,
  department: DepartmentReducer.DepartmentReducer,
  LikeHood: LikeHoodReducer.LikeHoodReducer,
  Ihrr: IhrrReducer.IhrrReducer,
  ratingComposite: RatingCompositeReducer.RatingCompositeReducer,
  impact: ImpactReducer.ImpactReducer,
  settingControl: SettingControlReducer.SettingControlReducer,
  Dcor: DcorReducer.DcorReducer,
  groupHead: GroupHeadReducer.GroupHeadReducer,
  DeptHead: DeptHeadReducer.DeptHeadReducer,
  RcsaByID: RcsaByIDReducer.RcsaByIDReducer,
};
