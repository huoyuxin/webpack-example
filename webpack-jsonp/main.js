import('./foo').then((foo_module) => {
  console.log('foo 的执行结果', foo_module.foo())
})
