import { useMachine } from '@xstate/react';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import { createMachine } from 'xstate';
import Approval from './forms/approval';
import Implementation from './forms/implementation';
import Investigation from './forms/investigation';
import Plan from './forms/plan';
import Verification from './forms/verification';
import { capaMachine } from './workflows/capa';
import StateAction from './components/stateAction';
import Logger, { logs } from './components/logger';

const machine = createMachine(capaMachine);

function App() {
  const [state, send] = useMachine(machine, { devTools: true });
  const [activeTab, setActiveTab] = useState(capaMachine.initial);
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  useEffect(() => {
    setActiveTab(state.value as string);
  }, [state]);
  return (
    <>
      <Container className="p-5" fluid>
        <Row>
          <Col md="7">
            <div>
              <Row>
                <Col md="8">
                  <h2>
                    Current State :{' '}
                    <span className="text-capitalize">{state.value}</span>
                  </h2>
                </Col>
                <Col md="4" className="text-right">
                  <StateAction meta={Object.values(state.meta)} action={send} />
                </Col>
              </Row>
              <Nav pills className="nav-fill border">
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 'plan' })}
                    onClick={() => {
                      toggle('plan');
                    }}
                  >
                    Plan
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === 'investigation',
                    })}
                    onClick={() => {
                      toggle('investigation');
                    }}
                  >
                    Investigation
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === 'approval' })}
                    onClick={() => {
                      toggle('approval');
                    }}
                  >
                    Approvals
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === 'implementation',
                    })}
                    onClick={() => {
                      toggle('implementation');
                    }}
                  >
                    Implementation
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === 'verification',
                    })}
                    onClick={() => {
                      toggle('verification');
                    }}
                  >
                    Verification
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="mt-3 p-3 border">
                <TabPane tabId="plan">
                  <Plan currentState={state.value} tabKey="plan" />
                </TabPane>
                <TabPane tabId="investigation">
                  <Investigation
                    currentState={state.value}
                    tabKey="investigation"
                  />
                </TabPane>
                <TabPane tabId="approval">
                  <Approval currentState={state.value} tabKey="approval" />
                </TabPane>
                <TabPane tabId="implementation">
                  <Implementation
                    currentState={state.value}
                    tabKey="implementation"
                  />
                </TabPane>
                <TabPane tabId="verification">
                  <Verification
                    currentState={state.value}
                    tabKey="investigation"
                  />
                </TabPane>
              </TabContent>
            </div>
          </Col>
          <Col md="5">
            <Logger logs={logs} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
