import { Card } from "antd";
import { styled } from "styled-components";

export const StyledCartItem = styled(Card)`
  padding: 0;
  cursor: pointer;
  background: #f2f2f2;
  .ant-card-body {
    flex: auto;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export default StyledCartItem;