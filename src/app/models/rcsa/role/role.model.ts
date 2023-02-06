import {keyControl} from "../key-control/keyControl";

export interface IPermission {
  name: string;
  module: string;
}


export class Permission {
  constructor(public name: string, public module: string) {}
}

export interface IRole {
  id: number;
  name: string;
  unit: string;
  directorat: string;
  group: string;
  review: string;
  // permission: [IPermission];
}

export class Role {
  constructor(
    public id: number,
    public name: string,
    public unit: string,
    public directorat: string,
    public group: string,
    public review: string // public permission: [IPermission]
  ) {}
}
