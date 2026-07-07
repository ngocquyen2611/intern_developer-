import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import {v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoListSelector } from '../../redux/selectors';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Low');

  const todoList = useSelector (todoListSelector)

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.target.value
  }
  const handleChangeSelect = (value) => {
    setPriority = value;
  }
  const handleAddButton = () => {
    dispatch(addTodo({
      id: '',
      name: todoName,
      priority: '',
      completed: false
    }))
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Medium' /> */}
        {todoList.map(todo => <Todo name={todo.name} priority={todo.priority} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleClick} />
          <Select value={priority} onChange={handleChangeSelect}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
