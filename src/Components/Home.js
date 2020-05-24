import React, { Component } from 'react';
import styled from 'styled-components';
import Info from './Info';
import AddPerson from './AddPerson';
import Search from './Search';

const data = [
  { id: 1, name: 'Phetmany', money: 300 },
  { id: 2, name: 'KhanKham', money: 400 },
];
class Home extends Component {
  state = {
    data: data,
  };
  delete = (id) => {
    let item = this.state.data.find((i) => i.id === id);
    var i = this.state.data.indexOf(item);
    if (i !== -1) {
      this.state.data.splice(i, 1);
    }
    this.setState(this.state.data);
    console.log('đaa', this.state.data);
  };
  add = (name, money) => {
    let newPerson = {
      id: this.state.data.id + 1,
      name: name,
      money: money,
    };
    this.state.data.push(newPerson);
    this.setState(this.state.data);
  };

  edit = (money, id) => {
    var list = this.state.data;
    let arr = list.filter((i) => i.id === id);
    arr.map((m) => {
      m.money = money;
    });
    // console.log(list);
    this.setState({ data: list });
  };
  render() {
    console.log('props', this.props);
    return (
      <HomeContainer>
        <Search />
        <AddPerson add={this.add} />
        <Title>Thông tin người vay tiền</Title>
        <ListPerson>
          {this.state.data.map((item) => (
            <Item key={item.id}>
              <Info item={item} delete={this.delete} edit={this.edit} />
            </Item>
          ))}
        </ListPerson>
      </HomeContainer>
    );
  }
}

export default Home;

const HomeContainer = styled.div`
  width: min(100%, 960px);
  height: 1000px;
  background: #f2c94c;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  border: 1px solid black;
  padding: 1rem;
  background: #56ccf2;
  height: 2rem;
  width: 96.5%;
  text-align: center;
`;

const ListPerson = styled.ul`
  list-style-type: none;

  text-align: center;
  margin: 0 auto;
  width: 30rem;
`;
const Item = styled.li`
  margin-top: 1rem;
`;
