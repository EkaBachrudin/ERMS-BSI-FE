export interface Roles {
    currentStatus: string
    rolesInitial: string
    modul: string
    id: number
    rolesPermission: RolesPermission
  }
  
  export interface RolesPermission {
    rolesName: string
    permission: Permission[]
  }
  
  export interface Permission {
    path: string
    service: string
    name: string
    id: number
  }
  