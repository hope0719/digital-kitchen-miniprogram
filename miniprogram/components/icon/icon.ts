Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    name: { type: String, value: '' },
    size: { type: Number, value: 24 }, // 单位 rpx，最终转 px
    color: { type: String, value: 'currentColor' },
    fill: { type: Boolean, value: false },
  },
  data: {
    sizePx: '24rpx',
  },
  observers: {
    'size': function (size: number) {
      this.setData({ sizePx: (size || 24) + 'rpx' });
    },
  },
  lifetimes: {
    attached() {
      this.setData({ sizePx: ((this.data.size as number) || 24) + 'rpx' });
    },
  },
})
