
export default {
  methods: {
    collectSlotRefs(VNodes = []) {
      if (!VNodes || !VNodes.length) return

      let node = checkContext(VNodes)
      if (node) {
        this._slotRefs = node.context.$refs || {}
      } else {
        this._slotRefs = {}
      }

      function checkContext (vnodes) {
        let children = []
        let node = null
        for (let i = 0; i < vnodes.length; i++) {
          let vnode = vnodes[i]
          if (vnode.context){
            return node = vnode
          }

          if (vnode.children && vnode.children.length) {
            children = children.concat(vnode.children)
          }
        }
        if (children.length) {
          return checkContext(children)
        }
      }

      // const refs = this._slotRefs = {}

      // function getRefs(vnodes) {
      //   vnodes = vnodes.filter((vnode) => {
      //     if (vnode.children && vnode.children.length) {
      //       getRefs(vnode.children)
      //     }
      //     return vnode.data && vnode.data.ref
      //   })
      //   if (!vnodes.length) return
      //   vnodes.forEach(vnode => {
      //     const key = vnode.data.ref
      //     const ref = vnode.componentInstance || vnode.elm

      //     if (vnode.data.refInFor) {
      //       if (!Array.isArray(refs[key])) {
      //         refs[key] = [ref]
      //       } else if (refs[key].indexOf(ref) < 0) {
      //         refs[key].push(ref)
      //       }
      //     } else {
      //       refs[key] = ref
      //     }
      //   })
      // }
      // getRefs(VNodes)
    }
  }
}
