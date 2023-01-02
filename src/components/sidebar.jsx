import React from "react";
import {
  Wrap,
  Wrap1,
  Wrap2,
  Img1,
  Wrap4,
  Box,
  Img2,
  Type,
  Big_box,
  Box2,
  Img3,
} from "./styles/style1";
import Img from "../assets/factura.png";
import Imga from "../assets/plus.png";
import Imgb from "../assets/down.png";
import Imgc from "../assets/up.png";
import Imgd from "../assets/sax.png";
import Imge from "../assets/delete.png";
import Imgf from "../assets/naushnik.png";
import Imgi from "../assets/settings.png";
import Imgg from "../assets/inter.png";
import Imgr from "../assets/onec.png";

class Sidebar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Wrap>
          <Wrap1>
            <Wrap4>
              <Img1 src={Img} />
            </Wrap4>
            <Big_box>
              <Box>
                <Img2 src={Imga} />
                <Type>Создать</Type>
              </Box>
              <Box>
                <Img2 src={Imgb} />
                <Type>Входящие (2)</Type>
              </Box>
              <Box>
                <Img2 src={Imgc} />
                <Type>Исходящие (3)</Type>
              </Box>
              <Box>
                <Img2 src={Imgd} />
                <Type>Сохраненные (0)</Type>
              </Box>
              <Box>
                <Img2 src={Imge} />
                <Type>Удаленые (0)</Type>
              </Box>
            </Big_box>
          </Wrap1>
          <Wrap2>
            <Box>
              <Img2 src={Imgf} />
              <Box2>
                <Type>Тех поддержка:</Type>
                <Type>+998 99 999 99 99</Type>
              </Box2>
            </Box>
            <Box>
              <Img2 src={Imgi} />
              <Type>Настройки</Type>
            </Box>
            <Box>
              <Img2 src={Imgg} />
              <Type>Выйти</Type>
            </Box>
            <Box>
              <Img3 src={Imgr} />
              <Type style={{ color: "#b3b3b3" }}>1C support</Type>
            </Box>
          </Wrap2>
        </Wrap>
      </>
    );
  }
}
export default Sidebar;
