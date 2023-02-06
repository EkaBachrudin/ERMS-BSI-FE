import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RcsaRoutingModule } from './rcsa-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MaintanceComponent } from './maintance/maintance.component';
import { KantorPusatComponent } from './maintance/tabs/key-process/kantor-pusat/kantor-pusat.component';
import { JaringanComponent } from './maintance/tabs/key-process/jaringan/jaringan.component';
import { KantorPusatKeyRiskComponent } from './maintance/tabs/key-risk/kantor-pusat-key-risk/kantor-pusat-key-risk.component';
import { JaringanKeyRiskComponent } from './maintance/tabs/key-risk/jaringan-key-risk/jaringan-key-risk.component';
import { AosmComponent } from './aosm/aosm.component';
import { ModalAdjustmentComponent } from './aosm/modal-adjustment/modal-adjustment.component';
import { ModalViewComponent } from './aosm/modal-view/modal-view.component';
import { ReportComponent } from './aosm/report/report.component';
import { addRcsa } from './maintance/tabs/risk-library/risk-library.component';
import {
  DataTableGroupHeadRcsa,
  GroupHeadRcsaComponent,
} from './group-head-rcsa/group-head-rcsa.component';
import { AreaSegmenManagerComponent } from './area-segmen-manager/area-segmen-manager.component';
import { AmComponent } from './am/am.component';
import { AbcsComponent } from './abcs/abcs.component';
import { OdComponent } from './od/od.component';
import {
  DataTableDeptHeadRcsa,
  DeptHeadComponent,
} from './dept-head-rcsa/dept-head-rcsa.component';
import { RbcmComponent } from './rbcm/rbcm.component';
import { SorhRcsaComponent } from './sorh-rcsa/sorh-rcsa.component';
import { OfficerSegmenComponent } from './officer-segmen/officer-segmen.component';
import { addKeyControl } from './maintance/maintance.component';
import { AddRiskIssue } from './maintance/modals/add-risk-issue/add-risk-issue.component';
import { SubmitPeriodePengisianRcsa } from './maintance/maintance.component';
import { EditGroup } from 'src/app/component/rcsa/userManagement/edit-group.component';
import { EditUser } from 'src/app/component/rcsa/userManagement/edit-users.component';
import { EditDirektorate } from 'src/app/component/rcsa/userManagement/edit-directorat.component';
import { AddUser } from 'src/app/component/rcsa/userManagement/add-users.component';
import { AddRole } from 'src/app/component/rcsa/userManagement/add-roles.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddDirektorate } from 'src/app/component/rcsa/userManagement/add-directorate.component';
import { AddGroup } from 'src/app/component/rcsa/userManagement/add-group.component';
import { UserRegionComponent } from './user-management/tabs/user-region/user-region.component';
import { UserAreaComponent } from './user-management/tabs/user-area/user-area.component';
import { UserCabangComponent } from './user-management/tabs/user-cabang/user-cabang.component';
import { UserSegmenComponent } from './user-management/tabs/user-segmen/user-segmen.component';
import { EditDelegateUser } from 'src/app/component/rcsa/userManagement/edit-delegate-user.component';
import { AdddelegateUser } from 'src/app/component/rcsa/userManagement/add-delegate-user.component';
import { KeyControlComponent } from './maintance/tabs/key-control/key-control.component';
import { KetentuanComponent } from './maintance/tabs/ketentuan/ketentuan.component';
import { SorhRcsaKantorPusatComponent } from './sorh-rcsa/tabs/sorh-rcsa-kantor-pusat/sorh-rcsa-kantor-pusat.component';
import { SorhRcsaJaringanComponent } from './sorh-rcsa/tabs/sorh-rcsa-jaringan/sorh-rcsa-jaringan.component';
import { addKeyRisk } from 'src/app/shared/components/class/rcsa/maintenance/key-risk/kantor-pusat/addKeyRiskKantorPusat';
import {
  ApprovedDialog,
  DcorDialogComponent,
  DcorHeadRcsaComponent, RejectedDialog,
} from './dcor-head-rcsa/dcor-head-rcsa.component';
import { DialogElementsExampleDialog } from './maintance/tabs/rating-composite/rating-composite.component';
import { RatingCompositeComponent } from './maintance/tabs/rating-composite/rating-composite.component';
import { DialogOverviewExampleDialog } from './maintance/tabs/ihrr/ihrr.component';
import { IhrrComponent } from './maintance/tabs/ihrr/ihrr.component';
import { LikeHoodComponent } from './maintance/tabs/like-hood/like-hood.component';
import { AddFileComponent } from './maintance/tabs/risk-library/add-file/add-file.component';
import { SettingTopRiskComponent } from './maintance/tabs/setting-top-risk/setting-top-risk.component';
import { LetComponent } from './maintance/tabs/let/let.component';
import { TopRiskComponent } from './maintance/tabs/top-risk/top-risk.component';
import { RiskLibraryComponent } from './maintance/tabs/risk-library/risk-library.component';
import {
  SearchFIlterpipeMulti,
  SearchFIlterpipe,
} from 'src/app/utils/search-filter.pipe';
import {
  ImpactComponent,
  SettingImpact,
} from './maintance/tabs/impact/impact.component';
import {
  ControlComponent,
  SettingControl,
} from './maintance/tabs/control/control.component';
import { UserDepartmentComponent } from './user-management/tabs/unit-kerja/kantor-pusat/department/department.component';
import { DirectorateComponent } from './user-management/tabs/unit-kerja/kantor-pusat/directorate/directorate.component';
import { GroupComponent } from './user-management/tabs/unit-kerja/kantor-pusat/group/group.component';
import { RiskAssessmentComponent } from './dept-head-rcsa/modals/risk-assessment/risk-assessment.component';
import {FormsModule} from '@angular/forms';
import { RejectedNoteComponent } from './modals/rejected-note/rejected-note.component';

@NgModule({
  declarations: [
    addKeyRisk,
    SearchFIlterpipe,
    SearchFIlterpipeMulti,
    RejectedDialog,
    EditUser,
    EditGroup,
    EditDirektorate,
    EditDelegateUser,
    AddUser,
    AddRole,
    AddGroup,
    AddDirektorate,
    AdddelegateUser,
    UserManagementComponent,
    MaintanceComponent,
    KantorPusatComponent,
    JaringanComponent,
    KantorPusatKeyRiskComponent,
    JaringanKeyRiskComponent,
    AosmComponent,
    ModalAdjustmentComponent,
    ModalViewComponent,
    ReportComponent,
    addKeyControl,
    addRcsa,
    AddRiskIssue,
    SubmitPeriodePengisianRcsa,
    GroupHeadRcsaComponent,
    AreaSegmenManagerComponent,
    AmComponent,
    AbcsComponent,
    OdComponent,
    DeptHeadComponent,
    RbcmComponent,
    SorhRcsaComponent,
    OfficerSegmenComponent,
    UserDepartmentComponent,
    TopRiskComponent,
    RiskLibraryComponent,
    UserRegionComponent,
    UserAreaComponent,
    UserCabangComponent,
    UserSegmenComponent,
    KeyControlComponent,
    KetentuanComponent,
    RiskLibraryComponent,
    LetComponent,
    SettingTopRiskComponent,
    AddFileComponent,
    LikeHoodComponent,
    IhrrComponent,
    DialogOverviewExampleDialog,
    RatingCompositeComponent,
    DialogElementsExampleDialog,
    SorhRcsaKantorPusatComponent,
    SorhRcsaJaringanComponent,
    DcorHeadRcsaComponent,
    ImpactComponent,
    SettingImpact,
    ControlComponent,
    SettingControl,
    DcorDialogComponent,
    DataTableGroupHeadRcsa,
    DataTableDeptHeadRcsa,
    DirectorateComponent,
    GroupComponent,
    RiskAssessmentComponent,
    RejectedNoteComponent,
    ApprovedDialog,
  ],
  imports: [
    CommonModule,
    RcsaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
  ],
})
export class RcsaModule {}
