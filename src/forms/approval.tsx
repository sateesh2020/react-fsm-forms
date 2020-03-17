import React from 'react';
import { Formik, Field } from 'formik';
import { Form, FormGroup, Label, Button } from 'reactstrap';

const feilds = [
  {
    name: 'apprOne',
    label: 'Approval  Feild One',
    type: 'textarea',
  },
  {
    name: 'apprTwo',
    label: 'Approval  Feild Two',
    type: 'textarea',
  },
  {
    name: 'apprThree',
    label: 'Approval  Feild Three',
    type: 'textarea',
  },
  {
    name: 'apprFour',
    label: 'Approval Feild Four',
    type: 'textarea',
  },
];

interface ApprovalProps {
  currentState: any;
  tabKey: string;
}

interface FormValues {
  apprOne: string;
  apprTwo: string;
  apprThree: string;
  apprFour: string;
}

const initialValues: FormValues = {
  apprOne: '',
  apprTwo: '',
  apprThree: '',
  apprFour: '',
};

const Approval: React.SFC<ApprovalProps> = props => (
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

export default Approval;
