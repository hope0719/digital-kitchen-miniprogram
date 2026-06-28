// index.ts
interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  color2: string;
  foodSvg: string;
}

interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  bg: string;
  iconBg: string;
  color: string;
}

interface RecItem {
  id: string;
  title: string;
  tag: string;
  color: string;
  color2: string;
  foodSvg: string;
}

interface RecipeItem {
  id: string;
  title: string;
  rating: string;
  duration: string;
  difficulty: string;
  color: string;
  color2: string;
  liked: boolean;
  foodSvg: string;
}

Page({
  data: {
    statusBarHeight: 0,
    contentTop: 88,
    fabBottom: 66,
    // 问候
    userName: '厨师',
    greeting: '早上好',
    // 搜索
    searchValue: '',
    searchFocus: false,
    // 轮播Banner
    banners: [
      {
        id: 'b1',
        title: '夏季清凉食谱',
        subtitle: '探索100+夏日限定',
        color: '#FF6B35',
        color2: '#FF8E53',
        foodSvg: 'salad',
      },
      {
        id: 'b2',
        title: '甜品治愈时光',
        subtitle: '40+治愈系甜点',
        color: '#EE5A6F',
        color2: '#F093FB',
        foodSvg: 'cake',
      },
      {
        id: 'b3',
        title: '轻食健康计划',
        subtitle: '低卡也能很好吃',
        color: '#00B894',
        color2: '#55E6C1',
        foodSvg: 'healthy',
      },
    ] as BannerItem[],
    currentBanner: 0,
    // 快捷分类
    categories: [
      {
        id: 'c1',
        name: '快手菜',
        icon: 'timer',
        bg: '#FFF4F0',
        iconBg: '#FFE0D0',
        color: '#ab3500',
      },
      {
        id: 'c2',
        name: '健康',
        icon: 'eco',
        bg: '#F0FFF4',
        iconBg: '#D0F0D0',
        color: '#006e1c',
      },
      {
        id: 'c3',
        name: '甜点',
        icon: 'bakery_dining',
        bg: '#FFF9F0',
        iconBg: '#FFE8C8',
        color: '#7c5800',
      },
      {
        id: 'c4',
        name: '早餐',
        icon: 'egg_alt',
        bg: '#F4F0FF',
        iconBg: '#E0D8FF',
        color: '#4f46e5',
      },
      {
        id: 'c5',
        name: '家常菜',
        icon: 'fastfood',
        bg: '#FFF0F0',
        iconBg: '#FFD8D8',
        color: '#c62828',
      },
      {
        id: 'c6',
        name: '减脂',
        icon: 'trending_flat',
        bg: '#F0FFFE',
        iconBg: '#C8F0ED',
        color: '#00897b',
      },
      {
        id: 'c7',
        name: '汤粥',
        icon: 'local_cafe',
        bg: '#FFFBF0',
        iconBg: '#FFE8B8',
        color: '#e65100',
      },
      {
        id: 'c8',
        name: '收藏',
        icon: 'favorite',
        bg: '#FFF0F5',
        iconBg: '#FFD0DE',
        color: '#ad1457',
      },
    ] as CategoryItem[],
    // 今日推荐（横向滑动）
    recommendations: [
      {
        id: 'r1',
        title: '夏日地中海沙拉',
        tag: '健康之选',
        color: '#00B894',
        color2: '#55E6C1',
        foodSvg: 'salad',
      },
      {
        id: 'r2',
        title: '香煎香草牛排',
        tag: '快手晚餐',
        color: '#FF6B35',
        color2: '#FF8E53',
        foodSvg: 'steak',
      },
      {
        id: 'r3',
        title: '烤三文鱼配芦笋',
        tag: '高蛋白',
        color: '#4facfe',
        color2: '#00f2fe',
        foodSvg: 'salmon',
      },
    ] as RecItem[],
    // 热门食谱（双列网格）
    recipes: [
      {
        id: 'p1',
        title: '奶油蘑菇烩饭',
        rating: '4.9',
        duration: '35分钟',
        difficulty: '简单',
        color: '#FF6B35',
        color2: '#FF8E53',
        liked: true,
        foodSvg: 'mushroom',
      },
      {
        id: 'p2',
        title: '经典酪乳煎饼',
        rating: '4.7',
        duration: '20分钟',
        difficulty: '入门',
        color: '#a8edea',
        color2: '#fed6e3',
        liked: false,
        foodSvg: 'pancake',
      },
      {
        id: 'p3',
        title: '泰式打抛鸡肉',
        rating: '4.8',
        duration: '25分钟',
        difficulty: '中等',
        color: '#ffecd2',
        color2: '#fcb69f',
        liked: true,
        foodSvg: 'chicken',
      },
      {
        id: 'p4',
        title: '玛格丽特披萨',
        rating: '4.6',
        duration: '45分钟',
        difficulty: '中等',
        color: '#ff9a9e',
        color2: '#fecfef',
        liked: false,
        foodSvg: 'pizza',
      },
    ] as RecipeItem[],
    // 每日小贴士
    dailyTip:
      '煮意大利面时在水中加少许橄榄油，可以防止面条粘连，口感更佳。',
  },

  onLoad() {
    this.initSystemInfo();
    this.updateGreeting();
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 });
    }
  },

  initSystemInfo() {
    try {
      const windowInfo = wx.getWindowInfo();
      const sb = windowInfo.statusBarHeight || 0;
      const safeArea = windowInfo.safeArea || {};
      const safeBottom =
        windowInfo.screenHeight - (safeArea.bottom || windowInfo.screenHeight);
      this.setData({
        statusBarHeight: sb,
        contentTop: sb + 44,
        fabBottom: 66 + safeBottom,
      });
    } catch (_e) {
      this.setData({
        statusBarHeight: 20,
        contentTop: 64,
        fabBottom: 66,
      });
    }
  },

  updateGreeting() {
    const hour = new Date().getHours();
    let greeting = '早上好';
    if (hour >= 12 && hour < 18) {
      greeting = '下午好';
    } else if (hour >= 18) {
      greeting = '晚上好';
    }
    this.setData({ greeting });
  },

  onSearchInput(e: WechatMiniprogram.Input) {
    this.setData({ searchValue: e.detail.value });
  },

  onSearchFocus() {
    this.setData({ searchFocus: true });
  },

  onSearchBlur() {
    this.setData({ searchFocus: false });
  },

  onSearchConfirm(e: WechatMiniprogram.Input) {
    const value = e.detail.value.trim();
    if (!value) return;
    wx.showToast({ title: `搜索: ${value}`, icon: 'none' });
  },

  onClearSearch() {
    this.setData({ searchValue: '' });
  },

  onTapCategory(e: WechatMiniprogram.CustomEvent) {
    const name = e.currentTarget.dataset.name;
    wx.showToast({ title: `${name}`, icon: 'none' });
  },

  onTapRecCard(e: WechatMiniprogram.CustomEvent) {
    wx.showToast({ title: '查看推荐详情', icon: 'none' });
  },

  onTapRecipe(e: WechatMiniprogram.CustomEvent) {
    wx.showToast({ title: '查看菜谱详情', icon: 'none' });
  },

  onToggleLike(e: WechatMiniprogram.CustomEvent) {
    e.stopPropagation();
    const id = e.currentTarget.dataset.id;
    const recipes = this.data.recipes.map((r: any) =>
      r.id === id ? { ...r, liked: !r.liked } : r,
    );
    this.setData({ recipes });
  },

  onBannerChange(e: WechatMiniprogram.CustomEvent) {
    this.setData({ currentBanner: e.detail.current });
  },

  onTapBanner() {
    wx.showToast({ title: '查看活动详情', icon: 'none' });
  },

  onViewAllRecs() {
    wx.showToast({ title: '查看全部推荐', icon: 'none' });
  },

  onViewAllRecipes() {
    wx.showToast({ title: '查看全部食谱', icon: 'none' });
  },

  onTapFAB() {
    wx.showToast({ title: '快速添加', icon: 'none' });
  },

  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh();
      wx.showToast({ title: '已更新', icon: 'success' });
    }, 800);
  },
});
