import * as actions from '../metadata/actions';
import { log } from '../components/logger';

export const capaMachine = {
  id: 'capa',
  initial: 'plan',
  states: {
    plan: {
      meta: {
        type: 'process',
      },
      entry: (context: any, event: any) => {
        log(`on entering plan state ${event.type}`);
        actions.Notificaton(context, event);
        actions.Log(context, event);
      },
      exit: (context: any, event: any) => {
        log(`on exiting plan state ${event.type}`);
        actions.Log(context, event);
      },
      on: {
        SUCCESS: 'investigation',
      },
    },
    investigation: {
      meta: {
        type: 'process',
      },
      entry: (context: any, event: any) => {
        log(`on entering investigation state ${event.type}`);
        actions.Notificaton(context, event);
        actions.Log(context, event);
      },
      exit: (context: any, event: any) => {
        log(`on exiting investigation state ${event.type}`);
        actions.Log(context, event);
      },
      on: {
        SUCCESS: 'approval',
      },
    },
    approval: {
      meta: {
        type: 'decision',
      },
      entry: (context: any, event: any) => {
        log(`on entering approval state ${event.type}`);
        actions.Notificaton(context, event);
        actions.Email(context, event);
        actions.Log(context, event);
      },
      exit: (context: any, event: any) => {
        log(`on exiting approval state ${event.type}`);
        actions.Log(context, event);
      },
      on: {
        SUCCESS: 'implementation',
        FAILURE: 'investigation',
      },
    },
    implementation: {
      meta: {
        type: 'process',
      },
      entry: (context: any, event: any) => {
        log(`on entering implementation state ${event.type}`);
        actions.Notificaton(context, event);
        actions.Log(context, event);
      },
      exit: (context: any, event: any) => {
        log(`on exiting implementation state ${event.type}`);
        actions.Log(context, event);
      },
      on: {
        SUCCESS: 'verification',
      },
    },
    verification: {
      meta: {
        type: 'process',
      },
      entry: (context: any, event: any) => {
        log(`on entering verification state ${event.type}`);
        actions.Notificaton(context, event);
        actions.Log(context, event);
      },
    },
  },
};
