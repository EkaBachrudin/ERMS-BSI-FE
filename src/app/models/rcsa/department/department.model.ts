export interface IDepartment {
  department: string;
  group: string;
  directorat: string;
  status: String  
  id: number;
}

export class Department {
  constructor(
    public department: string,
    public group: string,
    public directorat: string,
    public status: string,
    public id: number
  ) {}
}

