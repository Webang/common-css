# common-css

extract some common css with css modifier

## contents

```
- src
  | reset.css 样式重置
  | ui.less   常用的样式修饰器
```

## exmaples

```less
// 常用字体颜色
each({
  primary: #000;
  second: #292e3e;
  warn: #f37b1d;
  error: #ee0a24;
  success: #07c160;
  gray: #969799;
}, {
  .ui-color-@{key} {
    color: @value;
  }
})

// 常用字体大小
each({
  xs: 12px;
  sm: 14px;
  md: 16px;
  l: 18px;
  xl: 20px;
}, {
  .ui-fs-@{key} {
    font-size: @value;
  }
})
```

所有用法见 `src/ui.less`，代码量200行左右。

## reference

- Less 中文网(语法手册) http://lesscss.cn
- lessJS 用法 https://less.bootcss.com/usage