// analysis.ts
interface MacroItem {
  label: string;
  value: string;
  width: number; // 0-100
  color: string;
}
interface Substitution {
  recommended: string;
  replaced: string;
}
interface Tip {
  title: string;
}

Page({
  data: {
    statusBarHeight: 0,
    contentTop: 88,
    inputText: '',
    score: 85,
    healthTip: '综合食材比例与烹饪方式得出',
    macros: [
      { label: '蛋白质', value: '28克', width: 40, color: '#006e1c' },
      { label: '碳水',   value: '45克', width: 65, color: '#c78f00' },
      { label: '脂肪',   value: '12克', width: 25, color: '#ff6b35' },
    ] as MacroItem[],
    calories: '420 千卡',
    substitutions: [
      { recommended: '蜂蜜',   replaced: '白砂糖' },
      { recommended: '橄榄油', replaced: '动物油脂' },
    ] as Substitution[],
    tips: [
      { title: '尝试采用低温慢煮代替高温油炸，能有效保留蛋白质活性并减少油脂摄入。' },
      { title: '在出锅前加入香草（如罗勒或迷迭香），可以利用香气提升风味，从而减少食盐的使用量。' },
      { title: '加入适量的黑胡椒可以帮助提升食材中某些抗氧化成分的吸收率。' },
    ] as Tip[],
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
      this.getTabBar().setData({ selected: 1 });
    }
  },

  onInput(e: WechatMiniprogram.Input) {
    this.setData({ inputText: e.detail.value });
  },

  onPickImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        wx.showToast({ title: '已选择图片：' + (res.tempFiles[0]?.tempFilePath || ''), icon: 'none' });
      },
    });
  },

  onAnalyze() {
    if (!this.data.inputText) {
      wx.showToast({ title: '请先上传或粘贴菜谱', icon: 'none' });
      return;
    }
    wx.showLoading({ title: 'AI 分析中...' });
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({ title: '分析完成', icon: 'success' });
    }, 1200);
  },

  onSave() {
    wx.showToast({ title: '已保存并生成购物清单', icon: 'success' });
  },
})
