# concent guide

## 注意，clone下来后，执行以下步骤run项目
- npm i
- mkdir -p node_modules/@types/reactbulma
> 在@types目录下创建一个reactbulma目录，（因reactbulma无类型描述文件，需要创建一个空的）
- touch node_modules/@types/reactbulma/index.d.ts 
- echo "declare module 'reactbulma'" > node_modules/@types/reactbulma/index.d.ts
> 或者在reactbulma目录下新建一个index.d.ts 文件，拷贝以下内容至index.d.ts文件并保存,
```
declare module 'reactbulma'
```
- npm start
> 运行项目



## dir information
目录结构解释
```
|____runConcent.js      # run concent script
|____App.css            # App css file
|____index.js           # app entry file
|____utils              # general function package(non business)
| |____...
|
|____models             # business models
| |____index.js
| |____global
| | |____index.js
| | |____reducer.js     # change state methods(optional)
| | |____computed.js    # computed methods(optional)
| | |____watch.js       # watch methods(optional)
| | |____init.js        # async state initialization function(optional)
| | |____state.js       # module init state(required)
| |____...
| |
|____components         # [[base component]]
| |____biz-dumb         # business dumb component
| |____biz-smart        # business smart component
| |____dumb             # non business dumb component
| |____smart            # non business smart component
|
|____pages              # [[router component]]
| |____PageFoo
|   |____ _model          # 当前页面的model定义，方便就近打开就近查看
|   |____ _dumb           # 当前页面的一些业务笨组件（如果出现多个页面重用则可以调整到components/dumb下）
|   |____...
|
|____types             # 类型定义文件夹
| |____store           # store相关的各种类型推导文件
| |____eventMap        # 事件相关的类型定义
| |____domain          # 也业务领域相关的对象类型定义，通常是后端返回的对象
| |____biz             # 其他一些全局通用的前端定义的对象类型
|
|____App.js             # app root component
|____base
| |____common-func      # business function package
| |____constant         # constant
|
|____services           # services
| |____...
```
