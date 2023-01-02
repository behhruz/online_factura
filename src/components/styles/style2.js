import styled from "styled-components";

const Wrap = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 82vw;
  height: 80px;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.08);
`;
const Box2 = styled.div`
  display: flex;
  align-items: center;
  width: 40vw;
`;
const Kashel = styled.div`
  width: 35px;
  height: 35px;
  background-color: rgba(24, 144, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img1 = styled.img`
  width: 16px;
  height: 16px;
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 25px;
`;
const Type = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
`;
const Type1 = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
`;
const Summa = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Balans = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;
const Hsob = styled.h1`
  color: #2b63c0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`;
const Button = styled.button`
  background-color: #2b63c0;
  border-radius: 8px;
  border: none;
  width: 140px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 15px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #ffffff;
  margin-left: 50px;
`;
const Images = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 18px;
`;
const IMage8 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;
export {
  Wrap,
  Box1,
  Box2,
  Type,
  Type1,
  Kashel,
  Img1,
  Summa,
  Balans,
  Hsob,
  Button,
  Images,
  IMage8,
};
