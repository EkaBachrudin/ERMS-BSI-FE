import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  AfterContentInit,
  Injectable,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UserManagementService } from 'src/app/service/rcsa/user-management.service';
import { TabsetConfig } from 'ngx-bootstrap/tabs';
import { getTabsetConfig } from 'src/app/utils/helpers';
import { AdddelegateUser } from 'src/app/component/rcsa/userManagement/add-delegate-user.component';
import { AddRole } from 'src/app/component/rcsa/userManagement/add-roles.component';
import { EditUser } from 'src/app/component/rcsa/userManagement/edit-users.component';
import { AddUser } from 'src/app/component/rcsa/userManagement/add-users.component';
import { AppState } from 'src/app/state/app.state';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { roleFetchStart } from 'src/app/state/store/actions/rcsa/role.action';
import { userFetchStart } from 'src/app/state/store/actions/user/user.action';
import { userDelegateFetchStart } from 'src/app/state/store/actions/userDelegate/userDelegate.action';
import { EditDelegateUser } from 'src/app/component/rcsa/userManagement/edit-delegate-user.component';
import { requestPagination } from 'src/app/shared/components/Interface/PaginationFilter.interface';
import { AddGroup } from 'src/app/component/rcsa/userManagement/add-group.component';
import { EditGroup } from 'src/app/component/rcsa/userManagement/edit-group.component';
import { EditDirektorate } from 'src/app/component/rcsa/userManagement/edit-directorat.component';
import { directorateFetchStart } from 'src/app/state/store/actions/rcsa/directorate.action';
import { DirectorateFilterInterface } from './types/directorate.interface';
import { groupFetchStart } from 'src/app/state/store/actions/rcsa/group.action';
import { departmentFetchStart } from 'src/app/state/store/actions/rcsa/department.action';
import role from "./types/role.json"


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }],
})
export class UserManagementComponent implements OnInit, AfterContentInit {
  userPaginationSetting: requestPagination = {
    page: 0,
    size: 10
  }
  rolePaginationSetting: requestPagination = {
    page: 0,
    size: 10
  }
  totalPage = {
    role: 0,
    user: 0,
  }
  currentPage = {
    role: 0,
    user: 0,
  }
  pageSize = {
    role: 10,
    user: 10,
  }

  directoratePaginationSetting: DirectorateFilterInterface = {
    id: '',
    page: 0,
    size: 5,
  }
  searchText: string;
  @Input() TabTable = 'direktor';
  isApprover = localStorage.getItem('role') === 'spv';
  statusApprove = 'APPROVED';
  statusReject = 'REJECTED';
  panelOpenState = false;

  departmentUser = false;
  direktoratUser = true;
  group = false;
  region = false;
  area = false;
  cabang = false;
  segmen = false;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  rowsGroup: any = [];

  rows: any = [];
  rowsRole: any = role;
  rowsUser: any = [];
  rowsUserDelegate: any = [];
  dataUpdateDir: any = [];
  subscription: Subscription;
  rcsaDataId: any[] = [];

  directorateTotalRow: [];
  groupTotalRow: []
  departmentTotalRow: [] = []

  constructor(
    public dialogRole: MatDialog,
    public dialogUser: MatDialog,
    public editdialogDirektorate: MatDialog,
    public dialogDelegateUser: MatDialog,
    public editdialogDelegateuser: MatDialog,
    public dialogGroup: MatDialog,
    private userManagemetService: UserManagementService,
    private Store: Store<AppState>
  ) {}
  doSomething(event: any) {
  }
  //get data role
  getAllDataRole() {
    this.userManagemetService.getDataRole().subscribe({
      next: (res) => {
        this.rowsRole = res;
      },
    });
  }

  //get data user
  getAllDataUser() {
    this.userManagemetService.getDataUser().subscribe({
      next: (res) => {
        this.rowsUser = res;
      },
    });
  }

  approve(row: any, status: any) {
    row.review = status;
  }
  editdirektorat(row: any) {
    this.editdialogDirektorate.open(EditDirektorate, {
      data: {
        row,
      },
    });
  }
  deleteDirektorat(row: any) { }
  //grup/division modal action
  groupdialog() {
    this.dialogGroup.open(AddGroup);
  }
  editgroup(item: any) {
    this.editdialogDirektorate.open(EditGroup, {
      data: {
        item,
      },
    });
  }
  deleteGroup(item: any) { }

  //rode modal ation
  role() {
    this.dialogRole.open(AddRole);
  }
  //user modal action
  user() {
    this.dialogUser.open(AddUser);
  }
  edituser(item: any) {
    this.dialogUser.open(EditUser, {
      data: {
        item,
      },
    });
  }
  delegateUser() {
    this.dialogDelegateUser.open(AdddelegateUser);
  }

  editDelegateUser(item: any) {
    this.editdialogDelegateuser.open(EditDelegateUser, {
      data: {
        item,
      },
    });
  }

  // change tabs
  changeGroup() {
    document.getElementById('groupUserManagement').className = 'active';
    document.getElementById('direktoratUserManagement').className = 'nonActive';
    document.getElementById('departmentUserManagement').className = 'nonActive';
    //HIDE JARINGAN TAB
    this.group = true;
    this.direktoratUser = false;
    this.departmentUser = false;
  }
  changeDirektorat() {
    document.getElementById('groupUserManagement').className = 'nonActive';
    document.getElementById('direktoratUserManagement').className = 'active';
    document.getElementById('departmentUserManagement').className = 'nonActive';
    //HIDE JARINGAN TAB
    this.group = false;
    this.direktoratUser = true;
    this.departmentUser = false;
  }
  changeDepartment() {
    document.getElementById('groupUserManagement').className = 'nonActive';
    document.getElementById('direktoratUserManagement').className = 'nonActive';
    document.getElementById('departmentUserManagement').className = 'active';
    //HIDE JARINGAN TAB
    this.group = false;
    this.direktoratUser = false;
    this.departmentUser = true;
  }
  ngOnInit(): void {
    // this.Store.select('role')
    //   .pipe(
    //     map((RoleData: any) => {
    //       if (RoleData.role) {
    //         this.rowsRole = RoleData.role;
    //         this.totalPage.role = RoleData.totalPage;
    //         this.currentPage.role = RoleData.currentPage;
    //         this.pageSize.role = RoleData.pageSize;
    //       }
    //     })
    //   )
    //   .subscribe();
    
    this.Store.select('user')
      .pipe(
        map((UserData: any) => {
          if (UserData.user) {
            console.log(UserData)
            this.totalPage.user = UserData.totalPage;
            this.currentPage = {...this.currentPage,user : UserData.currentPage};
            this.pageSize == {...this.pageSize,user :  UserData.pageSize};
            this.rowsUser = UserData.user.map((e) => {
              return { ...e, isExpanded: false };
            });

          }
        })
      )
      .subscribe();
      this.Store.select('directorate')
      .pipe(
        map((DirectorateData: any) => {
          if (DirectorateData.directorate) {
            this.directorateTotalRow = DirectorateData.totalElements
          }
        })
      )
      .subscribe();
      this.Store.select('group')
      .pipe(
        map((GroupData: any) => {
          if (GroupData.group) {
            this.groupTotalRow = GroupData.totalElements
          }
        })
      )
      .subscribe();
      this.Store.select('department')
      .pipe(
        map((Department: any) => {
          if (Department.department) {
            this.departmentTotalRow = Department.totalElements
          }
        })
      )
      .subscribe();
  } 

  expand(id: any) {
    let a = document.getElementById(`user${id}`);
    if (a?.className === 'fa fa-chevron-down') {
      a.className = 'fa fa-chevron-up';
      this.rcsaDataId = [];
    } else {
      a!.className = 'fa fa-chevron-down';
      this.rcsaDataId = [];
    }
  }

  ngAfterContentInit() {
    this.Store.dispatch(new directorateFetchStart(0,5));
    this.Store.dispatch(new groupFetchStart(0, 5));
    this.Store.dispatch(new departmentFetchStart(0, 5));
    this.Store.dispatch(new roleFetchStart(this.rolePaginationSetting));
    this.Store.dispatch(new userFetchStart(this.userPaginationSetting));
  }

  onPageChange(event: any) {
    this.userPaginationSetting = {
      ...this.userPaginationSetting,
      page: event.pageIndex,
      size: event.pageSize
    }
    this.Store.dispatch(new userFetchStart(this.userPaginationSetting));
  }

  CardTrigger(binding: string): void {
    this.TabTable = binding;
  }
  onChangePage(event: any,type : string) {
    switch (type) {
      case 'role':
        this.rolePaginationSetting = {
          page: event.pageIndex,
          size: event.pageSize,
        };
        this.Store.dispatch(new roleFetchStart(this.rolePaginationSetting));
        break;
      case 'user':
        this.userPaginationSetting = {
          page: event.pageIndex,
          size: event.pageSize,
        };
        this.Store.dispatch(new userFetchStart(this.userPaginationSetting));
        break;
    }
  }
}
