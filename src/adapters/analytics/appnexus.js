/**
 * appnexus.js - AppNexus Prebid Analytics Adapter
 */

import adapter from 'AnalyticsAdapter';

export default adapter(
  {
    url: 'http://localhost:9999/src/adapters/analytics/libraries/appnexus.js',
    global: 'AppNexusPrebidAnalytics',
    handler: 'on',
    analyticsType: 'library'
  }
);
