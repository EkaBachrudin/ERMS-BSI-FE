export interface IDcor {
    Group : string;
    Ihrr : string;
    Control : string;
    Composite : string;
    Periode : string;
    Status : string;
    ihrrAvg : number;
    controlAvg : number;
    compositeAvg : number;
    Details : Details[]
}

export interface Details {
    KeyProses: string,
    KeyRiskIssue: string,
    KeyControl:string,
    Ketentuan: string,
    Deskripsi: string,
    Ihrr: number,
    Control: number,
    Composite: number
}

export class Dcor {
    constructor(
        public Group : string,
        public Ihrr : string,
        public Control : string,
        public Composite : string,
        public Periode : string,
        public Status : string,
        public Details : object
    ){}
}