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

const StyledModal = styled(Modal)`
.modal-dialog {
  max-width: 700px;
}
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
    console.log({ value })
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

  saveDescription = (values) => {
    const { updateDescription } = this.props
    const { valueForEdit: { _id: symbolId, categoryId } } = this.state
    const dataForSending = {
      dependency: values.dependency.value,
      sounds: values.sounds.map(sound => ({
        direction: sound.direction.value,
        length: sound.length.value,
        pitch: sound.pitch.value
      }))
    }
    updateDescription({ value: dataForSending, categoryId, symbolId })
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
              <StyledModal show={showModal} onHide={this.closeEditModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Редактирование описания</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Description value={valueForEdit} onSubmit={this.saveDescription} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.closeEditModal}>
                    Отмена
                  </Button>
                </Modal.Footer>
              </StyledModal>
            </>
          )}
      </>
    )
  }
}
