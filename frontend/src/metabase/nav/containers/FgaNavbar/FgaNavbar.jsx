/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-component-props */
import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import "./FgaNavbar.css";
import PropTypes from "prop-types";
import { Button, Modal as AntdModal } from "antd";
import { getChannel } from "metabase/selectors/app";
import { logout } from "metabase/auth/actions";
import {
  getCancelFeedback,
  getCreateFgaProjectModalShow,
  getCreateModalShow,
  getIsUserFeedbackBlock,
  getLoginModalDefaultRegister,
  getLoginModalRedirect,
  getLoginModalShow,
  getSubmitAddrZkspaceModal,
} from "metabase/selectors/control";
import {
  cancelFeedbackAction,
  createFgaProjectModalShowAction,
  createModalShowAction,
  loginModalShowAction,
  setIsCancelFeedbackBlockAction,
  setSubmitAddrZkspaceModal,
} from "metabase/redux/control";
import GaProjectSearch from "metabase/growth/components/GaProjectSearch";
import ProfileLink from "metabase/nav/components/ProfileLink";
import Link from "metabase/core/components/Link";
import LoginModal from "metabase/auth/containers/LoginModal";
import { getOssUrl } from "metabase/lib/image";
import { trackStructEvent } from "metabase/lib/analytics";
import Modal from "metabase/components/Modal";
import CreateActionModal from "metabase/components/CreateActionModal";
import { color } from "metabase/lib/colors";
import Icon from "metabase/components/Icon";
import UserCancelFeedbackModal from "metabase/components/UserCancelFeedbackModal";
import LogoIcon from "metabase/components/LogoIcon";
import EntityMenu from "metabase/components/EntityMenu";
import UserAvatar from "metabase/components/UserAvatar";
import CreateProjectModal from "metabase/growth/components/Modal/CreateProjectModal";
import { checkIsNeedContactUs, isFgaPath } from "metabase/growth/utils/utils";
import { getContext, getPath, getUser } from "../selectors";

import { isDark } from "../../../dashboard/components/utils/dark";

const mapStateToProps = (state, props) => ({
  path: getPath(state, props),
  context: getContext(state, props),
  user: getUser(state),
  loginModalShow: getLoginModalShow(state, props),
  loginModalDefaultRegister: getLoginModalDefaultRegister(state, props),
  createFgaProjectModalShow: getCreateFgaProjectModalShow(state, props),
  loginModalRedirect: getLoginModalRedirect(state, props),
  createModalShow: getCreateModalShow(state, props),
  cancelFeedback: getCancelFeedback(state, props),
  getIsUserFeedbackBlock: getIsUserFeedbackBlock(state, props),
  getSubmitAddrZkspaceModal: getSubmitAddrZkspaceModal(state, props),
  channel: getChannel(state) || "homepage",
});

const mapDispatchToProps = {
  onChangeLocation: push,
  setLoginModalShow: loginModalShowAction,
  setCreateFgaProjectModalShowAction: createFgaProjectModalShowAction,
  setCreateModalShow: createModalShowAction,
  cancelFeedbackAction,
  setIsCancelFeedbackBlockAction,
  setSubmitAddrZkspaceModal,
  logout,
};

// @Database.loadList({
//   // set this to false to prevent a potential spinner on the main nav
//   loadingAndErrorWrapper: false,
// })
class FgaNavbar extends Component {
  static propTypes = {
    context: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    user: PropTypes.object,
  };

  state = {
    sideNavModal: false,
    showZkspaceModal: true,
    // isProjectModalOpen: false,
  };

  forceLogin() {
    const { user, setLoginModalShow } = this.props;
    // if (!user) {
    //   setLoginModalShow({ show: true, from: "navbar_fga_signin" });
    // }
  }

  componentDidUpdate() {
    this.forceLogin();
  }

  componentDidMount() {
    this.forceLogin();
  }

  isActive(path) {
    return this.props.path === path;
  }
  renderModal() {
    const {
      createModalShow,
      setCreateModalShow,
      // onChangeLocation,
    } = this.props;

    return (
      createModalShow && (
        <Modal
          className="w-auto"
          ModalClass="z-index-top"
          onClose={() => setCreateModalShow({ show: false })}
        >
          <CreateActionModal
            showNewDashboard={() => {
              const newDashboardUrl = `${
                isFgaPath() ? "/growth" : ""
              }/dashboard/new`;
              window.open(newDashboardUrl);
            }}
            onClose={() => setCreateModalShow({ show: false })}
            onCloseSideBar={this.props.onClose}
          />
        </Modal>
      )
    );
  }

  renderEmptyNav() {
    return (
      // NOTE: DO NOT REMOVE `Nav` CLASS FOR NOW, USED BY MODALS, FULLSCREEN DASHBOARD, ETC
      // TODO: hide nav using state in redux instead?
      <nav className="fga-Nav sm-py1 relative">
        <ul className="wrapper flex align-center">
          <li>
            <Link
              to="/growth"
              data-metabase-event={"Navbar;Logo"}
              className="NavItem cursor-pointer flex align-center"
              onClick={e => {
                e.preventDefault();
                this.goLink(e, "/growth");
              }}
            >
              <LogoIcon className="text-brand my2" />
            </Link>
          </li>
        </ul>
        {this.renderLoginModal()}
      </nav>
    );
  }
  needCancelFeedbackBlock = ({ afterSuccess }) => {
    if (this.props.getIsUserFeedbackBlock) {
      const { isBlock, scene } = this.props.getIsUserFeedbackBlock();
      if (isBlock) {
        this.props.cancelFeedbackAction({
          show: true,
          afterSuccess,
          type: "edit",
          scene,
          isLimit: true,
        });
        return true;
      }
    }
    return false;
  };
  renderLoginModal() {
    const {
      location,
      loginModalShow,
      loginModalRedirect,
      loginModalDefaultRegister,
      setLoginModalShow,
    } = this.props;
    const isSignOutDemoAccount = localStorage.getItem("sign-out-demo-account");
    return (
      <LoginModal
        isOpen={loginModalShow}
        onClose={() => setLoginModalShow({ show: false })}
        from={location.query.from}
        channel={"FGA"}
        location={this.props.location}
        fromNav={true}
        defaultRegister={loginModalDefaultRegister}
        redirect={loginModalRedirect}
        hideClose={false}
        signTabState={isSignOutDemoAccount ? "signUp" : "signIn"}
      />
    );
  }
  renderCancelFeedbackModal() {
    const { cancelFeedbackAction, cancelFeedback } = this.props;
    return (
      <UserCancelFeedbackModal
        visible={cancelFeedback.show}
        cancelFeedback={cancelFeedback}
        onClose={() => cancelFeedbackAction({ show: false })}
        onSubmit={() => {}}
      />
    );
  }

  goLink = (e, url, open = false) => {
    e.preventDefault();
    this.setState({ sideNavModal: false });
    const afterSuccess = () => {
      if (open) {
        window.open(url);
      } else {
        this.props.onChangeLocation(url);
      }
    };
    const block = this.needCancelFeedbackBlock({ afterSuccess });
    if (block) {
      return;
    }
    afterSuccess();
  };

  renderNavEntityMenu({ item, className, fromDrawer }) {
    if (fromDrawer) {
      return (
        <div className="flex flex-column w-full">
          <div className={className}>
            {/*{item.icon && <Icon name={item.icon} size={16} />}*/}
            <span>{item.name}</span>
            <Icon className="ml1" name="search_arrow_up" size={12} />
          </div>
          <div>
            {item.menu.map((item, index) => {
              return (
                <Link
                  className={className}
                  key={index}
                  to={item.link}
                  target={item.externalLink ? "_blank" : null}
                  onClick={e => {
                    this.goLink(e, item.link, item.externalLink);
                    trackStructEvent(`navbar-click-${item.title}`);
                  }}
                >
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <EntityMenu
        items={item.menu}
        triggerProps={{
          style: {
            color: "#5F6368",
            marginTop: 20,
          },
        }}
        hasArrow={true}
        hasBackground={true}
        menuShiftY={0}
        renderChildren={
          <div
            className={className}
            onClick={() => trackStructEvent(`navbar-click-${item.name}`)}
          >
            {/*{item.icon && <Icon name={item.icon} size={16} />}*/}
            <span>{item.name}</span>
            <Icon className="ml1" name="search_arrow_up" size={12} />
          </div>
        }
      />
    );
  }

  renderMainNav() {
    const {
      user,
      setLoginModalShow,
      setCreateModalShow,
      setCreateFgaProjectModalShowAction,
      createFgaProjectModalShow,
      location,
      onChangeLocation,
    } = this.props;
    const rootDisplay = window.location.pathname.startsWith("/defi360")
      ? "none"
      : "flex";

    const MobileMenuIcon = () => {
      return (
        <div
          className="Nav__side-menu-icon"
          onClick={() => this.setState({ sideNavModal: true })}
        >
          <Icon name="menu" size={16} />
          <span>Menu</span>
        </div>
      );
    };

    const RightMenuPad = () => {
      const color2 = isDark ? "white" : color("footprint-color-title");
      const [modal, contextHolder] = AntdModal.useModal();
      return (
        <div className="Nav__right-pad-icon">
          {contextHolder}
          <Link to="/growth/pricing">
            <Icon name="price" color={color2} />
          </Link>
          <Link
            onClick={() => {
              onCreateAction(modal);
            }}
          >
            <Icon name="add" size={12} color={color2} />
          </Link>
        </div>
      );
    };

    const RightMenuMobile = () => {
      const color2 = isDark ? "white" : color("footprint-color-title");
      const [modal, contextHolder] = AntdModal.useModal();
      return (
        <div className="Nav__right-mobile-icon">
          {contextHolder}
          <Link to="/growth/pricing">
            <Icon name="price" color={color2} />
          </Link>
          <Link
            onClick={() => {
              onCreateAction(modal);
            }}
          >
            <Icon name="add" size={12} />
          </Link>
        </div>
      );
    };

    const CreateMenu = () => {
      const [modal, contextHolder] = AntdModal.useModal();
      return (
        <>
          <div
            className="bg-brand Nav__menu-create footprint-primary-text"
            onClick={e => {
              e.preventDefault();
              onCreateAction(modal);
            }}
          >
            <Icon name="plus" size={12} />
            <span>Add My Project</span>
          </div>
          {contextHolder}
        </>
      );
    };

    const onCreateAction = modal => {
      trackStructEvent(`click Navbar Add My Project`);
      console.log("onCreateAction");
      if (user) {
        checkIsNeedContactUs(
          modal,
          null,
          () => {
            setCreateFgaProjectModalShowAction({ show: true });
          },
          () => {},
          true,
        );
        // this.setState({ ...this.state, isProjectModalOpen: true });
      } else {
        setLoginModalShow({ show: true, from: "navbar_fga_signin" });
      }
    };

    const RightMenu = () => {
      return (
        <div className="Nav__right">
          <Button
            size="large"
            onClick={() => {
              this.props.onChangeLocation("/growth/pricing");
            }}
            style={{color:"white"}}
            type="text"
          >
            Pricing
          </Button>
          {/* <CreateMenu /> */}
          <React.Fragment>
            <RightMenuMobile />
            <RightMenuPad />
          </React.Fragment>
          {user ? (
            <ProfileLink
              {...this.props}
              onLogout={() => {
                this.props.logout(location.pathname);
              }}
              trigger={
                <div className="relative" style={{ padding: 10 }}>
                  <UserAvatar
                    user={user}
                    size={["2.5em", "2.5em"]}
                    bg="#6C70FF"
                  />
                  {/*<div
                    className="absolute right bottom mb1"
                    style={{ marginRight: 2 }}
                  >
                    <VipIcon user={user} />
                  </div>*/}
                </div>
              }
            />
          ) : (
            <Link
              className="Nav__sign-up"
              onClick={() => {
                trackStructEvent(`click Sign in`);
                setLoginModalShow({ show: true, from: "navbar_fga_signin" });
              }}
            >
              Sign in
            </Link>
          )}
        </div>
      );
    };
// className={ "dark"}
    return (
      <div className="fga-Nav" style={{ display: rootDisplay,backgroundColor:'var(--color-bg-dark)' }}>
        <div className="Nav__left">
          <MobileMenuIcon />
          <Link
            className="Nav__logo"
            to="/growth"
            onClick={e => {
              e.preventDefault();
              trackStructEvent(`navbar-click-logo`);
              this.goLink(e, "/growth");
            }}
          >
            <img
              src={getOssUrl(
                isDark ? "img_logo_ga_dark.svg" : "20230228153645.svg",
              )}
              width={160}
              height={42}
              style={{ marginBottom: 2 }}
              alt="Footprint Growth Analytics - One Step Closer to Blockchain Marketing Insights"
            />
          </Link>
          {/* <LeftMenu /> */}
        </div>
        <React.Fragment>
          <div className="Nav__search-bar">
            <GaProjectSearch
              location={location}
              logout={this.props.logout}
              setCreateFgaProjectModalShowAction={
                setCreateFgaProjectModalShowAction
              }
            ></GaProjectSearch>
          </div>
          <div className="Nav__mobile-logo">
            <Link
              className="Nav__logo"
              to="/growth"
              onClick={e => {
                e.preventDefault();
                trackStructEvent(`navbar-click-logo`);
                this.goLink(e, "/growth");
              }}
            >
              <img
                src={getOssUrl("img_nav_logo_mobile.svg")}
                width={40}
                height={36}
                alt="Footprint - One Step Closer to Blockchain Insights"
              />
            </Link>
          </div>
        </React.Fragment>
        <RightMenu />
        {this.renderModal()}
        {this.renderLoginModal()}
        {this.renderCancelFeedbackModal()}
        <CreateProjectModal
          open={createFgaProjectModalShow?.show}
          force={createFgaProjectModalShow?.force}
          location={location}
          onSuccess={() => {
            setCreateFgaProjectModalShowAction({ show: false });
          }}
          onCancel={() => {
            setCreateFgaProjectModalShowAction({ show: false });
          }}
        ></CreateProjectModal>
      </div>
    );
  }

  render() {
    const { context } = this.props;
    switch (context) {
      case "auth":
        return null;
      case "none":
        return this.renderEmptyNav();
      case "setup":
        return null;
      default:
        return this.renderMainNav();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FgaNavbar);
