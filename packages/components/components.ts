export * from './link/index'
export * from './button/index'
export * from './icon/index'
export * from './image/index'

import { ELink } from './link/index'
import { EButton } from './button/index'
import { EIcon } from './icon/index'
import { EImage } from './image/index'
import type { Plugin } from 'vue'

export default {
  ELink,
  EButton,
  EImage,
  EIcon
} as Record<string, Plugin>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ELink: typeof ELink
    EButton: typeof EButton
    EImage: typeof EImage
    EIcon: typeof EIcon
  }
}
