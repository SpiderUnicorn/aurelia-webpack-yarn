import {Aurelia, PLATFORM} from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(a => {
         aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
    });
}

  