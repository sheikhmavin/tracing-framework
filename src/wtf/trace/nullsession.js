/**
 * Copyright 2012 Google, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/**
 * @fileoverview Null recording session instance.
 *
 * @author benvanik@google.com (Ben Vanik)
 */

goog.provide('wtf.trace.NullSession');

goog.require('wtf.trace.Session');



/**
 * Null session.
 * Does not record any events or write to anything.
 * Useful for testing the performance impact of the framework in isolation.
 *
 * @param {!wtf.trace.TraceManager} traceManager Trace manager.
 * @param {!wtf.util.Options} options Options.
 * @constructor
 * @extends {wtf.trace.Session}
 */
wtf.trace.NullSession = function(traceManager, options) {
  goog.base(this, traceManager, options, 0);
};
goog.inherits(wtf.trace.NullSession, wtf.trace.Session);


/**
 * @override
 */
wtf.trace.NullSession.prototype.nextBuffer = function() {
  return null;
};


/**
 * @override
 */
wtf.trace.NullSession.prototype.retireBuffer = goog.nullFunction;
