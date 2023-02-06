export interface DescriptionItem {
    idDesc: number;
    description: string;
}

export interface RcsaDraft {
    currentStatus: string;
    idGroup: number;
    quarter: string;
    periode: number;
    tanggal_selesai: string;
    group_name: string;
    tanggal_mulai: string;
}

export interface TopRiskInterface {
    let1: string;
    let2: string;
    keycontrol: string;
    descriptionItem: DescriptionItem[];
    ketentuan: string;
    ihrr: number;
    likelihood: number;
    impact: number;
    control: number;
    rating: number;
    keyrisk: string;
    keyprocess: string;
    rcsaDraft: RcsaDraft;
    id: number;
}