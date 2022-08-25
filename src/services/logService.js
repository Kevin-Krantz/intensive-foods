import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn: "https://f793df191be4419aa4520c9da20e522a@o1368285.ingest.sentry.io/6685757",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

export function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
};
