// profile.ts
interface StatItem {
  label: string;
  value: string;
}
interface ActionCard {
  id: string;
  title: string;
  desc: string;
  icon: string;
  bg: string;
  color: string;
}
interface SettingItem {
  id: string;
  label: string;
  icon: string;
  danger?: boolean;
  arrow?: boolean;
}

Page({
  data: {
    statusBarHeight: 0,
    contentTop: 88,
    name: '阿莱克斯·里维拉',
    level: '烹饪等级：爱好者',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&q=80',
    stats: [
      { label: '已做', value: '42' },
      { label: '收藏',    value: '128' },
      { label: '粉丝',    value: '850' },
    ] as StatItem[],
    actionCards: [
      {
        id: 'collection',
        title: '我的收藏',
        desc: '12 个收藏',
        icon: 'collections_bookmark',
        bg: '#ffdbd0',
        color: '#390c00',
      },
      {
        id: 'history',
        title: '烹饪记录',
        desc: '最近 5 餐',
        icon: 'history',
        bg: '#91f78e',
        color: '#00731e',
      },
    ] as ActionCard[],
    settings: [
      { id: 'settings',    label: '账号设置', icon: 'settings',     arrow: true },
      { id: 'notify',      label: '通知',    icon: 'notifications',arrow: true },
      { id: 'help',        label: '帮助与支持',   icon: 'help',         arrow: true },
      { id: 'logout',      label: '退出登录',          icon: 'logout',       danger: true },
    ] as SettingItem[],
  },

  onLoad() {
    try {
      const windowInfo = wx.getWindowInfo();
      const sb = windowInfo.statusBarHeight || 0;
      const topPx = sb + 44 + 8;
      this.setData({
        statusBarHeight: sb,
        contentTop: topPx * 2,
      });
    } catch (e) {
      this.setData({
        statusBarHeight: 20,
        contentTop: (20 + 44 + 8) * 2,
      });
    }
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 });
    }
  },

  onTapAction(e: WechatMiniprogram.CustomEvent) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '打开: ' + id, icon: 'none' });
  },

  onTapAi() {
    wx.showToast({ title: 'AI 分析记录', icon: 'none' });
  },

  onTapSetting(e: WechatMiniprogram.CustomEvent) {
    const id = e.currentTarget.dataset.id;
    if (id === 'logout') {
      wx.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) wx.showToast({ title: '已退出', icon: 'none' });
        },
      });
      return;
    }
    wx.showToast({ title: '打开: ' + id, icon: 'none' });
  },
})
