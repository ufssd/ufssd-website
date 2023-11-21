import { OfficerCardProps } from "./officer-card";

const officerCardData: OfficerCardProps[] = [
  {
    position: "President",
    image: "public/officers/Yonas_Bahre.jpg",
    name: "Yonas Bahre",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yonasbahre/",
        icon: "/linkedin_logo.png",
      },
      {
        name: "GitHub",
        url: "https://github.com/yonasbahre",
        icon: "/github_logo.svg",
      },
    ],
  },
  {
    position: "Vice President",
    image: "public/officers/Michael_Hayworth.jpg",
    name: "Michael Hayworth",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michaeldhayworth/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Tresurer",
    image: "public/officers/Stephen_Coomes.jpg",
    name: "Stephen Coomes",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/stephen-coomes-8a4885221/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "Outreach Officer",
    image: "public/officers/Angel_Lopez.png",
    name: "Angel Lopez",
    socialLinksData: [
      {
        name: "GitHub",
        url: "https://github.com/angel1254mc",
        icon: "/github_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/angel1254/",
        icon: "/linkedin_logo.png",
      },
      {
        name: "Website",
        url: "https://www.angel1254.com/",
        icon: "/web_logo.svg",
      },
    ],
  },
  {
    position: "Program Office",
    image: "public/officers/Param_Gupta.jpg",
    name: "Param Gupta",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/paramg/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  {
    position: "",
    image: "public/officers/CJ_Weir.jpg",
    name: "CJ Weir",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cj-weir/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
];

export default officerCardData;

export const officerData: { [key: string]: OfficerCardProps } = {
  yonas_bahre: {
    position: "",
    image: "public/officers/Yonas_Bahre.jpg",
    name: "Yonas Bahre",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yonasbahre/",
        icon: "/linkedin_logo.png",
      },
      {
        name: "GitHub",
        url: "https://github.com/yonasbahre",
        icon: "/github_logo.svg",
      },
    ],
  },
  michael_hayworth: {
    position: "",
    image: "public/officers/Michael_Hayworth.jpg",
    name: "Michael Hayworth",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/michaeldhayworth/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  stephen_coomes: {
    position: "",
    image: "public/officers/Stephen_Coomes.jpg",
    name: "Stephen Coomes",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/stephen-coomes-8a4885221/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  angel_lopez: {
    position: "",
    image: "public/officers/Angel_Lopez.png",
    name: "Angel Lopez",
    socialLinksData: [
      {
        name: "GitHub",
        url: "https://github.com/angel1254mc",
        icon: "/github_logo.svg",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/angel1254/",
        icon: "/linkedin_logo.png",
      },
      {
        name: "Website",
        url: "https://www.angel1254.com/",
        icon: "/web_logo.svg",
      },
    ],
  },
  param_gupta: {
    position: "",
    image: "public/officers/Param_Gupta.jpg",
    name: "Param Gupta",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/paramg/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  cj_weir: {
    position: "",
    image: "public/officers/CJ_Weir.jpg",
    name: "CJ Weir",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cj-weir/",
        icon: "/linkedin_logo.png",
      },
    ],
  },
  trevor_richardson: {
    position: "",
    image: "public/officers/Trevor_Richardson.jpg",
    name: "Trevor Richardson",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/trevorarichardson/overlay/photo/",
        icon: "/linkedin_logo.png",
      }
    ]
  },
  ranger_chenore: {
    position: "",
    image: "public/officers/Ranger_Chenore.jpg",
    name: "Ranger Chenore",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ranger-chenore/",
        icon: "/linkedin_logo.png",
      },
    ]
  },
  eric_navar: {
    position: "",
    image: "public/officers/Eric_Navar.jpg",
    name: "Eric Navar",
    socialLinksData: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ericnavar/",
        icon: "/linkedin_logo.png",
      },
    ]
  }
}

export const positionData: { [key: string]: { [key: string]: OfficerCardProps }} = {
  "Fall 2023": {
    "President": officerData.yonas_bahre,
    "Vice President": officerData.michael_hayworth,
    "Treasurer": officerData.stephen_coomes,
    "Outreach Officer": officerData.angel_lopez,
    "Program Officer": officerData.param_gupta,
    "Involvement Officer": officerData.cj_weir,
  },
  "Spring 2023": {
    "President": officerData.trevor_richardson,
    "Vice President": officerData.michael_hayworth,
    "Treasurer": officerData.yonas_bahre,
    "Outreach Officer": officerData.stephen_coomes,
    "Program Officer": officerData.param_gupta,
    "Involvement Officer": officerData.cj_weir,
  },
  "Fall 2022": {
    "President": officerData.ranger_chenore,
    "Vice President": officerData.trevor_richardson,
    "Treasurer": officerData.yonas_bahre,
    "Outreach Officer": officerData.michael_hayworth,
    "Program Officer": officerData.alex_good,
    "Involvement Officer": officerData.eric_navar,
  },
  "Spring 2022": {
    "President": officerData.eric_navar,
    "Vice President": officerData.ranger_chenore,
    "Treasurer": officerData.caijun_qin,
    "Outreach Officer": officerData.michael_hayworth,
    "Program Officer": officerData.trevor_richardson,
    "Involvement Officer": officerData.isaac_fuenmayor,
  },
  "Fall 2021": {
    "President": officerData.eric_navar,
    "Vice President": officerData.ranger_chenore,
    "Treasurer": officerData.caijun_qin,
    "Outreach Officer": officerData.varun_puri,
    "Program Officer": officerData.trevor_richardson,
    "Involvement Officer": officerData.isaac_fuenmayor,
  },
  "Fall 2020 - Spring 2021": {
    "President": officerData.varun_puri,
    "Vice President": officerData.eric_navar,
    "Logistics Officer": officerData.andrew_kennedy,
    "Development Officer": officerData.tianrui_li,
    "Program Officer": officerData.katherine_chan,
    "Communications Officer": officerData.ranger_chenore,
  },
  "Fall 2019 - Spring 2020": {
    "President": officerData.blake_anderson,
    "Vice President": officerData.song_li,
    "Treasurer": officerData.varun_puri,
  },
  "Fall 2018 - Spring 2019": {
    "President": officerData.blake_anderson,
    "Vice President": officerData.scott_harrison,
    "Treasurer": officerData.jacob_bleser,
  }
}