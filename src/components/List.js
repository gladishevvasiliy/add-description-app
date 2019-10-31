import React, { Component } from 'react'
import styled from 'styled-components'
import { Modal, Button } from 'react-bootstrap'
import Category from './Category'
import loader from '../res/img/Loading.gif'
import Description from './Description'

const Loader = styled.div`
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -200px 0 0 -240px;
`
const devValue = {
  id: 2,
  name: "1212",
  pitch: "Ут низкое",
  sounds: "1",
  opts: ["Тихая"],
  value: "<span></span>1212",
  sounds_description: {
    sounds: [
      {
        direction: 1,
        length: 8,
        pitch: 12
      },
      {
        direction: 0,
        length: 4,
        pitch: 6
      }
    ],
    dependency: 0
  }
}

export default class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      valueForEdit: {}
    };
  };

  componentDidMount = () => {
    console.log('cmd')
  };

  showEditModal = (value) => () => {
    this.setState({
      showModal: true,
      valueForEdit: value
    })
  }

  closeEditModal = () => {
    this.setState({
      showModal: false,
      valueForEdit: {}
    })
  }

  saveDescription = (value) => {
    console.log(value)
    this.closeEditModal()
  }



  render() {
    const { values, loading } = this.props
    const { showModal, valueForEdit } = this.state
    return (
      <>
        {loading ? (
          <Loader>
            <img src={loader} alt="loading" />
          </Loader>
        ) : (
            <>
              {values.map(category => <Category key={category._id} category={category} showEditModal={this.showEditModal} />)}
              <Modal show={showModal} onHide={this.closeEditModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Редактирование описания</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Description value={devValue} onSubmit={this.saveDescription} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.closeEditModal}>
                    Отмена
          </Button>
                  <Button variant="primary" onClick={this.saveDescription}>
                    Сохранить изменения
          </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
      </>
    )
  }
}
