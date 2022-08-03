import { isArray, isObject } from '@vue/shared'
import { isNil } from 'lodash'

import get from 'lodash/get'
import set from 'lodash/set'
import has from 'lodash/has'
import objectPick from 'lodash/pick'
import objectOmit from 'lodash/omit'

export {
  isArray,
  isFunction,
  isObject,
  isString,
  isDate,
  isPromise,
  isSymbol,
} from '@vue/shared'

export { get, set, has, objectPick, objectOmit }

export { isBoolean, isNumber } from '@vueuse/core'

export { isVNode } from 'vue'

export const isUndefined = (val: any): val is undefined => val === undefined

export const isEmpty = (val: unknown) =>
  (!val && val !== 0) ||
  (isArray(val) && val.length === 0) ||
  (isObject(val) && !Object.keys(val).length)

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false
  return e instanceof Element
}

export const isPropAbsent = (prop: unknown): prop is null | undefined => {
  return isNil(prop)
}