import React from 'react';
import {  Col, Form, Input, Row } from 'antd';
import { PostPaymentType } from 'types/payment';
import { MaskedInput, IMask } from 'antd-mask-input';
import { FormInstance } from 'antd/lib';

type Props = {
  form: FormInstance;
  onFinish: (values: PostPaymentType) => void;
};

const PaymentForm: React.FC<Props> = ({ onFinish, form }) => {
  const expiryDateMask: any = IMask.createMask({
    mask: 'MM{/}YY',
    blocks: {
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
      YY: {
        mask: IMask.MaskedRange,
        from: new Date().getFullYear() % 100,
        to: (new Date().getFullYear() % 100) + 30,
      },
    },
    lazy: false,
  });

  return (
    <Form
      form={form}
      name='payment'
      layout={'vertical'}
      onFinish={onFinish}
      autoComplete='off'
    >
      <Row>
        <Col span={24}>
          <Form.Item
            label='Credit Card Name'
            name='cardHolderName'
            rules={[
              {
                required: true,
                message: 'Please input your credit card name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Row gutter={24}>
            <Col lg={12} xs={24}>
              <Form.Item
                label='Card Number'
                name='cardNumber'
                rules={[
                  {
                    required: true,
                    message: 'Please input your card number!',
                  },
                ]}
              >
                <MaskedInput mask={'0000-0000-0000-0000'} placeholder='' />
              </Form.Item>
            </Col>
            <Col lg={6} xs={24}>
              <Form.Item
                label='Expire Date'
                name='expireDate'
                rules={[
                  {
                    required: true,
                    message: 'Please input your expire date',
                  },
                ]}
              >
                <MaskedInput mask={expiryDateMask} placeholder='' />
              </Form.Item>
            </Col>
            <Col lg={6} xs={24}>
              <Form.Item
                label='CVV/CVC'
                name='cvv'
                rules={[
                  {
                    required: true,
                    message: 'Please input your cvv/cvc',
                  },
                ]}
              >
                <MaskedInput mask={'000'} placeholder='' />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default PaymentForm;
