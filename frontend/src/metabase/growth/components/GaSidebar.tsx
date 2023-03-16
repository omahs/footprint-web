import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
const { Sider } = Layout;
import "../css/utils.css";
import {
  getGrowthProjectPath,
  getLatestGAMenuTag,
  saveLatestGAMenuTag,
  getLatestGAProject,
} from "../utils/utils";

interface IGaSidebarProp {
  className?: string;
  currentProject?: string;
  router: any;
  currentTab?: string;
  location: any;
  items: any[];
  projects?: any[];
}
export default function GaSidebar(prop: IGaSidebarProp) {
  const { currentProject, router, location, items, currentTab } = prop;
  const rootSubmenuKeys: any[] = [];
  items?.map(i => {
    rootSubmenuKeys.push(i.key);
  });
  const [tab, setTab] = useState<string>(currentTab!);
  useEffect(() => {
    setTab(currentTab ?? getLatestGAMenuTag() ?? items[0]?.key);
  }, [currentTab, items]);

  const [openKeys, setOpenKeys] = useState<string[]>([currentTab!]);

  const onOpenChange: MenuProps["onOpenChange"] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Sider
      trigger={null}
      width="250px"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        height: "100%",
        position: "fixed",
        background: "white",
        borderRight: "1px solid #dcdee4",
      }}
    >
      <Menu
        style={{
          borderRight: "0px",
          width: "100%",
          paddingBottom: 50,
          paddingTop: 20,
        }}
        theme="light"
        // className="ant-menu-inline ant-menu-item"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={[tab!]}
        onSelect={item => {
          saveLatestGAMenuTag(item.key);
          router.push({
            pathname: getGrowthProjectPath(
              currentProject ?? getLatestGAProject() ?? "",
              item.key,
            ),
            // query: { ...location.query, tab: item.key },
          });
        }}
        items={items}
      />
    </Sider>
  );
}
