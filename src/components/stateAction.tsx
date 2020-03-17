import React from 'react';
import { Button } from 'reactstrap';

interface StateActionProps {
  action: any;
  meta: { type: string }[];
}

const StateAction: React.SFC<StateActionProps> = props => {
  const type = props.meta[0].type;
  return (
    <div>
      <Button color="primary" onClick={() => props.action('SUCCESS')}>
        Submit
      </Button>
      {type === 'decision' && (
        <Button
          className="ml-2"
          color="danger"
          onClick={() => props.action('FAILURE')}
        >
          Reject
        </Button>
      )}
    </div>
  );
};

export default StateAction;
