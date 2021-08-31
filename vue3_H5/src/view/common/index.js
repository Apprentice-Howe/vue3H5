// 自动注册common文件夹下的组件

// let components = require.content("./components")  // webpack版本引入
const components = import.meta.globEager('./components/*.vue') // vite版本引入

export function setCommonComponent (app) {
  for (const key in components) {
    const component = components[key]
    if (!component.default.name) {
      const defaultName = key.slice(key.lastIndexOf('/') + 1).replace('.vue', '')
      component.default.name = defaultName
    }
    const componentName = component.default.name
    app.component(componentName, component.default)
  }
}
