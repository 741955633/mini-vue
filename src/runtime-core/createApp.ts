import { render } from "./renderer"
import { createVNode } from "./vnode"

// 接收根组件 返回对象
export function createApp (rootComponent) {
  // debugger
  return {
    // 接收一个element实例 根容器
    mount (rootContainer) {
      // 先转换成vnode 虚拟节点
      // components => vnode
      // 所有操作都基于vnode

      const vnode = createVNode(rootComponent)

      render(vnode, rootContainer)
    }
  }
} 
