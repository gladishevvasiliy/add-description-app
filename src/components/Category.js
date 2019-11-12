
import React from 'react'
import { Table } from 'react-bootstrap'
import CategoryItem from './CategoryItem';

const Category = ({ category, showEditModal }) => (
  <>
    <h4>{category.name}</h4>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Вид</th>
          <th>Название</th>
          <th>Помета</th>
          <th>Звуков</th>
          <th>Опции</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {category.symbols.map(value => <CategoryItem key={value._id} categoryId={category._id} value={value} showEditModal={showEditModal} />)}
      </tbody>
    </Table>
  </>)

export default Category