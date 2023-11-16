import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Typography, Form, Button, message } from 'antd';
import { Cart, Wrapper } from 'components';
import useFetchPayment from 'services/hooks/useFetchPayment';
import useMutatePayment from 'services/hooks/useMutatePayment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { useNavigate } from 'react-router';
import PaymentForm from './components/payment-form';
import { PostPaymentType } from 'types/payment';
import { PackageType } from 'types/packages';
import { SELECTED_PACKAGES } from 'store/app/types';
const { Text } = Typography;

const Payment = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPackages = useSelector(
    (state: RootState) => state.app.selectedPackages
  );
  const user = useSelector(
    (state: RootState) => state.app.user
  );
  const { data: getPaymentData, isLoading } = useFetchPayment({});
  const { mutate: payment, isLoading: paymentLoading } = useMutatePayment({
    onSuccess: (data) => {
      if (data.message === 'Ödeme başarıyla gerçekleştirilmiştir.') {
        const urlId = window.btoa(JSON.stringify(`${user.email}${new Date().getTime()}`))
        dispatch({
          type: SELECTED_PACKAGES,
          payload: [],
        });
        localStorage.removeItem('selectedPackages');
        navigate(`/success/${urlId}`);
        message.success('Success');
      } else {
        message.error('Payment failed');
      }
    },
  });

  const createMarkup = () => {
    const encodedText = getPaymentData?.content;
    const decodedText = decodeURIComponent(encodedText);
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(decodedText, 'text/html');

    const bodyContent = parsedHtml.body.innerHTML;

    return { __html: bodyContent };
  };
  const onFinish = async (values: PostPaymentType) => {
    const packageIds = selectedPackages.map(
      (packageItem: PackageType) => packageItem.id
    );
    const totalAmount = selectedPackages
      ?.map((packageItem: PackageType) => Number(packageItem.amount))
      .reduce((total: number, amount: number) => total + amount, 0);
    const submittedData = {
      ...values,
      cardNumber: values.cardNumber.replace(/-/g, ''),
      packageIds,
      totalAmount,
    };
    await payment(submittedData);
  };

  useEffect(() => {
    if (selectedPackages.length <= 0) {
      navigate('/');
    }
  }, []);

  return (
    <Wrapper hideContainer loading={isLoading} >
      <Row justify='center' align='top' gutter={24}>
        <Col lg={12} xs={24}>
          <Wrapper colWidth={{ span:24}} height='auto'>
            <Col span={24}>
              <Row>
                <Col span={24} style={{ marginBottom: 10 }}>
                  <Text strong style={{ fontSize: 20 }}>
                    Card Info
                  </Text>
                </Col>
                <Col span={24} style={{ marginBottom: 10 }}>
                  <Card>
                    <PaymentForm form={form} onFinish={onFinish} />
                  </Card>
                </Col>
                <Col span={24}>
                  <Card>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Wrapper>
        </Col>
        <Col lg={6} xs={24}>
          <Cart
            callbackButton={() => form.submit()}
            callbackLoading={paymentLoading}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Payment;
