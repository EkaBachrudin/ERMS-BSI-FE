import { Injectable } from '@angular/core';
import { IDirectorate } from 'src/app/models/rcsa/directorate/directorate.model';
import { UserManagementService } from 'src/app/service/rcsa/user-management.service';
import { DirectorateMock } from '../../data/directorat/directorat.mock';
@Injectable({ providedIn: 'root' })
export class DirectorateService {
  constructor(private usermangementsevice: UserManagementService) {}
  getDirectorat = () => {
    return DirectorateMock;
  };
}
