export interface UserInterface {
  jabatan: string
  rolesDetails: RolesDetail[]
  organitation: Organitation
  name: string
  rcsaRoles: any
  id: number
  idGroup: any
  status: number
}

export interface RolesDetail {
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

export interface Organitation {
  id: number
  review: string
  name: string
  directorat_name: string
  call_sign: string
  department: Department[]
  directorat_id: number
}

export interface Department {
  review: string
  name: string
  id: number
}

