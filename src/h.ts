import { TYPE_ELEMENT, TYPE_FRAGMENT, TYPE_TEXT } from './const'
import { VNode } from './type'

export function h(
    tag: string,
    props: Record<string, any> = {},
    children?: string | any[],
): VNode {
    return {
        type: TYPE_ELEMENT,
        tag,
        props,
        children: children
            ? typeof children === 'string'
                ? [createTextVNode(children)]
                : Array.isArray(children)
                  ? createFragmentVNode(children)
                  : children
            : null,
    }
}

export function createFragmentVNode(children: any[]) {
    return {
        type: TYPE_FRAGMENT,
        children: children.map((child) =>
            typeof child === 'string' ? createTextVNode(child) : child,
        ),
    }
}

export function createTextVNode(value: string) {
    return {
        type: TYPE_TEXT,
        value,
    }
}
