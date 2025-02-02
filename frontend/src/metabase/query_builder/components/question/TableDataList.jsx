/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Skeleton, Tree, Popover } from "antd";
import cx from "classnames";
import Highlighter from "react-highlight-words";
import { flatten, isNaN, toNumber, union } from "lodash";
import { DownOutlined } from "metabase/lib/ant-icon";
import Icon from "metabase/components/Icon";
import * as MetabaseAnalytics from "metabase/lib/analytics";
import Tooltip from "metabase/components/Tooltip";
import { tableColumns } from "metabase/new-service";
import { canShowNewGuideStart } from "metabase/containers/newguide/newGuide";
import { getSearchTexts } from "metabase/nav/components/utils";
import { getTreeLoadedKeys, NEW_GUIDE_CATEGORY } from "metabase/query_builder/components/question/handle";
import TableBeta from "metabase/query_builder/components/TableBeta";
import Button from "metabase/core/components/Button";
import TableDictionary from "metabase/query_builder/components/TableDictionary";
import TableTimePeriod from "metabase/query_builder/components/TableTimePeriod";

const TableDataList = props => {
  const {
    isLoading,
    isFeature,
    dataSets,
    isEditing,
    handleSelectTable,
    setShowPreviewChart,
    closeTemplateData,
    databaseId,
    databaseName,
    formDataSelector,
    sourceTableId,
    isTooMore,
    user,
    searchKeyValue,
    qs,
    isByCategory,
    isNewQuestion,
    setShowNewGuideStart,
    updateColumnsData,
  } = props;
  const canShowNewGuide = canShowNewGuideStart(user);

  const [firstShowNewGuideStart, setFirstShowNewGuideStart] = useState(true);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const searchWords =
    searchKeyValue?.length > 0 ? getSearchTexts(searchKeyValue) : [];
  const [treeLoadedKeys, setTreeLoadedKeys] = useState([]);

  const showLine = { showLeafIcon: false };
  useEffect(() => {
    if (qs && dataSets?.length > 0) {
      if (!isByCategory) {
        setExpandedKeys([
          ...flatten(dataSets.map(item => item.category.value)),
          // ...flattenDeep(
          //   dataSets.map(
          //     item =>
          //       item.tables &&
          //       item.tables.map(table => `${item.category.value}-${table.id}`),
          //   ),
          // ),
        ]);
      } else {
        //search community
        // setExpandedKeys([...flatten(dataSets.map(item => `${item.id}`))]);
      }
    } else {
      if (dataSets && dataSets.length > 0 && dataSets[0].category) {
        setExpandedKeys([
          ...flatten(
            dataSets
              .filter(item => item.category.value !== "My Dataset")
              .map(item => item.category.value),
          ),
        ]);
      }
      // setExpandedKeys([]);
    }
    if (
      isNewQuestion &&
      canShowNewGuide &&
      dataSets?.length > 0 &&
      firstShowNewGuideStart
    ) {
      setFirstShowNewGuideStart(false);
      setExpandedKeys([...expandedKeys, NEW_GUIDE_CATEGORY]);
      setShowNewGuideStart(true);
    }
    if (!isByCategory) {
      setTreeLoadedKeys([...treeLoadedKeys, ...getTreeLoadedKeys(dataSets)]);
    } else {
      setTreeLoadedKeys([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSets]);

  /*  useEffect(() => {
    if (!qs) {
      setExpandedKeys([]);
    }
  }, [qs]);*/

  if (isLoading) {
    return (
      <div className="flex-full pt1">
        <Skeleton active />
      </div>
    );
  }

  const onExpand = expanded => {
    setExpandedKeys(expanded);
  };

  const setTreeLoadedKeysAppend = key => {
    setTreeLoadedKeys(union([...treeLoadedKeys, key]));
  };

  const onLoadData = async props => {
    const { key, children } = props || {};
    const keyArray = key?.split("-");
    const lastKeyElement = keyArray && keyArray[keyArray.length - 1];
    const tableId = toNumber(lastKeyElement);
    const isTable = !isNaN(tableId);
    return new Promise((resolve) => {
      if (children || !isTable) {
        resolve();
        setTreeLoadedKeysAppend(key);
        return;
      }
      try {
        updateColumns({ tableId: tableId }).then(() => {
          resolve();
          setExpandedKeys([...expandedKeys, key]);
          setTreeLoadedKeysAppend(key);
        });
      } catch (e) {
        console.log(e);
      }
    });
  };

  const updateColumns = async ({ tableId }) => {
    const data = await tableColumns({
      "tableId": tableId,
      "databaseId": databaseId,
    });
    updateColumnsData({ [data.table_id]: data.columns })
  };

  const renderNoData = () => {
    return (
      <div className="question-side-nodata">
        <Icon name="chart_empty" size={30} color={"#84848A"} />
        <span>No results found</span>
      </div>
    );
  };

  const treeChildren = (q, qInx) => {
    const renderTableInfo = n => {
      return (
        <div className="question-side__table-info">
          <h3>{n.name}</h3>
          <div className="question-side__table-info-second">
            <TableTimePeriod content={n.time_period} />
          </div>
          <span className="question-side__table-info-desc">
            {n.description}
          </span>
          <div className="question-side__table-info-line" />
          <div className="question-side__table-info-buttons">
            <Button onClick={e => previewAction(e, n)}>Preview</Button>
            <TableDictionary tableName={n.name} tableId={n.id} mode={"text"} />
          </div>
        </div>
      );
    };
    const previewAction = (e, data) => {
      MetabaseAnalytics.trackStructEvent("question-side click preview");
      e.stopPropagation();
      e.preventDefault();
      closeTemplateData();
      setShowPreviewChart({
        show: true,
        data: {
          ...data,
          databaseId,
          databaseName,
        },
      });
    };
    const sets = isByCategory ? q && q : [...q.tables, ...q.charts];
    return sets.map((n, nInx) => {
      const id = n.originId;
      const isUdTable = !!n?.name?.toLowerCase()?.startsWith("ud");
      const hidePopover =
        canShowNewGuide ||
        formDataSelector ||
        isUdTable ||
        n.model !== "table";
      return {
        title: (
          <Popover
            align={{
              offset: [26, 0],
            }}
            content={renderTableInfo(n)}
            mouseEnterDelay={0.2}
            mouseLeaveDelay={0.2}
            trigger={hidePopover ? "" : "hover"}
            placement="right"
          >
            <div
              id={`table-${qInx}-${nInx}`}
              className={cx("flex justify-between align-center table-node", {
                "table-node-selected":
                  !isEditing && sourceTableId === id && !formDataSelector,
              })}
              onClick={() => {
                MetabaseAnalytics.trackStructEvent(
                  `question-side click category ${n.name}`,
                );
                handleSelectTable({
                  tableId: id,
                  tableName: n.name,
                  timePeriodId: n.time_period_id,
                });
              }}
            >
              <div className="w-full">
                <Highlighter
                  className="table-node-title"
                  highlightClassName="highlight"
                  searchWords={searchWords}
                  autoEscape={true}
                  textToHighlight={n.name}
                />
                <TableBeta tableId={id} tableName={n.name} />
              </div>
            </div>
          </Popover>
        ),
        key: isByCategory ? `${id}` : `${q.category.value}-${id}`,
        // selectable: false,
        children: treeColumnsChildren({ q, n, id }),
      };
    });
  };

  const treeColumnsChildren = ({ q, n, id }) => {
    return (
      n.columns &&
      n.columns.map(field => ({
        title: (
          <Tooltip key="download-dashboard" tooltip={field.description || ""}>
            <span
              onClick={() => {
                MetabaseAnalytics.trackStructEvent(
                  `question-side click item ${n.name} ${field.name}`,
                );
                handleSelectTable({
                  tableId: id,
                  tableName: n.name,
                  columnName: field.name,
                  timePeriodId: n.time_period_id,
                });
              }}
            >
              <Highlighter
                highlightClassName="highlight"
                searchWords={searchWords}
                autoEscape={true}
                textToHighlight={field.name}
              />
              {field.database_type && (
                <span style={{ color: "#949aab", marginLeft: 5 }}>
                  ({field.database_type.toLowerCase()})
                </span>
              )}
              {field.isMatchValue && (
                <span style={{ color: "#3434b2", marginLeft: 5 }}>
                  {field.matchFieldValues?.join(", ")}
                </span>
              )}
            </span>
            </Tooltip>
          ),
          key: isByCategory
            ? `${id}-${field.name}`
            : `${q.category.value}-${id}-${field.name}`,
          selectable: false,
          isLeaf: true,
        })
      )
    );
  };

  const treeData = isByCategory
    ? treeChildren(dataSets, 0)
    : dataSets?.map((q, qInx) => {
        return {
          title: (
            <span
              className="flex justify-between align-center category-title"
              onClick={() => {
                MetabaseAnalytics.trackStructEvent(
                  `question-side click category ${q.category.value}`,
                );
                if (expandedKeys.includes(q.category.value)) {
                  setExpandedKeys([
                    ...expandedKeys.filter(value => value !== q.category.value),
                  ]);
                } else {
                  setExpandedKeys([...expandedKeys, q.category.value]);
                }
              }}
            >
              {q.category.label}
              {/* <Icon name="arrow_double_right" size={16} /> */}
            </span>
          ),
          key: q.category.value,
          // selectable: false,
          children: treeChildren(q, qInx),
        };
      });

  const renderTooMoreHint = () => {
    return (
      <div className="question-side__too-more-data">
        <Icon name="sigh" size={20} color={"#FAAD15"} />
        <span>Try to add search keywords to narrow down the results！</span>
      </div>
    );
  };
  return (
    <div className="flex-full">
      {isFeature && renderNoData()}
      {isFeature && dataSets?.length > 0 && (
        <div className="question-side-recommend">Recommend</div>
      )}
      {isTooMore && renderTooMoreHint()}
      {isByCategory ? (
        <Tree
          virtual={true}
          motion={null}
          showLine={showLine}
          showIcon={false}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          switcherIcon={<DownOutlined />}
          treeData={treeData}
          loadData={onLoadData}
          defaultExpandAll={!!isEditing}
          loadedKeys={treeLoadedKeys}
        />
      ) : (
        <Tree
          virtual={true}
          motion={null}
          showLine={showLine}
          showIcon={false}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          switcherIcon={<DownOutlined />}
          treeData={treeData}
          defaultExpandAll={!!isEditing}
          loadData={onLoadData}
          loadedKeys={treeLoadedKeys}
        />
      )}
    </div>
  );
};
export default React.memo(TableDataList);
