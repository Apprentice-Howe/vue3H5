// 自动注册common文件夹下的组件

// let components = require.content("./components")  // webpack版本引入
let components = import.meta.globEager("./components/*.vue") // vite版本引入

export function setCommonComponent(app) {
  for (let key in components) {
    let component = components[key]
    if (!component.default.name) {
      let defaultName = key.slice(key.lastIndexOf('/') + 1).replace(".vue", '')
      component.default.name = defaultName
    }
    let componentName = component.default.name
    app.component(componentName, component.default)
  }
}


