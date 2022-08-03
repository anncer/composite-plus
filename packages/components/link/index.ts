import { withInstall } from '@composite-plus/utils'
import Link from './src/link'
import { linkProps } from './src/props'
import type { IDefineProps } from '../types/index'

export { linkProps } from './src/props'
export const ELink = withInstall(Link)
export default ELink
export type ILinkProps = IDefineProps<typeof linkProps>
