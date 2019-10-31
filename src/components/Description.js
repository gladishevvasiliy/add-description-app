import React from 'react'
import { Form, Field } from 'react-final-form'
import reduce from 'lodash/reduce'

const getInitialValues = ({ sounds, dependency }) => {

  const soundsObj = {};
  sounds.forEach((sound, index) => soundsObj[index] = { // eslint-disable-line
    [`direction-${index}`]: sound.direction,
    [`length-${index}`]: sound.length,
    [`pitch-${index}`]: sound.pitch
  })
  const allSoundsParametresInArray = reduce(soundsObj, (result, value) => ({ ...result, ...value }), {});
  return {
    dependency,
    ...allSoundsParametresInArray
  }
}

const Description = ({ value: { sounds_description: description }, onSubmit }) => {

  const initialValues = getInitialValues(description)
  const soundsCount = description.sounds.map((item, index) => index)
  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Зависимость</label>
              <Field
                name="dependency"
                component="input"
                type="text"
              />
            </div>
            {
              soundsCount.map(index => (<div>
                <h1>Звук {index}</h1>
                <label>Направление</label>
                <Field
                  name={`direction-${index}`}
                  component="input"
                  type="text"
                />
                <label>Длительность</label>
                <Field
                  name={`length-${index}`}
                  component="input"
                  type="text"
                />
                <label>Высота</label>
                <Field
                  name={`pitch-${index}`}
                  component="input"
                  type="text"
                />
              </div>))
            }
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
            </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
            </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </>
  )
}

export default Description
