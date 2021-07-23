import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Countdown",
    icon: "CountdownIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xcfaddc9ebd3f19c01fd774c1a69479ce29ce2344",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xcfaddc9ebd3f19c01fd774c1a69479ce29ce2344",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    // status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  // {
  //   label: 'Bridge',
  //   icon: 'NftIcon',
  //   href: 'https://bridge.cubdefi.com/',
  // },
  // {
  //   label: "Lottery",
  //   icon: "TicketIcon",
  //   href: "/lottery",
  // },
  // {
  //   label: "NFT",
  //   icon: "NftIcon",
  //   href: "/nft",
  // },
  // {
  //   label: "Team Battle",
  //   icon: "TeamBattleIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   status: status.LIVE,
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/teams",
  //       status: status.NEW,
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  //   calloutClass: "rainbow",
  // },
  // {
  //   label: "Info",
  //   icon: "InfoIcon",
  //   items: [
  //     {
  //       label: "Overview",
  //       href: "https://pancakeswap.info",
  //     },
  //     {
  //       label: "Tokens",
  //       href: "https://pancakeswap.info/tokens",
  //     },
  //     {
  //       label: "Pairs",
  //       href: "https://pancakeswap.info/pairs",
  //     },
  //     {
  //       label: "Accounts",
  //       href: "https://pancakeswap.info/accounts",
  //     },
  //   ],
  // },
  // {
  //   label: "IFO",
  //   icon: "IfoIcon",
  //   items: [
  //     {
  //       label: "Next",
  //       href: "/ifo",
  //     },
  //     {
  //       label: "History",
  //       href: "/ifo/history",
  //     },
  //   ],
  // },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/P",
      },
      // {
      //   label: "Blog",
      //   href: "https://peakd.com/@leofinance",
      // },
      // {
      //   label: "Discord",
      //   href: "https://discord.gg/wWJxRE2k9B"
      // }
    ],
  },
];

export const socials = [
  {
    label: "Discord",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/spicycakefinance"
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/spicycakefin",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
