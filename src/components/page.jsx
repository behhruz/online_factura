import React from "react";
import {
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
  Type7,
  Krug1,
  Krug2,
  Krug3,
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
} from "./styles/style3";
import { Data } from "../utilets/backend.js";

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      Torn: Data,
      Web: "",
      webb: "",
      filtered: "books",
    };
  }
  render() {
    const onSearch = ({ target: { value } }) => {
      this.setState({ Web: value });
    };
    const Filter = ({ target: { value } }) => {
      this.setState({ webb: value });
    };
    const Filtir = ({ target: { value } }) => {
      if (value === "books") {
        this.setState({ Torn: Data });
      }
      let res =this.state.Torn.filter((item) => item.status == value);
      return this.setState({ Torn: res });
    };
    return (
      <>
        <Wrap>
          <Document>Документы</Document>
          <Container>
            <Type>Договора</Type>
            <Type>Счет фактуры</Type>
            <Type>Акт</Type>
            <Type>Доверенность</Type>
            <Type>ТТН</Type>
          </Container>
          <Wrap1>
            <Box1>
              <Type2>Фильтр</Type2>
              <Type3>Сбросить фильтр</Type3>
            </Box1>
            <Box2>
              <Box3>
                <Type4>Тип документа</Type4>
                <Input onChange={onSearch} placeholder="Тип документа"></Input>
              </Box3>
              <Box3>
                <Type4>Статус документа</Type4>

                <Select onChange={Filtir}>
                  <option value="books">Все статусы</option>
                  <option value="Отменен">Отменен</option>
                  <option value="Подписано">Подписано</option>
                  <option value="В ожидании">В ожидании</option>
                  <option value="Черновик">Черновик</option>
                </Select>
              </Box3>
              <Box3>
                <Type4>Поиск по контрагенту</Type4>
                <Input placeholder="Номер документа" onChange={Filter}></Input>
              </Box3>
              <Box3>
                <Type4>Дата с</Type4>
                <Input2 type="date"></Input2>
              </Box3>
              <Box3>
                <Type4>Дата до</Type4>
                <Input2 type="date"></Input2>
              </Box3>
            </Box2>
          </Wrap1>
          <Wrap1>
            <Box2>
              <Type2>Таблица</Type2>
              <Box5>
                <Krug></Krug>
                <Type7>Отменен</Type7>
              </Box5>
              <Box5>
                <Krug1></Krug1>
                <Type7>Подписано</Type7>
              </Box5>
              <Box5>
                <Krug2></Krug2>
                <Type7>В ожидании</Type7>
              </Box5>
              <Box5>
                <Krug3></Krug3>
                <Type7>Черновик</Type7>
              </Box5>
              <Buttons>
                <Button4>Открыть в Exсel</Button4>
                <Button4>Фильтр таблицы</Button4>
              </Buttons>
            </Box2>
            <Boxes>
              <input type="checkbox" name="" id="" />
              <Types>Статус</Types>
              <Types>Тип документа </Types>
              <Types>Дата обновления </Types>
              <Types>Контрагент </Types>
              <Types>Номер и дата документа </Types>
              <Types>Номер и дата договора</Types>
              <Types>Стоимость поставки</Types>
            </Boxes>
            {this.state.Torn.filter((i) =>
              i.tip.toLowerCase().includes(this.state.Web.toLowerCase())
            )
              .filter((item) =>
                this.state.webb == ""
                  ? true
                  : item.nomer.includes(this.state.webb)
              )
              .filter((k) =>
                this.state.filtered == "books"
                  ? true
                  : k.status == this.state.filtered
              )
              .map((v) => (
                <>
                  {" "}
                  <Boxes>
                    <input type="checkbox" name="" id="" />
                    <Item status={v.status} />
                    <Items1>{v.tip}</Items1>
                    <Types1>{v.date}</Types1>
                    <Types1>{v.contr}</Types1>
                    <Types1>{v.nomer}</Types1>
                    <Types1>{v.srok}</Types1>
                    <Types1>{v.cost}</Types1>
                  </Boxes>
                </>
              ))}
          </Wrap1>
          <Bigcon>
            <Bigcon1>
              <Buiton>Подписать</Buiton>
              <Buiton>Отменить</Buiton>
            </Bigcon1>
            <Bigcon2></Bigcon2>
          </Bigcon>
        </Wrap>
      </>
    );
  }
}
export default Page;
