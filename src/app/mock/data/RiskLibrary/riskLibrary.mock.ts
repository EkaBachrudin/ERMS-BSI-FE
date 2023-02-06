import { IRiskLibrary } from 'src/app/models/riskLibrary/riskLibrary.model';
import { IKeyRisk } from '../../../models/rcsa/key-risk/keyRisk';

export const RiskLibraryMock: IRiskLibrary[] = [
  {
    id: 1,
    unit: 'Jaringan',
    segmentgroup: 'Oprasional Cabang',
    status: 'APPROVED',
    periode: 'Q2',
    tanggalMulai: '-',
    tanggalAkhir: '-',
    detail: [
      {
        keyprocess: 'ERM Tools & Analytics',
        keyriskissue: 'Kesalahan penetapan metodologi/model risk tools',
        keyControl: [
          {
            name: "Memastikan informasi/dokumen berasal dari sumber yang terpercaya (regulator, konsultan ternama, perguruan tinggi terakreditasi A)"
          },
          {
            name: "Memastikan data yang digunakan untuk pengembangan metodologi/model/parameter akurat dan berkualitas."
          },
          {
            name: "Melakukan tahapan pembuatan/pengembangan/penetapan model/parameter sesuai dengan sumber terpercaya."
          }
        ],
        ketentuan: 'SPP',
        deskripsi: 'SOP Penggunaan  Aplikasi',
      },
    ],
  },
];
