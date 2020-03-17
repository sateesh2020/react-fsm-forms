import { Field, Formik } from 'formik';
import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';

const feilds = [
  {
    name: 'invOne',
    label: 'Inv Feild One',
    type: 'input',
  },
  {
    name: 'invTwo',
    label: 'Inv Feild Two',
    type: 'input',
  },
  {
    name: 'invThree',
    label: 'Inv Feild Three',
    type: 'input',
  },
  {
    name: 'invFour',
    label: 'Feild Four',
    type: 'input',
  },
  {
    name: 'invFive',
    label: 'Inv Feild Five',
    type: 'input',
  },
  {
    name: 'invSix',
    label: 'Inv Feild Six',
    type: 'input',
  },
];
interface InvestigationProps {
  currentState: any;
  tabKey: string;
}

interface FormValues {
  invOne: string;
  invTwo: string;
  invThree: string;
  invFour: string;
  invFive: string;
  invSix: string;
}

const initialValues: FormValues = {
  invOne: '',
  invTwo: '',
  invThree: '',
  invFour: '',
  invFive: '',
  invSix: '',
};

const Investigation: React.SFC<InvestigationProps> = props => (
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
                  type={feild.type}
                  className="form-control"
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

export default Investigation;
