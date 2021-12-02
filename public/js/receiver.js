const context = window.cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

// Debug Logger
const castDebugLogger = window.cast.debug.CastDebugLogger.getInstance();
const LOG_TAG = 'MyAPP.LOG';

// Enable debug logger and show a 'DEBUG MODE' overlay at top left corner.
castDebugLogger.setEnabled(false);

// Show logs on display
castDebugLogger.showDebugLogs(false);

// Set verbosity level for Core events.
castDebugLogger.loggerLevelByEvents = {
  'cast.framework.events.category.CORE': window.cast.framework.LoggerLevel.INFO,
  'cast.framework.events.EventType.MEDIA_STATUS':
    window.cast.framework.LoggerLevel.DEBUG,
};

// Set verbosity level for custom tags.
castDebugLogger.loggerLevelByTags = {
  LOG_TAG: window.cast.framework.LoggerLevel.DEBUG,
};

playerManager.setMessageInterceptor(
  window.cast.framework.messages.MessageType.LOAD,
  (request) => {
    castDebugLogger.info(LOG_TAG, `Request: ${JSON.stringify(request)}`);

    // Return updated request
    return request;
  }
);

context.start();
