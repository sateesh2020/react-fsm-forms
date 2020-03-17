import { Field, Formik } from 'formik';
import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';

const feilds = [
  {
    name: 'verOne',
    label: 'Verification Feild One',
    type: 'textarea',
  },
  {
    name: 'verTwo',
    label: 'Verification Feild Two',
    type: 'textarea',
  },
  {
    name: 'verThree',
    label: 'Verification Feild Three',
    type: 'textarea',
  },
  {
    name: 'verFour',
    label: 'Verification Feild Four',
    type: 'textarea',
  },
];

interface VerificationProps {
  currentState: any;
  tabKey: string;
}
interface FormValues {
  verOne: string;
  verTwo: string;
  verThree: string;
  verFour: string;
}

const initialValues: FormValues = {
  verOne: '',
  verTwo: '',
  verThree: '',
  verFour: '',
};
const Verification: React.SFC<VerificationProps> = props => (
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

export default Verification;
