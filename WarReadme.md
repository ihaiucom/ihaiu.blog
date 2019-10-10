# 战斗框架

## War: 入口 / 门面类 

对于战斗以外的接口都通过War来访问。

### 负责
* 启动战斗
* 退出战斗


```
War
{
    static async launch(launcherParameter?: LauncherParameter)
}
```


## WarLauncher: 启动战斗 



```flow
st=>start: Start:>https://www.zybuluo.com
io=>inputoutput: verification
op=>operation: Your Operation
cond=>condition: Yes or No?
sub=>subroutine: Your Subroutine
e=>end

st->io->op->cond
cond(yes)->e
cond(no)->sub->io
```

```seq
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

```graphLR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```
