import { TYPE_ELEMENT, TYPE_TEXT, TYPE_FRAGMENT } from './const'

export type VElementNode = {
    el: HTMLElement | null
    type: typeof TYPE_ELEMENT
    tag: string
    props: Record<string, any>
    children: VNode[] | null
}

export type VTextNode = {
    el: Text | null
    type: typeof TYPE_TEXT
    value: string
}

export type VFragmentNode = {
    el: HTMLElement | null
    type: typeof TYPE_FRAGMENT
    children: VNode[]
}

export type VNode = VElementNode | VTextNode | VFragmentNode
