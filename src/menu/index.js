import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */

function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export const menuHeader = supplementPath([
  { path: '/index', title: '返回', icon: 'home' },
  {
    title: '图谱管理',
    icon: 'file-powerpoint-o',
    children: [
      { path: '/waitList', title: '待入库' },
      { path: '/processList', title: '已入库' },
      { path: '/historyList', title: '历史记录' }
    ]
  }
])

export const menuAside = supplementPath([
  { path: '/index', title: '返回', icon: 'home' },
  {
    title: '图谱管理',
    icon: 'file-powerpoint-o',
  children: [
      { icon: 'spinner',path: '/waitList', title: '待入库' },
      { icon: 'check-square-o',path: '/processList', title: '已入库' },
      { icon: 'sellsy',path: '/historyList', title: '历史记录' } 
    ]
  },
  {
    title: '系统管理',
    icon: 'folder-o',
    children: [
      { icon: 'cog', path: '/sysEdit', title: '系统设置' },
      { icon: 'question-circle-o',path: '/sysEdit', title: '参考手册' },
      { icon: 'copyright',path: '/sysEdit', title: '授权查询' }
    ]
  }
])
