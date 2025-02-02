import React, { ErrorInfo, ReactNode, useState } from "react";
import { connect } from "react-redux";
import { Location } from "history";
import Meta from "metabase/components/Meta";
import { getUser } from "metabase/selectors/user";
import { getOssUrl } from "metabase/lib/image";
import ScrollToTop from "metabase/hoc/ScrollToTop";
import {
  Archived,
  GenericError,
  NotFound,
  Unauthorized,
} from "metabase/containers/ErrorPages";
import UndoListing from "metabase/containers/UndoListing";

import {
  getErrorPage,
  getIsAdminApp,
  getIsAppBarVisible,
  getIsNavBarVisible,
} from "metabase/selectors/app";
import { setErrorPage, setChannel } from "metabase/redux/app";
import { useOnMount } from "metabase/hooks/use-on-mount";
import { initializeIframeResizer } from "metabase/lib/dom";

import Navbar from "metabase/nav/containers/Navbar";
import StatusListing from "metabase/status/containers/StatusListing";
import { ContentViewportContext } from "metabase/core/context/ContentViewportContext";

import { AppErrorDescriptor, State } from "metabase-types/store";

import GlobalContactPanel from "metabase/components/GlobalContactPanel/";

import { AppContainer, AppContent, AppContentContainer } from "./App.styled";
import GaLayout from "./growth/components/GaLayout";
import cx from "classnames";
import { ConfigProvider, theme } from "antd";
import { isDark } from "./dashboard/components/utils/dark";
import getThemeConfig from "./theme-helper";

const getErrorComponent = ({ status, data, context }: AppErrorDescriptor) => {
  if (status === 403 || data?.error_code === "unauthorized") {
    return <Unauthorized />;
  }
  if (status === 404 || data?.error_code === "not-found") {
    return <NotFound />;
  }
  if (data?.error_code === "archived" && context === "dashboard") {
    return <Archived entityName="dashboard" linkTo="/dashboards/archive" />;
  }
  if (data?.error_code === "archived" && context === "query-builder") {
    return <Archived entityName="question" linkTo="/questions/archive" />;
  }
  return <GenericError details={data?.message} />;
};

interface AppStateProps {
  user: any;
  errorPage: AppErrorDescriptor | null;
  isAdminApp: boolean;
  bannerMessageDescriptor?: string;
  isAppBarVisible: boolean;
  isNavBarVisible: boolean;
}

interface AppDispatchProps {
  onError: (error: unknown) => void;
  setChannel: any;
}

interface AppRouterOwnProps {
  location: Location;
  children: ReactNode;
}

type AppProps = AppStateProps & AppDispatchProps & AppRouterOwnProps;

const mapStateToProps = (
  state: State,
  props: AppRouterOwnProps,
): AppStateProps => ({
  user: getUser(state),
  errorPage: getErrorPage(state),
  isAdminApp: getIsAdminApp(state, props),
  isAppBarVisible: getIsAppBarVisible(state, props),
  isNavBarVisible: getIsNavBarVisible(state, props),
});

const mapDispatchToProps: AppDispatchProps = {
  onError: setErrorPage,
  setChannel,
};

class ErrorBoundary extends React.Component<{
  onError: (errorInfo: ErrorInfo) => void;
}> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError(errorInfo);
  }

  render() {
    return this.props.children;
  }
}

function App({
  errorPage,
  isAdminApp,
  isAppBarVisible,
  isNavBarVisible,
  children,
  onError,
  location,
  setChannel,
  user,
}: AppProps) {
  const [viewportElement, setViewportElement] = useState<HTMLElement | null>();
  const hideScrollbar = location.pathname === "/";
  const isFga = location.pathname.startsWith("/growth");
  const handleChannel = () => {
    const channel = location.query.channel || location.query.cnl || "homepage";
    setChannel(channel);
    if (window && window.gtag) {
      window.gtag("set", "user_properties", { channel: channel });
    }
  };

  useOnMount(() => {
    initializeIframeResizer();
    handleChannel();
  });

  return (
    <React.Fragment>
      <Meta
        title="Footprint Analytics"
        // description="Explore Cross-Chain Web3.0 Data about NFTs, GameFi, Metaverse and DeFi(Decentralized Finance) DApps here. A platform for discovering and visualizing blockchain data without coding."
        image={getOssUrl("Footprint_v2.jpeg")}
        imageWidth={1200}
        imageHeight={630}
        siteName="Footprint"
        viewport={0.3}
        description={undefined}
        keywords={undefined}
      />
      <ConfigProvider theme={getThemeConfig()}>
        <ErrorBoundary onError={onError}>
          <ScrollToTop>
            <AppContainer className="spread">
              {/*<AppBanner />*/}
              {/*{isAppBarVisible && <AppBar isNavBarVisible={isNavBarVisible} />}*/}
              <AppContentContainer
                // className={ "dark"}
                className={isDark() ? "dark" : ""}
                isAdminApp={isAdminApp}
              >
                {isNavBarVisible && <Navbar location={location} />}

                <AppContent
                  className={cx({ "scroll-hide-all": hideScrollbar })}
                  id="app-content"
                  ref={setViewportElement}
                  key={`${user?.id}`}
                  style={{
                    backgroundColor: isDark() ? "#121828" : "transparent",
                  }}
                >
                  <ContentViewportContext.Provider
                    value={viewportElement ?? null}
                  >
                    {isFga ? (
                      <GaLayout>
                        {errorPage ? getErrorComponent(errorPage) : children}
                      </GaLayout>
                    ) : (
                      <>{errorPage ? getErrorComponent(errorPage) : children}</>
                    )}
                  </ContentViewportContext.Provider>
                </AppContent>
                <UndoListing />
                <GlobalContactPanel />
                <StatusListing />
              </AppContentContainer>
            </AppContainer>
          </ScrollToTop>
        </ErrorBoundary>
      </ConfigProvider>
    </React.Fragment>
  );
}

export default connect<AppStateProps, unknown, AppRouterOwnProps, State>(
  mapStateToProps,
  mapDispatchToProps,
)(App);
