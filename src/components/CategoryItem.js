import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import Kruk from '../res/fonts/Kruk-Kalashn-edit-VG.ttf';

const KrukViewWrapper = styled.div`
 @font-face {
   font-family: 'Kruk';
   src: url('${Kruk}');
 }

 .symbol-view {
  font-family: Kruk;
  font-size: 32pt;
 }
 .red {
   color: red;
 }
`

const CategoryItem = ({ categoryId, value, showEditModal }) => {
  return (
    <tr>
      <td width="130px">
        <KrukViewWrapper>
          <div
            dangerouslySetInnerHTML={{ __html: value.value }}
            className="symbol-view"
          /></KrukViewWrapper>
      </td>
      <td width="250px">{value.name}</td>
      <td width="50px">{value.pitch}</td>
      <td width="50px">{value.sounds}</td>
      <td width="100px">{value.opts.join(', ')}</td>
      <td width="100px"><Button onClick={showEditModal({ ...value, categoryId })}>Редактировать описание</Button></td>
    </tr>
  )
}

export default CategoryItem