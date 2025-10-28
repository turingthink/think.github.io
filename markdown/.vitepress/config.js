import { withMermaid } from "vitepress-plugin-mermaid";
import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];

export default withMermaid({
  head: [
    [
      'link',
      { rel: 'icon', type: "image/x-icon", href: '/favicon.ico' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }
    ]
  ],
  // your existing vitepress config...
  title: 'TuringThink',
  description: 'TuringThink 是一家领先的少儿编程教育公司，致力于激发创造力,逻辑思维能力和多维度的学习能力。通过有趣而实践的课程，我们帮助学生掌握编程技能并培养他们解决问题的能力。',
	lastUpdated: true,
	markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-light',
    },
		lineNumbers: true,
    config: (md) => {
      md.use(mathjax3);
    },
	},
	themeConfig: {
		sidebar: [
      {
        text: '公开课',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '带你走进编程世界I', link: '/open/code1' },
          { text: '带你走进编程世界II', link: '/open/code2' },
        ]
      },
      {
        text: 'NOIP C++',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '介绍', link: '/c++/index' },
          {
            text: '一级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '00. 课程整体的介绍', link: '/c++/level-1/index' },
            { text: '01. 入门基础', link: '/c++/level-1/01.base' },
            { text: '02. 顺序结构', link: '/c++/level-1/02.sequence' },
            { text: '03. 顺序结构', link: '/c++/level-1/03.if' },
            { text: '04. 循环语句I', link: '/c++/level-1/04.loop' },
            { text: '05. 循环语句II', link: '/c++/level-1/05.loop' },
            { text: '06. 阶段测试与总结', link: '/c++/level-1/06.test' },
            { text: '07. 数组', link: '/c++/level-1/07.array' },
            { text: '08. 字符串', link: '/c++/level-1/08.array' },
            { text: '09. 结构体', link: '/c++/level-1/09.array' },
            { text: '10. 指针', link: '/c++/level-1/10.point' },
            { text: '11. 排序', link: '/c++/level-1/11.sort' },
            { text: '12. 查找', link: '/c++/level-1/12.find' },
            { text: '13. 函数I', link: '/c++/level-1/13.func' },
            { text: '14. 函数II', link: '/c++/level-1/14.func' },
            { text: '15. 阶段测试与总结', link: '/c++/level-1/15.test' },
            { text: '16. 位运算', link: '/c++/level-1/16.bit' },
            { text: '17. 数学算法I', link: '/c++/level-1/17.math' },
            { text: '18. 数学算法II', link: '/c++/level-1/18.math' },
            { text: '19. Trick', link: '/c++/level-1/19.trick' },
            { text: '20. 阶段测试与总结', link: '/c++/level-1/20.test' },
            { text: 'NOIP C++大纲', link: '/c++/level-1/00.noip' },
            { text: 'Demo', link: '/c++/level-1/demo' },
            ]
          },
          {
            text: '二级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/c++/level-2/index' },
            ]
          },
          {
            text: '三级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/c++/level-3/index' },
            ]
          },
          {
            text: '四级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/c++/level-4/index' },
            ]
          },
          {
            text: '五级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/c++/level-5/index' },
            ]
          },
          {
            text: '六级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/c++/level-6/index' },
            ]
          },
        ]
      },
      {
        text: 'Python',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '教学大纲', link: '/python/index' },
          { text: '课程设计说明', link: '/python/introduction.md' },
          { text: '学习的收获', link: '/python/success.md' },
          {
            text: '初级课程',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '初级教学大纲', link: '/python/level-1/index' },
              { text: '第一节课', link: '/python/level-1/class01.md' },
              { text: '第二节课', link: '/python/level-1/class02.md' },
              { text: '第三节课', link: '/python/level-1/class03.md' },
              { text: '第四节课', link: '/python/level-1/class04.md' },
              { text: '第五节课', link: '/python/level-1/class05.md' },
              { text: '第六节课', link: '/python/level-1/class06.md' },
              { text: '第七节课', link: '/python/level-1/class07.md' },
              { text: '第八节课', link: '/python/level-1/class08.md' },
              { text: '第九节课', link: '/python/level-1/class09.md' },
              { text: '第十节课', link: '/python/level-1/class10.md' },
            ]
          },
          {
            text: '中级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '中级教学大纲', link: '/python/level-2/index' },
            { text: '第一节课', link: '/python/level-2/class01.md' },
            { text: '第二节课', link: '/python/level-2/class02.md' },
            { text: '第三节课', link: '/python/level-2/class03.md' },
            { text: '第四节课', link: '/python/level-2/class04.md' },
            { text: '第五节课', link: '/python/level-2/class05.md' },
            { text: '第六节课', link: '/python/level-2/class06.md' },
            { text: '第七节课', link: '/python/level-2/class07.md' },
            { text: '第八节课', link: '/python/level-2/class08.md' },
            { text: '第九节课', link: '/python/level-2/class09.md' },
            { text: '第十节课', link: '/python/level-2/class10.md' },
            { text: '第十一节课', link: '/python/level-2/class11.md' },
            ]
          },
          {
            text: '高级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '高级教学大纲', link: '/python/level-3/index' },
            { text: '第一节课', link: '/python/level-3/class01.md' },
            { text: '第二节课', link: '/python/level-3/class02.md' },
            { text: '第三节课', link: '/python/level-3/class03.md' },
            { text: '第四节课', link: '/python/level-3/class04.md' },
            { text: '第五节课', link: '/python/level-3/class05.md' },
            { text: '第六节课', link: '/python/level-3/class06.md' },
            { text: '第七节课', link: '/python/level-3/class07.md' },
            { text: '第八节课', link: '/python/level-3/class08.md' },
            { text: '第九节课', link: '/python/level-3/class09.md' },
            { text: '第十节课', link: '/python/level-3/class10.md' },
            ]
          },
        ]
      },
      {
        text: 'Scratch',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '介绍', link: '/scratch/index' },
          {
            text: '一级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/scratch/level-1/index' },
            { text: '基本知识', link: '/scratch/level-1/index' },
            ]
          },
          {
            text: '二级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/scratch/level-2/index' },
            ]
          },
          {
            text: '三级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/scratch/level-3/index' },
            ]
          },
          {
            text: '四级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/scratch/level-4/index' },
            ]
          },
        ]
      },
      {
        text: 'arduino',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '0.Arduino ESP32', link: '/arduino/index' },
          { text: '1.UART串口原理', link: '/arduino/1.uart'},
          { text: '2.UART代码分析', link: '/arduino/2.uart'},
          { text: '3.LED', link: '/arduino/3.led' },
          { text: '4.GPIO控制继电器', link: '/arduino/4.gpio' },
          { text: '5.DHT11温湿度传感器', link: '/arduino/5.dht11' },
          { text: '6.BEEP', link: '/arduino/6.beep' },
          { text: '7.KEY', link: '/arduino/7.key' },
          { text: '8.PWM', link: '/arduino/pwm' },
          { text: '9.RGB LED', link: '/arduino/rgbled' },
          { text: '10.EEPROM', link: '/arduino/e2prom' },
          { text: '智能花盆项目', link: '/arduino/smartflowerpot' },
        ]
      },
      {
        text: '教务管理',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '课程表', link: '/class/classlists' },
          { text: '师说', link: '/class/index' },
        ]
      },
    ],
		
		footer: {
			license: {
				text: 'MIT License',
				link: 'https://opensource.org/licenses/MIT'
			},
			copyright: `Copyright © 2022-${new Date().getFullYear()} Richard Wang`
		},
		lastUpdatedText: 'Updated Date',
		docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
	},
  mermaid: {

  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
});
