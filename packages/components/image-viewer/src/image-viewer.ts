import {
  isNumber,
  mutable,
} from '@composite-plus/utils'
import { definePropType } from '../../types/index'
import type { Component, ExtractPropTypes } from 'vue'
import { buildProps } from '@composite-plus/utils'

export type ImageViewerAction =
  | 'zoomIn'
  | 'zoomOut'
  | 'clockwise'
  | 'anticlockwise'

export const imageViewerProps = buildProps({
  urlList: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const),
  },
  zIndex: {
    type: Number,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
  infinite: {
    type: Boolean,
    default: true,
  },
  hideOnClickModal: {
    type: Boolean,
    default: false,
  },
  teleported: {
    type: Boolean,
    default: false,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
} as const)
export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>

export const imageViewerEmits = {
  close: () => true,
  switch: (index: number) => isNumber(index),
}
export type ImageViewerEmits = typeof imageViewerEmits

export interface ImageViewerMode {
  name: string
  icon: Component
}
