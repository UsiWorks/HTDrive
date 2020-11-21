export class Drive {
  static config(options) {
    console.log('HTDrive successfully loaded');
    var smain = document.createElement('script');
    if (options.extension === true) {
      smain.src = options.main + options.packages.defaultExtension;
    } else {
      smain.src = options.main;
    }
    document.body.appendChild(smain);
  }
}
