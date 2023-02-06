export interface ITopRisk {
    id: number;
    UnitKerja : string;
    Regional : string;
    Area : string;
    Segment : string;
    KeyRisk : string;
    Ihrr : string;
    Control : string;
    Composite : string;
    Periode : string;
}

export class TopRisk implements ITopRisk {
    constructor(
        public id: number,
        public UnitKerja : string,
        public Regional : string,
        public Area : string,
        public Segment : string,
        public KeyRisk : string,
        public Ihrr : string,
        public Control : string,
        public Composite : string,
        public Periode : string,
    ) {}
}