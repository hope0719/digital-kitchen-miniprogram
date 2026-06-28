// custom-tab-bar/index.ts
Component({
  data: {
    selected: 0,
    color: '#594139',
    selectedColor: '#5f1900',
    list: [
      { pagePath: '/pages/index/index',     text: '首页',     icon: 'home' },
      { pagePath: '/pages/analysis/analysis', text: '分析', icon: 'query_stats' },
      { pagePath: '/pages/profile/profile',  text: '我的',  icon: 'person' },
    ],
  },
  attached() {
  },
  methods: {
    onSwitch(e: WechatMiniprogram.CustomEvent) {
      const index = e.currentTarget.dataset.index as number;
      const url = this.data.list[index].pagePath;
      wx.switchTab({ url });
      this.setData({ selected: index });
    },
  },
})
