- web版分支注意:
vue-loader //必须是13.x  15.x需要自己加入VueLoaderPlugin配置

- 合并分支
```
  git checkout master src/*/
// 只合并src/任何目录下内容，App.vue 和 main等文件内有根据不同平台做的不同代码兼容，所以不需要合并
```
