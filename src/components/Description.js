import React from 'react'
import styled from 'styled-components'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import get from 'lodash/get'
import { Form as BootstrapForm, Row, Col, Button } from 'react-bootstrap'
import RFReactSelect from './RFReactSelect'
import { getOptions, getDependency, getDirection, getLength, getPitch } from '../utils'
import RemoveIconButton from '../res/icons/RemoveIconButton'
import AddIconButton from '../res/icons/AddIconButton'


const Sound = styled.div`
  margin-bottom: 30px;
`

const RemoveBlock = styled.div`
  display: flex;
  justify-content: center;
  svg {
    fill: #e57373;
  }

  svg:hover {
    fill: #f44336;
    cursor: pointer;
  }
`
const AddBlock = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  svg {
    fill: #4CAF50;
    margin-left: 10px;
  }
`


const AddButton = styled.div`
  cursor: pointer;
  background-color: #F5F5F5;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  width: 180px;
  justify-content: center;

  :hover {
    background-color: #EEEEEE;
  }
`

const getInitialValues = ({ sounds = [], dependency = 0 }) => ({
  dependency: { value: dependency, label: getDependency(dependency) },
  sounds: sounds.map(sound => ({
    direction: { value: get(sound, 'direction'), label: getDirection(get(sound, 'direction')) },
    length: { value: get(sound, 'length'), label: getLength(get(sound, 'length')) },
    pitch: { value: get(sound, 'pitch'), label: getPitch(get(sound, 'pitch')) }
  })),
})

const TextField = ({ name, onChange }) => (
  <Col md="3" sm="8">
    <Field
      name={name}
      // list="symbols"
      options={getOptions(name)}
      onChange={onChange}
      component={RFReactSelect}
    />
  </Col>
)



const Description = ({ value: { sounds_description: description }, onSubmit }) => {

  const initialValues = description ? getInitialValues(description) : { dependency: { value: 0, label: getDependency(0) }, sounds: [] }
  return (
    <>
      <BootstrapForm>
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          mutators={{
            ...arrayMutators
          }}
          render={({
            handleSubmit, form: {
              mutators: { push, pop }
            }, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <>
                  <BootstrapForm.Group as={Row}>
                    <Col md="2" sm="8" >Зависимость: </Col>
                    <TextField name="dependency" />
                  </BootstrapForm.Group>
                  <FieldArray name="sounds">
                    {({ fields }) =>
                      fields.map((name, index) => (
                        <Sound key={name}>
                          <h3>Звук {index + 1}</h3>
                          <BootstrapForm.Group as={Row}>
                            <Col md="3" sm="8" >Направление</Col>
                            <Col md="3" sm="8" >Длительность</Col>
                            <Col md="3" sm="8" >Высота</Col>
                          </BootstrapForm.Group>
                          <BootstrapForm.Group as={Row}>
                            <TextField name={`${name}.direction`} />
                            <TextField name={`${name}.length`} />
                            <TextField name={`${name}.pitch`} />
                            <Col md="2" sm="8" >
                              <RemoveBlock>
                                <RemoveIconButton onClick={() => fields.remove(index)} />
                              </RemoveBlock>
                            </Col>
                            <Col md="1" sm="8" />
                          </BootstrapForm.Group>

                        </Sound>
                      ))
                    }
                  </FieldArray>
                  <AddBlock>
                    <AddButton onClick={() => push('sounds', undefined)} >
                      Добавить звук <AddIconButton />
                    </AddButton>
                  </AddBlock>
                  <div>
                    <Button type="submit" disabled={submitting || pristine}>
                      Сохранить
            </Button>
                  </div>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </>
              </form>
            )
          }
        />
      </BootstrapForm >
    </>
  )
}

export default Description
