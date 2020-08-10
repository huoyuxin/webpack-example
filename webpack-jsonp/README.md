Jsonp

- Jsonp 思想的应用，加载模块后调用 callback
- wenpackJsonp
  - 作用：
    - 动态引入 JS，loaded 后的 callback
    - 配合 import().then() 食用
    - code split 等，内部的 chunk 也是用这种方式建立依赖网
    - 会做 cache、错误处理、返回 promise
  - 可以通过 output.jsonFunction 指定
    - 只在 target 是 web 时使用（废话，默认的）
    - 如果在同一网页中使用了多个（来自不同编译过程(compilation)的）webpack runtime，则需要修改此选项
    - 如果使用了 output.library 选项，library 名称时自动追加的。
      - 引入多个动态模块时，每个模块都是挂载在 webpackJsonp 上的，会冲突、覆盖，所以需要区分
      - 用了 library 可以不指定 jsonFunction
      - 指定了 library: ‘Mis'
      - jsonFunction: webpackJsonpMis
      - Mis 依赖的 动态模块，都挂载在 webpackJsonpMis 上
- libraryTarget: jsonp
