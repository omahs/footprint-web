/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useState } from "react";
import { Button, message, Table, Tag } from "antd";
import { capitalize } from "lodash";
import EditUserUpgradeModal from "metabase/containers/market/upgrade/compoment/edit";
import EditUserTagModal from "metabase/containers/market/upgrade/compoment/tag";
import { updateVipLevel, userList } from "metabase/new-service";
import Tags from "metabase/containers/dashboards/components/Tags";
import Link from "metabase/core/components/Link";

const VipList = props => {
  const { user, vip, router, searchText, current, setCurrent } = props;
  const [dataSource, setDataSource] = useState([]);
  const [vipUpgradeItem, setVipUpgradeItem] = useState({});
  const [tagItem, setTagItem] = useState({});
  const [total, setTotal] = useState(0);
  const pageSize = 10;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = useCallback(async (searchText, current) => {
    const { data, total } = await userList(
      searchText ? { q: searchText, current, pageSize } : { current, pageSize },
    );
    setDataSource(data);
    setTotal(total);
  }, []);

  useEffect(() => {
    const run = async () => {
      await getData(searchText || "", current);
    };
    run();
  }, [searchText, current, getData]);

  const columns = [
    {
      title: "name",
      key: "name",
      width: 200,
      render: item => (
        <Link to={`/@${item.name}`} target="_blank">
          {item.name}
        </Link>
      ),
    },
    {
      title: "email",
      key: "email",
      render: item => (
        <Link to={`/@${item.name}`} target="_blank">
          {item.email}
        </Link>
      ),
    },
    {
      title: "tags",
      dataIndex: "tags",
      key: "tags",
      width: 400,
      // eslint-disable-next-line react/display-name
      render: tags =>
        tags?.length ? <Tags router={router} list={tags.slice(0, 10)} /> : "-",
    },
    {
      title: "vip",
      dataIndex: "vipInfos",
      key: "vip",
      width: 400,
      render: vipInfos => (
        <>
          {
            vipInfos.map(vip => {
              if (vip.isExpire) {
                return null
              }
              return (
                <Tag color="green" key={vip.type}>
                  {capitalize(vip.type)} {vip.validEndDate.slice(0, 10)}
                </Tag>
              )
            })
          }
        </>
      )
    },
    // {
    //   title: "type",
    //   dataIndex: "type",
    //   key: "type",
    //   width: 100,
    //   className: "upgrade__column-type",
    // },
    // {
    //   title: "validEndDate",
    //   dataIndex: "validEndDate",
    //   key: "validEndDate",
    //   width: 200,
    // },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      // eslint-disable-next-line react/display-name
      render: item => {
        return (
          <div className="flex">
            <a
              onClick={e => {
                e.preventDefault();
                setVipUpgradeItem(item);
              }}
            >
              <Button type="primary">Upgrade</Button>
            </a>
            <span className="ml1" />
            <a
              onClick={e => {
                e.preventDefault();
                setTagItem(item);
              }}
            >
              <Button type="ghost">Tags</Button>
            </a>
          </div>
        );
      },
    },
  ];

  const editApi = async data => {
    const hide = message.loading("Loading...", 0);
    await updateVipLevel(data);
    await getData(searchText);
    hide();
  };

  return (
    <div className="vip-list" style={{ padding: 20 }}>
      <Table
        pagination={{
          position: ["bottomCenter"],
          current,
          pageSize,
          total,
          showSizeChanger: false,
          onChange: page => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrent(page);
          },
        }}
        size={"middle"}
        dataSource={dataSource}
        columns={columns}
      />
      {vipUpgradeItem?.id && (
        <EditUserUpgradeModal
          user={user}
          vip={vip}
          item={vipUpgradeItem}
          onSubmit={(value, id) => {
            const data = {
              userId: id,
              type: value.type,
              days: parseInt(value.days),
            };
            editApi(data);
            setVipUpgradeItem({});
          }}
          onClose={() => {
            setVipUpgradeItem({});
          }}
        />
      )}
      {tagItem?.id && (
        <EditUserTagModal
          user={user}
          vip={vip}
          item={tagItem}
          onClose={() => {
            getData(searchText || "", current);
            setTagItem({});
          }}
        />
      )}
    </div>
  );
};

export default VipList;
