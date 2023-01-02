import React from "react";
import {
  Balans,
  Box1,
  Box2,
  Button,
  Hsob,
  IMage8,
  Images,
  Img1,
  Kashel,
  Summa,
  Type,
  Type1,
  Wrap,
} from "./styles/style2";
import Image from "../assets/summa.png";
import Image1 from "../assets/kalakolchik.png";
import Image2 from "../assets/question.png";
import Image3 from "../assets/kalit.png";
class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Wrap>
          <Box1>
            <Type>YaTT SOBIROV JAMSHID DAVRON O‘G‘LI</Type>
            <Type1>566800736</Type1>
          </Box1>
          <Box2>
            <Kashel>
              <Img1 src={Image} />
            </Kashel>
            <Summa>
              <Balans>Ваш баланс:</Balans>
              <Hsob>150.000 сум</Hsob>
            </Summa>
            <Button>Активировать тариф</Button>
            <IMage8>
              <Images src={Image1} />
              <Images src={Image2} />
              <Images src={Image3} />
            </IMage8>
          </Box2>
        </Wrap>
      </>
    );
  }
}
export default Navbar;
