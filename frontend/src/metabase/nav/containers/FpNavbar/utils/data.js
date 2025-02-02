/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-component-props */
import React from "react";

const topGameIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 12.5C12.7614 12.5 15 10.1956 15 7.35296V1.66667H5V7.35296C5 10.1956 7.23858 12.5 10 12.5Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.99935 8.74999V4.58333H1.66602C1.66602 7.36112 3.33268 8.74999 4.99935 8.74999Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 8.74999V4.58333H18.3333C18.3333 7.36112 16.6667 8.74999 15 8.74999Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 13.3333V15" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.25 17.5L7.7875 15H12.101L13.75 17.5H6.25Z" stroke="#6262FF" strokeLinejoin="round"/>
  </svg>

const gameTokensIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5.83268 6.25001C8.13387 6.25001 9.99935 5.31727 9.99935 4.16668C9.99935 3.01608 8.13387 2.08334 5.83268 2.08334C3.5315 2.08334 1.66602 3.01608 1.66602 4.16668C1.66602 5.31727 3.5315 6.25001 5.83268 6.25001Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66602 4.16666C1.66602 4.16666 1.66602 5.93274 1.66602 7.08332C1.66602 8.23391 3.53149 9.16666 5.83268 9.16666C8.13385 9.16666 9.99935 8.23391 9.99935 7.08332C9.99935 6.40182 9.99935 4.16666 9.99935 4.16666" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66602 7.08334C1.66602 7.08334 1.66602 8.84943 1.66602 10C1.66602 11.1506 3.53149 12.0833 5.83268 12.0833C8.13385 12.0833 9.99935 11.1506 9.99935 10C9.99935 9.31851 9.99935 7.08334 9.99935 7.08334" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66602 10C1.66602 10 1.66602 11.7661 1.66602 12.9167C1.66602 14.0672 3.53149 15 5.83268 15C8.13385 15 9.99935 14.0672 9.99935 12.9167C9.99935 12.2352 9.99935 10 9.99935 10" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66602 12.9167C1.66602 12.9167 1.66602 14.6827 1.66602 15.8333C1.66602 16.9839 3.53149 17.9167 5.83268 17.9167C8.13385 17.9167 9.99935 16.9839 9.99935 15.8333C9.99935 15.1518 9.99935 12.9167 9.99935 12.9167" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.1667 12.0833C16.4679 12.0833 18.3333 11.1506 18.3333 9.99999C18.3333 8.8494 16.4679 7.91666 14.1667 7.91666C11.8655 7.91666 10 8.8494 10 9.99999C10 11.1506 11.8655 12.0833 14.1667 12.0833Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 10C10 10 10 11.7661 10 12.9167C10 14.0672 11.8655 15 14.1667 15C16.4678 15 18.3333 14.0672 18.3333 12.9167C18.3333 12.2352 18.3333 10 18.3333 10" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12.9167C10 12.9167 10 14.6827 10 15.8333C10 16.9839 11.8655 17.9167 14.1667 17.9167C16.4678 17.9167 18.3333 16.9839 18.3333 15.8333C18.3333 15.1518 18.3333 12.9167 18.3333 12.9167" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const hotGamesIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 18.3333C13.4311 18.3333 16.2499 15.6142 16.2499 12.1242C16.2499 11.2674 16.2064 10.3489 15.7315 8.92149C15.2565 7.49407 15.1609 7.30982 14.6587 6.42828C14.4442 8.22724 13.2962 8.97699 13.0046 9.20107C13.0046 8.96795 12.3102 6.38995 11.2573 4.84745C10.2237 3.33332 8.81808 2.33996 7.99388 1.66666C7.99388 2.94573 7.63412 4.84745 7.11892 5.81641C6.60371 6.78536 6.50696 6.82066 5.86342 7.54174C5.21992 8.26282 4.92454 8.48553 4.38642 9.36045C3.84832 10.2354 3.75 11.4007 3.75 12.2575C3.75 15.7476 6.56887 18.3333 10 18.3333Z" stroke="#6262FF" strokeLinejoin="round"/>
  </svg>

const inGameNFTIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.4993 3.33334H2.49935C2.03911 3.33334 1.66602 3.70644 1.66602 4.16668V15.8333C1.66602 16.2936 2.03911 16.6667 2.49935 16.6667H17.4993C17.9596 16.6667 18.3327 16.2936 18.3327 15.8333V4.16668C18.3327 3.70644 17.9596 3.33334 17.4993 3.33334Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M14.9993 6.66666H11.666V9.99999H14.9993V6.66666Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M5 13.3333H15" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 6.66666H7.5" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10H7.5" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const gameMarketIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.3346 4.58333C18.3346 3.89297 17.775 3.33333 17.0846 3.33333H2.91797C2.22761 3.33333 1.66797 3.89297 1.66797 4.58333V8.33333H18.3346V4.58333Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.71484 16.2625L6.78801 11.1372L9.52939 13.7625L12.8808 10.8333L14.7476 12.6533" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3333 7.5V15.4167C18.3333 16.107 17.7737 16.6667 17.0833 16.6667H5" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.96484 5.83333H15.4648" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.62891 5.83333H5.46224" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66797 7.5V11.25" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const chainStatsIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.16667 18.3333C10.0871 18.3333 10.8333 17.5871 10.8333 16.6667C10.8333 15.7462 10.0871 15 9.16667 15C8.24619 15 7.5 15.7462 7.5 16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333Z" stroke="#6262FF"/>
    <path d="M10.8346 4.99999C11.7551 4.99999 12.5013 4.2538 12.5013 3.33332C12.5013 2.41285 11.7551 1.66666 10.8346 1.66666C9.91416 1.66666 9.16797 2.41285 9.16797 3.33332C9.16797 4.2538 9.91416 4.99999 10.8346 4.99999Z" stroke="#6262FF"/>
    <path d="M14.9987 11.6667C15.9192 11.6667 16.6654 10.9205 16.6654 10C16.6654 9.07954 15.9192 8.33334 14.9987 8.33334C14.0782 8.33334 13.332 9.07954 13.332 10C13.332 10.9205 14.0782 11.6667 14.9987 11.6667Z" stroke="#6262FF"/>
    <path d="M4.9987 11.6667C5.91917 11.6667 6.66536 10.9205 6.66536 10C6.66536 9.07954 5.91917 8.33334 4.9987 8.33334C4.07822 8.33334 3.33203 9.07954 3.33203 10C3.33203 10.9205 4.07822 11.6667 4.9987 11.6667Z" stroke="#6262FF"/>
    <path d="M13.3346 10H6.66797" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.58333 4.58334L6.25 8.75001" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.7518 11.25L10.418 15.4167" stroke="#6262FF"/>
  </svg>

const singleGameIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7.08464 7.5H1.66797V17.5H7.08464V7.5Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.4987 2.5H7.08203V17.5H12.4987V2.5Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M17.9167 10.8333H12.5V17.5H17.9167V10.8333Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const topMarketplacesIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.0839 11.2502V6.25024H12.084" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.5 15.4167L6.80771 10.2083L10.9103 12.7083L17.0833 6.25" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const topCollectionsByRoyaltyIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3.74935 16.6667L1.66602 7.08337L5.83268 9.16671L9.99935 3.33337L14.166 9.16671L18.3327 7.08337L16.2493 16.6667H3.74935Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M10.0007 13.75C10.9211 13.75 11.6673 13.0038 11.6673 12.0833C11.6673 11.1628 10.9211 10.4166 10.0007 10.4166C9.08019 10.4166 8.33398 11.1628 8.33398 12.0833C8.33398 13.0038 9.08019 13.75 10.0007 13.75Z" stroke="#6262FF" strokeLinejoin="round"/>
  </svg>

const trendingIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M1.66797 18.3334H18.3346" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66797 10.8334L5.0013 11.6667V15.8334H1.66797V10.8334Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M8.33203 10L11.6654 8.33337V15.8334H8.33203V10Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M15 6.66667L18.3333 5V15.8333H15V6.66667Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M1.66797 7.49996L5.0013 8.33329L18.3346 1.66663H14.168" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const sweepsIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.91536 5.83337C12.2626 5.83337 14.1654 7.69887 14.1654 10C14.1654 12.3012 12.2626 14.1667 9.91536 14.1667C8.82686 14.1667 7.83395 13.7655 7.08203 13.1057" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0013 1.66663C14.6037 1.66663 18.3346 5.39758 18.3346 9.99996C18.3346 14.6023 14.6037 18.3333 10.0013 18.3333C7.7453 18.3333 5.69868 17.4368 4.19822 15.9807C2.63769 14.4662 1.66797 12.3463 1.66797 9.99996C1.66797 7.76354 2.54894 5.73288 3.98279 4.23608" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.98047 4.23621L9.99898 10.0001L4.1959 15.9807" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const topSalesIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6.25H17.5L16.6667 17.5H3.33333L2.5 6.25Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M6.66797 7.91667V2.5H13.3346V7.91667" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66797 14.1666H13.3346" stroke="#6262FF" strokeLinecap="round"/>
  </svg>

const chainOverviewIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.6673 12.5V6.25L11.459 3.32031M8.54232 3.32031L3.33398 6.25V12.5M4.58398 14.4531L10.0007 17.5L13.334 15.625L15.4173 14.4531" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.75 7.81242L7.5 8.54159V9.99992V11.4583L8.75 12.1874L10 12.9166L11.25 12.1874L12.5 11.4583V9.99992V8.54159L11.25 7.81242L10 7.08325L8.75 7.81242Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 7.08341V4.16675" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 11.25L15.4167 12.9167" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.50065 11.25L4.58398 12.9167" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 4.16675C10.6904 4.16675 11.25 3.6071 11.25 2.91675C11.25 2.22639 10.6904 1.66675 10 1.66675C9.30964 1.66675 8.75 2.22639 8.75 2.91675C8.75 3.6071 9.30964 4.16675 10 4.16675Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.33398 15C4.02434 15 4.58398 14.4404 4.58398 13.75C4.58398 13.0596 4.02434 12.5 3.33398 12.5C2.64363 12.5 2.08398 13.0596 2.08398 13.75C2.08398 14.4404 2.64363 15 3.33398 15Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.666 15C17.3564 15 17.916 14.4404 17.916 13.75C17.916 13.0596 17.3564 12.5 16.666 12.5C15.9757 12.5 15.416 13.0596 15.416 13.75C15.416 14.4404 15.9757 15 16.666 15Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const nftTradesIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5.71456 8.57146C7.29252 8.57146 8.5717 7.29227 8.5717 5.71432C8.5717 4.13636 7.29252 2.85718 5.71456 2.85718C4.13661 2.85718 2.85742 4.13636 2.85742 5.71432C2.85742 7.29227 4.13661 8.57146 5.71456 8.57146Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.2849 17.1427C15.8628 17.1427 17.142 15.8636 17.142 14.2856C17.142 12.7077 15.8628 11.4285 14.2849 11.4285C12.7069 11.4285 11.4277 12.7077 11.4277 14.2856C11.4277 15.8636 12.7069 17.1427 14.2849 17.1427Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0013 18.3333C5.39894 18.3333 1.66797 14.6024 1.66797 10L4.44573 11.3889" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001L15.5555 8.61121" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const gameProfileIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.99935 8.33341C11.8403 8.33341 13.3327 6.84103 13.3327 5.00008C13.3327 3.15913 11.8403 1.66675 9.99935 1.66675C8.1584 1.66675 6.66602 3.15913 6.66602 5.00008C6.66602 6.84103 8.1584 8.33341 9.99935 8.33341Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 18.3333C17.5 14.1911 14.1421 10.8333 10 10.8333C5.85787 10.8333 2.5 14.1911 2.5 18.3333" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const moneyFlowIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 0.833252V19.1666" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.584 2.5C14.584 2.5 10.4051 2.5 8.33398 2.5C6.2629 2.5 4.58398 4.17892 4.58398 6.25C4.58398 8.32108 6.2629 10 8.33398 10" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.41602 17.5C5.41602 17.5 9.59493 17.5 11.666 17.5C13.7371 17.5 15.416 15.8211 15.416 13.75C15.416 11.6789 13.7371 10 11.666 10H8.33268" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const addIcon =
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18.047 7.5L18.0195 28.5" stroke="#4444FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 18H28.5" stroke="#4444FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const balanceApiIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.49219 4.98688L13.2433 1.6665L15.1651 4.99521L7.49219 4.98688Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66797 5.83333C1.66797 5.37308 2.04106 5 2.5013 5H17.5013C17.9616 5 18.3346 5.37308 18.3346 5.83333V17.5C18.3346 17.9602 17.9616 18.3333 17.5013 18.3333H2.5013C2.04106 18.3333 1.66797 17.9602 1.66797 17.5V5.83333Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M14.6875 13.7502H18.3333V9.5835H14.6875C13.4794 9.5835 12.5 10.5162 12.5 11.6668C12.5 12.8174 13.4794 13.7502 14.6875 13.7502Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M18.332 6.875V16.875" stroke="#6262FF" strokeLinecap="round"/>
  </svg>

const transactionApiIcon =
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
    <path d="M15.4167 3.3335H4.58333C4.1231 3.3335 3.75 3.70659 3.75 4.16683V17.5002C3.75 17.9604 4.1231 18.3335 4.58333 18.3335H15.4167C15.8769 18.3335 16.25 17.9604 16.25 17.5002V4.16683C16.25 3.70659 15.8769 3.3335 15.4167 3.3335Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M7.5 1.6665V4.1665" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 1.6665V4.1665" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66797 7.9165H13.3346" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66797 11.25H11.668" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66797 14.5835H10.0013" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const transferApiIcon =
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
    <path d="M3.75 7.5V17.5H16.25V7.5L10 2.5L3.75 7.5Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.08203 10H12.9154" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.08203 12.5H12.9154" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.9154 9.99984L10.832 7.9165" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.16536 14.5833L7.08203 12.5" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const ownershipApiIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M8.33464 4.1665H2.5013C2.04106 4.1665 1.66797 4.53959 1.66797 4.99984V15.8332C1.66797 16.2934 2.04106 16.6665 2.5013 16.6665H17.5013C17.9616 16.6665 18.3346 16.2934 18.3346 15.8332V14.7915" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.16797 9.5835H7.5013" stroke="#6262FF" strokeLinecap="round"/>
    <path d="M4.16797 12.9165H14.168" stroke="#6262FF" strokeLinecap="round"/>
    <path d="M14.168 9.1665C15.5487 9.1665 16.668 8.04722 16.668 6.6665C16.668 5.28579 15.5487 4.1665 14.168 4.1665C12.7873 4.1665 11.668 5.28579 11.668 6.6665C11.668 8.04722 12.7873 9.1665 14.168 9.1665Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3333 11.841C17.5194 10.2508 15.8332 9.1665 14.1665 9.1665C12.4999 9.1665 11.6695 9.63855 10.8125 10.4165" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const nftApiIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.3346 8.74984C18.3346 8.28959 17.9616 7.9165 17.5013 7.9165C17.0411 7.9165 16.668 8.28959 16.668 8.74984H18.3346ZM9.58464 3.33317C10.0449 3.33317 10.418 2.96007 10.418 2.49984C10.418 2.0396 10.0449 1.6665 9.58464 1.6665V3.33317ZM16.2513 16.6665H3.7513V18.3332H16.2513V16.6665ZM3.33464 16.2498V3.74984H1.66797V16.2498H3.33464ZM16.668 8.74984V16.2498H18.3346V8.74984H16.668ZM3.7513 3.33317H9.58464V1.6665H3.7513V3.33317ZM3.7513 16.6665C3.52119 16.6665 3.33464 16.48 3.33464 16.2498H1.66797C1.66797 17.4004 2.60071 18.3332 3.7513 18.3332V16.6665ZM16.2513 18.3332C17.4019 18.3332 18.3346 17.4004 18.3346 16.2498H16.668C16.668 16.48 16.4814 16.6665 16.2513 16.6665V18.3332ZM3.33464 3.74984C3.33464 3.51972 3.52118 3.33317 3.7513 3.33317V1.6665C2.60071 1.6665 1.66797 2.59924 1.66797 3.74984H3.33464Z" fill="#6262FF"/>
    <path d="M2.5 14.5835L6.95546 10.4993C7.26621 10.2144 7.74079 10.2065 8.06087 10.4809L13.3333 15.0002" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.668 12.9166L13.6569 10.9277C13.9501 10.6344 14.4144 10.6014 14.7462 10.8503L17.5013 12.9166" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.875 2.5C13.1156 2.5 12.5 3.0978 12.5 3.83523C12.5 5.17046 14.125 6.38429 15 6.66667C15.875 6.38429 17.5 5.17046 17.5 3.83523C17.5 3.0978 16.8844 2.5 16.125 2.5C15.66 2.5 15.2488 2.72418 15 3.06733C14.7512 2.72418 14.34 2.5 13.875 2.5Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const refDataApiIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.0846 5.83305L10.0013 1.6665L2.91797 5.83305V14.1664L10.0013 18.3332L17.0846 14.1664V5.83305Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M10 9.1665V12.4998" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.332 7.5V12.5" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66797 10.8335V12.5002" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const fpDatasetIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.3347 4.5835C18.3347 4.5835 18.3346 15.0261 18.3346 15.8335C18.3346 17.2142 14.6037 18.3335 10.0013 18.3335C5.39893 18.3335 1.66798 17.2142 1.66798 15.8335C1.66798 15.0595 1.66797 4.5835 1.66797 4.5835" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3346 12.0835C18.3346 13.4642 14.6037 14.5835 10.0013 14.5835C5.39893 14.5835 1.66797 13.4642 1.66797 12.0835" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3346 8.3335C18.3346 9.7142 14.6037 10.8335 10.0013 10.8335C5.39893 10.8335 1.66797 9.7142 1.66797 8.3335" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0013 6.6665C14.6037 6.6665 18.3346 5.54722 18.3346 4.1665C18.3346 2.78579 14.6037 1.6665 10.0013 1.6665C5.39893 1.6665 1.66797 2.78579 1.66797 4.1665C1.66797 5.54722 5.39893 6.6665 10.0013 6.6665Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const codingChartIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665V9.99984H18.3346Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.9518 7.5002H12.5V2.04834C15.0917 2.86236 17.1378 4.90845 17.9518 7.5002Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const sqlChartIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5013 3.3335H2.5013C2.04106 3.3335 1.66797 3.70659 1.66797 4.16683V15.8335C1.66797 16.2937 2.04106 16.6668 2.5013 16.6668H17.5013C17.9615 16.6668 18.3346 16.2937 18.3346 15.8335V4.16683C18.3346 3.70659 17.9615 3.3335 17.5013 3.3335Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66797 4.16683C1.66797 3.70659 2.04106 3.3335 2.5013 3.3335H17.5013C17.9616 3.3335 18.3346 3.70659 18.3346 4.16683V6.66683H1.66797V4.16683Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.4154 9.5835L9.58203 14.1668" stroke="#6262FF" strokeLinecap="round"/>
    <path d="M12.918 9.5835L15.418 11.6668L12.918 14.1668" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.08203 9.5835L4.58203 11.6668L7.08203 14.1668" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const newDashboardIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.0846 2.5H2.91797C2.22761 2.5 1.66797 3.05964 1.66797 3.75V13.75C1.66797 14.4404 2.22761 15 2.91797 15H17.0846C17.775 15 18.3346 14.4404 18.3346 13.75V3.75C18.3346 3.05964 17.775 2.5 17.0846 2.5Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 15V17.9167" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3346 5.8335L6.66797 11.6668" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.16797 17.9165H15.8346" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.25 8.3335C6.94036 8.3335 7.5 7.77385 7.5 7.0835C7.5 6.39314 6.94036 5.8335 6.25 5.8335C5.55964 5.8335 5 6.39314 5 7.0835C5 7.77385 5.55964 8.3335 6.25 8.3335Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.75 11.6665C14.4404 11.6665 15 11.1069 15 10.4165C15 9.72615 14.4404 9.1665 13.75 9.1665C13.0596 9.1665 12.5 9.72615 12.5 10.4165C12.5 11.1069 13.0596 11.6665 13.75 11.6665Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const myDashboardIcon = newDashboardIcon

const myChartIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665V9.99984H18.3346Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.9518 7.5002H12.5V2.04834C15.0917 2.86236 17.1378 4.90845 17.9518 7.5002Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const solutionIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.6654 8.33317C16.6654 11.1697 14.8939 13.5925 12.3968 14.5555H9.9987H7.60057C5.10353 13.5925 3.33203 11.1697 3.33203 8.33317C3.33203 4.65125 6.31678 1.6665 9.9987 1.6665C13.6806 1.6665 16.6654 4.65125 16.6654 8.33317Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.3979 14.5557L12.1149 17.9513C12.0969 18.1672 11.9164 18.3333 11.6996 18.3333H8.29977C8.08306 18.3333 7.90252 18.1672 7.88456 17.9513L7.60156 14.5557" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 7.0835V9.5835L10 8.3335L12.5 9.5835V7.0835" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const howOnboardIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.7513 15.8332H9.16797V12.4998H15.0013V9.1665H18.3346V15.8332H16.2513L15.0013 17.0832L13.7513 15.8332Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66797 2.5H15.0013V12.5H7.08464L5.41797 14.1667L3.7513 12.5H1.66797V2.5Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.91797 7.5H8.33464" stroke="#6262FF" strokeLinecap="round"/>
    <path d="M10.832 7.5H11.2487" stroke="#6262FF" strokeLinecap="round"/>
    <path d="M5 7.5H5.41667" stroke="#6262FF" strokeLinecap="round"/>
  </svg>

const blogIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4.16536 18.3337C3.70513 18.3337 3.33203 17.9606 3.33203 17.5003V2.50033C3.33203 2.04009 3.70513 1.66699 4.16536 1.66699H15.832C16.2923 1.66699 16.6654 2.04009 16.6654 2.50033V17.5003C16.6654 17.9606 16.2923 18.3337 15.832 18.3337H4.16536Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.75 9.16699V1.66699H13.75V9.16699L11.25 6.55337L8.75 9.16699Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.16797 1.66699H15.8346" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const academyIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M1.66797 13.7503C1.66797 13.2901 2.04106 12.917 2.5013 12.917H5.0013V10.0003L10.0013 6.66699L15.0013 10.0003V12.917H17.5013C17.9616 12.917 18.3346 13.2901 18.3346 13.7503V17.5003C18.3346 17.9606 17.9616 18.3337 17.5013 18.3337H1.66797V13.7503Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M10 2.5V6.66667" stroke="#6262FF" strokeLinecap="round"/>
    <path d="M15 4.99987V2.49989C15 2.49989 14.375 3.74989 12.5 2.49989C10.625 1.24989 10 2.49989 10 2.49989V4.99987C10 4.99987 10.625 3.74989 12.5 4.99987C14.375 6.24987 15 4.99987 15 4.99987Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.6654 18.3337V12.917H8.33203V18.3337" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 18.333H12.5" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const youtubeIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4.60939 4.33966C6.91905 4.22453 8.71547 4.16699 9.99868 4.16699C11.2821 4.16699 13.0791 4.22458 15.3899 4.3397C16.6408 4.40203 17.6525 5.38028 17.7568 6.62833C17.8625 7.89249 17.9153 9.00591 17.9153 9.96858C17.9153 10.9431 17.8612 12.072 17.7529 13.3554C17.6489 14.588 16.6592 15.5592 15.4249 15.6399C13.4493 15.7691 11.6406 15.8337 9.99868 15.8337C8.35701 15.8337 6.54893 15.7691 4.57443 15.64C3.34056 15.5592 2.35105 14.5886 2.24654 13.3566C2.13687 12.0636 2.08203 10.9342 2.08203 9.96858C2.08203 9.01453 2.13556 7.90074 2.24261 6.62716C2.34748 5.37962 3.35899 4.40199 4.60939 4.33966Z" stroke="#6262FF" strokeLinejoin="round"/>
    <path d="M8.75 8.17067V11.836C8.75 12.0332 8.90992 12.1931 9.10712 12.1931C9.17717 12.1931 9.24567 12.1725 9.30408 12.134L12.0531 10.317C12.2176 10.2083 12.2628 9.98671 12.1541 9.82217C12.1281 9.78283 12.0945 9.74904 12.0554 9.72271L9.30642 7.87429C9.14275 7.76421 8.92083 7.80771 8.81075 7.97137C8.77117 8.03029 8.75 8.09967 8.75 8.17067Z" stroke="#6262FF" strokeLinejoin="round"/>
  </svg>

const githubIcon =
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M12.2255 12.6983C13.2271 12.4902 14.1359 12.1293 14.8423 11.5994C16.0488 10.6946 16.6654 9.29713 16.6654 7.91642C16.6654 6.9478 16.2982 6.04355 15.6624 5.27763C15.3082 4.85084 16.3443 1.66642 15.4237 2.09529C14.5031 2.52416 13.1532 3.47346 12.4456 3.26395C11.6881 3.03965 10.8626 2.91642 9.9987 2.91642C9.24836 2.91642 8.52699 3.00938 7.85395 3.1808C6.87561 3.42995 5.93999 2.49975 4.9987 2.09529C4.05739 1.69083 4.57103 4.98446 4.29145 5.3308C3.68253 6.08525 3.33203 6.97013 3.33203 7.91642C3.33203 9.29713 4.07822 10.6946 5.28466 11.5994C6.08832 12.2022 7.0962 12.5863 8.22374 12.7756" stroke="#6262FF" strokeLinecap="round"/>
    <path d="M8.22404 12.7754C7.74133 13.3067 7.5 13.8112 7.5 14.2889C7.5 14.7667 7.5 15.9773 7.5 17.9207" stroke="#6262FF" strokeLinecap="round"/>
    <path d="M12.2266 12.6982C12.6839 13.2986 12.9126 13.8376 12.9126 14.3153C12.9126 14.7931 12.9126 15.9949 12.9126 17.9208" stroke="#6262FF" strokeLinecap="round"/>
    <path d="M2.5 13.0068C2.87453 13.0526 3.15231 13.2248 3.33333 13.5235C3.60487 13.9713 4.61425 15.6329 5.76046 15.6329C6.52463 15.6329 7.10479 15.6329 7.501 15.6329" stroke="#6262FF" strokeLinecap="round"/>
  </svg>

const myAnalysisIcon =
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1.16602 12.25H12.8327" stroke="#ACAEB4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.08398 8.16675H2.33398V12.2501H4.08398V8.16675Z" stroke="#ACAEB4" strokeLinejoin="round"/>
    <path d="M7.875 5.25H6.125V12.25H7.875V5.25Z" stroke="#ACAEB4" strokeLinejoin="round"/>
    <path d="M11.666 1.75H9.91602V12.25H11.666V1.75Z" stroke="#ACAEB4" strokeLinejoin="round"/>
  </svg>

const dataApiIcon =
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <g clipPath="url(#clip0_543_1299)">
      <path d="M5.25 6.98176V2.91675C5.25 1.95025 6.0335 1.16675 7 1.16675C7.9665 1.16675 8.75 1.95025 8.75 2.91675V3.50174" stroke="#ACAEB4" strokeLinecap="round"/>
      <path d="M8.75 7.00098V11.0833C8.75 12.0498 7.9665 12.8333 7 12.8333C6.0335 12.8333 5.25 12.0498 5.25 11.0833V10.4912" stroke="#ACAEB4" strokeLinecap="round"/>
      <path d="M6.99935 8.75H2.91139C1.94745 8.75 1.16602 7.9665 1.16602 7C1.16602 6.0335 1.94745 5.25 2.91139 5.25H3.49602" stroke="#ACAEB4" strokeLinecap="round"/>
      <path d="M7 5.25H11.0801C12.0484 5.25 12.8333 6.0335 12.8333 7C12.8333 7.9665 12.0484 8.75 11.0801 8.75H10.5193" stroke="#ACAEB4" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_543_1299">
        <rect width="14" height="14" fill="white"/>
      </clipPath>
    </defs>
  </svg>

const appsIcon =
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M5.25 1.75H2.33333C2.01117 1.75 1.75 2.01117 1.75 2.33333V5.25C1.75 5.57218 2.01117 5.83333 2.33333 5.83333H5.25C5.57218 5.83333 5.83333 5.57218 5.83333 5.25V2.33333C5.83333 2.01117 5.57218 1.75 5.25 1.75Z" stroke="#ACAEB4" strokeLinejoin="round"/>
    <path d="M5.25 8.16675H2.33333C2.01117 8.16675 1.75 8.42791 1.75 8.75008V11.6667C1.75 11.9889 2.01117 12.2501 2.33333 12.2501H5.25C5.57218 12.2501 5.83333 11.9889 5.83333 11.6667V8.75008C5.83333 8.42791 5.57218 8.16675 5.25 8.16675Z" stroke="#ACAEB4" strokeLinejoin="round"/>
    <path d="M11.666 1.75H8.74935C8.42717 1.75 8.16602 2.01117 8.16602 2.33333V5.25C8.16602 5.57218 8.42717 5.83333 8.74935 5.83333H11.666C11.9882 5.83333 12.2493 5.57218 12.2493 5.25V2.33333C12.2493 2.01117 11.9882 1.75 11.666 1.75Z" stroke="#ACAEB4" strokeLinejoin="round"/>
    <path d="M11.666 8.16675H8.74935C8.42717 8.16675 8.16602 8.42791 8.16602 8.75008V11.6667C8.16602 11.9889 8.42717 12.2501 8.74935 12.2501H11.666C11.9882 12.2501 12.2493 11.9889 12.2493 11.6667V8.75008C12.2493 8.42791 11.9882 8.16675 11.666 8.16675Z" stroke="#ACAEB4" strokeLinejoin="round"/>
  </svg>

const datasetsIcon =
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <g clipPath="url(#clip0_543_852)">
      <path d="M6.99935 4.9585C10.221 4.9585 12.8327 4.17499 12.8327 3.2085C12.8327 2.242 10.221 1.4585 6.99935 1.4585C3.77769 1.4585 1.16602 2.242 1.16602 3.2085C1.16602 4.17499 3.77769 4.9585 6.99935 4.9585Z" stroke="#ACAEB4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.14086 4.521C1.92983 4.84165 1.16602 5.31083 1.16602 5.8335C1.16602 6.79999 3.77769 7.5835 6.99935 7.5835C10.221 7.5835 12.8327 6.79999 12.8327 5.8335C12.8327 5.31083 12.0689 4.84165 10.8578 4.521C9.82954 4.79327 8.47874 4.9585 6.99935 4.9585C5.51996 4.9585 4.16916 4.79327 3.14086 4.521Z" stroke="#ACAEB4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.14086 7.146C1.92983 7.46665 1.16602 7.93583 1.16602 8.4585C1.16602 9.42499 3.77769 10.2085 6.99935 10.2085C10.221 10.2085 12.8327 9.42499 12.8327 8.4585C12.8327 7.93583 12.0689 7.46665 10.8578 7.146C9.82954 7.41827 8.47874 7.5835 6.99935 7.5835C5.51996 7.5835 4.16916 7.41827 3.14086 7.146Z" stroke="#ACAEB4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.14086 9.771C1.92983 10.0917 1.16602 10.5608 1.16602 11.0835C1.16602 12.05 3.77769 12.8335 6.99935 12.8335C10.221 12.8335 12.8327 12.05 12.8327 11.0835C12.8327 10.5608 12.0689 10.0917 10.8578 9.771C9.82954 10.0433 8.47874 10.2085 6.99935 10.2085C5.51996 10.2085 4.16916 10.0433 3.14086 9.771Z" stroke="#ACAEB4" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_543_852">
        <rect width="14" height="14" fill="white"/>
      </clipPath>
    </defs>
  </svg>

const solutionIcon2 =
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.6673 8.33317C16.6673 11.1697 14.8958 13.5925 12.3988 14.5555H10.0007H7.60253C5.10548 13.5925 3.33398 11.1697 3.33398 8.33317C3.33398 4.65125 6.31873 1.6665 10.0007 1.6665C13.6826 1.6665 16.6673 4.65125 16.6673 8.33317Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.3979 14.5557L12.1149 17.9513C12.0969 18.1672 11.9164 18.3333 11.6996 18.3333H8.29977C8.08306 18.3333 7.90252 18.1672 7.88456 17.9513L7.60156 14.5557" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 7.0835V9.5835L10 8.3335L12.5 9.5835V7.0835" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const useCaseIcon =
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.99935 8.33317C11.8403 8.33317 13.3327 6.84079 13.3327 4.99984C13.3327 3.15889 11.8403 1.6665 9.99935 1.6665C8.1584 1.6665 6.66602 3.15889 6.66602 4.99984C6.66602 6.84079 8.1584 8.33317 9.99935 8.33317Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 18.3335C17.5 14.1914 14.1421 10.8335 10 10.8335C5.85787 10.8335 2.5 14.1914 2.5 18.3335" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0007 18.3335L11.6673 16.2502L10.0007 10.8335L8.33398 16.2502L10.0007 18.3335Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

const onBoardIcon =
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7.91667 8.33333C9.5275 8.33333 10.8333 7.0275 10.8333 5.41667C10.8333 3.80584 9.5275 2.5 7.91667 2.5C6.30583 2.5 5 3.80584 5 5.41667C5 7.0275 6.30583 8.33333 7.91667 8.33333Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.66602 16.9998V17.4998H14.166V16.9998C14.166 15.133 14.166 14.1996 13.8027 13.4865C13.4831 12.8593 12.9732 12.3494 12.346 12.0298C11.6329 11.6665 10.6995 11.6665 8.83268 11.6665H6.99935C5.13252 11.6665 4.1991 11.6665 3.48605 12.0298C2.85884 12.3494 2.3489 12.8593 2.02933 13.4865C1.66602 14.1996 1.66602 15.133 1.66602 16.9998Z" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.834 5.4165V10.4165M13.334 7.9165H18.334" stroke="#6262FF" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

export const ReactIcons = {
  topGameIcon,
  gameTokensIcon,
  hotGamesIcon,
  inGameNFTIcon,
  gameMarketIcon,
  chainStatsIcon,
  singleGameIcon,
  topMarketplacesIcon,
  topCollectionsByRoyaltyIcon,
  trendingIcon,
  sweepsIcon,
  topSalesIcon,
  chainOverviewIcon,
  nftTradesIcon,
  gameProfileIcon,
  moneyFlowIcon,
  addIcon,
  balanceApiIcon,
  transactionApiIcon,
  transferApiIcon,
  ownershipApiIcon,
  nftApiIcon,
  refDataApiIcon,
  fpDatasetIcon,
  codingChartIcon,
  sqlChartIcon,
  newDashboardIcon,
  myDashboardIcon,
  myChartIcon,
  solutionIcon,
  howOnboardIcon,
  blogIcon,
  academyIcon,
  youtubeIcon,
  githubIcon,
  myAnalysisIcon,
  dataApiIcon,
  appsIcon,
  datasetsIcon,
  solutionIcon2,
  useCaseIcon,
  onBoardIcon,
}
