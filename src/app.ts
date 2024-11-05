import { VNode } from './type'
import { mount, unmount } from './dom'

export function createApp(app: VNode) {
    return {
        mount(el: HTMLElement | null) {
            el && mount(app, el)
        },

        unmount() {
            unmount(app)
        },
    }
}
