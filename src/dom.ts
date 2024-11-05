import { VElementNode, VFragmentNode, VNode, VTextNode } from './type.ts'
import { TYPE_ELEMENT, TYPE_FRAGMENT, TYPE_TEXT } from './const.ts'

export function mount(vdom: VNode, parentEl: HTMLElement) {
    switch (vdom.type) {
        case TYPE_ELEMENT: {
            createElementNode(vdom, parentEl)
            break
        }

        case TYPE_TEXT: {
            createTextNode(vdom, parentEl)
            break
        }

        case TYPE_FRAGMENT: {
            createFragmentNode(vdom, parentEl)
            break
        }
    }
}

export function createTextNode(vdom: VTextNode, parentEl: HTMLElement) {
    const el = document.createTextNode(vdom.value)
    vdom.el = el
    parentEl.append(el)
}

export function createFragmentNode(vdom: VFragmentNode, parentEl: HTMLElement) {
    const { children } = vdom
    vdom.el = parentEl

    children.forEach((child) => mount(child, parentEl))
}

export function createElementNode(vdom: VElementNode, parentEl: HTMLElement) {
    const el = document.createElement(vdom.tag)

    vdom.el = el
    parentEl.append(el)

    vdom.children?.forEach((child) => mount(child, el))
}

export function unmount(vdom: VNode) {
    switch (vdom.type) {
        case TYPE_ELEMENT: {
            removeElementNode(vdom)
            break
        }

        case TYPE_TEXT: {
            removeTextNode(vdom)
            break
        }

        case TYPE_FRAGMENT: {
            removeFragmentNode(vdom)
            break
        }
    }
}

function removeElementNode(vdom: VElementNode) {
    vdom.el?.remove()
    vdom.el = null
    vdom.children?.forEach(unmount)
}

function removeTextNode(vdom: VTextNode) {
    vdom.el?.remove()
    vdom.el = null
}

function removeFragmentNode(vdom: VFragmentNode) {
    vdom.children.forEach(unmount)
}
