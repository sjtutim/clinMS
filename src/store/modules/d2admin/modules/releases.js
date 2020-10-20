import util from '@/libs/util.js'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state state
     */
    versionShow () {
      util.log.capsule('CliMS', `v${process.env.VUE_APP_VERSION}`)
      console.log('系统启动成功，谢谢 ~')
    }
  }
}
