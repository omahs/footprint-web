/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-component-props */
import React, { useState } from "react";
import { Button } from "antd";
import { ReactIcons } from "../utils/data";
import { getOssUrl } from "../../../../lib/image";
import { MainMenuFunction } from "../utils/function";
import Icon from "../../../../components/Icon";
import Link from "../../../../core/components/Link";

const ResearchContent = props => {
  const [select, setSelect] = useState("gamefi");

  const tabs = [
    {
      name: "GameFi",
      value: "gamefi",
      data: {
        rankingsData: {
          title: "RANKINGS", data: [
            {
              title: "Top Games",
              desc: "Explore the exciting realm of blockchain games.",
              link: "/research/gamefi/game-rankings/top-games",
              icon: ReactIcons.hotGamesIcon,
            },
            {
              title: "Game Tokens",
              desc: "Take informed decisions by game token's performence.",
              link: "/research/gamefi/game-rankings/game-tokens",
              icon: ReactIcons.gameTokensIcon,
            },
            {
              title: "Hot Games",
              desc: "Evaluate games from multiple views by gamers, NFTs, etc.",
              link: "/research/gamefi/game-rankings/hot-games-on-ethereum",
              icon: ReactIcons.topGameIcon,
            },
            {
              title: "In-Game NFT",
              desc: "Find out what's really hot with In-game NFT's activity.",
              link: "/research/gamefi/in-game-nft-rankings/top-in-game-nft-on-ethereum",
              icon: ReactIcons.inGameNFTIcon,
            },
          ],
        },
        industryData: {
          title: "Industry", data: [
            {
              title: "Game Market",
              desc: "The latest summary of all on-chain Gamefi data.",
              link: "/research/gamefi/game-overview/game-market",
              icon: ReactIcons.gameMarketIcon,
            },
            {
              title: "Chain Stats",
              desc: "Discover popular games across different blockchains.",
              link: "/research/gamefi/game-overview/chain-stats",
              icon: ReactIcons.chainStatsIcon,
            },
          ],
        },
        gameData: {
          title: "GAME", data: [
            {
              title: "Single Game",
              desc: "In-depth stats of the game's transaction, token, NFT etc.",
              link: "/research/gamefi/game-protocols/single-game-stats",
              icon: ReactIcons.singleGameIcon,
            },
          ],
        },
      },
    },
    {
      name: "NFT",
      value: "nft",
      data: {
        rankingsData: {
          title: "RANKINGS", data: [
            {
              title: "Top Collections",
              desc: "High-value collections with key metrics.",
              link: "/research/nft/nft-rankings/top-collections",
              icon: ReactIcons.topGameIcon,
            },
            {
              title: "Top Marketplaces",
              desc: "Stats and leaderboard of NFT marketplace.",
              link: "/research/nft/nft-rankings/top-marketplaces",
              icon: ReactIcons.topMarketplacesIcon,
            },
            {
              title: "Top Collections by Royalty",
              desc: "Find out the NFT collections with the highest royalty revenue.",
              link: "/research/nft/nft-rankings/top-collections-by-royalty",
              icon: ReactIcons.topCollectionsByRoyaltyIcon,
            },
          ],
        },
        signalsData: {
          title: "SIGNALS", data: [
            {
              title: "Trending",
              desc: "Tracking NFT collection hotness by sales.",
              link: "/research/nft/nft-signals/trending",
              icon: ReactIcons.trendingIcon,
            },
            {
              title: "Hot Mints",
              desc: "Hot collections minting now!",
              link: "/research/nft/nft-signals/hot-mints",
              icon: ReactIcons.hotGamesIcon,
            },
            {
              title: "Sweeps",
              desc: "Instant monitoring NFT sweeps.",
              link: "/research/nft/nft-signals/sweeps",
              icon: ReactIcons.sweepsIcon,
            },
            {
              title: "Top Sales",
              desc: "The most expensive NFTs recently sold.",
              link: "/research/nft/nft-signals/top-sales",
              icon: ReactIcons.topSalesIcon,
            },
          ],
        },
        industryData: {
          title: "INDUSTRY", data: [
            {
              title: "NFT Market",
              desc: "Overview of the whole NFT market data.",
              link: "/research/nft/nft-market/market-overview",
              icon: ReactIcons.gameMarketIcon,
            },
            {
              title: "Chains Stats",
              desc: "Discover popular NFT across different blockchains.",
              link: "/research/nft/nft-market/chains-stats",
              icon: ReactIcons.chainStatsIcon,
            },
          ],
        },
        collectionData: {
          title: "COLLECTION", data: [
            {
              title: "Single Collection",
              desc: "In-depth stats of the NFT's transaction, token, NFT etc.",
              link: "/research/nft/nft-collections/single-collection",
              icon: ReactIcons.singleGameIcon,
            },
          ],
        },
      },
    },
    {
      name: "Chain",
      value: "chain",
      data: {
        industryData: {
          title: "Industry", data: [
            {
              title: "Chain Overview",
              desc: "Overview of blockchain ecosystem data.",
              link: "/research/chain/chain-ecosystem/chain-overview",
              icon: ReactIcons.chainOverviewIcon,
            },
          ],
        },
        layoutData: [
          {
            title: "Ethereum",
            img: getOssUrl("studio/img-chain-1.png"),
            link: "/research/chain/chain-stats/ethereum-overview",
          },
          {
            title: "BNB Chain",
            img: getOssUrl("studio/img-chain-2.png"),
            link: "/research/chain/chain-stats/bnb-chain-overview",
          },
          {
            title: "Avalanche",
            img: getOssUrl("studio/img-chain-3.png"),
            link: "/research/chain/chain-stats/avalanche-overview",
          },
          {
            title: "Harmony",
            img: getOssUrl("studio/img-chain-4.png"),
            link: "/research/chain/chain-stats/harmony-overview",
          },
          {
            title: "Fantom",
            img: getOssUrl("studio/img-chain-5.png"),
            link: "/research/chain/chain-stats/fantom-overview",
          },
          {
            title: "Cronos",
            img: getOssUrl("studio/img-chain-6.png"),
            link: "/research/chain/chain-stats/cronos-overview",
          },
          {
            title: "DFK",
            img: getOssUrl("studio/img-chain-11.png"),
            link: "/research/chain/chain-stats/dfk-overview",
          },
          {
            title: "Ronin",
            img: getOssUrl("studio/img-chain-12.png"),
            link: "/research/chain/chain-stats/ronin-overview",
          },
          {
            title: "Oasys",
            img: getOssUrl("studio/img-chain-13.png"),
            link: "/research/chain/chain-stats/oasys-overview",
          },
          {
            title: "Moonbeam",
            img: getOssUrl("studio/img-chain-14.png?1=1"),
            link: "/research/chain/chain-stats/moonbeam-overview",
          },
          {
            title: "Moonriver",
            img: getOssUrl("studio/img-chain-15.png?1=1"),
            link: "/research/chain/chain-stats/moonriver-overview",
          },
          {
            title: "Celo",
            img: getOssUrl("studio/img-chain-16.png"),
            link: "/research/chain/chain-stats/celo-overview",
          },
          {
            title: "ThunderCore",
            img: getOssUrl("studio/img-chain-17.png"),
            link: "/research/chain/chain-stats/thundercore-overview",
          },
          {
            title: "Boba",
            img: getOssUrl("studio/img-chain-24.png?1=1"),
            link: "/research/chain/chain-stats/boba-network-overview",
          },
          {
            title: "Sui",
            img: getOssUrl("studio/img-chain-27.png"),
            link: "/research/chain/chain-rankings/top-chains",
            desc: "Coming soon",
          },
        ],
        layout2Data: [
          {
            title: "zkSync Era",
            img: getOssUrl("studio/img-chain-31.png"),
            link: "/research/chain/chain-stats/zksync-era-overview",
          },
          {
            title: "Arbitrum",
            img: getOssUrl("studio/img-chain-32.png"),
            link: "/research/chain/chain-stats/arbitrum-overview",
          },
          {
            title: "Optimism",
            img: getOssUrl("studio/img-chain-33.png"),
            link: "/research/chain/chain-stats/optimism-overview",
          },
          {
            title: "Polygon",
            img: getOssUrl("studio/img-chain-34.png"),
            link: "/research/chain/chain-stats/polygon-overview",
          },
          {
            title: "HOME Verse",
            img: getOssUrl("studio/img-chain-35.png"),
            link: "/research/chain/chain-rankings/top-chains",
          },
          {
            title: "MCH Verse",
            img: getOssUrl("studio/img-chain-36.png"),
            link: "/research/chain/chain-stats/mch-verse-gamefi-overview",
          },
          {
            title: "TCG Verse",
            img: getOssUrl("studio/img-chain-37.png"),
            link: "/research/chain/chain-rankings/top-chains",
          },
          {
            title: "Starknet",
            img: getOssUrl("studio/img-chain-38.png"),
            link: "/research/chain/chain-rankings/top-chains",
            desc: "Coming soon",
          },
        ],
        addData: {
          title: "Request a chain",
          desc: "Request a chain we don't currently support",
          link: "https://forms.gle/Z5ha1KYircHS7Pwi7",
          externalLink: true,
          layout: (
            <div className="main-menu__add-root">
              {ReactIcons.addIcon}
            </div>
          ),
        },
      },
    },
    {
      name: "Wallet",
      value: "wallet",
      data: {
        walletTrackerData: {
          title: "WALLET TRACKER", data: [
            {
              title: "NFT Trades",
              desc: "Track the performance of NFT trades of a wallet.",
              link: "/research/wallet/wallet-tracker/nft-trades-of-wallet",
              icon: ReactIcons.nftTradesIcon,
            },
            {
              title: "Gamer Profile",
              desc: "Track GameFi, In-Game NFT, and all NFT analysis of a wallet.",
              link: "/research/wallet/wallet-tracker/gamer-profile-of-wallet",
              icon: ReactIcons.gameProfileIcon,
            },
            {
              title: "Money Flow",
              desc: "Track the inflow and outflow of a wallet at a specific time.",
              link: "/research/wallet/wallet-tracker/money-flow-of-wallet",
              icon: ReactIcons.moneyFlowIcon,
            },
          ],
        },
        walletDescData: {
          img: getOssUrl("studio/img-menu-wallet.png"),
          title: "Track and trace activities, holdings, and profiles over 100+ million addresses.",
        },
      },
    },
    {
      name: "Community",
      value: "community",
      link: "/dashboards",
    },
  ];

  const renderTabs = (data) => {
    return (
      <div className="main-menu__tabs">
        {data?.map(item => {
          return (
            <Button
              key={item.value}
              type={item.value === select ? "primary" : "text"}
              onClick={() => {
                if (item.value !== "community") {
                  setSelect(item.value);
                  return;
                }
                window.open(item.link);
              }}
            >
              {item.name}
              {item.link ? <Icon name="arrow_right_up" size={16} color="white"/> : null}
            </Button>
          );
        })}
      </div>
    );
  };

  const renderLink = (data) => {
    return (
      <div className="main-menu__more-layout">
        {data?.map(item => {
          const { url, title } = item;
          return (
            <Link to={url} key={title}>
              {title}
              <Icon className="ml1" name="collapse_arrow_right" size={10} />
            </Link>
          )
        })}
      </div>
    )
  }

  const renderTabContent = tab => {
    const tabData = tabs.find(i => i.value === tab)?.data;
    if (tab === "gamefi") {
      return (
        <div className="main-menu__inner-layout">
          {MainMenuFunction.renderVerticalMenu({ data: tabData?.rankingsData })}
          {MainMenuFunction.renderVerticalMenu({ data: tabData?.industryData })}
          {MainMenuFunction.renderVerticalMenu({ data: tabData?.gameData })}
          {renderLink([{title: "Submit Contract", url: "/submit/contract/add" },{title: "More", url: "/research/gamefi"}])}
        </div>
      );
    }
    if (tab === "nft") {
      return (
        <div className="main-menu__inner-layout">
          <div className="flex flex-column">
            {MainMenuFunction.renderVerticalMenu({ data: tabData?.rankingsData })}
            {MainMenuFunction.renderVerticalMenu({
              data: tabData?.collectionData,
              title: "COLLECTION",
              className: "main-menu__inner-single-collection",
            })}
          </div>
          {MainMenuFunction.renderVerticalMenu({ data: tabData?.signalsData })}
          {MainMenuFunction.renderVerticalMenu({ data: tabData?.industryData })}
          {renderLink([{title: "Submit Contract", url: "/submit/contract/add" },{title: "More", url: "/research/nft"}])}
        </div>
      );
    }
    if (tab === "chain") {
      return (
        <div className="main-menu__inner-layout">
          {MainMenuFunction.renderVerticalMenu({ data: tabData?.industryData })}
          <div className="main-menu__inner-chain-layout">
            {MainMenuFunction.renderChainLayout({ data: tabData?.layoutData, title: "LAYER1" })}
            {MainMenuFunction.renderChainLayout({ data: tabData?.layout2Data, title: "LAYER2" })}
            {MainMenuFunction.renderStandardShow({ data: tabData?.addData, className: "mt4" })}
          </div>
        </div>
      );
    }
    if (tab === "wallet") {
      return (
        <>
          {MainMenuFunction.renderVerticalMenu({ data: tabData?.walletTrackerData, className: "main-menu__wallet-padding" })}
          <div className="main-menu__wallet-right">
            {MainMenuFunction.renderStandardImageText({ data: tabData?.walletDescData })}
          </div>
        </>
      );
    }
  };

  return (
    <div className="main-menu__research-content">
      {renderTabs(tabs)}
      <div className="main-menu__line" />
      <div className="main-menu__inner">
        {renderTabContent(select)}
      </div>
    </div>
  );
};

export default ResearchContent;
