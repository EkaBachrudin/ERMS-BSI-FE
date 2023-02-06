import { IKetentuan } from 'src/app/models/rcsa/ketentuan/ketentuan';

export const KetentuanMock: IKetentuan[] = [
  {
    ketentuan: 'SPP',
    deskripsi: [
      {
        name: 'Branch Manager memonitor pegawai rotasi/mutasi/resign untuk diajukan penonaktifan user ID',
      },
      {
        name: 'Setiap pegawai menjaga PC dalam keadaan sign out ketika sedang tidak digunakan (system secara otomatis me-log off user ID dalam jangka waktu tertentu',
      },
      {
        name: 'Petugas melakukan pembaharuan password secara berkala',
      },
    ],
    status: 'APPROVED',
    id: 1,
  },
  {
    ketentuan: 'Direktorat Manajemen Risiko',
    deskripsi: [
      {
        name: 'Branch Manager memonitor pegawai rotasi/mutasi/resign untuk diajukan penonaktifan user ID',
      },
      {
        name: 'Setiap pegawai menjaga PC dalam keadaan sign out ketika sedang tidak digunakan (system secara otomatis me-log off user ID dalam jangka waktu tertentu',
      },
      {
        name: 'Petugas melakukan pembaharuan password secara berkala',
      },
    ],
    status: 'APPROVED',
    id: 2,
  },
];
