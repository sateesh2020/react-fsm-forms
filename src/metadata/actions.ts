import { log } from '../components/logger';

export const Console = function(context: any, event: any) {
  log(
    `console action context:${JSON.stringify(context)}, event:${JSON.stringify(
      event
    )}`
  );
};

export const Log = function(context: any, event: any) {
  log(
    `log action context:${JSON.stringify(context)}, event:${JSON.stringify(
      event
    )}`
  );
};

export const Email = function(context: any, event: any) {
  log(
    `email action context:${JSON.stringify(context)}, event:${JSON.stringify(
      event
    )}`
  );
};

export const Notificaton = function(context: any, event: any) {
  log(
    `notificaton action context:${JSON.stringify(
      context
    )}, event:${JSON.stringify(event)}`
  );
};
