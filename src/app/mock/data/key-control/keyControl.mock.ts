import { IKeyControl } from 'src/app/models/rcsa/key-control/keyControl';

export const KeyControlMock: IKeyControl[] = [
  {
    name: '',
    unit: 'Kantor Pusat',
    group: '',
    keyPro: '',
    keyRisk: 'Kesalahan penetapan metodologi/model risk tools',
    keyControl: [
      {
        name: 'Memastikan informasi/dokumen berasal dari sumber yang terpercaya (regulator, konsultan ternama, perguruan tinggi terakreditasi A).',
      },
      {
        name: 'Memastikan data yang digunakan untuk pengembangan metodologi/model/parameter akurat dan berkualitas',
      },
      {
        name: 'Melakukan tahapan pembuatan/pengembangan/penetapan model/parameter sesuai dengan sumber terpercaya.',
      },
    ],
    ketentuan: [],
    nameKet: '',
    status: 'APPROVED',
    id: 1,
  },
  {
    name: '',
    unit: 'Kantor Pusat',
    group: '',
    keyPro: '',
    keyRisk: 'Kesalahan memberikan rekomendasi, review, dan kajian pengelolaan',
    keyControl: [
      {
        name: 'Memastikan data yang digunakan untuk pemberian rekomendasi/kajian pengelolaan risiko akurat.',
      },
      {
        name: 'Memastikan informasi/dokumen tambahan berasal dari sumber yang terpercaya (regulator, konsultan ternama, perguruan tinggi terakreditasi A, perusahaan berperingkat investment grade)',
      },
      {
        name: 'Memeriksa dan melakukan koordinasi atas kebenaran/akurasi data/informasi kepada unit kerja terkait.',
      },
      {
        name: 'Melakukan proses maker-cheker-approval dalam pembuatan rekomendasi/kajian pengelolaan risiko.',
      },
    ],
    ketentuan: [],
    nameKet: '',
    status: 'APPROVED',
    id: 1,
  },
  {
    name: '',
    unit: 'Kantor Pusat',
    group: '',
    keyPro: '',
    keyRisk: 'Kesalahan pemantauan ATMR Pembiayaan',
    keyControl: [
      {
        name: ' Memastikan data yang digunakan untuk pemantauan ATMR pembiayaan akurat',
      },
      {
        name: 'Memeriksa dan melakukan verifikasi atas kebenaran/akurasi data kepada unit kerja terkait',
      },
      {
        name: 'Melakukan proses maker-cheker-approval dalam pemantauan ATMR pembiayaan',
      },
    ],
    ketentuan: [],
    nameKet: '',
    status: 'APPROVED',
    id: 1,
  },
  {
    name: '',
    unit: 'Kantor Pusat',
    group: '',
    keyPro: '',
    keyRisk: 'Kesalahan dalam penyusunan KPMM sesuai profil',
    keyControl: [
      {
        name: ' Memeriksa dan melakukan verifikasi atas kebenaran/akurasi data kepada unit kerja terkait ',
      },
      {
        name: 'Melakukan proses maker-cheker-approval dalam penyusunan KPMM.',
      },
    ],
    ketentuan: [],
    nameKet: '',
    status: 'APPROVED',
    id: 1,
  },
];
