import { Field, Formik } from 'formik';
import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';

const feilds = [
  {
    name: 'impOne',
    label: 'Implement Feild One',
    type: 'input',
  },
  {
    name: 'impTwo',
    label: 'Inv Feild Two',
    type: 'input',
  },
  {
    name: 'impThree',
    label: 'Implement Feild Three',
    type: 'input',
  },
  {
    name: 'invFour',
    label: 'Implement Feild Four',
    type: 'input',
  },
  {
    name: 'impFive',
    label: 'Implement Feild Five',
    type: 'input',
  },
  {
    name: 'impSix',
    label: 'Implement Feild Six',
    type: 'input',
  },
];

interface ImplementationProps {
  currentState: any;
  tabKey: string;
}

interface FormValues {
  impOne: string;
  impTwo: string;
  impThree: string;
  impFour: string;
  impFive: string;
  impSix: string;
}

const initialValues: FormValues = {
  impOne: '',
  impTwo: '',
  impThree: '',
  impFour: '',
  impFive: '',
  impSix: '',
};

const Implementation: React.SFC<ImplementationProps> = props => (
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

export default Implementation;
