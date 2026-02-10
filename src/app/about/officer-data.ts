export type SocialSite = "GitHub" | "LinkedIn" | "Website";

export type OfficerData = {
  name: string;
  image: string;
  socials: Partial<Record<SocialSite, string>>;
};

export const officerData: Record<string, OfficerData> = {
  alex_good: {
    name: "Alex Good",
    image: "public/officers/Alex_Good.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/alex-good-97806120a",
    },
  },
  andrew_kennedy: {
    name: "Andrew Kennedy",
    image: "/ssd_logo.svg",
    socials: {
      LinkedIn: "https://linkedin.com/in/andrewphkennedy",
    },
  },
  angel_lopez: {
    name: "Angel Lopez",
    image: "public/officers/Angel_Lopez.png",
    socials: {
      GitHub: "https://github.com/angel1254mc",
      LinkedIn: "https://linkedin.com/in/angel1254",
      Website: "https://angel1254.com",
    },
  },
  blake_anderson: {
    name: "Blake Anderson",
    image: "public/officers/Blake_Anderson.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/WillBAnders",
    },
  },
  caijun_qin: {
    name: "Caijun Qin",
    image: "public/officers/Caijun_Qin.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/cq-profile",
    },
  },
  cj_weir: {
    name: "CJ Weir",
    image: "public/officers/CJ_Weir.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/cj-weir",
    },
  },
  carter_swarm: {
    name: "Carter Swarm",
    image: "public/officers/Carter_Swarm.jpg",
    socials: {
      LinkedIn: "https://www.linkedin.com/in/carterswarm/",
    },
  },
  danny_perojevic: {
    name: "Danny Perojevic",
    image: "public/officers/Danny_Perojevic.jpg",
    socials: {
      LinkedIn: "https://www.linkedin.com/in/dannyperojevic/"
    }
  },
  derek_smith_nautel: {
    name: "Derek Smith Nautel",
    image: "public/officers/Derek_Smith_Nautel.jpg",
    socials: {
      LinkedIn: "https://www.linkedin.com/in/dsmithnautel/",
    },
  },
  eric_navar: {
    name: "Eric Navar",
    image: "public/officers/Eric_Navar.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/ericnavar",
    },
  },
  isaac_fuenmayor: {
    name: "Isaac Fuenmayor",
    image: "/ssd_logo.svg",
    socials: {},
  },
  jacob_bleser: {
    name: "Jacob Bleser",
    image: "/ssd_logo.svg",
    socials: {},
  },
  katherine_chan: {
    name: "Katherine Chan",
    image: "/ssd_logo.svg",
    socials: {},
  },
  michael_hayworth: {
    name: "Michael Hayworth",
    image: "public/officers/Michael_Hayworth.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/michaeldhayworth",
    },
  },
  param_gupta: {
    name: "Param Gupta",
    image: "public/officers/Param_Gupta.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/paramg",
    },
  },
  ranger_chenore: {
    name: "Ranger Chenore",
    image: "public/officers/Ranger_Chenore.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/ranger-chenore",
    },
  },
  scott_harrison: {
    name: "Scott Harrison",
    image: "/ssd_logo.svg",
    socials: {},
  },
  song_li: {
    name: "Song Li",
    image: "/ssd_logo.svg",
    socials: {},
  },
  stephen_coomes: {
    name: "Stephen Coomes",
    image: "public/officers/Stephen_Coomes.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/stephen-coomes-8a4885221",
    },
  },
  tianrui_li: {
    name: "Tianrui Li",
    image: "public/officers/Tianrui_Li.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/tianrui-li-b7343518a",
    },
  },
  trevor_richardson: {
    name: "Trevor Richardson",
    image: "public/officers/Trevor_Richardson.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/trevorarichardson",
    },
  },
  varun_puri: {
    name: "Varun Puri",
    image: "public/officers/Varun_Puri.jpg",
    socials: {
      LinkedIn: "https://linkedin.com/in/varun-puri",
    },
  },
  yonas_bahre: {
    name: "Yonas Bahre",
    image: "public/officers/Yonas_Bahre.jpg",
    socials: {
      GitHub: "https://github.com/yonasbahre",
      LinkedIn: "https://linkedin.com/in/yonasbahre",
    },
  },
};

export const positionData: Record<string, Record<string, OfficerData>> = {
  "Spring 2026": {
    President: officerData.derek_smith_nautel,
    "Vice President": officerData.danny_perojevic,
    Treasurer: officerData.carter_swarm,
  },
  "Fall 2023": {
    President: officerData.yonas_bahre,
    "Vice President": officerData.michael_hayworth,
    Treasurer: officerData.stephen_coomes,
    "Outreach Officer": officerData.angel_lopez,
    "Program Officer": officerData.param_gupta,
    "Involvement Officer": officerData.cj_weir,
  },
  "Spring 2023": {
    President: officerData.trevor_richardson,
    "Vice President": officerData.michael_hayworth,
    Treasurer: officerData.yonas_bahre,
    "Outreach Officer": officerData.stephen_coomes,
    "Program Officer": officerData.param_gupta,
    "Involvement Officer": officerData.cj_weir,
  },
  "Fall 2022": {
    President: officerData.ranger_chenore,
    "Vice President": officerData.trevor_richardson,
    Treasurer: officerData.yonas_bahre,
    "Outreach Officer": officerData.michael_hayworth,
    "Program Officer": officerData.alex_good,
    "Involvement Officer": officerData.eric_navar,
  },
  "Spring 2022": {
    President: officerData.eric_navar,
    "Vice President": officerData.ranger_chenore,
    Treasurer: officerData.caijun_qin,
    "Outreach Officer": officerData.michael_hayworth,
    "Program Officer": officerData.trevor_richardson,
    "Involvement Officer": officerData.isaac_fuenmayor,
  },
  "Fall 2021": {
    President: officerData.eric_navar,
    "Vice President": officerData.ranger_chenore,
    Treasurer: officerData.caijun_qin,
    "Outreach Officer": officerData.varun_puri,
    "Program Officer": officerData.trevor_richardson,
    "Involvement Officer": officerData.isaac_fuenmayor,
  },
  "Fall 2020 - Spring 2021": {
    President: officerData.varun_puri,
    "Vice President": officerData.eric_navar,
    "Logistics Officer": officerData.andrew_kennedy,
    "Development Officer": officerData.tianrui_li,
    "Program Officer": officerData.katherine_chan,
    "Communications Officer": officerData.ranger_chenore,
  },
  "Fall 2019 - Spring 2020": {
    President: officerData.blake_anderson,
    "Vice President": officerData.song_li,
    Treasurer: officerData.varun_puri,
  },
  "Fall 2018 - Spring 2019": {
    President: officerData.blake_anderson,
    "Vice President": officerData.scott_harrison,
    Treasurer: officerData.jacob_bleser,
  },
};
