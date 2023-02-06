import { ILostEventType } from 'src/app/models/rcsa/let/let';

export const letMock: ILostEventType[] = [
  {
    id: 1,
    name: 'Gangguan aktivitas bisnis dan kegagalan sistem',
    let2: [
      {
        id: 1,
        name: 'Sistem',
        let3: [
          {
            id: 1,
            name: 'Lainnya',
          },
        ],
      },
    ],
  },
  {
    id: 2,
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
  {
    id: 3,
    name: 'Manajemen pelaksanaan pengiriman dan pemrosesan',
    let2: [
      {
        id: 1,
        name: 'Pemantauan dan pelaporan',
        let3: [
          {
            id: 1,
            name: 'Lainnya',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Manajemen pelaksanaan pengiriman dan pemrosesan',
    let2: [
      {
        id: 1,
        name: 'Pemantauan dan pelaporan',
        let3: [
          {
            id: 1,
            name: 'Lainnya',
          },
        ],
      },
    ],
  },
];
