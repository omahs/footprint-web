/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Checkbox, Modal, Tooltip } from "antd";
import { payProduct } from "metabase/new-service";
import { getOssUrl } from "metabase/lib/image";
import Icon from "metabase/components/Icon";

const PricingModal = ({ user, sign, subscribeOptions, visible, onClose, setCallback }) => {
  const [options, setOptions] = useState(subscribeOptions);
  const [loading, setLoading] = useState(false);
  const [auto, setAuto] = useState(true);
  const { subscription } = options?.find(item => item.selected) || {};

  const onPay = async () => {
    if (!user?.id) {
      onClose();
      sign();
      return;
    }
    setLoading(true);
    try {
      const { productId, title } = options?.find(item => item.selected) || {};
      const paymentChannel = "stripe";
      const mode = auto && subscription ? "subscription" : "payment";
      const { paymentLink } = await payProduct({
        productId,
        paymentChannel,
        mode,
      });
      window.open(paymentLink);
      /*slack([
        { label: "Pay", value: user?.email },
        { label: "Mode", value: mode },
        { label: "Title", value: title },
      ]);*/
    } catch (e) {
    } finally {
      setLoading(false);
      onClose();
      setCallback(true);
    }
  };

  return (
    <>
      <Modal
        visible={visible}
        closable={false}
        footer={null}
        onCancel={onClose}
      >
        <div className="Pricing_modal">
          <h3>Plans & Pricing</h3>
          <ul>
            {options?.map(item => (
              <li
                key={item.title}
                onClick={() => {
                  setOptions(
                    options?.map(o => ({
                      ...o,
                      selected: item.title === o.title,
                    })),
                  );
                }}
              >
                <img
                  width={16}
                  height={16}
                  src={getOssUrl(
                    item.selected ? "20220722141632.png" : "20220722141653.png",
                  )}
                />
                <div className="Pricing_modal-option">
                  <div className="flex">
                    <h4>{item.title}</h4>
                    {item.tips && (<Tooltip title={item.tips}><span className="ml1"><Icon name="question" size={16} /></span></Tooltip>)}
                  </div>
                  {!!item.yearlyPrice && (
                    <span>
                      {item.yearlyPrice} per month,{" "}
                      <i>saving {item.yearlySaving}</i>
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Button type="primary" size="large" onClick={onPay} loading={loading}>
            Subscribe Now
          </Button>
          {subscription && (
            <Checkbox checked={auto} onChange={e => setAuto(e.target.checked)}>
              Automatic Renewal
            </Checkbox>
          )}
        </div>
      </Modal>
    </>
  );
};

export default PricingModal;
