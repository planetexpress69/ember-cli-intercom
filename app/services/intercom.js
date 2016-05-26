import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  boot(params) {
    if (config['ember-cli-intercom'] !== undefined) {
      params['app_id'] = config['ember-cli-intercom'].appId;
      Intercom('boot', params);
    }
  },

  update(params) {
    if (config['ember-cli-intercom'] !== undefined) {
      Intercom('update', params);
    }
  }
});
