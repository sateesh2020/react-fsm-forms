import { Field, Formik } from 'formik';
import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';

const feilds = [
  {
    name: 'feildOne',
    label: 'Feild One',
    type: 'input',
  },
  {
    name: 'feildTwo',
    label: 'Feild Two',
    type: 'input',
  },
  {
    name: 'feildThree',
    label: 'Feild Three',
    type: 'input',
  },
  {
    name: 'feildFour',
    label: 'Feild Four',
    type: 'input',
  },
  {
    name: 'feildFive',
    label: 'Feild Five',
    type: 'input',
  },
  {
    name: 'feildSix',
    label: 'Feild Six',
    type: 'input',
  },
];

interface PlanProps {
  currentState: any;
  tabKey: string;
}

interface FormValues {
  feildOne: string;
  feildTwo: string;
  feildThree: string;
  feildFour: string;
  feildFive: string;
  feildSix: string;
}

const initialValues: FormValues = {
  feildOne: '',
  feildTwo: '',
  feildThree: '',
  feildFour: '',
  feildFive: '',
  feildSix: '',
};

const Plan: React.SFC<PlanProps> = props => (
  <div style={{ height: '350px' }}>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form className="row" onSubmit={handleSubmit}>
          {feilds.map((feild, i) => {
            return (
              <FormGroup key={i} className="col-6">
                <Label for={feild.name}>{feild.label}</Label>
                <Field
                  className="form-control"
                  type={feild.type}
                  name={feild.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={feild.label}
                  readOnly={props.currentState !== props.tabKey}
                />
              </FormGroup>
            );
          })}
          {/* <FormGroup className="col-12 text-right">
            <Button type="submit" color="primary" disabled={isSubmitting}>
              Submit
            </Button>
          </FormGroup> */}
        </Form>
      )}
    </Formik>
  </div>
);

export default Plan;
