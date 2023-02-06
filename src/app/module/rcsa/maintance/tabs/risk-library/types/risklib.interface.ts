export interface RiskLibraryInterface {
    id: number;
    currentStatus: string;
    detailRiskLib: any[];
    quarter: string;
    id_group: number;
    group_name: string;
    periode: number;
    tanggal_mulai: string;
    tanggal_selesai: string;
}

export interface RiskLibraryFilterInterface {
    page: number;
    size: number;
    quarter: string;
    yearOf: string;
    group: string;
}



