let allVideos = [
  {
    name: "Depan FTL Fitness",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Depan_FTL_Fitness.m3u8",
    id: "vid_1",
  },
  {
    name: "Depan NGOPIBAH",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Depan_NGOPIBAH.m3u8",
    id: "vid_2",
  },
  {
    name: "Depan SMP Strada Budi luhur",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Depan_SMP_Strada_Budi_luhur.m3u8",
    id: "vid_3",
  },
  {
    name: "Flyover Cipendawa",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Flyover_Cipendawa.m3u8",
    id: "vid_4",
  },
  {
    name: "KFC DEKAT TAMAN CUT MUTIA",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/KFC_DEKAT_TAMAN_CUT_MUTIA.m3u8",
    id: "vid_5",
  },
  {
    name: "PT Fajar Mas Murni",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/PT_Fajar_Mas_Murni.m3u8",
    id: "vid_6",
  },
  {
    name: "Perempatan Caman",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Perempatan_Caman.m3u8",
    id: "vid_7",
  },
  {
    name: "Perempatan Rawa Semut",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Perempatan_Rawa_Semut.m3u8",
    id: "vid_8",
  },
  {
    name: "Putaran sumber Arta",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Putaran_sumber_Arta.m3u8",
    id: "vid_9",
  },
  {
    name: "Samping RS Mitra Keluarga",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Samping_RS_Mitra_Keluarga.m3u8",
    id: "vid_10",
  },
  {
    name: "Samping RS Primaya Bekasi",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Samping_RS_Primaya_Bekasi.m3u8",
    id: "vid_11",
  },
  {
    name: "Seberang Yonif 202",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Seberang_Yonif_202.m3u8",
    id: "vid_12",
  },
  {
    name: "Taman Kelurahan Jakasampura",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Taman_Kelurahan_Jakasampura.m3u8",
    id: "vid_13",
  },
  {
    name: "Universitas Bani Saleh",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/Universitas_Bani_Saleh.m3u8",
    id: "vid_14",
  },
  {
    name: "Lampu Merah Kranji",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_11.m3u8",
    id: "vid_15",
  },
  {
    name: "PERUMNAS 1",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_14.m3u8",
    id: "vid_16",
  },
  {
    name: "Pertigaan Pemda",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_17.m3u8",
    id: "vid_17",
  },
  {
    name: "Bawah Flyover Summarecon Bekasi",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_19.m3u8",
    id: "vid_18",
  },
  {
    name: "Bawah Flyover Putar Balik Summarecon Bekasi",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_20.m3u8",
    id: "vid_19",
  },
  {
    name: "Dari PERUMNAS 1",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_21.m3u8",
    id: "vid_20",
  },
  {
    name: "Pertigaan Kartini",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_28.m3u8",
    id: "vid_21",
  },
  {
    name: "Arah Keluar Terminal",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_30.m3u8",
    id: "vid_22",
  },
  {
    name: "Arah Dari Rawa Semut",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_31.m3u8",
    id: "vid_23",
  },
  {
    name: "Pertigaan BT Gebang 1",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_49.m3u8",
    id: "vid_24",
  },
  {
    name: "Pertigaan BT Gebang 2",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_30_50.m3u8",
    id: "vid_25",
  },
  {
    name: "Kgk jelas bjir",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_40_11.m3u8",
    id: "vid_26",
  },
  {
    name: "Pertigaan Kranji Dari Pos Polisi",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_40_12.m3u8",
    id: "vid_27",
  },
  {
    name: "Putar Balik Rawa Semut",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_40_26.m3u8",
    id: "vid_28",
  },
  {
    name: "Jl Kaliabang",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_40_31.m3u8",
    id: "vid_29",
  },
  {
    name: "Pertigaan Teluk Buyung",
    src: "https://eofficev2.bekasikota.go.id/backupcctv/m3/cctv_BPTJ_@_10_4_40_34.m3u8",
    id: "vid_30",
  },
];
