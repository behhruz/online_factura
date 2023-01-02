import styled from "styled-components";

const Wrap = styled.div`
  color: red;
  width: 16vw;
  height: 100%;
  background-color: #0c2556;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Wrap1 = styled.div`
  color: black;
  position: sticky;
  top: 0px;
  z-index: 999;
  background-color: #0c2556;
`;
const Wrap2 = styled.div`
  color: black;
  z-index: 0;
`;
const Wrap3 = styled.div`
  position: sticky;
  top: 0px;
  color: red;
  background-color: white;
`;
const Img1 = styled.img`
  width: 100px;
  height: 33px;
  margin: 20px 20px;
`;
const Img3 = styled.img`
  width: 30px;
  height: 15px;
`;
const Wrap4 = styled.div`
  width: 16vw;
  height: 80px;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.1);
`;

const Box = styled.div`
  display: flex;
  margin: 15px 20px;
  width: 220px;
  &:checked {
    background-color: white;
  }
  align-items: center;
`;
const Img2 = styled.img`
  width: 18px;
  height: 18px;
`;
const Type = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: white;
  margin-left: 10px;
`;
const Big_box = styled.div`
  display: flex;
  flex-direction: column;
`;
const Box2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export {
  Wrap,
  Wrap1,
  Wrap2,
  Wrap3,
  Img1,
  Wrap4,
  Box,
  Img2,
  Type,
  Big_box,
  Box2,
  Img3,
};
