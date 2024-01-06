import { selectFirMajorAerodromes } from "../services/configSlice"

type FIR = {
  neighbourPrefixes: string[]
  neighbourFirs: string[]
  pages: { [name: string]: Page }
}
type Page = {
  staffingSectors: string[]
  statusSectors: string[][]
  majorAerodromes: string[]
  aerodromes: string[]
  relevantAerodromes: string[]
  areas: { [name: string]: string[] }
}
// TODO move to UI?
export const FIR_SETTINGS: { [name: string]: FIR } = {
  EDMM: {
    neighbourPrefixes: ["ED", "ET", "LK", "LO", "LS"],
    neighbourFirs: ["EDGG", "LKAA", "LOVV", "LSAS"],
    pages: {
      "ATIS APP": {
        staffingSectors: [
          "ed/SWA",
          "ed/ILR",
          "ed/ALB",
          "ed/RDG",
          "ed/EGG",
          "ed/NDG",
          "ed/WLD",
          "ed/ZUG",
          "ed/TEG",
          "ed/TRU",
          "ed/STA",
          "ed/FUE",
        ],
        statusSectors: [
          ["ed/NDG", "ed/WLD", "ed/SWA", "ed/ALB", "ed/RDG", "ed/EGG"],
          ["ed/DMNH", "ed/DMNL", "ed/DMND", "ed/DMSD", "ed/DMSL", "ed/DMSH"],
          ["ed/ILR", "ed/FUE", "ed/ZUG", "ed/STA", "ed/TEG", "ed/TRU"],
        ],
        majorAerodromes: ["EDDM"],
        aerodromes: ["ETSN", "ETSI", "ETHL", "ETSL", "EDMO", "EDMA", "EDJA"],
        relevantAerodromes: [],
        areas: {
          "ED-R107-407 Allgäu": [
            "ED-R107C",
            "ED-R107W",
            "ED-R207C",
            "ED-R207S",
            "ED-R207W",
            "ED-R307C",
            "ED-R307S",
            "ED-R407C",
            "ED-R407N",
            "ED-R407S",
          ],
          "ED-R137 Hohenfels": ["ED-R137A", "ED-R137B"],
          "ED-R144/170/171": ["ED-R144", "ED-R170A", "ED-R170B", "ED-R171"],
          "ED-R136 Grafenwöhr": ["ED-R136A", "ED-R136B", "ED-R136C"],
          "ED-R138 Siegenburg": ["ED-R138A", "ED-R138B"],
          "ED-R141 Altenstadt": ["ED-R141"],
          "ED-R147 Manching": ["ED-R147"],
        },
      },
      "ATIS NORD": {
        staffingSectors: [
          "ed/WLD",
          "ed/ALB",
          "ed/RDG",
          "ed/EGG",
          "ed/NDG",
          "ed/TEG",
          "ed/TRU",
          "ed/FUE",
          "ed/STA",
          "ed/SWA",
          "ed/BBG",
          "ed/HOF",
          "ed/FRK",
        ],
        statusSectors: [
          ["ed/ISA", "ed/DON", "ed/ALP", "ed/CHI"],
          ["ed/ALB", "ed/RDG", "ed/EGG", "ed/NDG", "ed/WLD", "ed/SWA"],
          ["ed/DMNH", "ed/DMNL", "ed/FUE", "ed/STA", "ed/TEG", "ed/TRU"],
          ["ed/HOF", "ed/BBG", "ed/FRK"],
        ],
        majorAerodromes: ["EDDM"],
        aerodromes: ["ETSN", "ETSI", "ETSL", "EDJA", "EDMA"],
        relevantAerodromes: ["EDDS", "EDDF"],
        areas: {
          "ED-R107-407 Allgäu": [
            "ED-R107C",
            "ED-R107W",
            "ED-R207C",
            "ED-R207S",
            "ED-R207W",
            "ED-R307C",
            "ED-R307S",
            "ED-R407C",
            "ED-R407N",
            "ED-R407S",
          ],
          "ED-R144/170/171": ["ED-R144", "ED-R170A", "ED-R170B", "ED-R171"],
          "ED-R136 Grafenwöhr": ["ED-R136A", "ED-R136B", "ED-R136C"],
          "ED-R138 Siegenburg": ["ED-R138A", "ED-R138B"],
          "ED-R137 Hohenfels": ["ED-R137A", "ED-R137B"],
          // "LK-TRA75": [
          //   "LK-TRA75"
          // ],
          "ED-R147 Manching": ["ED-R147"],
        },
      },
      "ATIS SUED": {
        staffingSectors: [
          "ed/SWA",
          "ed/ILR",
          "ed/WLD",
          "ed/NDG",
          "ed/EGG",
          "ed/ALB",
          "ed/ZUG",
          "ed/FUE",
          "ed/STA",
          "ed/TEG",
          "ed/TRU",
        ],
        statusSectors: [
          ["ed/ALP", "ed/CHI", "ed/ISA", "ed/DON"],
          ["ed/FUE", "ed/STA", "ed/TRU", "ed/NDG", "ed/ALB", "ed/EGG"],
          ["ed/ZUG", "ed/TEG", "ed/ILR", "ed/SWA", "ed/DMSH", "ed/DMSL"],
        ],
        majorAerodromes: ["EDDM"],
        aerodromes: ["EDMA", "ETSL", "ETHL", "EDJA", "EDMO"],
        relevantAerodromes: ["EDDS", "EDDF"],
        areas: {
          "ED-R107-407 Allgäu": [
            "ED-R107C",
            "ED-R107W",
            "ED-R207C",
            "ED-R207S",
            "ED-R207W",
            "ED-R307C",
            "ED-R307S",
            "ED-R407C",
            "ED-R407N",
            "ED-R407S",
          ],
          // M03: [],
          // Lizum: [],
          "ED-R141 Altenstadt": ["ED-R141"],
        },
      },
      "ATIS OST": {
        staffingSectors: [
          "ed/BBG",
          "ed/HOF",
          "ed/HAL",
          "ed/GER",
          "ed/MEI",
          "ed/FRK",
          "ed/TRN",
          "ed/TRS",
          "ed/SAS",
          "ed/ALB",
          "ed/RDG",
        ],
        statusSectors: [
          ["ed/SOL", "ed/DON", "ed/ERL", "ed/SAL", "ed/SPE", "ed/HVL"],
          ["ed/WUR", "ed/HRZ", "ed/HOF", "ed/HAL", "ed/MEI", "ed/BOR"],
          ["ed/FUL", "ed/RDG", "ed/BBG", "ed/GER", "ed/SAS", "ed/FLG"],
          ["ed/GED", "ed/ALB", "ed/FRK", "ed/TRN", "ed/TRS", "ed/DBAS"],
          // LKAA, EPWW
        ],
        majorAerodromes: ["EDDN", "EDDP"],
        aerodromes: ["EDDC", "EDDE", "EDQM"],
        relevantAerodromes: [],
        areas: {
          "ED-R136": ["ED-R136A", "ED-R136B", "ED-R136C"],
          "ED-R137": ["ED-R137A", "ED-R137B"],
          "ED-R144/170/171": ["ED-R144", "ED-R170A", "ED-R170B", "ED-R171"],
          "ED-R208": ["ED-R208A", "ED-R208B"],
          "ED-R308": ["ED-R308"],
          "ED-R95": ["ED-R95A", "ED-R95B"],
          "ED-R45": ["ED-R45"],
        },
      },
      "ATIS EDDN": {
        staffingSectors: [
          "ed/BBG",
          "ed/HOF",
          "ed/FRK",
          "ed/GER",
          "ed/MEI",
          "ed/TRS",
          "ed/ALB",
          "ed/RDG",
        ],
        statusSectors: [
          ["ed/DON", "ed/ERL", "ed/SAL", "ed/SPE", "ed/HVL"],
          ["ed/WUR", "ed/ALB", "ed/HOF", "ed/HAL", "ed/MEI", "ed/BOR"],
          ["ed/FUL", "ed/RDG", "ed/BBG", "ed/GER", "ed/SAS", "ed/FLG"],
          ["ed/GED", "ed/SWA", "ed/FRK", "ed/TRN", "ed/TRS", "ed/DBAS"],
          // LKAA, EPWW
        ],
        majorAerodromes: ["EDDN"],
        aerodromes: ["EDQC", "EDQA", "EDQM", "EDQD", "ETEB", "ETIC", "ETHN"],
        relevantAerodromes: [],
        areas: {
          "ED-R136": ["ED-R136A", "ED-R136B", "ED-R136C"],
          "ED-R137": ["ED-R137A", "ED-R137B"],
          "ED-R144/170/171": ["ED-R144", "ED-R170A", "ED-R170B", "ED-R171"],
          "ED-R208": ["ED-R208A", "ED-R208B"],
          "ED-R308": ["ED-R308"],
          "ED-R95A": ["ED-R95A"],
        },
      },
      "ATIS EDDP": {
        staffingSectors: [
          "ed/HAL",
          "ed/GER",
          "ed/MEI",
          "ed/TRN",
          "ed/TRS",
          "ed/SAS",
          "ed/BBG",
          "ed/HOF",
          "ed/FRK",
        ],
        statusSectors: [
          ["ed/SOL", "ed/ERL", "ed/SAL", "ed/SPE", "ed/HVL"],
          ["ed/HRZ", "ed/HOF", "ed/HAL", "ed/MEI", "ed/BOR"],
          ["ed/FUL", "ed/BBG", "ed/GER", "ed/SAS", "ed/FLG"],
          ["ed/GED", "ed/FRK", "ed/TRN", "ed/TRS", "ed/DBAS"],
          // LKAA, EPWW
        ],
        majorAerodromes: ["EDDP", "EDDC"],
        aerodromes: ["EDDE", "EDAB", "EDAC"],
        relevantAerodromes: [],
        areas: {
          "ED-R95A": ["ED-R95A"],
          "ED-R95B": ["ED-R95B"],
          "ED-R45": ["ED-R45"],
          "ED-R208": ["ED-R208A", "ED-R208B"],
          "ED-R308": ["ED-R308"],
        },
      },
      // TODO AFW, EBG-Ost
    },
  },
  EDGG: {
    neighbourPrefixes: ["ED", "ET", "EB", "EH", "EL", "LF", "LS"],
    neighbourFirs: ["EDMM", "EDWW", "EHAA", "EBBU", "LFEE", "LSAS"],
    pages: {
      // TODO: IRL different layout
      "ATIS EBG01":{
        staffingSectors : [
          "ed/DUS",
          "ed/BOT"
        ],
        statusSectors: [
          ["ed/DUS", "ed/BOT"],
          ["ed/DKA", "ed/NOR"],
          ["ed/PADH", "ed/PADL", "ed/HMM"],
          ["ed/RHR"],
          ["ed/SIG", "ed/TAU"],
          ["eh/ACE", "eh/ACW", "eh/ABK", "eh/MIL"],
          ["eb/BW", "eb/BE", "eb/BL", ]
        ],
        majorAerodromes: ["EDDL"],
        aerodromes: ["EDLV", "EDLN"],
        relevantAerodromes : [],
        areas: {}, //TODO
      },
      "ATIS EBG02": {
        staffingSectors: [
          "ed/BAD",
          "ed/MAN",
          "ed/LBU",
          "ed/NKRH",
          "ed/NKRL",
        ],
        statusSectors: [
          ["ed/BAD", "ed/MAN", "ed/LBU", "ed/NKRH", "ed/NKRL"],
          ["ed/GED", "ed/SIG", "ed/TAU", "ed/GIN", "ed/HEF"],
          ["ed/DKB", "ed/KTG", "ed/HAB", "ed/PSA", "ed/KNG"],
          ["ed/EIF", "ed/PFA", "ed/KIR", "ed/RUD"],
          ["ed/STG", "ed/REU"],
          ["ed/DFDN", "ed/DFDS", "ed/DFAN", "ed/DFAS"],
        ],
        majorAerodromes: ["EDDF", "EDDS"],
        aerodromes: ["EDFM"],
        relevantAerodromes: [],
        areas: {
          // Murgtal: [],
          "TRA 205": ["ED-R205A", "ED-R205B", "ED-R205C", "ED-R205D"],
          "TRA 207": ["ED-R207"],
          "ED-R 132 Heuberg": ["ED-R132A", "ED-R132B"],
        },
      },
      "ATIS EBG03": {
        staffingSectors: [
          "ed/GED",
          "ed/SIG",
          "ed/TAU",
          "ed/GIN",
          "ed/HEF",
        ],
        statusSectors: [
          ["ed/GED", "ed/SIG", "ed/TAU", "ed/GIN", "ed/HEF"],
          ["ed/DKB", "ed/KTG", "ed/HAB", "ed/PSA", "ed/KNG"],
          ["ed/BAD", "ed/MAN", "ed/LBU", "ed/NKRH", "ed/NKRL"],
          ["ed/EIF", "ed/PFA", "ed/KIR", "ed/RUD"],
          ["ed/STG", "ed/REU"],
          ["ed/DFDN", "ed/DFDS", "ed/DFAN", "ed/DFAS"],
        ],
        majorAerodromes: ["EDDF"],
        aerodromes: ["ETOU"],
        relevantAerodromes: [],
        areas: {
          "ED-R 134 Wildflecken": ["ED-R134"],
          "ED-R 135 Hammelburg": ["ED-R135A", "ED-R135B", "ED-R135C"],
          "ED-R 97 Schwarzenborn": ["ED-R97A", "ED-R97B"],
        },
      },
      "ATIS EBG04":{
        staffingSectors : [ 
          "ed/DKB",
          "ed/HAB",
          "ed/KNG",
          "ed/KNG",
          "ed/KTG",
          "ed/PSA"
        ],
        statusSectors: [
            ["ed/DKB", "ed/HAB", "ed/KNG", "ed/KTG", "ed/PSA"],
            ["ed/BAD", "ed/LBU", "ed/MAN", "ed/NKRH", "ed/NKRL"],
            ["ed/GED", "ed/GIN", "ed/HEF"],
            ["ed/FAN", "ed/FAS", "ed/FDN", "ed/FDS"],
            ["ed/STG"],
            ["ed/NDG", "ed/WLD", "ed/ZUG", "ed/HOF", "ed/EGG", "ed/BBG", "ed/ALB", "ED/FRK"],
            ["ed/WUR", "ed/FUL", "ed/FFM", ]
        ],
        majorAerodromes: ["EDDF"],
        aerodromes: ["EDDS"],
        relevantAerodromes: [],
        areas: { }, //TODO
      },
      "ATIS EBG05":{
        staffingSectors: [
          "ed/EIF",
          "ed/KIR",
          "ed/PFA",
          "ed/RUD"
        ],
        statusSectors:[
          ["ed/EIF", "ed/KIR", "ed/PFA", "ed/RUD"],
          ["ed/FAN", "ed/FAS", "ed/FDN", "ed/FDS"],
          ["ed/BAD", "ed/LBU", "ed/MAN", "ed/NKRH", "ed/NKRL"],
          ["ed/DKA", "ed/NOR"],
          ["ed/TAU", "ed/SIG"],
          ["ed/STG"],
          ["eb/BE", "eb/BW", "eb/BU", "eb/BL", "eb/XA"],
          ["ed/NTM", "ed/SLN"],
          ["lf/EE"],
        ],
        majorAerodromes: ["EDFH", "EDDR", "EDDF"],
        aerodromes: ["EDDS", "ETAR", "ETAD", "ETSB", "EDRZ", "ELLX"],
        relevantAerodromes: [],
        areas: {} //TODO
      },
      "ATIS EBG06": {
        staffingSectors : [
            "ed/HMM",
            "ed/PADH",
            "ed/PADL"
        ],
        statusSectors : [
          ["ed/HMM", "ed/PADH", "ed/PADL"]
          ["ed/BOT", "ed/DUS"]
          ["ed/DKA", "ed/NOR"],
          ["ed/EMS", "ed/HAN", "ed/DST"],
          ["eh/ACE", "eh/ACW", "eh/ABK", "eh/MIL"],
          ["ed/MNS", "ed/RHR", "ed/FUL", "ed/NTM"]
        ]
      },
      // TODO: IRL different layout
      "ATIS EBG07": {
        staffingSectors: [
          "ed/DKA",
          "ed/NOR",
        ],
        statusSectors: [
          ["ed/DKA", "ed/NOR"],
          ["ed/PADL", "ed/PADH", "ed/BOT", "ed/DUS"],
        ],
        majorAerodromes: ["EDDK", "EDDL"],
        aerodromes: ["EDDG", "EDLV", "EDLW", "EDLP", "EDLN", "ETNN", "ETNG"],
        relevantAerodromes: [],
        areas: { "Eisenborn Areas": ["ED-R117"] },
      },
      // TODO: IRL different layout
      "ATIS EBG08": {
        staffingSectors: [
          "ed/STG",
          "ed/REU",
        ],
        statusSectors: [
          ["ed/STG", "ed/REU", "ed/BAD", "ed/LBU"],
          ["ed/NKRH", "ed/NKRL", "ed/KNG", "ed/DKB", "ed/PFA"],
        ],
        majorAerodromes: ["EDDS"],
        aerodromes: ["EDSB"],
        relevantAerodromes: [],
        areas: {
          "ED-R132": ["ED-R132A", "ED-R132B"],
          "ED-R205": ["ED-R205A", "ED-R205B", "ED-R205C", "ED-R205D"],
          "ED-R207": ["ED-R207C", "ED-R207S", "ED-R207W"],
        },
      },
    },
  },
  EDWW: {
    neighbourPrefixes: ["ED", "ET", "EH", "EK", "EP", "ES"],
    neighbourFirs: ["EDGG", "EDMM", "EHAA", "EKDK", "ESMM", "EPWW"],
    pages: {
      "ATIS NORD": {
        staffingSectors: [
          "ed/EIDE",
          "ed/EIDW",
          "ed/FRI",
          "ed/HRZ",
          "ed/EMS",
          "ed/HAN",
          "ed/MRZ",
          "ed/MAR",
          "ed/OSE",
          "ed/HVL",
          "ed/CEL",
          "ed/MNS",
          "ed/JEV",
          "ed/HOL",
        ],
        statusSectors: [
          ["ed/HAME", "ed/HAMW", "ed/HEI", "ed/ALR", "ed/EIDW", "ed/EIDE"],
          ["ed/FRI", "ed/EMS", "ed/HRZ", "ed/HAN", "ed/MAR", "ed/MRZ"],
          ["ed/JEV", "ed/HOL", "ed/MNS", "ed/CEL", "ed/OSE", "ed/HVL"],
        ],
        majorAerodromes: ["EDDH", "EDDW"],
        aerodromes: ["EDHI", "EDHL", "EDXW", "ETMN", "ETNH", "ETNS", "ETNT"],
        relevantAerodromes: [],
        areas: {
          "ED-R10 Todendorf-Putlos": [
            "ED-R10A",
            "ED-R10B",
            "ED-R10C",
            "ED-R10D",
            "ED-R10E",
          ],
          "ED-R11 Ostsee": ["ED-R11A", "ED-R11B"],
          "ED-R12 Schoenhagen": ["ED-R12A", "ED-R12B"],
          "ED-R12 Meldorfer Bucht": ["ED-R13A", "ED-R13B"],
          "ED-R31 Bergen": ["ED-R31"],
          "ED-R32 Munster": ["ED-R32A", "ED-R32B"],
          "ED-R33 Unterluess": ["ED-R33A", "ED-R33B"],
          "ED-R34 Meppen": ["ED-R34A", "ED-R34B"],
        },
      },
      "ATIS OST": {
        staffingSectors: [
          "ed/DBAN",
          "ed/DBAS",
          "ed/DBDN",
          "ed/DBDS",
          "ed/CEL",
          "ed/SOL",
          "ed/JEV",
          "ed/TRN",
          "ed/SAS",
          "ed/HAL",
          "ed/GER",
          "ed/MEI",
          "ed/HEI",
          "ed/HAME",
          "ed/HRZ",
          "ed/HAN",
        ],
        statusSectors: [
          ["ed/BOR", "ed/FLG", "ed/MAR", "ed/MRZ", "ed/HVL", "ed/OSE"],
          ["ed/DBAN", "ed/DBAS", "ed/DBDN", "ed/DBDS", "ed/HEI", "ed/HRZ"],
          ["ed/GER", "ed/HAL", "ed/MEI", "ed/SPE", "ed/SAL", "ed/TRN"],
          ["ed/SAS", "ed/HAME", "ed/HAN", "ed/HOL", "ed/SOL", "ed/CEL"],
        ],
        majorAerodromes: ["EDDB"],
        aerodromes: ["EDAH", "ETNL"],
        relevantAerodromes: ["ETSH", "EDDV", "EDDC", "EDDP"],
        areas: {
          "ED-R17 Jaegerbrueck": ["ED-R17"],
          "ED-R71 Klietz": ["ED-R71"],
          "ED-R73 Altengrabow": ["ED-R73A", "ED-R73B", "ED-R73C"],
        },
      },
      "ATIS BER": {
        staffingSectors: [
          "ed/BOR",
          "ed/FLG",
          "ed/MAR",
          "ed/MRZ",
          "ed/DBAN",
          "ed/DBAS",
          "ed/DBDN",
          "ed/DBDS",
          "ed/TRN",
          "ed/SAS",
        ],
        statusSectors: [
          ["ed/BOR", "ed/FLG", "ed/MAR", "ed/MRZ"],
          ["ed/DBAN", "ed/DBAS", "ed/DBDN", "ed/DBDS"],
          ["ed/SAS", "ed/TRN"],
        ],
        majorAerodromes: ["EDDB"],
        aerodromes: ["ETSH"],
        relevantAerodromes: ["EDDC", "EDDP"],
        areas: {
          "ED-R54 Lehnin": ["ED-R70"],
          "ED-R70 Holzdorf": ["ED-R70"],
          "ED-R71 Klietz": ["ED-R71"],
          "ED-R73 Altengrabow": ["ED-R73A", "ED-R73B", "ED-R73C"],
        },
      },
      "ATIS SÜD": {
        staffingSectors: [
          "ed/ALR",
          "ed/HEI",
          "ed/FRI",
          "ed/MAR",
          "ed/BOR",
          "ed/HAL",
          "ed/GED",
          "ed/HEF",
          "ed/GIN",
          "ed/PADH",
          "ed/HMM",
          "ed/PADL",
          "ed/HAME",
          "ed/TRN",
          "ed/SAL",
          "ed/RHR",
        ],
        statusSectors: [
          ["ed/EMS", "ed/HRZ", "ed/DST", "ed/HAN"],
          ["ed/HAME", "ed/FRI", "ed/HEI", "ed/ALR", "ed/MAR", "ed/BOR"],
          ["ed/SOL", "ed/CEL", "ed/MNS", "ed/JEV", "ed/HOL", "ed/RHR"],
          ["ed/HAL", "ed/TRN", "ed/SAL", "ed/FFM", "ed/FUL", "ed/HVL"],
          ["ed/PADL", "ed/PADH", "ed/HMM", "ed/GIN", "ed/GED", "ed/HEF"],
        ],
        majorAerodromes: ["EDDV"],
        aerodromes: ["EDVE", "EDVK"],
        relevantAerodromes: ["EDDW", "EDDB", "EDDP", "EDLP", "EDDG"],
        areas: {
          "ED-R30 Ehra-Lessien": ["ED-R30"],
          "ED-R31 Bergen": ["ED-R31"],
          "ED-R32 Munster": ["ED-R32A", "ED-R32B"],
          "ED-R33 Unterluess": ["ED-R33A", "ED-R33B"],
          "ED-R34 Meppen": ["ED-R34A", "ED-R34B"],
          "ED-R37 Nordhorn": ["ED-R37A", "ED-R37B"],
        },
      },
    },
  },
  EDUU: {
    neighbourPrefixes : ["ED", "LO", "LK", "LS", "EB", "EK", "EP", "LF"],
    neighbourFirs: ["EDGG", "EDWW", "EDMM", "EDYY", "LOVV", "LKAA", "LSAS", "LSAZ", "EBBU", "EKDK", "EPWW", "LFEE"],
    pages: {
        "WEST": {
          staffingSectors: [

          ],
          statusSectors :[

          ],
          majorAerodromes : ["EDDF"],
          aerodromes : ["EDDS"],
          relevantAerodromes : [],
          areas : {},

        }
    }
  }
}
export const FIR_TO_VATGLASSES: { [fir: string]: string } = {
  EDMM: "ed",
  EDUU: "ed",
  EDGG: "ed",
  EDWW: "ed",
  EDYY: "ed",
  EBBU: "eb-el",
  EHAA: "eh",
  EKDK: "ek",
  ESMM: "es",
  LIPP: "li",
  LKAA: "lk",
  LOVV: "lo",
  EPWW: "ep",
  LSAS: "ls",
}
