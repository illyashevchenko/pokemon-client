import angular          from 'angular';
import componentsModule from 'components';

angular.module('pkApp', [
  componentsModule
])
  /**
   * If you need to switch debug info on - use angular.reloadWithDebugInfo()
   */
  .config(/*@ngInject*/($compileProvider, routerStatusFctProvider) => {
    //TODO: move to a separated config module
    $compileProvider.debugInfoEnabled(routerStatusFctProvider.isLocalRun());
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|skype):/);
  });
