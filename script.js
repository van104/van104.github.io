
/* 轮播系统 */
class CarouselSystem {
  constructor(container) {
    this.container = container;
    this.images = Array.from(container.querySelectorAll('img'));
    this.currentIndex = 0;
    this.interval = parseInt(container.dataset.interval) || 5000;
    this.autoPlay = null;

    // 初始化控件
    this.createControls();
    this.init();
  }

  init() {
    // 激活首图
    this.images[this.currentIndex].classList.add('active');

    // 启动自动播放
    this.startAutoPlay();

    // 异常检测
    if (this.images.length === 0) {
      console.error('轮播容器无图片:', this.container);
      return;
    }
  }

  createControls() {
    const controls = document.createElement('div');
    controls.className = 'carousel-controls';

    this.prevBtn = this.createButton('‹', 'prev');
    this.nextBtn = this.createButton('›', 'next');

    controls.append(this.prevBtn, this.nextBtn);
    this.container.append(controls);

    // 事件绑定
    this.prevBtn.addEventListener('click', () => this.handlePrev());
    this.nextBtn.addEventListener('click', () => this.handleNext());
  }

  createButton(text, type) {
    const btn = document.createElement('button');
    btn.className = `control-btn ${type}-btn`;
    btn.textContent = text;
    return btn;
  }

  handlePrev() {
    this.resetAutoPlay();
    this.rotate(-1);
  }

  handleNext() {
    this.resetAutoPlay();
    this.rotate(1);
  }

  rotate(direction) {
    const lastIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;

    this.images[lastIndex].classList.remove('active');
    this.images[this.currentIndex].classList.add('active');
  }

  startAutoPlay() {
    this.autoPlay = setInterval(() => this.rotate(1), this.interval);
  }

  resetAutoPlay() {
    clearInterval(this.autoPlay);
    this.startAutoPlay();
  }
}

// 初始化所有轮播器
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(container => {
    new CarouselSystem(container);
  });
});



/* 放回顶部按钮 */
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('back-to-top');

  // 显示/隐藏逻辑
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  // 平滑滚动
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 键盘支持

});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    alert('消息已发送！');
    contactForm.reset();
});


