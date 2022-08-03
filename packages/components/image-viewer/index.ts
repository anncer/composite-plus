import { withInstall } from '@composite-plus/utils'
import ImageViewer from './src/image-viewer.vue'

export const EImageViewer = withInstall(ImageViewer)
export default EImageViewer

export * from './src/image-viewer'
