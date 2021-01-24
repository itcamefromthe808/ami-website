export const combineClasses = (cssmodule, classname='', ...args) => {
  return args.filter(attr => attr).map(attr => cssmodule[attr]).join(' ') + ' ' + classname;
}
