/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  Modal,
  Select,
  Button,
  Descriptions,
  Input,
  Card,
  Image,
  Divider,
  Spin,
  message,
} from "antd";
import {
  EditOutlined,
  LoadingOutlined,
  DeleteOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { dashboardIdInfo, AddWebsiteNesting } from "metabase/new-service";
import { getUser } from "metabase/selectors/user";
import { parseDashboardLink } from "metabase/growth/utils/utils";

const AddMyAnalysisModal = props => {
  const { open, onCancel, onSuccess, user, project } = props;
  const [currentValue, setCurrentValue] = useState("");
  const [dashboardInfo, setDashboardInfo] = useState({});
  const [previewLoading, setPreviewLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const addNewDashboard = async dashboardInfo => {
    setLoading(true);
    const param = { ...dashboardInfo, projectId: project?.id };
    console.log("save", param);
    try {
      const { id } = await AddWebsiteNesting(param);
      message.success("Successfully added!");
      onSuccess?.();
    } catch (error) {
      message.error("Failed to add :" + error);
    }
    setLoading(false);
  };

  const getDashboardInfo = async (urlDashboardName, urlUserName, query) => {
    console.log("getDashboardInfo", urlDashboardName, urlUserName);
    try {
      const { uuid, id } = await dashboardIdInfo({
        dashboardName: encodeURIComponent(urlDashboardName),
        userName: urlUserName,
      });
      console.log("getDashboardInfo", uuid, id);
      setDashboardInfo({
        title: urlDashboardName,
        url: `https://www.footprint.network/growth/public/dashboard/${uuid}?${query}`,
        imageUrl: `https://statichk.footprint.network/dashboard/${id}.png?image_process=resize,w_600/crop,h_310/format,jpg`,
      });
    } catch (error) {
      setDashboardInfo({});
      message.error("The link provided is not valid. ");
    }
    setPreviewLoading(false);
  };
  const handleInputChange = debounce(val => {
    if (currentValue !== val) {
      setCurrentValue(val);
    }
  }, 1000);
  useEffect(() => {
    if (currentValue) {
      setPreviewLoading(true);
      const info = parseDashboardLink(currentValue);
      console.log("parseDashboardLink info", info);
      if (info) {
        const query = currentValue.includes("?")
          ? currentValue.split("?")[1]
          : "";
        getDashboardInfo(info?.dashboardName, info?.username, query);
      } else {
        setDashboardInfo({
          url: currentValue,
          imageUrl: `https://footprint-imgs.oss-us-east-1.aliyuncs.com/img-why-about-us.png`,
          title: "did not find the dashboard",
        });
        setPreviewLoading(false);
      }
    }
  }, [currentValue]);
  return (
    <Modal
      title="Add new one"
      open={open}
      footer={null}
      // onOk={handleOk}
      onCancel={onCancel}
    >
      <Divider className=" my2" />
      <div className="flex flex-col mt2">
        Link:
        <Input
          className="mt1"
          size="large"
          autoFocus
          onChange={e => handleInputChange(e.target.value)}
          placeholder="Please input the new dashboard link here."
        />
        <div className="flex flex-col justify-between mt2">
          <div>
            Preview:{" "}
            {previewLoading && (
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />}
              />
            )}
          </div>

          <Card
            hoverable
            className="mt1"
            bodyStyle={{ padding: 0 }}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderStyle: "solid",
            }}
            cover={
              dashboardInfo?.imageUrl ? (
                <Image
                  preview={false}
                  // fallback="https://footprint-imgs.oss-us-east-1.aliyuncs.com/icon_side_nft.png"
                  style={{
                    background: "#222b47",
                    width: "100%",
                    height: 240,
                  }}
                  src={dashboardInfo?.imageUrl}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#222b47",
                    width: "100%",
                    fontSize: 48,
                    height: 240,
                  }}
                >
                  <FileImageOutlined />
                </div>
              )
            }
          >
            <Input
              prefix={<EditOutlined />}
              style={{ padding: 10 }}
              size="large"
              value={dashboardInfo?.title}
              disabled={!dashboardInfo?.url}
              onChange={e => {
                console.log(e.target.value);
                if (e.target.value !== dashboardInfo?.title) {
                  setDashboardInfo({ ...dashboardInfo, title: e.target.value });
                }
              }}
              bordered={false}
              placeholder="Please input the new dashboard title here."
            />
            {/* <Card.Meta title={"this is some title"} /> */}
          </Card>
        </div>
        <div className="flex flex-row-reverse justify-between mt2">
          <Button
            type="primary"
            disabled={!dashboardInfo?.url}
            loading={loading}
            onClick={() => {
              addNewDashboard(dashboardInfo);
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    user: getUser(state),
  };
};

export default withRouter(connect(mapStateToProps)(AddMyAnalysisModal));
