import Mock from 'mockjs'
import Controls from '@/Controls.json'
import Constant from '@/services/ComponentAPI.json' // 后端代理前缀
import Config from './config'
import Tools from 'edsp-vue-ui/utils/Tools'

if (!Controls.isProd) {
  // 开发环境开启mock
  Mock.setup({
    timeout: '300-600'
  })
  /**
   * 动态加载json
   */
  Config.map(item => {
    let url = `${Constant.PTE}`,
      nameList = []
    import(`./data/${item.url}.json`).then(m => {
      nameList = item.url.split('_')
      nameList.forEach(e => {
        url += `/${e}`
      })
      if (item.params) {
        url += `?${Tools.getParams(item.params)}`
      }
      Mock.mock(url, ({ body }) => {
        return {
          code: '200',
          data: m.default,
          err_level: 0,
          message: '操作成功'
        }
      })
    })
  })
}
