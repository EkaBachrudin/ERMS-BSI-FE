import { IImpact } from "src/app/models/rcsa/Impact/Impact.model";

export const ImpactMock: IImpact[] = [
    {
        id: 1,
        Rating: "Insignificant",
        Score: "1",
        Status: "APPROVED",
        Detail: {
            Financial : "·≤ 0,05% dari gross income & ·≤100 Jt",
            Reputational : "Tidak ada pemberitaan bersifat negatif/ sensitif di media",
            RegulatoryCompliance : "Tidak berdampak",
            Legal : "Tidak berdampak",
            Staff : "Tidak berdampak",
            Kriminal : "Tidak berdampak",
            CustomerService : "Dampak gangguan layanan tidak berpengaruh pada Nasabah atau Nasabah tidak menyadari adanya gangguan layanan",
            Sequence : "1",
        }
    },
    {
        id: 2,
        Rating: "Minor",
        Score: "2",
        Status: "APPROVED",
        Detail: {
            Financial : "·> 0,05% sd 0,18% dari gross income ·>100 Jt & sd 300 Jt",
            Reputational : "Keluhan Nasabah di media dan/atau pemberitaan terlokalisir serta tidak mendapat perhatian publik (tidak berlanjut ke media lain",
            RegulatoryCompliance : "Tindakan regulator berdampak kecil pada bank, seperti peringatan secara verbal. & (Small fine)",
            Legal : "Kemungkinan terjadinya kasus hukum",
            Staff : "Adanya potensi cedera ringan",
            Kriminal : "Terdapat percobaan akses illegal pada sistem operasional, terdapat sedikit kebocoran informasi yang masih dapat ditolerir",
            CustomerService : "Beberapa Nasabah sadar terjadinya gangguan layanan tetapi dampak dari gangguan layanan tersebut dapat diabaikan.",
            Sequence : "2",
        }
    },
    {
        id: 3,
        Rating: "Moderate",
        Score: "3",
        Status: "APPROVED",
        Detail: {
            Financial : "·> 0,18% sd 0,45% dari gross income & ·> 300 Jt sd 500 Jt",
            Reputational : "Artikel kritis pada media",
            RegulatoryCompliance : "Berpotensi teguran tertulis dari regulator dan dampak lainnya (multiple impacts)",
            Legal : "Terjadinya kasus hukum dengan adanya potensi bahwa putusan akan mengalahkan bank",
            Staff : "Cedera memerlukan tindakan di rumah sakit untuk lebih dari satu staf.",
            Kriminal : "Kebobolan sistem operasional baik secara logical maupun physical",
            CustomerService : "Jumlah Nasabah yang menyadari terjadinya gangguan layanan cukup besar dan menyebabkan beberapa ketidaknyamanan pada nasabah",
            Sequence : "3",
        }
    },
    {
        id: 4,
        Rating: "Significant",
        Score: "4",
        Status: "APPROVED",
        Detail: {
            Financial : "·> 0,45% sd 0,73% dari gross income & ·> 500 Jt s/d 3 M",
            Reputational : "Pemberitaan utama pada media ≥ 1 hari atau sudah menyebar di lebih dari 3 kanal media sosial utama atau kritik yang disampaikan secara terbuka dari regulator atau organisasi perbankan",
            RegulatoryCompliance : "Tindakan regulator memiliki dampak negatif yang serius dan mempengaruhi strategi bisnis dan operasional bank",
            Legal : "Terjadinya kasus hukum dengan adanya potensi besar bahwa putusan akan mengalahkan bank",
            Staff : "Cedera berat dan berpotensi mematikan.",
            Kriminal : "Dilakukan investigasi oleh polisi; membahayakan data operasional atau sistem kontrol",
            CustomerService : "Gangguan layanan berkepanjangan hingga 24 jam",
            Sequence : "4",
        }
    },
    {
        id: 5,
        Rating: "Major to Catastropic",
        Score: "5",
        Status: "APPROVED",
        Detail: {
            Financial : "·> 0,73% dari gross income & ·> 3 M",
            Reputational : "Pemberitaan negatif yang sudah menyebar di media utama maupun media sosial dan mendapat respon yang tinggi dari publik",
            RegulatoryCompliance : "Tindakan regulator dapat mengakibatkan pencabutan kegiatan usaha bank",
            Legal : "Adanya proses peradilan class action terhadap bank atas pelanggaran besar",
            Staff : "Kematian dan/atau efek besar terhadap kehidupan staff.",
            Kriminal : "Terjadinya penipuan besar; tuntutan terhadap bank karena kegagalan sistem yang signifikan dan benar-benar membahayakan",
            CustomerService : "Sebagian besar Nasabah terkena dampak gangguan layanan yang menyebabkan ketidaknyamanan.",
            Sequence : "5",
        }
    }
]