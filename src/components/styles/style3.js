import styled from "styled-components";

const Wrap = styled.div`
  background-color: #f8fafc;
`;
const Document = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  margin: 30px 28px;
`;
const Container = styled.div`
  width: 710px;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 28px;
`;
const Type = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0 35px;
`;
const Wrap1 = styled.div`
  background-color: white;
  margin: 16px 28px;
`;
const Box1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
`;
const Type2 = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
`;
const Type3 = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #2b63c0;
`;
const Box2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 24px;
`;

const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 16px 0;
`;
const Type4 = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
`;
const Input = styled.input`
  padding: 12px;
  width: 190px;
  height: 13px;
  background-color: #ffffff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
`;
const Select = styled.select`
  width: 230px;
  height: 39px;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
`;
const Input2 = styled.input`
  padding: 12px;
  width: 120px;
  height: 13px;
  background-color: #ffffff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
`;
const Box5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Krug = styled.div`
  width: 16px;
  height: 16px;
  background-color: #fe346e;
  border-radius: 50%;
`;
const Krug1 = styled.div`
  width: 16px;
  height: 16px;
  background-color: #0fbe7b;
  border-radius: 50%;
`;
const Krug2 = styled.div`
  width: 16px;
  height: 16px;
  background-color: #ffa41d;
  border-radius: 50%;
`;
const Krug3 = styled.div`
  width: 16px;
  height: 16px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;
const Type7 = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
`;
const Buttons = styled.div``;
const Button4 = styled.button`
  width: 124px;
  height: 30px;
  background-color: #2b63c0;
  border-radius: 8px;
  border: none;
  color: white;
  margin: 0 10px;
`;
const Boxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px 0 28px;
`;
const Types = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 11px;
`;
const Types1 = styled.p`
  font-size: 14px;
  width: 141px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
let getColor = (prop) => {
  switch (prop) {
    case "Отменен": {
      return "#FE346E";
    }
    case "В ожидании": {
      return "#FFA41D";
    }
    case "Подписано": {
      return "#0FBE7B";
    }
    case "Черновик": {
      return "#D9D9D9";
    }
    default:
      return "#D9D9D9";
  }
};
const Item = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(prop) => {
    return getColor(prop.status);
  }};
  margin-left: 38px;
`;
const Items1 = styled.p`
  margin-left: 20px;
`;
const Bigcon = styled.div`
  margin: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Bigcon1 = styled.div``;
const Bigcon2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Buiton = styled.button`
  background-color: #2b63c0;
  border-radius: 8px;
  width: 120px;
  width: ${({ action }) => action && "100px"};
  height: 35px;
  border: none;
  color: white;
  font-size: 14px;
  margin: 0 14px;
`;
export {
  Wrap,
  Document,
  Container,
  Type,
  Wrap1,
  Box1,
  Type2,
  Type3,
  Box2,
  Box3,
  Type4,
  Input,
  Select,
  Input2,
  Buttons,
  Box5,
  Krug,
  Krug1,
  Krug2,
  Krug3,
  Type7,
  Button4,
  Boxes,
  Types,
  Item,
  Types1,
  Items1,
  Bigcon,
  Bigcon1,
  Bigcon2,
  Buiton,
};
