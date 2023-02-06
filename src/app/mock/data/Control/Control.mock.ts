import { IControl } from "src/app/models/rcsa/Control/Control.model";

export const ControlMock: IControl[] = [
    {
        id : 1,
        Rating : "STRONG",
        Score : 1,
        Status : "APPROVED",
        Details : {
            Deskripsi : "Manajemen risiko dan proses kontrol memadai di seluruh aspek material dlm hal kecukupan (adequacy) , efektifitas (effectiveness) dan keberlanjutan (sustainability). Unit kerja telah beroperasi pd level dimana kontrol telah memadai utk risiko operasional.",
            Uraian : "Internal Control sangat efektif. Ditunjukkan dengan: adanya kebijakan/peraturan yang memadai, petugas melaksanakan aktivitas sesuai dengan kebijakan/prosedur, pengawasan atasan optimal, dalam 5 tahun terakhir tidak terjadi kerugian akibat kegiatan operasional rutin unit kerja.",
            Sequence : 1
        }
    },
    {
        id : 2,
        Rating : "SATISFACTORY",
        Score : 2,
        Status : "APPROVED",
        Details : {
            Deskripsi : "Manajemen risiko dan proses kontrol memadai di banyak aspek material dlm hal kecukupan (adequacy) , efektifitas (effectiveness) dan keberlanjutan (sustainability). Namun dibutuhkan perbaikan spesifik dalam jumlah terbatas (limited).",
            Uraian : "Internal Control efektif dan terdapat beberapa kelemahan yang bersifat minor. Ditunjukkan dengan: adanya kebijakan/prosedur yang memadai, petugas melaksanakan aktivitas sesuai dengan kebijakan/prosedur, pengawasan atasan optimal, dalam 3 tahun terakhir tidak terjadi kerugian akibat kegiatan operasional rutin unit kerja.",
            Sequence : 2
        }
    },
    {
        id : 3,
        Rating : "FAIR",
        Score : 3,
        Status : "APPROVED",
        Details : {
            Deskripsi : "Manajemen risiko dan proses kontrol memadai di banyak aspek material dlm hal kecukupan (adequacy) , efektifitas (effectiveness) dan keberlanjutan (sustainability). Namun dibutuhkan perbaikan spesifik dalam jumlah memadai (moderate).",
            Uraian : "Internal Control cukup efektif dan terdapat beberapa kelemahan yang memerlukan perhatian dalam jangka pendek. Ditunjukkan dengan : adanya kebijakan/prosedur yang memadai, petugas belum melaksanakan aktivitas sesuai kebijakan/prosedur namun pengawasan atasan cukup optimal atau, petugas melaksanakan aktivitas sesuai kebijakan/prosedur namun pengawasan atasan belum optimal, dalam 1 tahun terakhir tidak terjadi kerugian akibat kegiatan operasional rutin unit kerja.",
            Sequence : 3
        }
    },
    {
        id : 4,
        Rating : "MARGINAL",
        Score : 4,
        Status : "APPROVED",
        Details : {
            Deskripsi : "Manajemen risiko dan proses kontrol memadai di banyak aspek material dlm hal kecukupan (adequacy) , efektifitas (effectiveness) dan keberlanjutan (sustainability). Namun dibutuhkan perbaikan spesifik dalam jumlah yang cukup berarti (signifikan) dan/atau terdapat hambatan/kemacetan pada suatu proses bisnis.",
            Uraian : "Internal Control belum efektif yang mengakibatkan timbulnya permasalahan serius. Ditunjukkan dengan: ketersediaan kebijakan/prosedur belum memadai, petugas belum melaksanakan aktivitas sesuai kebijakan/prosedur, pengawasan atasan tidak optimal, terjadi kerugian akibat kegiatan operasional rutin unit kerja dalam 1 tahun terakhir.",
            Sequence : 4
        }
    },
    {
        id : 5,
        Rating : "UNSATISFACTORY",
        Score : 5,
        Status : "APPROVED",
        Details : {
            Deskripsi : "Manajemen risiko dan proses kontrol tidak memadai di banyak aspek material dalam hal kecukupan (adequacy) , efektifitas (effectiveness) dan keberlanjutan (sustainability). Internal kontrol tidak efektif",
            Uraian : "Internal Control tidak efektif sehingga mengakibatkan situasi tidak aman dan tidak sehat. Ditunjukkan dengan: ketersediaan kebijakan/prosedur tidak memadai, petugas tidak melaksanakan aktivitas sesuai kebijakan/prosedur, pengawasan atasan tidak optimal, terjadi kerugian akibat kegiatan operasional rutin unit kerja dalam 3 bulan terakhir.",
            Sequence : 5
        }
    },
]