// TODO 浏览器指纹
import FingerprintJS from '@fingerprintjs/fingerprintjs';

/**
 * 获取浏览器指纹
 */
const useFingerprintJS = () => {
    FingerprintJS.load().then(async res => {
        const { visitorId } = await res.get()
        console.log(`%c指纹 ${visitorId} 埋点信息上报记录`, 'color: white; background: red; padding: 2px 6px; border-radius: 4px;font-size:20px')
    })
}

export default useFingerprintJS;