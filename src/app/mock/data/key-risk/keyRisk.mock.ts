import { IKeyRisk } from 'src/app/models/rcsa/key-risk/keyRisk';

export const KeyRiskmock: IKeyRisk[] = [
  {
    group: 'Operasional',
    keyPro: 'Pengelolaan user id & Password Transaksi',
    keyRisk:
      'Risiko penyalahgunaan user ID dan password transaksi oleh pihak yang tidak berhak',
    lostEventType: [
      {
        id: 1,
        name: 'Kecurangan_Internal',
        let2: [
          {
            id: 1,
            name: 'Aktivitas_tidak_sah',
            let3: [
              {
                id: 1,
                name: 'Petugas melakukan pembaruan password',
              },
            ],
          },
        ],
      },
    ],
    keyControl: [
      {
        name: 'Branch Manager memonitor pegawai rotasi/mutasi/resign untuk diajukan penonaktifan user ID',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
    ],
    status: 'APPROVED',
    id: 1,
  },
  {
    group: 'OPR',
    keyPro: 'ERM Tools & Analytics',
    keyRisk: 'Kesalahan penetapan metodologi/model risk tools',
    lostEventType: [
      {
        id: 1,
        name: 'Gangguan_aktivitas_bisnis_dan_kegagalan_sistem',
        let2: [
          {
            id: 1,
            name: 'Aktivitas_tidak_sah',
            let3: [
              {
                id: 1,
                name: 'Lainnya',
              },
            ],
          },
        ],
      },
    ],
    keyControl: [
      {
        name: 'Memastikan informasi/dokumen berasal dari sumber yang terpercaya (regulator, konsultan ternama, perguruan tinggi terakreditasi A)',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
      {
        name: 'Memastikan data yang digunakan untuk pengembangan metodologi/model/parameter akurat dan berkualitas.',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
      {
        name: 'Melakukan tahapan pembuatan/pengembangan/penetapan model/parameter sesuai dengan sumber terpercaya.',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
    ],
    status: 'APPROVED',
    id: 1,
  },
  {
    group: 'OPR',
    keyPro: 'ERM Tools & Analytics',
    keyRisk: 'Kesalahan memberikan rekomendasi, review, dan kajian pengelolaan',
    lostEventType: [
      {
        id: 1,
        name: 'Klien produk dan praktik bisnis',
        let2: [
          {
            id: 1,
            name: 'Kegiatan advisory',
            let3: [
              {
                id: 1,
                name: 'Lainnya',
              },
            ],
          },
        ],
      },
    ],
    keyControl: [
      {
        name: 'Memastikan data yang digunakan untuk pemberian rekomendasi/kajian pengelolaan risiko akurat.',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
      {
        name: 'Memastikan informasi/dokumen tambahan berasal dari sumber yang terpercaya (regulator, konsultan ternama, perguruan tinggi terakreditasi A, perusahaan berperingkat investment grade).',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
      {
        name: 'Memeriksa dan melakukan koordinasi atas kebenaran/akurasi data/informasi kepada unit kerja terkait.',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
      {
        name: 'Melakukan proses maker-cheker-approval dalam pembuatan rekomendasi/kajian pengelolaan risiko.',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
    ],
    status: 'APPROVED',
    id: 1,
  },
  {
    group: 'OPR',
    keyPro: 'ERM Tools & Analytics',
    keyRisk: 'Kesalahan memberikan rekomendasi, review, dan kajian pengelolaan',
    lostEventType: [
      {
        id: 1,
        name: 'Klien produk dan praktik bisnis',
        let2: [
          {
            id: 1,
            name: 'Kegiatan advisory',
            let3: [
              {
                id: 1,
                name: 'Lainnya',
              },
            ],
          },
        ],
      },
    ],
    keyControl: [
      {
        name: 'Memastikan data yang digunakan untuk pemberian rekomendasi/kajian pengelolaan risiko akurat.',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
      {
        name: 'Memastikan informasi/dokumen tambahan berasal dari sumber yang terpercaya (regulator, konsultan ternama, perguruan tinggi terakreditasi A, perusahaan berperingkat investment grade).',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
      {
        name: 'Memeriksa dan melakukan koordinasi atas kebenaran/akurasi data/informasi kepada unit kerja terkait.',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
      {
        name: 'Melakukan proses maker-cheker-approval dalam pembuatan rekomendasi/kajian pengelolaan risiko.',
        unit: '',
        group: '',
        keyPro: '',
        keyRisk: '',
        keyControl: [],
        ketentuan: [
          {
            ketentuan: 'SPP',
            deskripsi: [
              {
                name: 'SOP Penggunaan  Aplikasi',
              },
            ],
            status: '',
            id: 1,
          },
        ],
        nameKet: '',
        status: '',
        id: 1,
      },
    ],
    status: 'APPROVED',
    id: 1,
  },
];
