import { ILikeHood } from 'src/app/models/rcsa/LikeHood/LikeHood';

export const LikeHoodMock: ILikeHood[] = [
    {
        id: 1,
        Score: "Kecil Kemungkinan/Rare",
        PeriodeKejadian: "Kemungkinan dapat terjadi > 1 tahun",
        Status: "APPROVED"
    },
    {
        id: 2,
        Score: "Jarang/Rare",
        PeriodeKejadian: "Kemungkinan dapat terjadi > 6 Bulan dan < 1 Tahun",
        Status: "APPROVED"
    },
    {
        id: 3,
        Score: "Kadang-kadang/Sometime",
        PeriodeKejadian: "Kemungkinan dapat terjadi > 3 Bulan dan < 6 Bulan",
        Status: "APPROVED"
    },
    {
        id: 4,
        Score: "Sering/Often",
        PeriodeKejadian: "Kemungkinan dapat terjadi > 1 Bulan dan < 3 Bulan",
        Status: "APPROVED"
    },
    {
        id: 5,
        Score: "Sangat Sering/Very Often",
        PeriodeKejadian: "Kemungkinan dapat terjadi < 1 Bulan",
        Status: "APPROVED"
        
    }
];