import { IKeyControl } from "../rcsa/key-control/keyControl"

export interface IDetailsKeyrisk {
  keyprocess: string
  keyriskissue: string
  keyControl: object
  ketentuan: string
  deskripsi: string
}

export interface IRiskLibrary{
  id: number
  unit : string
  segmentgroup : string
  status : string
  periode : string
  tanggalMulai : string
  tanggalAkhir : string
  detail : IDetailsKeyrisk[]
}
