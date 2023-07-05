import React from "react";

const twitterIcon =
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM17.767 9.04554C17.775 9.17143 17.775 9.30268 17.775 9.43125C17.775 13.3634 14.7804 17.8929 9.30804 17.8929C7.62054 17.8929 6.05625 17.4027 4.73839 16.5589C4.97946 16.5857 5.20982 16.5964 5.45625 16.5964C6.84911 16.5964 8.12947 16.125 9.15 15.3268C7.84286 15.3 6.74464 14.4429 6.36964 13.2643C6.82768 13.3313 7.24018 13.3313 7.71161 13.2107C6.35089 12.9348 5.33036 11.7375 5.33036 10.2911V10.2536C5.72411 10.4759 6.1875 10.6125 6.67232 10.6313C5.84464 10.0795 5.34643 9.15 5.34643 8.15625C5.34643 7.60179 5.49107 7.09554 5.75089 6.65625C7.21607 8.46161 9.41786 9.64018 11.8848 9.76607C11.4643 7.74375 12.975 6.10714 14.7911 6.10714C15.6482 6.10714 16.4196 6.46607 16.9634 7.04464C17.6357 6.91875 18.2786 6.66696 18.8518 6.32946C18.6295 7.01786 18.1634 7.59911 17.5446 7.96607C18.1446 7.90179 18.7232 7.73571 19.2589 7.50268C18.8545 8.09732 18.3482 8.625 17.767 9.04554Z" fill="#4444FF"/>
  </svg>

const discordIcon =
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12Z" fill="#3434b2"/>
    <path d="M4.47473 5.49152H19.5256V16.678H4.47473V5.49152Z" fill="white"/>
    <path d="M16.363 21.8501L3.68643 20.223C2.31698 20.0472 2.38799 15.7425 2.50846 14.3671L3.11864 7.40099C3.2391 6.02554 4.86135 4.58334 6.22879 4.39251L17.161 2.86708C18.5285 2.6763 21.3151 7.85106 21.2881 9.23148L21.0847 19.6637M12 7.03996C9.31999 7.03996 7.43999 8.18997 7.43999 8.18997C8.47 7.26998 10.27 6.73996 10.27 6.73996L10.1 6.56997C8.41 6.59997 6.88 7.76997 6.88 7.76997C5.15999 11.36 5.26999 14.46 5.26999 14.46C6.67 16.27 8.74999 16.14 8.74999 16.14L9.46 15.24C8.20999 14.97 7.42 13.86 7.42 13.86C7.42 13.86 9.29999 15.14 12 15.14C14.7 15.14 16.58 13.86 16.58 13.86C16.58 13.86 15.79 14.97 14.54 15.24L15.25 16.14C15.25 16.14 17.33 16.27 18.73 14.46C18.73 14.46 18.84 11.36 17.12 7.76997C17.12 7.76997 15.59 6.59997 13.9 6.56997L13.73 6.73996C13.73 6.73996 15.53 7.26998 16.56 8.18997C16.56 8.18997 14.68 7.03996 12 7.03996ZM9.92999 10.83C10.58 10.83 11.11 11.4 11.1 12.1C11.1 12.79 10.58 13.37 9.92999 13.37C9.28999 13.37 8.77 12.79 8.77 12.1C8.77 11.4 9.28 10.83 9.92999 10.83ZM14.1 10.83C14.75 10.83 15.27 11.4 15.27 12.1C15.27 12.79 14.75 13.37 14.1 13.37C13.46 13.37 12.94 12.79 12.94 12.1C12.94 11.4 13.45 10.83 14.1 10.83Z" fill="#4444FF"/>
  </svg>

const telegramIcon =
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37097 0 0 5.37097 0 12C0 18.629 5.37097 24 12 24C18.629 24 24 18.629 24 12C24 5.37097 18.629 0 12 0ZM17.8935 8.22097L15.9242 17.5016C15.779 18.1597 15.3871 18.3194 14.8403 18.0097L11.8403 15.7984L10.3935 17.1919C10.2339 17.3516 10.0984 17.4871 9.78871 17.4871L10.0016 14.4339L15.5613 9.41129C15.8032 9.19839 15.5081 9.07742 15.1887 9.29032L8.31774 13.6161L5.35645 12.6919C4.7129 12.4887 4.69839 12.0484 5.49194 11.7387L17.0613 7.27742C17.5984 7.08387 18.0677 7.40806 17.8935 8.22097Z" fill="#4444FF"/>
  </svg>

export const socialData = [
  {
    icon: "discord",
    label: "Discord",
    url: "https://discord.gg/3HYaR6USM7",
    svg: discordIcon,
  },
  {
    icon: "telegram",
    label: "Telegram",
    url: "https://t.me/joinchat/4-ocuURAr2thODFh",
    svg: telegramIcon,
  },
  {
    icon: "twitter",
    label: "Twitter",
    url: "https://twitter.com/Footprint_Data",
    svg: twitterIcon,
  },
  {
    label: "Docs",
    url: "https://docs.footprint.network",
  },
];
