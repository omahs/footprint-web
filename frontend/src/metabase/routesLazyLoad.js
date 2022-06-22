import loadable from "@loadable/component";

// prettier-ignore
export default {
  // main
  News: loadable(() => import("metabase/containers/news")),
  Featured: loadable(() => import("metabase/containers/news/featured")),
  Articles: loadable(() => import("metabase/containers/news/articles")),
  WriteForUs: loadable(() => import("metabase/containers/news/writeForUs")),
  ArticleDetail: loadable(() => import("metabase/containers/news/detail")),
  Publish: loadable(() => import("metabase/containers/news/publish")),
  Upgrade: loadable(() => import("metabase/containers/market/upgrade")),
  Market: loadable(() => import("metabase/containers/market/picture")),
  App: loadable(() => import("metabase/App.jsx")),
  HomepageApp: loadable(() => import("metabase/home/containers/HomepageApp")),
  AuthApp: loadable(() => import("metabase/auth/AuthApp")),
  ForgotPasswordApp: loadable(() => import("metabase/auth/containers/ForgotPasswordApp")),
  LoginApp: loadable(() => import("metabase/auth/containers/LoginApp")),
  Register: loadable(() => import("metabase/auth/containers/Register")),
  LogoutApp: loadable(() => import("metabase/auth/containers/LogoutApp")),
  PasswordResetApp: loadable(() => import("metabase/auth/containers/PasswordResetApp")),
  DashboardApp: loadable(() => import("metabase/dashboard/containers/DashboardApp")),
  BrowseApp: loadable(() => import("metabase/browse/components/BrowseApp")),
  DatabaseBrowser: loadable(() => import("metabase/browse/containers/DatabaseBrowser")),
  SchemaBrowser: loadable(() => import("metabase/browse/containers/SchemaBrowser")),
  TableBrowser: loadable(() => import("metabase/browse/containers/TableBrowser")),
  Question: loadable(() => import("metabase/query_builder/containers/Question")),
  CollectionEdit: loadable(() => import("metabase/collections/containers/CollectionEdit")),
  CollectionCreate: loadable(() => import("metabase/collections/containers/CollectionCreate")),
  ArchiveCollectionModal: loadable(() => import("metabase/components/ArchiveCollectionModal")),
  CollectionPermissionsModal: loadable(() => import("metabase/admin/permissions/components/CollectionPermissionsModal/CollectionPermissionsModal")),
  UserCollectionList: loadable(() => import("metabase/containers/UserCollectionList")),
  SetupApp: loadable(() => import("metabase/setup/containers/SetupApp")),
  PostSetupApp: loadable(() => import("metabase/setup/containers/PostSetupApp")),
  CreateDashboardModal: loadable(() => import("metabase/components/CreateDashboardModal")),
  PublicQuestion: loadable(() => import("metabase/public/containers/PublicQuestion")),
  PublicDashboard: loadable(() => import("metabase/public/containers/PublicDashboard")),
  PublicNotFound: loadable(() => import("metabase/public/components/PublicNotFound")),
  PublicApp: loadable(() => import("metabase/public/containers/PublicApp")),
  ArchiveDashboardModal: loadable(() => import("metabase/dashboard/containers/ArchiveDashboardModal")),
  DashboardHistoryModal: loadable(() => import("metabase/dashboard/components/DashboardHistoryModal")),
  DashboardMoveModal: loadable(() => import("metabase/dashboard/components/DashboardMoveModal")),
  DashboardCopyModal: loadable(() => import("metabase/dashboard/components/DashboardCopyModal")),
  DashboardDetailsModal: loadable(() => import("metabase/dashboard/components/DashboardDetailsModal")),
  CollectionLanding: loadable(() => import("metabase/components/CollectionLanding/CollectionLanding")),
  ArchiveApp: loadable(() => import("metabase/home/containers/ArchiveApp")),
  SearchApp: loadable(() => import("metabase/home/containers/SearchApp")),
  Plans: loadable(() => import("metabase/pricing/index")),
  Explore: loadable(() => import("metabase/containers/explore/index")),
  Features: loadable(() => import("metabase/containers/features/index")),
  GuestDashboard: loadable(() => import("metabase/guest/Dashboard")),
  GuestQuestion: loadable(() => import("metabase/guest/Question")),
  My: loadable(() => import("metabase/containers/my/index")),
  Why: loadable(() => import("metabase/containers/why/index")),
  Zkspace: loadable(() => import("metabase/containers/activity/zkspace/index")),
  Tutorials: loadable(() => import("metabase/containers/tutorials/index")),
  Academy: loadable(() => import("metabase/containers/academy/index")),
  TutorialsVisualizations: loadable(() => import("metabase/containers/tutorials/visualizations")),
  TutorialsVideos: loadable(() => import("metabase/containers/tutorials/videos")),
  TutorialsIndicators: loadable(() => import("metabase/containers/tutorials/indicators")),
  ProjectAnalytics: loadable(() => import("metabase/containers/projects/index")),
  ProjectDetail: loadable(() => import("metabase/containers/projects/detail")),
  ProtocolDetail: loadable(() => import("metabase/containers/protocols/detail")),
  LoginModal: loadable(() => import("metabase/auth/containers/LoginModal")),
  ActivateAccount: loadable(() => import("metabase/containers/activate")),
  Dashboards: loadable(() => import("metabase/containers/dashboards")),
  CustomUpload: loadable(() => import("metabase/containers/customUpload")),
  Search: loadable(() => import("metabase/containers/search")),
  Protocols: loadable(() => import("metabase/containers/protocols")),
  Creator: loadable(() => import("metabase/containers/creator")),
  Widget: loadable(() => import("metabase/containers/widget")),
  About: loadable(() => import("metabase/containers/about")),

  // account
  AccountSettingsApp: loadable(() => import("./account/settings/containers/AccountSettingsApp")),
  UserProfileApp: loadable(() => import("./account/profile/containers/UserProfileApp")),
  UserPasswordApp: loadable(() => import("./account/password/containers/UserPasswordApp")),
  DeveloperApp: loadable(() => import("./account/developer/containers/DeveloperApp")),
  LoginHistoryApp: loadable(() => import("./account/login-history/containers/LoginHistoryApp")),
  NotificationsApp: loadable(() => import("./account/notifications/containers/NotificationsApp")),
  HelpModal: loadable(() => import("./account/notifications/components/HelpModal")),
  ArchiveAlertModal: loadable(() => import("./account/notifications/containers/ArchiveAlertModal")),
  ArchivePulseModal: loadable(() => import("./account/notifications/containers/ArchivePulseModal")),
  UnsubscribeAlertModal: loadable(() => import("./account/notifications/containers/UnsubscribeAlertModal")),
  UnsubscribePulseModal: loadable(() => import("./account/notifications/containers/UnsubscribePulseModal")),

  // admin
  CollectionPermissionsPage: loadable(() => import("./admin/permissions/pages/CollectionPermissionsPage/CollectionPermissionsPage")),
  DatabasesPermissionsPage: loadable(() => import("./admin/permissions/pages/DatabasePermissionsPage/DatabasesPermissionsPage")),
  GroupsPermissionsPage: loadable(() => import("./admin/permissions/pages/GroupDataPermissionsPage/GroupsPermissionsPage")),
  DataPermissionsPage: loadable(() => import("./admin/permissions/pages/DataPermissionsPage/DataPermissionsPage")),
  NewUserModal: loadable(() => import("metabase/admin/people/containers/NewUserModal")),
  UserSuccessModal: loadable(() => import("metabase/admin/people/containers/UserSuccessModal")),
  UserPasswordResetModal: loadable(() => import("metabase/admin/people/containers/UserPasswordResetModal")),
  EditUserModal: loadable(() => import("metabase/admin/people/containers/EditUserModal")),
  UserActivationModal: loadable(() => import("metabase/admin/people/containers/UserActivationModal")),
  SettingsEditorApp: loadable(() => import("metabase/admin/settings/containers/SettingsEditorApp")),
  DatabaseListApp: loadable(() => import("metabase/admin/databases/containers/DatabaseListApp")),
  DatabaseEditApp: loadable(() => import("metabase/admin/databases/containers/DatabaseEditApp")),
  DataModelApp: loadable(() => import("metabase/admin/datamodel/containers/DataModelApp")),
  MetadataEditorApp: loadable(() => import("metabase/admin/datamodel/containers/MetadataEditorApp")),
  MetricListApp: loadable(() => import("metabase/admin/datamodel/containers/MetricListApp")),
  MetricApp: loadable(() => import("metabase/admin/datamodel/containers/MetricApp")),
  SegmentListApp: loadable(() => import("metabase/admin/datamodel/containers/SegmentListApp")),
  SegmentApp: loadable(() => import("metabase/admin/datamodel/containers/SegmentApp")),
  RevisionHistoryApp: loadable(() => import("metabase/admin/datamodel/containers/RevisionHistoryApp")),
  AdminPeopleApp: loadable(() => import("metabase/admin/people/containers/AdminPeopleApp")),
  FieldApp: loadable(() => import("metabase/admin/datamodel/containers/FieldApp")),
  TableSettingsApp: loadable(() => import("metabase/admin/datamodel/containers/TableSettingsApp")),
  TroubleshootingApp: loadable(() => import("metabase/admin/tasks/containers/TroubleshootingApp")),
  TasksApp: loadable(() => import("metabase/admin/tasks/containers/TasksApp")),
  TaskModal: loadable(() => import("metabase/admin/tasks/containers/TaskModal")),
  JobInfoApp: loadable(() => import("metabase/admin/tasks/containers/JobInfoApp")),
  JobTriggersModal: loadable(() => import("metabase/admin/tasks/containers/JobTriggersModal")),
  Logs: loadable(() => import("metabase/admin/tasks/containers/Logs")),
  Help: loadable(() => import("metabase/admin/tasks/containers/Help")),
  PeopleListingApp: loadable(() => import("metabase/admin/people/containers/PeopleListingApp")),
  GroupsListingApp: loadable(() => import("metabase/admin/people/containers/GroupsListingApp")),
  GroupDetailApp: loadable(() => import("metabase/admin/people/containers/GroupDetailApp")),

  // defi
  DeFiLayout: loadable(() => import("./defi/components/Layout")),
  DeFiAbout: loadable(() => import("./defi/containers/About")),
  DeFiDashboard: loadable(() => import("./defi/containers/Dashboard")),
  DeFiDemo: loadable(() => import("./defi/containers/Demo")),
}