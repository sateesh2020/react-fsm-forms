export const trafficMachine = {
  initial: 'green',
  id: 'light',
  states: {
    green: {
      on: {
        CLICK: 'yellow',
      },
    },
    yellow: {
      on: {
        CLICK: 'red',
      },
    },
    red: {
      on: {
        CLICK: 'green',
      },
    },
  },
};
