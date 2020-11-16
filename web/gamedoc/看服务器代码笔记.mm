
<map>
  <node ID="root" TEXT="看服务器代码笔记">
    <node TEXT="antnet" ID="9f9c93bc9fef88a9f86b393dbd8596be" STYLE="bubble" POSITION="right">
      <node TEXT="time.go" ID="d21e62f6d19e6301caeb01de2a69375f" STYLE="fork">
        <node TEXT="时间戳相关函数" ID="aa577090bdbce7fe574f55b9a49eab57" STYLE="fork">
          <node TEXT="func GetNextHourIntervalS() int" ID="d0fe8cc840808e908124373223e332f4" STYLE="fork"/>
          <node TEXT="func GetNextHourIntervalMS() int" ID="a5519c17da00ea4bcce58510a1ee7285" STYLE="fork">
            <node TEXT="return GetNextHourIntervalS() * 1000" ID="3a1ca35f71631e1cb8133fe239a66f02" STYLE="fork"/>
          </node>
          <node TEXT="func GetHour24(timestamp int64, timezone int) int" ID="01440afa6ec27cd68c0ca623c45d4161" STYLE="fork">
            <node TEXT="timestamp int64 //秒" ID="1c72ca8132c015cfd06d154155af988c" STYLE="fork"/>
            <node TEXT="timezone int //时区1--24" ID="d595e03f02c6c047e9ffc4bf1af32f4a" STYLE="fork"/>
          </node>
          <node TEXT="func GetHour23(timestamp int64, timezone int) int" ID="b3958b354ec6f69f4b76fd245af5e9de" STYLE="fork">
            <node TEXT="timestamp int64 //秒" ID="c03f0c9933be6be40c16fe217acbf655" STYLE="fork"/>
            <node TEXT="timezone int //时区0--23" ID="6ea708cfc9dd5ea53413031ccca00ac0" STYLE="fork"/>
          </node>
          <node TEXT="func GetHour(timestamp int64, timezone int) int" ID="c0e6ed8119f803e004c3afc1082650ba" STYLE="fork">
            <node TEXT="return GetHour23(timestamp, timezone)" ID="a5c7926aeaf45a5f156657bf91ab8f2b" STYLE="fork"/>
          </node>
          <node TEXT="func IsDiffDay(now, old int64, timezone int) int" ID="b6a212868ad9537b35340bdb08900933" STYLE="fork">
            <node TEXT="now += int64(timezone * 3600)" ID="391824940c2d9f39975dfe98f2463b6f" STYLE="fork"/>
            <node TEXT="old += int64(timezone * 3600)" ID="81346feb71e48acbc07e26dee8554ec3" STYLE="fork"/>
            <node TEXT="return int((now / 86400) - (old / 86400))" ID="5475858ddb473a3c39f6fb03ee3ce85d" STYLE="fork"/>
          </node>
          <node TEXT="func IsBetweenHour(now int64, hour_start, hour_end int, timezone int) bool" ID="2d63b01d13ce5821505007ba713371a1" STYLE="fork">
            <node TEXT="hour := GetHour23(now, timezone)" ID="e2022b2c2a803e0d90d598211f246a0d" STYLE="fork"/>
            <node TEXT="return (hour &gt;= hour_start) &amp;&amp; (hour &lt; hour_end)" ID="d03001b0ac77ce562e71ea094b6ad1c5" STYLE="fork"/>
          </node>
          <node TEXT="func IsDiffHour(now, old int64, hour, timezone int) bool" ID="424d1e3c6815a442be5c82851fcbcbd6" STYLE="fork"/>
          <node TEXT="func IsDiffWeek(now, old int64, hour, timezone int) bool" ID="9cc1a1711d2240f154f3b2a042c736e4" STYLE="fork"/>
          <node TEXT="func ZeroTime(timezone int) int64" ID="14bcbc763640e52353fceb5ca3861fd8" STYLE="fork">
            <node TEXT="timeStr := time.Now().Format(&quot;2006-01-02&quot;)" ID="58d966cd531a98d7100af4964833ec2e" STYLE="fork"/>
            <node TEXT="t, _ := time.Parse(&quot;2006-01-02&quot;, timeStr)" ID="0545f5e9a1c999148390d5bfaa260ff4" STYLE="fork"/>
            <node TEXT="return t.Unix() - int64(timezone*3600)" ID="5635be5cfc4d51bdd15dc2ccdad209a9" STYLE="fork"/>
          </node>
          <node TEXT="func YearMonthDay(timestamp int64, timezone int) (int32, int32, int32)" ID="26905b4715827312c471999a3f20121a" STYLE="fork">
            <node TEXT="timestamp += int64(timezone * 3600)" ID="2c4f78e557ab5cb206dc7224537a677a" STYLE="fork"/>
            <node TEXT="year, month, day := time.Unix(timestamp, 0).UTC().Date()" ID="591cdfa1d9f7856f5ab932105ad8cb6b" STYLE="fork"/>
            <node TEXT="return int32(year), int32(month), int32(day)" ID="a902706a3d7a48c70d731f60e8011faa" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="创建时间对象相关函数" ID="23ebd7ef4800f464c80e1330616fbce6" STYLE="fork">
          <node TEXT="func ParseTime(str string) (time.Time, error) " ID="adcbd9cf8070b310ea1c368c2901dc12" STYLE="fork">
            <node TEXT="return time.Parse(&quot;2006-01-02 15:04:05&quot;, str)" ID="d9afb1ecdd8e379d6b688a81df94e7fd" STYLE="fork"/>
          </node>
          <node TEXT="func UnixTime(sec, nsec int64) time.Time" ID="dd116538058f2ae53a37bee26b96e98f" STYLE="fork">
            <node TEXT="return time.Unix(sec, nsec)" ID="1987145d1713c9bfba1c8a2f7c8c78ae" STYLE="fork"/>
          </node>
          <node TEXT="func Now() time.Time" ID="77e0fe3a42403a4f99945e1c1cb8d2bd" STYLE="fork">
            <node TEXT="return time.Now()" ID="6c4f4a7f01d1d2a1a790798b234c59e4" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="获取当前时间相关函数" ID="7434cd59096e059ff2cd8ff96af51564" STYLE="fork">
          <node TEXT="func Date() string" ID="797aeb6d9d0aa3085d231297a0e567c4" STYLE="fork">
            <node TEXT="return time.Now().Format(&quot;2006-01-02 15:04:05&quot;)" ID="1d5003f36655dc26a0e6a53b83ea10a2" STYLE="fork"/>
          </node>
          <node TEXT="func UnixMs() int64" ID="32bdcd3b99a64e3abcb9f38fa6713e4f" STYLE="fork">
            <node TEXT="return time.Now().UnixNano() / 1000000" ID="8bbf18079f4e2ef840a8e671d169564d" STYLE="fork"/>
          </node>
          <node TEXT="func UnixNano() int64" ID="c3c9d4e6f71cf515eef3ee6c91a7b98d" STYLE="fork">
            <node TEXT="return time.Now().UnixNano()" ID="6a02f855d44f43ebc17d2c5ddf23c05f" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="定时器相关函数" ID="ab6eb14aa47a892c30789b86a56e54f4" STYLE="fork">
          <node TEXT="func timerTick()" ID="57d8956fe0217ad10c132b16ca753b09" STYLE="fork">
            <node TEXT="time tick主要刷新相关变量" ID="be29a53f6672b0049d2483ba28893001" STYLE="fork">
              <node TEXT="var StartTick int64" ID="0a27273c40886be190753003810d9877" STYLE="fork"/>
              <node TEXT="var NowTick int64" ID="dbf202f7934ea441ab86fbb1fba466f4" STYLE="fork"/>
              <node TEXT="var Timestamp int64 " ID="ef8e3a01110209bd9b6408a25835ec4b" STYLE="fork"/>
              <node TEXT="var TimeString string" ID="25ca670971e09f7a8163776e982c5ee5" STYLE="fork">
                <node TEXT="格式：2020-7-9 14:59:15" ID="ad40d2ce442ab721a8958e84123464ea" STYLE="fork"/>
              </node>
            </node>
          </node>
          <node TEXT="func NewTicker(ms int) *time.Ticker" ID="1701635eed8dbcf48f1769681fcdc23c" STYLE="fork">
            <node TEXT="return time.NewTicker(time.Millisecond * time.Duration(ms))" ID="f6f4a226d85d5c1bf3ca70e003611cff" STYLE="fork"/>
            <node TEXT="NewTicker返回一个新的Ticker，该Ticker包含一个通道字段，并会每隔时间段d就向该通道发送当时的时间。它会调整时间间隔或者丢弃tick信息以适应反应慢的接收者。如果d&lt;=0会panic。关闭该Ticker可以释放相关资源。" ID="ad13492ee30acd9ed56263c096b92538" STYLE="fork"/>
            <node TEXT="Ticker保管一个通道，并每隔一段时间向其传递&quot;tick&quot;。" ID="3709a017f81340a45e5504a22da4ad51" STYLE="fork"/>
            <node TEXT="Stop关闭一个Ticker。在关闭后，将不会发送更多的tick信息。Stop不会关闭通道t.C，以避免从该通道的读取不正确的成功。" ID="40cd49d7dd9dcbf702f385317983ca2a" STYLE="fork"/>
          </node>
          <node TEXT="func NewTimer(ms int) *time.Timer" ID="f70b0014af491898f08e37fe1a56a4a5" STYLE="fork">
            <node TEXT="return time.NewTimer(time.Millisecond * time.Duration(ms))" ID="53da743d0bf3d61645846a2365d6e01e" STYLE="fork"/>
            <node TEXT="NewTimer创建一个Timer，它会在最少过去时间段d后到期，向其自身的C字段发送当时的时间。" ID="5a46949edc920445d38641f05205aeff" STYLE="fork"/>
          </node>
          <node TEXT="func After(ms int) &lt;-chan time.Time" ID="cd40a840e462722f71eed691b1a839a9" STYLE="fork">
            <node TEXT="return time.After(time.Millisecond * time.Duration(ms))" ID="201bc186f32a428a4319123176e91aa2" STYLE="fork"/>
            <node TEXT="After会在另一线程经过时间段d后向返回值发送当时的时间。等价于NewTimer(d).C。" ID="f157c587a17e92a7e0b4d53cd9d3ec60" STYLE="fork"/>
            <node TEXT="NewTimer创建一个Timer，它会在最少过去时间段d后到期，向其自身的C字段发送当时的时间。" ID="fd184fdba374cc14aa2e26192b1f5d49" STYLE="fork"/>
          </node>
          <node TEXT="func Tick(ms int) &lt;-chan time.Time" ID="f681d374f0e45578bc9e755a48d40c5e" STYLE="fork">
            <node TEXT="return time.Tick(time.Millisecond * time.Duration(ms))" ID="8cd48a25f5c2c661f1c6ebcf5665edac" STYLE="fork"/>
            <node TEXT="Tick是NewTicker的封装，只提供对Ticker的通道的访问。如果不需要关闭Ticker，本函数就很方便。" ID="d4b600a694d0a303fc6b0c6503ddafd6" STYLE="fork"/>
          </node>
          <node TEXT="func Sleep(ms int)" ID="dd88353e9851e5735d873ca10a5f30fa" STYLE="fork">
            <node TEXT="time.Sleep(time.Millisecond * time.Duration(ms))" ID="c621b6bb98cc022ff7800204670c8a82" STYLE="fork"/>
            <node TEXT="Sleep阻塞当前go程至少d代表的时间段。d&lt;=0时，Sleep会立刻返回。" ID="6555dda5b17c6537907bced40dd352f7" STYLE="fork"/>
          </node>
          <node TEXT="func SetTimeout(inteval int, fn func(...interface{}) int, args ...interface{})" ID="d433aad9f9e92f704806e9e6d6154591" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="log.go" ID="fbfd98e7fdb785ddbd7aba9b899878fa" STYLE="fork">
        <node TEXT="LogLevel" ID="3ded6f52de1888914a44e417f9477435" STYLE="fork">
          <node TEXT="LogLevelDebug" ID="2df2535ed33cf0b71739ce174078e38e" STYLE="fork">
            <node TEXT="调试信息" ID="766ccfb9a8f7083948adff8a9d83d85f" STYLE="fork"/>
          </node>
          <node TEXT="LogLevelInfo" ID="168359d51d91fc840d54ff6e03e7fffd" STYLE="fork">
            <node TEXT="资讯讯息" ID="19e5bf67cbbaa64e06cacfec91d074cd" STYLE="fork"/>
          </node>
          <node TEXT="LogLevelWarn" ID="cc63b69cc4d19fe9948a3f86edfe9983" STYLE="fork">
            <node TEXT="警告状况发生" ID="af75fc242a4473e243dc55e155608104" STYLE="fork"/>
          </node>
          <node TEXT="LogLevelError" ID="586daf00c73b0a9e072feac36a4afb3d" STYLE="fork">
            <node TEXT="一般错误，可能导致功能不正常" ID="6edcda4a8a78f894e4f6cf7128235430" STYLE="fork"/>
          </node>
          <node TEXT="LogLevelFatal" ID="8eaedf2cda3e069ff5b152524e91d402" STYLE="fork">
            <node TEXT="严重错误，会导致进程退出" ID="a2eff7af55e82a9bca114566f2d9fb4f" STYLE="fork"/>
          </node>
          <node TEXT="LogLevelAllOff" ID="1d439ba759ec7c4e1789968e93ea4276" STYLE="fork">
            <node TEXT="关闭所有日志" ID="084c0a4dd0705cc17b3c3be4685f33fb" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="ILogger" ID="049e68846ee5dbd6e619d1354c2cea05" STYLE="fork">
          <node TEXT="实现" ID="b756473ef3d5ca81dd29129d245a0721" STYLE="fork">
            <node TEXT="ConsoleLogger" ID="8fba6d626435639b0004531453a7da15" STYLE="fork">
              <node TEXT="输出到终端" ID="1d11ba16de9aba2d18c5c6e4fc338aad" STYLE="fork"/>
            </node>
            <node TEXT="HttpLogger" ID="c9a6ed6b32c6cb872684b0f2ca096de7" STYLE="fork">
              <node TEXT="通过go协程调http的get或者post发送。" ID="907d62981d2929920aac15a8e4f7682d" STYLE="fork"/>
            </node>
            <node TEXT="FileLogger" ID="2d5ae7d4775fdaf6dc01db68f7fcb900" STYLE="fork">
              <node TEXT="写入到本地日志文件" ID="995ae5ff4e1dc7b143186ac83ce61b55" STYLE="fork">
                <node TEXT="可以设置文件大小，到了可以换新文件写" ID="06021094db93b96ff7e7d672011aee07" STYLE="fork"/>
              </node>
              <node TEXT="提供3个回调方法" ID="7e21874841e5d4b69df2d2fedbe50941" STYLE="fork">
                <node TEXT="OnFileLogFull func(path string)" ID="41992fd02fc1dbc191342f02dbb48ce2" STYLE="fork">
                  <node TEXT="文件大小到了最大设定大小，换新文件时调" ID="8b674f78e6a6f5dfaf1406c56c2441dd" STYLE="fork"/>
                </node>
                <node TEXT="OnFileLogTimeout func(path string) int" ID="d77482a0563f5124c2762c47674b8a7d" STYLE="fork">
                  <node TEXT="文件定时器时间到了，换新文件时调" ID="abf8e050bd47d421dd8df46687984285" STYLE="fork"/>
                </node>
                <node TEXT="OnFileRename func(dirName, fileName, extName string) string" ID="e82e705ad49d621a26194759b3a010ae" STYLE="fork">
                  <node TEXT="保存日志文件名重定向调" ID="e42c4f3b5d64db57c5ad5a0796049146" STYLE="fork"/>
                </node>
              </node>
            </node>
          </node>
          <node TEXT="接口方法" ID="135629bb31472cf3c66cb8d4855c5b57" STYLE="fork">
            <node TEXT="Write(str string)" ID="a6cc8b7787b27970d56d3946f190396a" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="Log" ID="a752b720801c1b7a886ad6034275827c" STYLE="fork">
          <node TEXT="属性" ID="46498eac32b41cd61be495331e9cd3ab" STYLE="fork">
            <node TEXT="logger         [32]ILogger" ID="ae80d62ad821d86506dcc153f5a127e7" STYLE="fork"/>
            <node TEXT="cwrite         chan string" ID="595b69a5aacbe78b496ca2d27352d059" STYLE="fork"/>
            <node TEXT="ctimeout       chan *FileLogger" ID="212e0d947d0304c6db74a058985a3975" STYLE="fork"/>
            <node TEXT="bufsize        int" ID="ddfc571dbccd161f014d470568554f6b" STYLE="fork"/>
            <node TEXT="stop           int32" ID="38a214aaa3e6f0d75e333d14cb626358" STYLE="fork"/>
            <node TEXT="preLoggerCount int32" ID="83210318757b1fb31cc02d17df6ad634" STYLE="fork"/>
            <node TEXT="loggerCount    int32" ID="12739276d7ef32807e37647d3098aeee" STYLE="fork"/>
            <node TEXT="level          LogLevel" ID="e3f35ef0cbbd1d553575093372fb0682" STYLE="fork"/>
          </node>
          <node TEXT="方法" ID="de907642aaaab072ce7376e39dd4803e" STYLE="fork">
            <node TEXT="初始化方法" ID="0a54ba9b26b36f22a5be4468902c71db" STYLE="fork">
              <node TEXT="NewLog(bufsize int, logger ...ILogger) *Log" ID="3a1973e83675b3856517bef517ff3e16" STYLE="fork">
                <node TEXT="创建实例对象" ID="f727650591ebed877f355c1dfedfc793" STYLE="fork"/>
                <node TEXT="设置写入器列表" ID="d4492463811fcf6755c569c8e371c569" STYLE="fork"/>
                <node TEXT="调日志启动方法" ID="0a59231ca2edef6f8c1e65e7ad55de29" STYLE="fork">
                  <node TEXT="start()" ID="cf14751817ba50f8c006ca90ba11457c" STYLE="fork"/>
                </node>
              </node>
            </node>
            <node TEXT="设置方法" ID="f1295e5ba3a8046b620b96913259a099" STYLE="fork">
              <node TEXT="(r *Log) SetLogger(logger ILogger) bool" ID="b16dec45a6ba83c541b6e2ca7880dfed" STYLE="fork">
                <node TEXT="preLoggerCount ++" ID="fa10b6b4ace83eabfb81c2c03e6aa006" STYLE="fork"/>
                <node TEXT="loggerCount++" ID="2e2f14e6cb2a8b8468dff2b9cf57ce3d" STYLE="fork"/>
                <node TEXT="保存到列表logger" ID="d566457e04b452841b75336eeeabbb2a" STYLE="fork"/>
              </node>
              <node TEXT="(r *Log) initFileLogger(f *FileLogger) *FileLogger" ID="17729adb7750f495dd5b682ad6fe126b" STYLE="fork">
                <node TEXT="1. 检测文件句柄是否存在" ID="960900b4a562774efe310d4b2ac59fb2" STYLE="fork"/>
                <node TEXT="2. 初始化文件信息" ID="83fc6f26f6d49d95b8b1384baa68ed3e" STYLE="fork">
                  <node TEXT="dirname日志目录" ID="b188e9759a846602c27e2a98ac96b4e8" STYLE="fork"/>
                  <node TEXT="extname日志后缀名" ID="2d1f8bd677ce8cf9a9f68ad81c84eee0" STYLE="fork"/>
                  <node TEXT="filename日志文件名不包含后缀" ID="3319e79e68561fb0f090193f3ed3d77f" STYLE="fork"/>
                </node>
                <node TEXT="3. 创建日志目录" ID="e42dd409faf2751d8392f6a8d1480f44" STYLE="fork"/>
                <node TEXT="4. 打开文件" ID="e6952f6c66b4c8b10546078f905322af" STYLE="fork"/>
                <node TEXT="4. 读取文件信息，当前大小" ID="cc2ff54fed2e270e9edf94b6b39e58c9" STYLE="fork">
                  <node TEXT="info, err := f.file.Stat()" ID="e2e0686bfc107e363289d2bf3c5c7769" STYLE="fork"/>
                  <node TEXT="f.size = int(info.Size())" ID="9f9063dcb106d6f01cf8955f7b9bbfb1" STYLE="fork"/>
                </node>
                <node TEXT="5. 如果设置了Timeout，就开启定时器.定时器会发送" ID="28545771f2fa816cd452cb5ed579765f" STYLE="fork">
                  <node TEXT="r.ctimeout &lt;- f" ID="b7a3ca5010c228dfd4980607109a8134" STYLE="fork"/>
                </node>
              </node>
              <node TEXT="(r *Log) Stop()" ID="63c4f0601b487f7e8894e96ac80bd40c" STYLE="fork">
                <node TEXT="1. 检测日志是否停止" ID="625ab484037cf71de278fcf7cdff6025" STYLE="fork">
                  <node TEXT="2.关闭信道" ID="74d698cfd672c4b3d6a563382450ce46" STYLE="fork"/>
                </node>
              </node>
              <node TEXT="(r *Log) start()" ID="c06b8dc29e746e87e80f2bff057856a9" STYLE="fork">
                <node TEXT="阻塞循环" ID="bf38d4a5d0c97e680844fd761ebb4135" STYLE="fork">
                  <node TEXT="1.检测日志协程是否设置为stop" ID="3fb9b297c8a33630440f29714163e1d7" STYLE="fork"/>
                  <node TEXT="2.等待接收写入信道消息" ID="15ccf03b7f4c8ba283a3764a549eca46" STYLE="fork">
                    <node TEXT="将内容遍历写入器执行Write" ID="a5bcd00c1b80432d5fa4a89a4419b66d" STYLE="fork"/>
                  </node>
                  <node TEXT="3.等待接收定时器信道消息" ID="f4a5c7c3cb5afa42a65743a801436eb7" STYLE="fork">
                    <node TEXT="设置文件日志用新的文件保存" ID="1475df095bf62f17fec4205e4d12f492" STYLE="fork"/>
                  </node>
                </node>
                <node TEXT="结束执行" ID="bfcfb20f010a06fee1ae7621051cff6a" STYLE="fork">
                  <node TEXT="将写入信道缓冲里的全部一次性写入" ID="d6280d355197e8e7c5e25c9d5d9e7cad" STYLE="fork"/>
                  <node TEXT="关闭所有文件日志的文件句柄" ID="1cecd91a31c413db232f3708e7091fd1" STYLE="fork"/>
                </node>
              </node>
            </node>
            <node TEXT="设置日志级别方法" ID="5f1e2cc7c6bfade6dbe873344a7bc479" STYLE="fork">
              <node TEXT="(r *Log) SetLevel(level LogLevel)" ID="ffd49fc5684164be06fedffb8bddb44a" STYLE="fork"/>
              <node TEXT="(r *Log) SetLevelByName(name string) bool" ID="29e81765ab836280da9bd7a87f61133b" STYLE="fork"/>
              <node TEXT="(r *Log) Level() LogLevel" ID="7f184157edced0205d7280c96368c3e7" STYLE="fork"/>
            </node>
            <node TEXT="写入方法" ID="c470a930bdad1bac334ba3c6bf511e2f" STYLE="fork">
              <node TEXT="(r *Log) write(levstr string, v ...interface{})" ID="95619535e469c7ffda333c3e4a393691" STYLE="fork">
                <node TEXT="1.检测日志协程是否停止，如果停止了就啥都不做" ID="ac742ebd2eca9bb5f6e661dd1ff1cec4" STYLE="fork"/>
                <node TEXT="2.获取调用栈信息" ID="2fdd61d1105436438bfff530791520bf" STYLE="fork">
                  <node TEXT="_, file, line, ok := runtime.Caller(3)" ID="f0447974cdf29ccbbe7018c1064fe8ba" STYLE="fork"/>
                </node>
                <node TEXT="3.设置日志前缀" ID="ce01105cbeb3fd0ee328b5aaecd1f47e" STYLE="fork">
                  <node TEXT="【日志类型】【时间】【栈文件：栈行号】" ID="c90c4396d96f5f2b2dd9ee3b5834f57d" STYLE="fork"/>
                </node>
                <node TEXT="4.将消息发送给写入信道缓冲" ID="7957a7b58799add3f02813472fa3d434" STYLE="fork"/>
              </node>
              <node TEXT="(r *Log) Write(v ...interface{})" ID="1ad6ff9102472f44033990b5f030d354" STYLE="fork">
                <node TEXT="1.检测日志协程是否停止，如果停止了就啥都不做" ID="b35480ffd446f41199d46dce8b990e3d" STYLE="fork"/>
                <node TEXT="2.将消息发送给写入信道缓冲" ID="bdf7dbe539254aade3b940429a88d48f" STYLE="fork"/>
              </node>
            </node>
            <node TEXT="日志栈方法" ID="04a9152bad503cacc4cc95ecb491439e" STYLE="fork">
              <node TEXT="LogSimpleStack() string" ID="679bd6044b5063b1111c9bd9f74bc2ce" STYLE="fork">
                <node TEXT="_, file, line, _ := runtime.Caller(2)" ID="2f4d3f3b9bfb19c7b46b33813a35e4eb" STYLE="fork"/>
              </node>
              <node TEXT="LogStack()" ID="5970e4f59b5d0e374c89a9318fbe118a" STYLE="fork">
                <node TEXT="buf := make([]byte, 1&lt;&lt;12)" ID="4be8eb321c19f508f761eed3dc67926a" STYLE="fork"/>
                <node TEXT="LogError(string(buf[:runtime.Stack(buf, false)]))" ID="b5e8239ec789aeb7ed49b907aaa5b2d6" STYLE="fork"/>
              </node>
            </node>
            <node TEXT="日志类型方法" ID="3ca131d617a87468d5978dd8791c05b2" STYLE="fork">
              <node TEXT="func (r *Log) Debug(v ...interface{})" ID="05ff0e5692ab859f612b3ce9db59d691" STYLE="fork">
                <node TEXT="D" ID="6c723b806e0b34b14c5460445c62101e" STYLE="fork"/>
              </node>
              <node TEXT="func (r *Log) Info(v ...interface{})" ID="0531bb19aedb08ffe75239d85b88c4dc" STYLE="fork">
                <node TEXT="I" ID="91fc81b2f77b85a221ff17b51e435f9f" STYLE="fork"/>
              </node>
              <node TEXT="func (r *Log) Warn(v ...interface{})" ID="4f21277c14d043893d2220dc0fd25a92" STYLE="fork">
                <node TEXT="W" ID="b7a913f03bcb6ec9c2703e9364ef5630" STYLE="fork"/>
              </node>
              <node TEXT="func (r *Log) Error(v ...interface{})" ID="9908e8bca5ea4e3c0afee1eddbe0ad00" STYLE="fork">
                <node TEXT="E" ID="0851378b94b1b9a44388c2be40d55733" STYLE="fork"/>
              </node>
              <node TEXT="func (r *Log) Fatal(v ...interface{})" ID="47de78e8db9ad00864fa105b386c462e" STYLE="fork">
                <node TEXT="FATAL" ID="871b7087066caa04ea9b6865780e42d3" STYLE="fork"/>
              </node>
            </node>
            <node TEXT="日志类型对应函数" ID="0b115866cc4a8194979dea996bbb4ddf" STYLE="fork">
              <node TEXT="func LogInfo(v ...interface{})" ID="2dc051829788ba82a7a67075fa7f18a2" STYLE="fork"/>
              <node TEXT="func LogDebug(v ...interface{})" ID="85590b7eb0b99c583b30c213ff6e6f2e" STYLE="fork"/>
              <node TEXT="func LogError(v ...interface{})" ID="d55a236eb0373ef61f4819589b2a3f86" STYLE="fork"/>
              <node TEXT="func LogFatal(v ...interface{})" ID="467f713e20924888c48551cc2f643832" STYLE="fork"/>
              <node TEXT="func LogWarn(v ...interface{})" ID="19329470b4c1fb437ea39c07811764c2" STYLE="fork"/>
            </node>
          </node>
        </node>
      </node>
      <node TEXT="func_go.go" ID="e25facbe22554cd8180e0056934a4a3e" STYLE="fork">
        <node TEXT="func Go(fn func())" ID="25b0a7ebcc8adee95624f3db4ef83393" STYLE="fork">
          <node TEXT="协程相关变量" ID="07131f611380660fd81b807fad0d9bcf" STYLE="fork">
            <node TEXT="var gocount int32 " ID="5637bdd734febd53c290a2126a4bc2d0" STYLE="fork"/>
            <node TEXT="var goid uint32 " ID="3e12321db7f49699a4c2139533e49a6e" STYLE="fork"/>
            <node TEXT="var poolGoCount int32" ID="806c40794eaa938c0d2714946082e79b" STYLE="fork"/>
            <node TEXT="var poolChan = make(chan func())" ID="450cc66f8b2a9f3fd620d4ffb1b46e49" STYLE="fork"/>
            <node TEXT="var stopChanForGo = make(chan struct{})" ID="3a48b9e7d84af0fe134f1696a173a877" STYLE="fork"/>
            <node TEXT="var waitAll = &amp;WaitGroup{} //等待所有goroutine" ID="8c46e951a63ab12eb103db01316d7ced" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="func Go2(fn func(cstop chan struct{}))" ID="d243923b222c1949ec26aa4df87061ce" STYLE="fork"/>
        <node TEXT="func GoArgs(fn func(...interface{}), args ...interface{})" ID="0f950e7d0d48a0b795a71533f54576c1" STYLE="fork"/>
        <node TEXT="func goForRedis(fn func())" ID="b1ae6c8563149a62ce546d5fa4144ed1" STYLE="fork">
          <node TEXT="redis协程相关变量" ID="498753f4492c5e3c1621dd1ae28df2b8" STYLE="fork">
            <node TEXT="var gocount int32 " ID="f55ac8d7f9a4f12f1726862635b35384" STYLE="fork"/>
            <node TEXT="var goid uint32 " ID="24c4522fa1da54f2da01adfd9bb62c72" STYLE="fork"/>
            <node TEXT="var waitAllForRedis sync.WaitGroup" ID="56f23bcf8e4b0ea4d40db9bd82ec0ad2" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="func goForLog(fn func(cstop chan struct{})) bool" ID="75b80fecb93d6feafd3c03f9e608a43d" STYLE="fork">
          <node TEXT="调用地方：log.go start()" ID="55ddbf3da45ec63829ac056aa2a728f9" STYLE="fork"/>
          <node TEXT="启动前检测，如果程序设置为停止了，就不继续" ID="868ba4498a90b9c7a8808a95910bb983" STYLE="fork"/>
          <node TEXT="stopChanForLog 信道，用于介绍调停止日志协程" ID="46a6840e55c8e6b6f8468df040e5174b" STYLE="fork"/>
          <node TEXT="waitAllForLog 用于主线程等待日志协程结束，退出进程" ID="ba2deaad98e514e9f5803d23d864a1f5" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="func.go" ID="d80cb03cbdb3b394f6b45d807cda5208" STYLE="fork">
        <node TEXT="程序是否停止" ID="e13342116777646f2931d61dc48c6fc1" STYLE="fork">
          <node TEXT="变量" ID="88f34d8c5b62b12beb69e58c23620f11" STYLE="fork"/>
          <node TEXT="函数" ID="6fde0b68c7d502e8928919f2f236b24d" STYLE="fork">
            <node TEXT="func IsRuning() bool" ID="776fbb82e2b4846b5eecd59a64a85e46" STYLE="fork">
              <node TEXT="return stop == 0" ID="12615d45bdf92bdf044c020a7fcbe1db" STYLE="fork"/>
            </node>
            <node TEXT="func IsStop() bool" ID="14b4c1dfaa51c949d7b5ef511daa9f59" STYLE="fork">
              <node TEXT="return stop == 1" ID="c9b2282dc92501185e281573fe747094" STYLE="fork"/>
            </node>
            <node TEXT="func Stop()" ID="203f5e39858f2c4f0aed7f74dd66e7bc" STYLE="fork">
              <node TEXT="" ID="39ef02fe73fd405224ccff9a9e337ebe" STYLE="fork"/>
            </node>
            <node TEXT="func WaitForSystemExit(atexit ...func())" ID="65def2e23c8c47df28b42a30448f6093" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="字符串和数字转换函数" ID="98a3ce5034acdd0d367a8fe5f76ff1da" STYLE="fork">
          <node TEXT="func Atoi(str string) int" ID="e4e59bf279aa798688c0e27bd1552852" STYLE="fork">
            <node TEXT="i, err := strconv.Atoi(str)" ID="37b2f07a87bf8ada5aecee2eedeab529" STYLE="fork">
              <node TEXT="Atoi是ParseInt(s, 10, 0)的简写" ID="54fd903f7701a6a8748903d9a6da5ae4" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="func Atoi64(str string) int64" ID="eb0e6aaebc9f19be62c1efb13503a76a" STYLE="fork">
            <node TEXT="i, err := strconv.ParseInt(str, 10, 64)" ID="35f230f23f588d7a532b366ff3f936bf" STYLE="fork"/>
          </node>
          <node TEXT="func Atof(str string) float32" ID="c577cd94c252a045cf5913d9e7cb517e" STYLE="fork">
            <node TEXT="i, err := strconv.ParseFloat(str, 32)" ID="df11bbf6534309a99a25c15547e9ac4f" STYLE="fork"/>
          </node>
          <node TEXT="func Atof64(str string) float64" ID="49cb3b59b54aac43e7c6e2122e24041c" STYLE="fork">
            <node TEXT="i, err := strconv.ParseFloat(str, 64)" ID="4b0489a73209b00a1b0d3e1a2722dbcd" STYLE="fork"/>
          </node>
          <node TEXT="func Itoa(num interface{}) string" ID="d74e5b766bbdbb1d709a968830cebd9b" STYLE="fork">
            <node TEXT="switch n := num.(type) {" ID="71a7360955f9e95b934ca0e4fd314d76" STYLE="fork"/>
            <node TEXT="case int8:" ID="e8ec462f30182d42795e24b5c4061421" STYLE="fork"/>
            <node TEXT="return strconv.FormatInt(int64(n), 10)" ID="b352761c7d936806abec9dc83c6668db" STYLE="fork"/>
            <node TEXT="case int16:" ID="5ed1c645facd7d5ef3b93f0581934d58" STYLE="fork"/>
            <node TEXT="return strconv.FormatInt(int64(n), 10)" ID="151017523dadd8e70139c7fc739cda9b" STYLE="fork"/>
            <node TEXT="case int32:" ID="c5d42bc598e77fec06f589d924afc090" STYLE="fork"/>
            <node TEXT="return strconv.FormatInt(int64(n), 10)" ID="5d2d55b58e39966512fc134194726181" STYLE="fork"/>
            <node TEXT="case int:" ID="5ff50217aa25843b50e9e7d8b6f0d42f" STYLE="fork"/>
            <node TEXT="return strconv.FormatInt(int64(n), 10)" ID="1ca44b3f6b58178cf8e630a0a5b54aca" STYLE="fork"/>
            <node TEXT="case int64:" ID="a942471906b3b1f5f5caa19a2425bde4" STYLE="fork"/>
            <node TEXT="return strconv.FormatInt(int64(n), 10)" ID="784072495870825fed89327fae98bfe7" STYLE="fork"/>
            <node TEXT="case uint8:" ID="23d5553d59ff57ee136a69cf02bf273a" STYLE="fork"/>
            <node TEXT="return strconv.FormatUint(uint64(n), 10)" ID="b853cbe268200908f5bccfd2ff192ee0" STYLE="fork"/>
            <node TEXT="case uint16:" ID="7e72430f6349dc3be0576b70f036ab17" STYLE="fork"/>
            <node TEXT="return strconv.FormatUint(uint64(n), 10)" ID="d65295ffb2082388bc18e21cec9484d0" STYLE="fork"/>
            <node TEXT="case uint32:" ID="129a5694a5a2dc5a95df20eb068e00b3" STYLE="fork"/>
            <node TEXT="return strconv.FormatUint(uint64(n), 10)" ID="6b55d4a787d382f62abde767d75da3ed" STYLE="fork"/>
            <node TEXT="case uint:" ID="bd8bfde62829d43dafbd55c702b709c8" STYLE="fork"/>
            <node TEXT="return strconv.FormatUint(uint64(n), 10)" ID="57baaecda4c0edeabe6881337e4a25e9" STYLE="fork"/>
            <node TEXT="case uint64:" ID="73b01387848d9d93f6f49137884b455a" STYLE="fork"/>
            <node TEXT="return strconv.FormatUint(uint64(n), 10)" ID="b0ca8f180e473999cfdcc7b895b73078" STYLE="fork"/>
            <node TEXT="}" ID="d3e214ebc1d22165d7ea457d55f2b4c6" STYLE="fork"/>
            <node TEXT="return &quot;&quot;" ID="0626c933ed320de123c82d2f2eb15339" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="安全调用函数" ID="40ccfb21c48d3148fccfacc3b940253c" STYLE="fork">
          <node TEXT="func Try(fun func(), handler func(interface{}))" ID="f09baefe930c6340ec1e8188b624dede" STYLE="fork"/>
          <node TEXT="func Try2(fun func(), handler func(interface{}))" ID="f89302b2a693aa9b66936385f7f21175" STYLE="fork"/>
        </node>
        <node TEXT="其他函数" ID="d19c73ac2f63667f8725ee5e762df0a3" STYLE="fork">
          <node TEXT="func Daemon(skip ...string)" ID="bf2ebbf2e1fb81612cb5d8e3235d2d69" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="db_redis.go" ID="f5dbb8298d157b92d83944deef746843" STYLE="fork">
        <node TEXT="RedisConfig" ID="95b4e1d9181edaeb2398696d94e92acd" STYLE="fork">
          <node TEXT="global.yml里配置" ID="538ac6003b9c1e7ef784eb795fbe9072" STYLE="fork">
            <node TEXT="Redis: [&quot;mima@127.0.0.1:9999&quot;]" ID="18e2fba4e3b2c21e3ebf9668d17a8062" STYLE="fork"/>
            <node TEXT="RedisPoolSize: 200 " ID="fd552bdb6f69b7acb4c06e20d2afcab0" STYLE="fork"/>
          </node>
          <node TEXT="属性" ID="67cdd0d701e80371f8fbcc53a5dbe14a" STYLE="fork">
            <node TEXT="Addr" ID="0661fc95c7333bcf14e04b1bac017e5d" STYLE="fork">
              <node TEXT="127.0.0.1:9999" ID="f4c07618451605fa4d909756da9196f5" STYLE="fork"/>
            </node>
            <node TEXT="Passwd" ID="ed473aa1e190ad486ccabc1adb45b335" STYLE="fork">
              <node TEXT="mima" ID="be5476b76b9bc7aa3e4473edb266da20" STYLE="fork"/>
            </node>
            <node TEXT="PoolSize" ID="4a2cb3d37eb190a5a9a3cc9c78796786" STYLE="fork">
              <node TEXT="200" ID="ce851139e14f1e6e73ee260ca3eb00fc" STYLE="fork"/>
            </node>
          </node>
        </node>
        <node TEXT="Redis" ID="59ca0ebb7fc4dd130ebc352585c1e583" STYLE="fork">
          <node TEXT="属性" ID="b53f5354067609242d0086c18dfae7be" STYLE="fork">
            <node TEXT="*redis.Client" ID="e90f23b96606ab389c7bb50874f47126" STYLE="fork"/>
            <node TEXT="pubsub  *redis.PubSub" ID="ac89d8752934efa3c3d13aa0cbe31b37" STYLE="fork"/>
            <node TEXT="conf    *RedisConfig" ID="8695963c871b5aede2dbd67e15d9ba90" STYLE="fork"/>
            <node TEXT="manager *RedisManager" ID="c235316e6f98fbd893dc58e57d4fd7c9" STYLE="fork"/>
          </node>
          <node TEXT="方法" ID="a2c1563e7fb3dedb301e17e39c3fd5d7" STYLE="fork">
            <node TEXT="func (r *Redis) Script(cmd int, keys []string, args ...interface{}) (interface{}, error)" ID="8956d9434385b6a02be84deacd214051" STYLE="fork">
              <node TEXT="1.检测是否有对应命令的hash" ID="459a50dd421c646ef614798625dd9b30" STYLE="fork">
                <node TEXT="hashStr, ok := scriptHashMap.Load(cmd)" ID="57501cb4b3964cf93d34b9f4e8441c53" STYLE="fork"/>
                <node TEXT="2.如果有就执行脚本，得到结果" ID="ebf74a311fe5c19d1e0259b743db3219" STYLE="fork">
                  <node TEXT="re, err = r.EvalSha(hashStr.(string), keys, args...).Result()" ID="507d25154bd48eca8583159607ded287" STYLE="fork"/>
                </node>
                <node TEXT="3.如果出错了，就去加载脚本代码和编号生成hash,并且保存好，再执行脚本得到结果" ID="ae1577093b5f0f5bb967d9e2bedae09a" STYLE="fork">
                  <node TEXT="scriptStr, ok := scriptMap.Load(cmd)" ID="e40bfba757d946713e355f35e309d3e6" STYLE="fork"/>
                  <node TEXT="cmdStr, _ := scriptCommitMap.Load(cmd)" ID="a57a6171470bb3a4143143ca8187a1b8" STYLE="fork"/>
                  <node TEXT="hashStr, err = r.ScriptLoad(scriptStr.(string)).Result()" ID="2650f33d921f23090aec131ddb58a2d5" STYLE="fork"/>
                  <node TEXT="scriptHashMap.Store(cmd, hashStr.(string))" ID="ab6ca1c1ad885da3cafb45224c42c66c" STYLE="fork"/>
                  <node TEXT="re, err = r.EvalSha(hashStr.(string), keys, args...).Result()" ID="05aaef7c10909bedef6565f6ea242a50" STYLE="fork"/>
                </node>
              </node>
            </node>
            <node TEXT="func (r *Redis) ScriptStr(cmd int, keys []string, args ...interface{}) (string, error)" ID="807eb506885e77cdba17476fe7a8827b" STYLE="fork"/>
            <node TEXT="func (r *Redis) ScriptStrArray(cmd int, keys []string, args ...interface{}) ([]string, error)" ID="74fd5c8645c9cd596ee63f964b8f8ae2" STYLE="fork"/>
            <node TEXT="func (r *Redis) ScriptInt64(cmd int, keys []string, args ...interface{}) (int64, error)" ID="44ee012357624368ae355a865a4278db" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="RedisManager" ID="d9fb7a3b0f66beee36750072f1c0b396" STYLE="fork">
          <node TEXT="属性" ID="08b6d57e6dda8692232bd389abfb6a2d" STYLE="fork">
            <node TEXT="dbs      map[int]*Redis" ID="57f68db90f7272b1301e51906853c187" STYLE="fork"/>
            <node TEXT="subMap   map[string]*Redis" ID="11d99cbe5d221f5817357734a8ec5331" STYLE="fork"/>
            <node TEXT="channels []string" ID="96a5f19b318d6e09313d449ba5999969" STYLE="fork"/>
            <node TEXT="fun      func(channel, data string)" ID="83370727b8f317f2933592801b1f6fc3" STYLE="fork"/>
            <node TEXT="lock     sync.RWMutex" ID="3aa23a1c8918d95e7b827124e2de041c" STYLE="fork"/>
          </node>
          <node TEXT="方法" ID="03c64b5358f834dc7c09c27e672bb350" STYLE="fork">
            <node TEXT="func (r *RedisManager) Add(id int, conf *RedisConfig)" ID="6abd8b522e44b3d388171a717326a923" STYLE="fork">
              <node TEXT="1.上锁" ID="0024fed3779aca44b763924b57837c97" STYLE="fork">
                <node TEXT="r.lock.Lock()" ID="4a7b2a0187d5e6fcea6c857d9a924484" STYLE="fork"/>
                <node TEXT="defer r.lock.Unlock()" ID="91ff3dc017b6bf074a36ab5edabe0b77" STYLE="fork"/>
              </node>
              <node TEXT="2.检测id是否已经存在，如果存在就输入错误日志，并return" ID="cd03ab645383b942f246c41f1e198399" STYLE="fork"/>
              <node TEXT="3.创建Redis对象" ID="975258f248bdcb2afd3eecf10b3098c6" STYLE="fork">
                <node TEXT="创建redis.Client" ID="4928659a921f66cdcf54d44df66a7eb0" STYLE="fork"/>
              </node>
              <node TEXT="4.设置包装处理命令方法" ID="cd819a285896de2b1f1fe9bd86c7844d" STYLE="fork">
                <node TEXT="re.WrapProcess" ID="a18e9df4de8ecfc2a4f37b5e69744d90" STYLE="fork"/>
              </node>
              <node TEXT="5.检测subMap" ID="a7d2c1f64c75d010345158ef3e5af51e" STYLE="fork">
                <node TEXT="没有就添加到subMap" ID="c7bc49cdd0317fd46ebb2d371c0e52b7" STYLE="fork">
                  <node TEXT="r.subMap[conf.Addr] = re" ID="117a84a73f69769f5c8d3640d9efe7aa" STYLE="fork"/>
                </node>
                <node TEXT="检测订阅通道channels" ID="ce052bae08ac86196edbd394439f93a2" STYLE="fork">
                  <node TEXT="1.订阅" ID="96f6d73c96cab1af1c6a568c30a8912b" STYLE="fork">
                    <node TEXT="pubsub := re.Subscribe(r.channels...)" ID="0fd85cc1d193989c74c738781ce2accf" STYLE="fork"/>
                  </node>
                  <node TEXT="2. 保存订阅引用" ID="2e943bc7e3b9b52ee7e631ed9ca571c3" STYLE="fork">
                    <node TEXT="re.pubsub = pubsub" ID="2b199f32cdae3e650993d331127d4089" STYLE="fork"/>
                  </node>
                  <node TEXT="3. 启动协程，接受消息" ID="8145d149c56f0a43cb99692f73a1898b" STYLE="fork">
                    <node TEXT="1.接受消息" ID="35a1ea81fbe96480543e6b09bdab4a97" STYLE="fork">
                      <node TEXT="msg, err := pubsub.ReceiveMessage()" ID="f2a1d1e01d90d25bc783cd9bdfe7b89b" STYLE="fork"/>
                    </node>
                    <node TEXT="2.如果消息没有错误，启动协程调回调" ID="e376f7f0178dfc2a169780cc593a699b" STYLE="fork">
                      <node TEXT="Go(func() { fun(msg.Channel, msg.Payload) })" ID="27a614203822604a8bde6c8af86dcd20" STYLE="fork"/>
                    </node>
                    <node TEXT="3.如果消息有错误，输出错误日志" ID="0b153828b8a382e210669440a6733b0e" STYLE="fork"/>
                  </node>
                </node>
              </node>
              <node TEXT="6.保存到dbs" ID="980b56b29a380d57f2afbfd93e1f7d8a" STYLE="fork">
                <node TEXT="r.dbs[id] = re" ID="3b6a8141bd370b8de9f8f36c85556c10" STYLE="fork"/>
              </node>
            </node>
            <node TEXT="func (r *RedisManager) Sub(fun func(channel, data string), channels ...string)" ID="8dcaa7f670874a9f2f0dce89f5fa4be4" STYLE="fork">
              <node TEXT="1. 上锁" ID="52c347f0b3d903d4b9ab004e0c16ccd2" STYLE="fork">
                <node TEXT="r.lock.Lock()" ID="99a5ed08969a7677035f0251ed23433a" STYLE="fork"/>
                <node TEXT="defer r.lock.Unlock()" ID="5db3052c5f9fee4e06a848b190942da1" STYLE="fork"/>
              </node>
              <node TEXT="2. 保存channels和fun" ID="030beabb8792ea0443d2bac8fd73effe" STYLE="fork">
                <node TEXT="r.channels = channels" ID="a1adff21b4753c94691f9bd0823ef3a7" STYLE="fork"/>
                <node TEXT="r.fun = fun" ID="b047efe403804c4f3f3d130a16d974c9" STYLE="fork"/>
              </node>
              <node TEXT="3.遍历数据库连接客户端" ID="08d28156ae4adf40d5179f7f4793bb6e" STYLE="fork">
                <node TEXT="0.检测之前是否要订阅" ID="33f98ab150afed11efe68af0bc6ae5d2" STYLE="fork">
                  <node TEXT="如果有就关闭" ID="869460a3eb51f222984a2ecef1163e92" STYLE="fork">
                    <node TEXT="v.pubsub.Close()" ID="1fb5bbfe7010f3f92afa2f3693fdaff1" STYLE="fork"/>
                  </node>
                </node>
                <node TEXT="1.订阅" ID="3dad77423f37ba9fedde4483fd3edf6f" STYLE="fork">
                  <node TEXT="pubsub := re.Subscribe(r.channels...)" ID="5149ae076e453e7a8757aa9598d284f6" STYLE="fork"/>
                </node>
                <node TEXT="2. 保存订阅引用" ID="bc5632ead00b0ef5790e362cb76418d4" STYLE="fork">
                  <node TEXT="re.pubsub = pubsub" ID="f2e341f697089a573353bad2d27c4ba7" STYLE="fork"/>
                </node>
                <node TEXT="3. 启动协程，接受消息" ID="a73891fde19d727314c41261ac3f5318" STYLE="fork">
                  <node TEXT="1.接受消息" ID="617187094fe3dad2a942928590dd4be6" STYLE="fork">
                    <node TEXT="msg, err := pubsub.ReceiveMessage()" ID="693cffe606c4a656c558afd6be1f4c77" STYLE="fork"/>
                  </node>
                  <node TEXT="2.如果消息没有错误，启动协程调回调" ID="9b1eea76b30fbab259629e4b66b20e8d" STYLE="fork">
                    <node TEXT="Go(func() { fun(msg.Channel, msg.Payload) })" ID="b5f3c66d9c2e0ad771681c85bce94f2b" STYLE="fork"/>
                  </node>
                  <node TEXT="3.如果消息有错误，输出错误日志" ID="b685bee2cd004e5034c1e7c5d976f7a5" STYLE="fork"/>
                </node>
              </node>
            </node>
            <node TEXT="func (r *RedisManager) GetGlobal() *Redis" ID="98885b909a2f2c1c3a5710b21021dbc0" STYLE="fork">
              <node TEXT="return r.GetByRid(0)" ID="4ccb956104d4ff78d311236eed1909a2" STYLE="fork"/>
            </node>
            <node TEXT="func (r *RedisManager) GetByRid(rid int) *Redis" ID="cfcaf9c67955db72484d4f124d74f4a1" STYLE="fork"/>
            <node TEXT="func (r *RedisManager) close() " ID="9fbf7c2c0554cb156c2e895a4338f290" STYLE="fork">
              <node TEXT="在WaitForSystemExit的时候调" ID="1d1addf58323fc8771a4ae379a25b1db" STYLE="fork"/>
            </node>
            <node TEXT="func (r *RedisManager) Exist(id int) bool" ID="829657efd7dda5b544e3abb75a5f44dd" STYLE="fork">
              <node TEXT="1.上锁" ID="025b419d037d40164d365db7ac7ae111" STYLE="fork">
                <node TEXT="r.lock.Lock()" ID="a7ac6cb5e82eab5471a30fa63ffa908c" STYLE="fork"/>
                <node TEXT="defer r.lock.Unlock()" ID="f527c8fc3997ff5c058ba5f69924bfdf" STYLE="fork"/>
              </node>
              <node TEXT="_, ok := r.dbs[id]" ID="5c79c6a694387a06d010627e32f0c223" STYLE="fork"/>
            </node>
          </node>
        </node>
        <node TEXT="属性" ID="e0d628ad359ad8f2bdf53e4f6f14dfd6" STYLE="fork">
          <node TEXT="var redisManagers []*RedisManager" ID="e77c8d05a9053cbb583053cc21500357" STYLE="fork"/>
        </node>
        <node TEXT="函数" ID="c8482d0423c332871159734b8e244383" STYLE="fork">
          <node TEXT="func NewRedisManager(conf *RedisConfig) *RedisManager" ID="63b6097ed060d7e3620bc8825dff9edb" STYLE="fork">
            <node TEXT="1.创建RedisManager对象，初始化" ID="8f334504c10241a5a6107a47b2f5445b" STYLE="fork">
              <node TEXT="subMap: map[string]*Redis{}" ID="40fb453fefd630488002718b295a78df" STYLE="fork"/>
              <node TEXT="dbs:    map[int]*Redis{}" ID="6c57d23211224b9f6ab0e79620db1160" STYLE="fork"/>
            </node>
            <node TEXT="2.添加配置" ID="af803324c17378946b91968a07051f09" STYLE="fork">
              <node TEXT="redisManager.Add(0, conf)" ID="c4a598da506d4c828e0571046a086336" STYLE="fork"/>
            </node>
            <node TEXT="3.添加到管理器切片redisManagers" ID="91d7d1f9baf71eb482410371d81939ed" STYLE="fork">
              <node TEXT="redisManagers = append(redisManagers, redisManager)" ID="c7414153ba02d7af723c5c0a9bbd1d3d" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="func RedisError(err error) bool" ID="49bdd2e834320070e22751c6be311e5b" STYLE="fork">
            <node TEXT="err == redis.Nil " ID="a70bf58046e8c90a1af7389c11399d47" STYLE="fork"/>
            <node TEXT="err != nil" ID="7682d8e024b2be6fbf34cdc7175808e2" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="redis script脚本相关" ID="754b4cff81f7ccd8b36bbf0f9df77253" STYLE="fork">
          <node TEXT="变量" ID="1bf15a0699059cb2fd6a2ebe8ba1b2a2" STYLE="fork">
            <node TEXT="scriptIndex     int32 = 0" ID="058fb8cd4af49afe49480294d09ee547" STYLE="fork"/>
            <node TEXT="scriptMap             = sync.Map{} //map[int]string{}" ID="1a0e0c19c2a6f5306a30ffdb41672bae" STYLE="fork"/>
            <node TEXT="scriptCommitMap       = sync.Map{} //map[int]string{}" ID="6bc79b5a9ddbe0cd268cd451d7f6823d" STYLE="fork"/>
            <node TEXT="scriptHashMap         = sync.Map{} //map[int]string{}" ID="12d5c58dc08f6214a5b21ca9e5252458" STYLE="fork"/>
          </node>
          <node TEXT="函数" ID="44763679eb9a5e75a5e1870b3975348d" STYLE="fork">
            <node TEXT="func NewRedisScript(commit, str string) int" ID="4ca6c6a83d669bfebbe9935131168fd2" STYLE="fork"/>
            <node TEXT="func GetRedisScript(cmd int) string " ID="faea4ed79f7eb87f6f20e7f1b0e7306f" STYLE="fork"/>
            <node TEXT="Redis" ID="fd56a4efd38ae1f6c2d57ac1f340e9d8" STYLE="fork">
              <node TEXT="func (r *Redis) Script(cmd int, keys []string, args ...interface{}) (interface{}, error)" ID="6df420130f89e0abbf460f9b3a4ceaa4" STYLE="fork"/>
            </node>
          </node>
        </node>
      </node>
      <node TEXT="model_redis.go" ID="5e7a680687c9cd3f4481b96f8dbf5a5e" STYLE="fork">
        <node TEXT="RedisModel" ID="402b3259101458d747762415ebead565" STYLE="fork">
          <node TEXT="方法" ID="ee8dd43d1aaa16fe67c481e681506be7" STYLE="fork">
            <node TEXT="func (r *RedisModel) DBData(v proto.Message) []byte" ID="26d51ca34495fec44ca4bf6f56016dd2" STYLE="fork">
              <node TEXT="return DBData(v)" ID="7acd3028d64ff443e982ea925e4676d3" STYLE="fork"/>
            </node>
            <node TEXT="func (r *RedisModel) DBStr(v proto.Message) string" ID="9898178ee0bfd3e1e5456fe3e04a7e91" STYLE="fork">
              <node TEXT="return DBStr(v)" ID="c3931336592dead3346346959944a19e" STYLE="fork"/>
            </node>
            <node TEXT="func (r *RedisModel) PbData(v proto.Message) []byte" ID="bf17438406c5e85745302a0b91aa6c43" STYLE="fork">
              <node TEXT="return PbData(v)" ID="96681cb3f9007e217abbeec5515b0e6d" STYLE="fork"/>
            </node>
            <node TEXT="func (r *RedisModel) PbStr(v proto.Message) string" ID="61cdc95360c748ddfa0a699c6fda1776" STYLE="fork">
              <node TEXT="return PbStr(v)" ID="42fb96b5b818f954ea47bde22543ecf5" STYLE="fork"/>
            </node>
            <node TEXT="func (r *RedisModel) ParseDBData(data []byte, v proto.Message) bool" ID="4455ffd20578653b4ac5f3d6570b005a" STYLE="fork">
              <node TEXT="return ParseDBData(data, v)" ID="55b716be8802f5168867f7ded5b31f5d" STYLE="fork"/>
            </node>
            <node TEXT="func (r *RedisModel) ParseDBStr(str string, v proto.Message) bool" ID="344272a86a1e9f187f836f8a57a88570" STYLE="fork">
              <node TEXT="return ParseDBStr(str, v)" ID="3360711a114a9a2baf08272be2cc9aab" STYLE="fork"/>
            </node>
            <node TEXT="func (r *RedisModel) ParsePbData(data []byte, v proto.Message) bool" ID="9f99dad0bf83a6b071182cbee6f86283" STYLE="fork">
              <node TEXT="return ParsePbData(data, v)" ID="1e0d0c5f5fc7461ddea3347890e309e0" STYLE="fork"/>
            </node>
            <node TEXT="func (r *RedisModel) ParsePbStr(str string, v proto.Message) bool" ID="c862a63c681e04fff2037c63842182e5" STYLE="fork">
              <node TEXT="return ParsePbStr(str, v)" ID="0a258508b4e81062069f45bf9792de75" STYLE="fork"/>
            </node>
          </node>
        </node>
        <node TEXT="msgpack函数" ID="f17127a8be047fe2b063958e93c4ddfb" STYLE="fork">
          <node TEXT="func DBData(v proto.Message) []byte" ID="d9c6fc0bd7887c3bda26d6b7e6f61fa4" STYLE="fork">
            <node TEXT="data, _ := msgpack.Marshal(v)" ID="af19fdcd2dd64acd2f18a42cdaa9070d" STYLE="fork"/>
          </node>
          <node TEXT="func DBStr(v proto.Message) string" ID="376265dcd8e4ca5fc6d12dbb22d34b8d" STYLE="fork">
            <node TEXT="data, _ := msgpack.Marshal(v)" ID="652fa1f7c4e98544ed029a2967b4371b" STYLE="fork"/>
            <node TEXT="return string(data)" ID="2ca2dde5d1fdd10fd99636d5e67ce285" STYLE="fork"/>
          </node>
          <node TEXT="func ParseDBData(data []byte, v proto.Message) bool" ID="253217692899e1ca6852881ea78faafb" STYLE="fork">
            <node TEXT="err := msgpack.Unmarshal(data, v)" ID="593f90b0b3d92af72657067a5e228858" STYLE="fork"/>
          </node>
          <node TEXT="func ParseDBStr(str string, v proto.Message) bool" ID="7a7a929a8d53f1cf4a18c21e1df4f9ba" STYLE="fork">
            <node TEXT="err := msgpack.Unmarshal([]byte(str), v)" ID="930b170eb0f78b868bfb9403399e4491" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="proto函数" ID="c69232a73a5c95d0535a314323004652" STYLE="fork">
          <node TEXT="func PbData(v proto.Message) []byte" ID="f9bcc8b2dcbadda848f533249309712c" STYLE="fork">
            <node TEXT="data, _ := proto.Marshal(v)" ID="30aa99bb7b0db48c0066415c6ad82ea2" STYLE="fork"/>
          </node>
          <node TEXT="func PbStr(v proto.Message) string" ID="1ee78a02401bef687f9ee6bc3837052e" STYLE="fork">
            <node TEXT="data, _ := proto.Marshal(v)" ID="a4abe4a9f77f2c8baa4ee4b4da61107d" STYLE="fork"/>
            <node TEXT="return string(data)" ID="d6305b2f89c35025a3b98fa949a8441e" STYLE="fork"/>
          </node>
          <node TEXT="func ParsePbData(data []byte, v proto.Message) bool" ID="fa3bee8a4b7a991d995e2416179e13cd" STYLE="fork">
            <node TEXT="err := proto.Unmarshal(data, v)" ID="b473de71829af5dd44f27a6a177aa53b" STYLE="fork"/>
          </node>
          <node TEXT="func ParsePbStr(str string, v proto.Message) bool " ID="91c082a0356e60f609e7daa23b3c7d0b" STYLE="fork">
            <node TEXT="err := proto.Unmarshal([]byte(str), v)" ID="d88da26b07da3a8cd9fe23cf50926664" STYLE="fork"/>
          </node>
        </node>
      </node>
      <node TEXT="init.go" ID="39961cf11b92217322505ab398148aed" STYLE="fork">
        <node TEXT="变量" ID="1c4bc1d1ff783c9e970d3297dfe54a86" STYLE="fork">
          <node TEXT="time tick相关变量" ID="98378eef3e5389b0d57eb83555c32cd7" STYLE="fork">
            <node TEXT="var StartTick int64" ID="38c58d85c670f125752b42ce20853df6" STYLE="fork"/>
            <node TEXT="var NowTick int64" ID="7e493227fdae3a656219d5351fa1849f" STYLE="fork"/>
            <node TEXT="var Timestamp int64 " ID="741c872d20e5a14f7a355fd6df8e4235" STYLE="fork"/>
            <node TEXT="var TimeString string" ID="46d23c25a353689dcbf04e80968fdfb0" STYLE="fork">
              <node TEXT="格式：2020-7-9 14:59:15" ID="b7d3459b82af7b9d418d17165eea3a91" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="程序是否停止 相关变量" ID="3d4e37eeeb3d824e7c817caa9757cf4f" STYLE="fork">
            <node TEXT="var stop int32 " ID="4dea7f90ec66cbd74e69c0eaf789c832" STYLE="fork"/>
            <node TEXT="var stopForLog int32" ID="33145ee81879034bb491b755870b9880" STYLE="fork"/>
            <node TEXT="var stopChanForGo = make(chan struct{})" ID="cb0957e94e20c90865d5d40ea005e1bb" STYLE="fork"/>
          </node>
          <node TEXT="协程相关变量" ID="9dd5f380dd3b63df247512355cbd7818" STYLE="fork">
            <node TEXT="var gocount int32 " ID="77c2ddba862c74a180481c339578ec5f" STYLE="fork"/>
            <node TEXT="var goid uint32 " ID="c11340275ac9e6017e8d4d370f05f5b0" STYLE="fork"/>
            <node TEXT="var poolGoCount int32" ID="2b7fa20176ef5e81d356a605fa3f25d4" STYLE="fork"/>
            <node TEXT="var poolChan = make(chan func())" ID="6142fd0a2cac29d757167aa6767b6be0" STYLE="fork"/>
            <node TEXT="var stopChanForGo = make(chan struct{})" ID="2ab8fcf279a7d7e9042e305f243ee1fb" STYLE="fork"/>
            <node TEXT="var waitAll = &amp;WaitGroup{} //等待所有goroutine" ID="d2ae9a855f994cc1a6f11533b5eb1819" STYLE="fork"/>
          </node>
          <node TEXT="redis协程相关变量" ID="50632aa1fc76153a998004b93817ad08" STYLE="fork">
            <node TEXT="var gocount int32 " ID="df73f8fe4aa8a6f8e29b0492574cbef6" STYLE="fork"/>
            <node TEXT="var goid uint32 " ID="7babfea1e10430b910991c834791d3b0" STYLE="fork"/>
            <node TEXT="var waitAllForRedis sync.WaitGroup" ID="75b591e6ff118f99639b5e056ad7925e" STYLE="fork"/>
          </node>
          <node TEXT="Config" ID="736d7405721383870682cd9ba1819348" STYLE="fork">
            <node TEXT="UdpServerGoCnt=64" ID="a9315da0026c5a4ff2a7026aa04c507a" STYLE="fork"/>
            <node TEXT="PoolSize=5000" ID="623e5b8d2a3b0b686f16451293743dab" STYLE="fork"/>
            <node TEXT="ReadDataBuffer=4096=1&lt;&lt;12" ID="73f37ac35ad561e70d3e77ddcc9ef9fb" STYLE="fork"/>
            <node TEXT="StopTimeout=3000" ID="cd8c4d7116f1b479cf013de8b7c58448" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="func init()" ID="13cb254758887a6412384bdf4bf37d75" STYLE="fork">
          <node TEXT="设置最大进程数量为cpu数量" ID="337601bece2cdc84a13a0d4808f1353b" STYLE="fork"/>
          <node TEXT="初始化日志" ID="8b491214f639dc7b7d3b6f1ff06af22c" STYLE="fork"/>
          <node TEXT="启动timerTick" ID="1b7902c5b16088a0f2176a508037e1e7" STYLE="fork"/>
        </node>
      </node>
    </node>
    <node TEXT="go-redis" ID="6768ba0a93a3762ae6601afb07787e05" STYLE="bubble" POSITION="right">
      <node TEXT="commands.go" ID="f11b0c0c236046ac409d16622f18e144" STYLE="fork">
        <node TEXT="func (c *cmdable) ScriptLoad(script string) *StringCmd" ID="e9ed9871a86951141a8bc3f2030c1f2d" STYLE="fork"/>
        <node TEXT="func (c *cmdable) EvalSha(sha1 string, keys []string, args ...interface{}) *Cmd" ID="5c92f54a3810f69c8665afc3a1e61807" STYLE="fork"/>
        <node TEXT="func (c *cmdable) HGet(key, field string) *StringCmd" ID="c2943dd9b210c5607b20cd40707bf03a" STYLE="fork"/>
        <node TEXT="func (cmd *Cmd) Result() (interface{}, error) " ID="83101953501a0bb4271b100b86a97538" STYLE="fork"/>
        <node TEXT="func (c *cmdable) Publish(channel string, message interface{}) *IntCmd" ID="657480adc18d9721545d57279825d85b" STYLE="fork"/>
      </node>
      <node TEXT="redis.go" ID="a9b73655d5f901aa6e644a9bbd1093b7" STYLE="fork">
        <node TEXT="func NewClient(opt *Options) *Client" ID="b7adb65ab0363a9899c0381546dcfe4f" STYLE="fork"/>
        <node TEXT="func (c *baseClient) WrapProcess(fn func(oldProcess func(cmd Cmder) error) func(cmd Cmder) error)" ID="87cc196519a04ba03a0e4fcd0a37e67d" STYLE="fork"/>
        <node TEXT="func (c *Client) Subscribe(channels ...string) *PubSub" ID="3e5cb4e485d87d6d5b154671f538a265" STYLE="fork"/>
        <node TEXT="func (c *baseClient) Close() error" ID="76fd3eee04cbb3c4083993896ab5c1bc" STYLE="fork"/>
      </node>
      <node TEXT="pubsub.go" ID="757de046e0152108175e6488e8daac68" STYLE="fork">
        <node TEXT="func (c *PubSub) ReceiveMessage() (*Message, error)" ID="af5f7b6238c07f644648bb6ebbf18791" STYLE="fork"/>
        <node TEXT="func (c *PubSub) Close() error" ID="78421a8107794884a63efff882e9e49c" STYLE="fork"/>
      </node>
    </node>
    <node TEXT="frame" ID="449e6659414832968c5d2fffbc4a2fb8" STYLE="bubble" POSITION="right">
      <node TEXT="fun.go" ID="af13921916daf19776180bc0bd639059" STYLE="fork">
        <node TEXT="func ReadConfig(path string, daemon, lan bool) error" ID="b59fc4d0019198d682a10170c03e82b0" STYLE="fork">
          <node TEXT="1.设置ServerCmd参数" ID="e19318621790da5ba46b454c75e438a4" STYLE="fork">
            <node TEXT="Path=conf/auth_1.yml" ID="372362f7dd754ec652a86988f4495c79" STYLE="fork"/>
            <node TEXT="Daemon=false" ID="a4283e853f6157ff231db3eed4c750c9" STYLE="fork"/>
            <node TEXT="Lan=false" ID="abec107b76abe134f1a901d3ac6ff9a3" STYLE="fork"/>
            <node TEXT="LogPath=log/auth_1.log" ID="7b940ca83e00671721ce395727586620" STYLE="fork"/>
            <node TEXT="LogSign=auth_1" ID="c07f88c1cfb90b407d2aa7ef071d828e" STYLE="fork"/>
            <node TEXT="GlobalPath=conf/global.yml" ID="6ab2b7ec7f24ed7375c61fb8b800ae85" STYLE="fork"/>
          </node>
          <node TEXT="2.读取全局配置文件到Config.Server" ID="5dead4f33ec593d8ee906caf55cc5fde" STYLE="fork">
            <node TEXT="conf/global.yml" ID="293b3276208dd97126c940d7d08c3b16" STYLE="fork"/>
            <node TEXT="Config.Server" ID="b3dc127f2452d5851a9b04825ecc0314" STYLE="fork"/>
            <node TEXT="主要就是读取了ExtIpUrl: http://ip.3322.net" ID="d7bbef7ceabdfc00b06d3ada8d871ee8" STYLE="fork"/>
          </node>
          <node TEXT="3.读取全局配置文件到Config.Global" ID="08c10b67bb9b9f4bcc8c450dcbfb2188" STYLE="fork">
            <node TEXT="conf/global.yml" ID="8a78cf8e376982cac6adaf5e265dba5a" STYLE="fork"/>
            <node TEXT="Config.Global" ID="1ba8e743648e70233b26ce8b62c08485" STYLE="fork"/>
          </node>
          <node TEXT="3.读取对应服务配置到Config.Server" ID="5d1419dccc4326c27f2696059392481b" STYLE="fork">
            <node TEXT="conf/auth_1.yml" ID="31e68891256525d795048c99a67984fb" STYLE="fork"/>
            <node TEXT="Config.Server" ID="b8a5c4e1d832c7a8c1365ebc2cd67c45" STYLE="fork"/>
          </node>
          <node TEXT="4.检测命令参数是否是本地开发" ID="87696b98d862a9b7bb35ea29fa1c8157" STYLE="fork">
            <node TEXT="true" ID="9db1baa584d962894ad3a47f10883ee0" STYLE="fork">
              <node TEXT="Config.Server.Net.ExtIpUrl = &quot;&quot;" ID="3896d3e492b5a1e6fc2fbd3cddd0ecbb" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="5.检测网络超时配置 Config.Server.Net.Timeout&lt;=0" ID="4702eef91bc2f44a0385772c28134f8f" STYLE="fork">
            <node TEXT="Config.Server.Net.Timeout = 180" ID="795f0bcf85feefae1e56d57382d519f5" STYLE="fork"/>
          </node>
          <node TEXT="6.设置Config.Server, 根据配置文件名称auth_1.ym" ID="c82138314ef4b2b2865c2836f583b61f" STYLE="fork">
            <node TEXT="Config.Server.Id=1" ID="b8915e8ac33149fa416c602bcd70f20b" STYLE="fork">
              <node TEXT="auth_1.ym中的1" ID="4a7cd663e3fc57f6242c6667bebe699c" STYLE="fork"/>
            </node>
            <node TEXT="Config.Server.Name=auth_1.yml" ID="0ce4de886cf4bccded6b335700126700" STYLE="fork"/>
            <node TEXT="Config.Server.Type =auth" ID="09e3993247a547fd7fa381cd8995d4b1" STYLE="fork"/>
          </node>
          <node TEXT="7.设置ServerInfo.Conf=conf/auth_1.yml" ID="7e1aaab0c019d35699e23f79fe33f715" STYLE="fork"/>
          <node TEXT="8.读取配置文件" ID="742bea68a8ba4edae66c628aa87d6526" STYLE="fork">
            <node TEXT="Config.Doc = ReadConfigDoc()" ID="800306a4b87bd70ad942f7e2aebfa8f1" STYLE="fork">
              <node TEXT="excel表配置 &quot;conf/doc/serverConfig.json&quot;" ID="dba8850e7e51a73a7b258f7499febc2e" STYLE="fork"/>
              <node TEXT="设置config.ErrStr" ID="a2966a9ead4ff0863ef7e9d4a0dd9ac7" STYLE="fork">
                <node TEXT="frame/auto_error.go" ID="e5250e4e69d7c9d574a08faebc0c3143" STYLE="fork">
                  <node TEXT="idl/csv/error.csv" ID="7adc8af44993a4d66291e49597a0c6e0" STYLE="fork"/>
                </node>
              </node>
            </node>
          </node>
          <node TEXT="9.添加日志写入器" ID="639cdf6307677c9bbfb072ad344284f4" STYLE="fork">
            <node TEXT="设置" ID="77754eba0c184620d02c28cdf6a67124" STYLE="fork">
              <node TEXT="TimeOut" ID="9be1669e7eb3def13cda58bb827e6bc5" STYLE="fork"/>
              <node TEXT="OnRenameFile" ID="823cc4d7ebc73f7757c0b6f6f9ab9a2c" STYLE="fork"/>
              <node TEXT="OnTimeout" ID="f21d58c284f0c038a1c62aa77cc83970" STYLE="fork"/>
              <node TEXT="MaxSize" ID="b16dec5f974196ebec151abe8b2955e3" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="10.设置ssl相关" ID="f1e237028d992acb194baab46873bc1b" STYLE="fork">
            <node TEXT="antnet.Config.SSLCrtPath = Config.Global.SSLCrtPath" ID="0dc8bcae6394487bf45c959b6821c202" STYLE="fork">
              <node TEXT="conf/1_123u.com_bundle.crt" ID="cd1cd4a24abef9b1df7577250393d9cf" STYLE="fork"/>
            </node>
            <node TEXT="antnet.Config.SSLKeyPath = Config.Global.SSLKeyPath" ID="c1c1d15d9816e7b9df5b9e6b2c5f29c0" STYLE="fork">
              <node TEXT="conf/2_123u.com.key" ID="9e1c0d31946ea4ad5cc5cdc20040e480" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="11.设置日志级别" ID="cd7b798390c915e6737e5b6bf665e028" STYLE="fork">
            <node TEXT="antnet.DefLog.SetLevelByName(Config.Global.LogLevel)" ID="4765286a2243456199a7ae56d972e48c" STYLE="fork"/>
          </node>
          <node TEXT="12.设置解析工厂" ID="d9466b70e5b711175eeaf6e740657f0b" STYLE="fork">
            <node TEXT="Parser = PbParser" ID="93309ab4444b8b4c9222633f6f525464" STYLE="fork"/>
          </node>
          <node TEXT="13.打印配置信息" ID="6455550c8d868c94603d3ea02c1b27a0" STYLE="fork"/>
          <node TEXT="14.启动redis" ID="27f463c5a539bd0794cbfd5f80c63752" STYLE="fork">
            <node TEXT="redisStart()" ID="eb6a476167ef249c31bf7e18ba098637" STYLE="fork"/>
          </node>
        </node>
      </node>
      <node TEXT="redis.go" ID="25570559cb64f1a88f51e2f2ab2cf67d" STYLE="fork">
        <node TEXT="函数" ID="641402da0e1af8ce9b416e2e3fde7415" STYLE="fork">
          <node TEXT="func redisStart() error" ID="fb4ee4ed655fb3de20e6d6bf493caab3" STYLE="fork">
            <node TEXT="1. 根据Config.Global.Redis生成confs := []*antnet.RedisConfig{}" ID="88e9a7edc80245d18617a7e8ef26a50d" STYLE="fork">
              <node TEXT="Config.Global.Redis来自global.yml" ID="a0b02df06e1a556f51eb1936287f186e" STYLE="fork"/>
            </node>
            <node TEXT="2.使用confs[0]做为参数创建RedisManager" ID="188222ed1a869be8ff2478a24c396e84" STYLE="fork">
              <node TEXT="RedisManager = antnet.NewRedisManager(confs[0])" ID="eb6ba8b3d2947fccc255d97f09e07619" STYLE="fork"/>
            </node>
            <node TEXT="3.遍历其他confs，添加到管理器里" ID="d05c6aae2c55e4e7554c56ebb4bf2821" STYLE="fork">
              <node TEXT="RedisManager.Add(i, conf)" ID="fb246451d9c15f6c96fcc8210ee8dede" STYLE="fork"/>
            </node>
            <node TEXT="3.读取全局db里的其他db配置，并链接好添加到管理器" ID="c479fc1338606d420653e6b86a01acfa" STYLE="fork">
              <node TEXT="n, err := GetAllRedis()" ID="01c67e90734c44752f1808849b4a3be1" STYLE="fork"/>
              <node TEXT="如果有错误就,并且return ErrDBErr" ID="19f9e0999bdee63b23aa8ca10bc5875b" STYLE="fork"/>
            </node>
            <node TEXT="4.读取最大玩家ID" ID="541f5ee3e1ba73389b29425904285848" STYLE="fork">
              <node TEXT="max, err := GetGlobalRedis().HGet(&quot;{gamer}.idgen&quot;, &quot;gamer&quot;).Result()" ID="0e37e23a827a217d5f23003ab4b28953" STYLE="fork"/>
              <node TEXT="MaxGamerId = int32(antnet.Atoi(max))" ID="afc209c8e25b5a86722d94630bbebbbc" STYLE="fork"/>
            </node>
            <node TEXT="5.生成channels" ID="d4a82aff2423b3906fa46c8279ac2a33" STYLE="fork">
              <node TEXT="channels := []string{&quot;newdb&quot;, &quot;0&quot;, Config.Server.Type, antnet.Itoa(Config.Server.Id)}" ID="2450a2136dc68ce274171f366e7d1e18" STYLE="fork"/>
            </node>
            <node TEXT="6.添加订阅监听" ID="a5fe760d4f5355b2f6b5448eb75fd187" STYLE="fork">
              <node TEXT="RedisManager.Sub(recvPublish, channels...)" ID="b82fb40f4c1d2b0b28047c2711d7fbc5" STYLE="fork"/>
            </node>
            <node TEXT="7.添加新增玩家监听" ID="72f5a710b44a0a107382e5d3ef0a67a1" STYLE="fork">
              <node TEXT="RedisNotify.NewGamer.AddListener(func(ppb *pb.RedisNotifyNewGamer)" ID="b4d95b08d49acb89ef942fea84de1db5" STYLE="fork">
                <node TEXT="if MaxGamerId &lt; ppb.Id" ID="cadd300d411cc6149f0d1c3ecf6cceda" STYLE="fork"/>
                <node TEXT="MaxGamerId = ppb.Id" ID="9c35cd0ede7e00576c54e831f0cff510" STYLE="fork"/>
              </node>
            </node>
          </node>
          <node TEXT="func GetGlobalRedis() *antnet.Redis" ID="c0eed63b73fc86dce38cf8fb9c4b451d" STYLE="fork">
            <node TEXT="return RedisManager.GetGlobal()" ID="552e577e9f4578094cbcd40fac9a7507" STYLE="fork"/>
          </node>
          <node TEXT="func GetRedisByRid(rid int) *antnet.Redis" ID="8ea21cd12f3065548a172206813765ec" STYLE="fork">
            <node TEXT="return RedisManager.GetByRid(rid)" ID="2e4962374d654efd374838dac17650a0" STYLE="fork"/>
          </node>
          <node TEXT="func GetGamerRedis(gid int32) *antnet.Redis" ID="65ff1633f2adb9415d5e92e0b2fe79dd" STYLE="fork">
            <node TEXT="1. 检测玩家ID是否有效,无效返回nil" ID="11ca71537fecb61541a534807e23e58e" STYLE="fork">
              <node TEXT="GidCheck(gid)" ID="a4919ce1e43e835ba4bf1a63f347a7b4" STYLE="fork"/>
            </node>
            <node TEXT="2.根据一个规则计算所在服务器ID，并且获取该db id的连接" ID="77868d38fbd550e086776fe796438c7c" STYLE="fork">
              <node TEXT="return RedisManager.GetByRid(int(gid/Config.Global.GamerCountPerRedis) + 1)" ID="de5e1fc91f6df5a684cbbb684bdda236" STYLE="fork"/>
              <node TEXT="Config.Global.GamerCountPerRedis=300000" ID="98bdcd00755693a551d42f6252bf39d4" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="func GetAllRedis() (int, error)" ID="7dd8f8295ac4d99fcc8c0c45311e2025" STYLE="fork">
            <node TEXT="1. 获取id=0的db，再获取dbskey的值" ID="816b82a6c5070d22686c5e42579f375a" STYLE="fork">
              <node TEXT="data, err := GetGlobalRedis().HGetAll(&quot;dbs&quot;).Result()" ID="375715088a55872591ccb13a476a2b90" STYLE="fork"/>
              <node TEXT="data的值是{1:&quot;@127.0.0.1:9998&quot;}" ID="6d931bec4037275c6d8a75facaba2b02" STYLE="fork"/>
              <node TEXT="设置dbs的地方" ID="6cf73a6af3512060dd60ac3a1e4e7e4f" STYLE="fork">
                <node TEXT="redis.bat" ID="7a381f033a465fe130197c170560b4df" STYLE="fork"/>
                <node TEXT="tools/redis/installRedis.py" ID="6c91eb220d7b50e61acf0e1a1042b187" STYLE="fork"/>
                <node TEXT="tools/redis/init.py" ID="f9045c1649e58f391e5391ebed6c81e5" STYLE="fork">
                  <node TEXT="r = redis.StrictRedis(host=&quot;127.0.0.1&quot;, port=&quot;9999&quot;,password=&quot;&quot;)" ID="28e13eec6b8168e6275f58f0d7c416ed" STYLE="fork"/>
                  <node TEXT="r.hset(&quot;dbs&quot;,&quot;1&quot;,&quot;@127.0.0.1:9998&quot;)" ID="78bbdb71cf781a2a52d71074a6f56bfd" STYLE="fork"/>
                </node>
              </node>
            </node>
            <node TEXT="2. 遍历data, 生成配置，添加到管理器" ID="a3af97417dfee3f14cdfa0cf6850218a" STYLE="fork"/>
          </node>
          <node TEXT="func RedisError(err error) bool" ID="c624cf55d0c88c5c7d1c443399272569" STYLE="fork"/>
          <node TEXT="func recvPublish(channel string, data string)" ID="7e13ebf84dc2f99fe40808c22868f721" STYLE="fork">
            <node TEXT="1.检测channel == &quot;newdb&quot;" ID="2b115fd11a904f15682198a6bb476d13" STYLE="fork">
              <node TEXT="true" ID="66b93ddc3ff8c769773e20befc1042a9" STYLE="fork">
                <node TEXT="onNewRedis(data)" ID="06689bc06565f7a7773c762fd139045b" STYLE="fork"/>
                <node TEXT="return" ID="7222a8cfb2b6a4cfb6ba52f720737dcd" STYLE="fork"/>
              </node>
              <node TEXT="false" ID="b0fd2dfa3e0ec0539fa857de69e2fe86" STYLE="fork">
                <node TEXT="1.创建消息对象" ID="5cf2c5253daccf803af8ceefa6e7cefb" STYLE="fork">
                  <node TEXT="msg := &amp;pb.RedisNotify{}" ID="8cf742948fffc2c55b04401bad9c87dc" STYLE="fork"/>
                </node>
                <node TEXT="2.解析" ID="4723a8df4da46472fe9fd747ac7e9458" STYLE="fork">
                  <node TEXT="err := antnet.MsgPackUnPack([]byte(data), msg)" ID="ad80d2ae084d431427ab97c71601a251" STYLE="fork"/>
                </node>
                <node TEXT="3.发消息" ID="31ecc46c5b14343746b96e6f6c188629" STYLE="fork">
                  <node TEXT="RedisNotifyHandlerFunc(channel, msg)" ID="d2b21d9465563b3c9afc25304fc988dc" STYLE="fork"/>
                </node>
              </node>
            </node>
          </node>
          <node TEXT="func onNewRedis(data string)" ID="2bb1e70bc4ae189d3101d3c4ea2021fa" STYLE="fork">
            <node TEXT="1. 解析消息id和地址" ID="e14636eddf3c988f6336825f754a9d1c" STYLE="fork"/>
            <node TEXT="2. 检测当前数据库是否存在该id的连接，如果有就rentrun" ID="aa9b65a55cf3f1eb6bc9dedfa5973d4f" STYLE="fork"/>
            <node TEXT="3.将该数据库生成配置并且创建连接添加到管理器" ID="5d48b5f8d98fa52553631634a50fb4b1" STYLE="fork">
              <node TEXT="c := &amp;antnet.RedisConfig{Passwd: antnet.TrimStrSpace(ss[0]), Addr: antnet.TrimStrSpace(ss[1]), PoolSize: int(Config.Global.RedisPoolSize)}" ID="c74e7332a9a2dd6cdca8fe23099cfdaf" STYLE="fork"/>
              <node TEXT="RedisManager.Add(id, c)" ID="d72189e6085dea2f6eb276a0042c25fd" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="func gidIsExist(gid int32) bool" ID="2b0f85e1fed708027f98cc895b7d4570" STYLE="fork">
            <node TEXT="如果当前服是auto服就直接返回true" ID="25e48573c42f73d16253a0e72080bc0c" STYLE="fork"/>
            <node TEXT="否则需要做检测" ID="d260f89b7bb8ef376545f381d3b2c934" STYLE="fork">
              <node TEXT="gid &gt; MaxGamerId || gid &lt;= 0" ID="ba9e380ac602e99899ca46cb12d517a7" STYLE="fork"/>
              <node TEXT="return false" ID="702c33d16b16e1794619ee5d06eed31e" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="func GidCheck(gid int32) bool " ID="a77d3e6b9dc00145c41a360aa8406134" STYLE="fork">
            <node TEXT="!gidIsExist(gid)" ID="cd1dc5e72211a2b4f63daf9ffeccf428" STYLE="fork">
              <node TEXT="antnet.LogError(&quot;gid not exists gid:%v&quot;, gid)" ID="918da0008466fcb546ebf3bd57d7c73e" STYLE="fork"/>
              <node TEXT="antnet.LogStack()" ID="35eddc9a42a9b97ea04ccc45f544e9c2" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="func CheckServerReconn(sid int32, addr string) bool" ID="86827d1e96f22b79c0b471b9e02173e4" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="auto_redis_notify.go" ID="ab43fc6da5b121a6eb1e86239f1edb54" STYLE="fork">
        <node TEXT="idl/pb3/redis_notify.proto生成的" ID="539b7521be38b9bfe68e6dc4cfd6676c" STYLE="fork"/>
      </node>
      <node TEXT="net.go" ID="87573edad6f76508bc2714baf8367e6e" STYLE="fork">
        <node TEXT="func GetExtIpByUrl() string" ID="b35482fc00f4a8a1aa73bff525157ccf" STYLE="fork"/>
      </node>
      <node TEXT="init.go" ID="a3bfcb3522fc2045d09c41a76ac19de3" STYLE="fork">
        <node TEXT="变量" ID="b12d1c22f7b60d384c51373794a307ac" STYLE="fork">
          <node TEXT="MaxGamerId    int32 " ID="efc16948a281021042bcaddd4215580f" STYLE="fork"/>
        </node>
      </node>
    </node>
    <node TEXT="gcontrol" ID="94732c98d4d6d5c51fd03bfb1b4cac0d" STYLE="bubble" POSITION="right">
      <node TEXT="redis_notify.go" ID="fee342dc3bf8e9e9c603666a7c5cd489" STYLE="fork"/>
      <node TEXT="control_cmd.go" ID="4276f69eb2b4950e7649c584b9457030" STYLE="fork"/>
    </node>
    <node TEXT="main.go" ID="ffa79e29225c0c19db34a9f45ce3ebc3" STYLE="bubble" POSITION="right">
      <node TEXT="定义变量var" ID="8914ba43144e9a9b55d2a6d23674d3aa" STYLE="fork">
        <node TEXT="命令参数" ID="d1c93435fe79972b2ec049e7b6c58238" STYLE="fork">
          <node TEXT="_path      = flag.String(&quot;f&quot;, &quot;conf/logic_101.yml&quot;, &quot;run config&quot;)" ID="e88537eb242fb5bc0e7910a4876d71e5" STYLE="fork">
            <node TEXT="服务配置" ID="a1e66c4bd167bb70aa01bae849945de2" STYLE="fork"/>
          </node>
          <node TEXT="_daemon    = flag.Bool(&quot;d&quot;, false, &quot;1 for daemon&quot;)" ID="c77cbb8421bde1e1ec741e6b8a5461f8" STYLE="fork">
            <node TEXT="是否守护进程方式运行程序" ID="a86548378f62ce0b7dab865800828f4d" STYLE="fork"/>
          </node>
          <node TEXT="_lan       = flag.Bool(&quot;n&quot;, false, &quot;1 for lan&quot;)" ID="8d5caaec7c2dec2fa9df736cb8e7716a" STYLE="fork">
            <node TEXT="是否是开发环境本地运行" ID="e77bb967791a6293bb23e161d539e295" STYLE="fork">
              <node TEXT="true" ID="46873d68f52c472d7123ce0a3ccdd632" STYLE="fork">
                <node TEXT="http" ID="6458ccbbc00aa1ccad29c79acdcb308d" STYLE="fork"/>
                <node TEXT="Config.Server.Net.ExtIpUrl = &quot;&quot;" ID="3fb6c0dcbdedfbef3f6e3ccffd2f74d3" STYLE="fork"/>
              </node>
              <node TEXT="false" ID="e39ee672b99682a946ef05877330b481" STYLE="fork">
                <node TEXT="https" ID="14bcf9171327c538d7ffdcc623824120" STYLE="fork"/>
                <node TEXT="Config.Server.Net.ExtIpUrl = &quot;http://ip.3322.net&quot;" ID="324128ef0bd9589129e170d9b2b25bcc" STYLE="fork"/>
              </node>
            </node>
          </node>
        </node>
        <node TEXT="设置服务启动方法map" ID="9733c9bac99f813164afbc8e94d16da9" STYLE="fork">
          <node TEXT="&quot;auth&quot;:  auth.Start" ID="0170c895ac4502d64ea36d65ce278b51" STYLE="fork">
            <node TEXT="验证服" ID="e507f9f1eb766ac7d7e35705e917733b" STYLE="fork"/>
          </node>
          <node TEXT="&quot;logic&quot;: logic.Start" ID="9802d8987370a87c9790564d53acdb13" STYLE="fork">
            <node TEXT="逻辑服" ID="7e2e446b1078cdfa26a423942a6055d4" STYLE="fork"/>
          </node>
          <node TEXT="&quot;test&quot;:  test.Start" ID="69313b9f8ab4f1dd62468de13ede0b0c" STYLE="fork">
            <node TEXT="测试服" ID="e7d187ff315963521710bfce22bfb552" STYLE="fork"/>
          </node>
          <node TEXT="&quot;match&quot;: match.Start" ID="aa43cdeb699d4fd18c3e28df9f2567a4" STYLE="fork">
            <node TEXT="匹配服" ID="02d98c56098b4f15165cb1e1e0184443" STYLE="fork"/>
          </node>
          <node TEXT="&quot;spvp&quot;:  spvp.Start" ID="43bba7284a681bad643e5e500b34e74c" STYLE="fork">
            <node TEXT="战斗服" ID="abe91fc6bb8542bd45c3d721a1435fc6" STYLE="fork"/>
          </node>
        </node>
      </node>
      <node TEXT="func main()" ID="05f7e4614fd9b5c7ffd5e153e5a9a538" STYLE="fork">
        <node TEXT="解析命令参数" ID="abe7ca06462ac404eac00d4baef1849a" STYLE="fork">
          <node TEXT="flag.Parse()" ID="892091ec928645e74ed48452a7664ec5" STYLE="fork"/>
        </node>
        <node TEXT="检测参数是否设置为守护进程执行_daemon" ID="488afd60967a8e8940b556c7f2113102" STYLE="fork">
          <node TEXT="启动守护进程，当前进程不继续走" ID="b3104c1eb34e6e5cde29057efd02c833" STYLE="fork"/>
        </node>
      </node>
    </node>
    <node TEXT="Global Redis DB" ID="4aaac14c3aa5c1b850bfcf1e2c4cb47f" STYLE="bubble" POSITION="right">
      <node TEXT="dbs" ID="e5c6d2fc1ae112aee1b11160c5adff49" STYLE="fork">
        <node TEXT="1=&quot;@127.0.0.1:9998&quot;" ID="dfc5398ed19b7ebf1f9e7c5801d2f344" STYLE="fork"/>
      </node>
      <node TEXT="{gamer}.idgen" ID="38ffa7b326552c82d90fffaba72d7ae5" STYLE="fork">
        <node TEXT="gamer=10011" ID="e72b9613203b6301b35d47219d9f9359" STYLE="fork"/>
      </node>
    </node>
    <node TEXT="redis订阅，发布消息流程，实例：" ID="4469aa7900b7fcef40072d2c10a6d244" STYLE="bubble" POSITION="right">
      <node TEXT="添加监听" ID="deea9beeaa8f1002de366d4739f47617" STYLE="fork">
        <node TEXT="frame.RedisNotify.SubFatigue.AddListener(RedisNotifySubFatigue)" ID="8ae287957d5e136e8cf02f9723b10f18" STYLE="fork"/>
      </node>
      <node TEXT="添加订阅" ID="420b047232104d940df599ee5ca221d6" STYLE="fork">
        <node TEXT="RedisManager.Sub(recvPublish, channels...)" ID="459e4d53feecd8582bcd990aa25cee01" STYLE="fork">
          <node TEXT="pubsub := v.Subscribe(channels...)" ID="40829c01af087dddc63c9d4465b5ebda" STYLE="fork"/>
          <node TEXT="msg, err := pubsub.ReceiveMessage()" ID="85bba4ff80914b951b0ec83f37da5acb" STYLE="fork"/>
          <node TEXT="Go(func() { fun(msg.Channel, msg.Payload) })" ID="f28af0ea926858775eff0d5f6eb012c0" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="发布消息" ID="282f0feb21d22de27c7159ba8a309c60" STYLE="fork">
        <node TEXT="1. 创建消息对象" ID="52fbae631aaad70f886eebb515a457fa" STYLE="fork">
          <node TEXT="notify, _ := antnet.MsgPackPack(&amp;pb.RedisNotify{SubFatigue: &amp;pb.RedisNotifySubFatigue{" ID="ab76a46a427404cd76c40688e9d12c05" STYLE="fork"/>
          <node TEXT="   CheckpointId: checkpointId,   GidList:      gidList,}})" ID="39b60cedb94a0c11b900ed479373f74e" STYLE="fork"/>
        </node>
        <node TEXT="2. 发布" ID="41666ac9bf4950fea5ca3d3b2e508142" STYLE="fork">
          <node TEXT="frame.GetGlobalRedis().Publish(&quot;logic&quot;, notify)" ID="e5554d45b7c454b00d56e69cb86b8128" STYLE="fork"/>
        </node>
        <node TEXT="" ID="9a246e1616340eb3666909507e9b29ad" STYLE="fork"/>
      </node>
      <node TEXT="接收消息" ID="cdb84e5606e8fed7ada11340b0102cf3" STYLE="fork">
        <node TEXT="msg, err := pubsub.ReceiveMessage()" ID="f13b7700556a76f2e64cc0442a07e622" STYLE="fork"/>
        <node TEXT="func recvPublish(channel string, data string)" ID="0e0f6855baae09cfae4c6f6eade0739f" STYLE="fork">
          <node TEXT="msg := &amp;pb.RedisNotify{}" ID="aeeb770351570c7073b7e24d75a25319" STYLE="fork"/>
          <node TEXT="err := antnet.MsgPackUnPack([]byte(data), msg)" ID="01a1216cb04055742b203d6307b21619" STYLE="fork"/>
          <node TEXT="RedisNotifyHandlerFunc(channel, msg)" ID="3b72c70819f8315ec27c1c0e5eb5a88c" STYLE="fork"/>
        </node>
        <node TEXT="func RedisNotifyHandlerFunc(channel string, ppb *pb.RedisNotify)" ID="3d557d5618c810e1770bade3778c0ad5" STYLE="fork"/>
        <node TEXT="RedisNotify.SubFatigue.invoke(channel, ppb.SubFatigue)" ID="a1079a56fd5426f9f240fea63d897fc4" STYLE="fork"/>
      </node>
    </node>
    <node TEXT="redis获取数据对象" ID="6035a990bb75f94ff8557d397814e78c" STYLE="bubble" POSITION="right">
      <node TEXT="1. 从数据库读取数据" ID="9dfa48a04a75e3a627b332205915cfda" STYLE="fork">
        <node TEXT="data, err := frame.GetGamerRedis(gid).Get(antnet.Sprintf(keyGamerMoney, gid)).Result()" ID="4ec554aff02573278caac8df6095b4a3" STYLE="fork"/>
      </node>
      <node TEXT="2.解析" ID="a2dd9138b8ae00ad4220518fec2188cd" STYLE="fork">
        <node TEXT="parseMoney := &amp;pb.Money{}" ID="807a65682a4949de57c97e2fa71f7555" STYLE="fork"/>
        <node TEXT="antnet.ParsePbStr(data, parseMoney)" ID="927cacc3de2041b422f804ba1afe0353" STYLE="fork"/>
        <node TEXT="modelMoney.Money = parseMoney" ID="489d2a38635f5175d56b36698ffe397a" STYLE="fork"/>
      </node>
      <node TEXT="" ID="48b29b09826cb5456de627b8aea56662" STYLE="fork"/>
    </node>
    <node TEXT="redis保存数据对象" ID="590dc903c5bcb755d6e81dd1e3911423" STYLE="bubble" POSITION="right">
      <node TEXT="_, err := frame.GetGamerRedis(r.Id).Set(antnet.Sprintf(keyGamerMoney, r.Id), antnet.PbStr(r.Money), 0).Result()" ID="d761e3468c5142f649e454cf6520acec" STYLE="fork"/>
      <node TEXT="" ID="09cb2b125c447f0a3bda704212c098be" STYLE="fork"/>
    </node>
    <node TEXT="redis修改数据" ID="d9a6223391310a7dc480879badad704e" STYLE="bubble" POSITION="right">
      <node TEXT="" ID="76665a0dcb7229bc921116278ac9cee3" STYLE="fork"/>
    </node>
    <node TEXT="问题" ID="ec2075904fff3545038a6d0b0dcb813a" STYLE="bubble" POSITION="right">
      <node TEXT="gmsg是做什么的？" ID="267f19f422f9c547357d6b8c88ebd5c4" STYLE="fork"/>
      <node TEXT="control_match.go MatchPool 方法里的 ticker 不用调停止吗？" ID="a903d9ba978bcd3c2e5d469285b33eb9" STYLE="fork"/>
    </node>
    <node TEXT="知识点" ID="bb5d91c86da567522e398b4e7d6071cc" STYLE="bubble" POSITION="right">
      <node TEXT="atomic包提供了底层的原子级内存操作，对于同步算法的实现很有用。" ID="72149ab7804cb59e88fa5cfc4a37d98e" STYLE="fork">
        <node TEXT="https://studygolang.com/static/pkgdoc/index.html" ID="e8e26abbded31f486b4bbbc506410649" STYLE="fork"/>
      </node>
      <node TEXT="runtime包提供和go运行时环境的互操作，如控制go程的函数。它也包括用于reflect包的低层次类型信息；参见reflect报的文档获取运行时类型系统的可编程接口。" ID="9abf599269f1ef04d9465a9ebc5bf751" STYLE="fork">
        <node TEXT="https://studygolang.com/static/pkgdoc/index.html" ID="737338dd725aeaf5d8c22006c052437b" STYLE="fork"/>
      </node>
      <node TEXT="exec包执行外部命令。它包装了os.StartProcess函数以便更容易的修正输入和输出，使用管道连接I/O，以及作其它的一些调整。" ID="6301989cb3943177cdde93befd0d75fd" STYLE="fork">
        <node TEXT="https://studygolang.com/static/pkgdoc/index.html" ID="35785a387e0685d55b1e8a83a2ae8c67" STYLE="fork"/>
        <node TEXT="" ID="abfeee2196478b336e303cf033df947d" STYLE="fork">
          <node TEXT="cmd := exec.Command(filePath)" ID="40c75868747557789d4fc40ab9acf9e5" STYLE="fork"/>
          <node TEXT="cmd.Args = newCmd" ID="a8c97d3f766b3b1c4f2bb47052b8989b" STYLE="fork"/>
          <node TEXT="cmd.Start()" ID="0c9238fbafe821aad236529098a6503f" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="unsafe包提供了一些跳过go语言类型安全限制的操作。" ID="685e944f5e170deb5906fc74032b1643" STYLE="fork"/>
      <node TEXT="WaitGroup用于等待一组线程的结束。父线程调用Add方法来设定应等待的线程的数量。每个被等待的线程在结束时应调用Done方法。同时，主线程里可以调用Wait方法阻塞至所有线程结束。" ID="8602a28c5c7c058520ad77faf9aee6b4" STYLE="fork">
        <node TEXT="https://studygolang.com/static/pkgdoc/index.html" ID="649040753adfe09d9d5bf5802e97c886" STYLE="fork"/>
        <node TEXT="https://studygolang.com/articles/12512" ID="9614cc5b05276dec06dc71275719b570" STYLE="fork"/>
      </node>
      <node TEXT="var a chan int = make(chan int)" ID="04290dd005e3a999350a7f729da70b7a" STYLE="fork">
        <node TEXT="https://studygolang.com/articles/12402" ID="7bad9bf68b0597f874ab94a771d3b46d" STYLE="fork"/>
      </node>
      <node TEXT="ch := make(chan type, capacity)" ID="80380f77833a608b042515db9a9694b7" STYLE="fork">
        <node TEXT="https://studygolang.com/articles/12512" ID="2582142d109ded78d9d0f5c1393a1a84" STYLE="fork"/>
      </node>
      <node TEXT="select 语句用于在多个发送/接收信道操作中进行选择。select 语句会一直阻塞，直到发送/接收操作准备就绪。如果有多个信道操作准备完毕，select 会随机地选取其中之一执行。" ID="6b2e78784f19e3a3c6ce6466a1b89eba" STYLE="fork">
        <node TEXT="https://studygolang.com/articles/12522" ID="c7363f9025573d4b56276637e448e1f8" STYLE="fork"/>
      </node>
      <node TEXT="Mutex 处理竞态条件" ID="a43bb11aee92c774b6f59aeacdeb9539" STYLE="fork">
        <node TEXT="https://studygolang.com/articles/12598" ID="ec920d4f6cafd2329631f3e7d092397d" STYLE="fork"/>
      </node>
      <node TEXT="runtime.Stack(buf []byte, all bool) int" ID="2512070298fa72bc75223fcf0569106b" STYLE="fork">
        <node TEXT="https://studygolang.com/static/pkgdoc/index.html" ID="9d74c20a547a035eccf639f2be5c9c44" STYLE="fork"/>
      </node>
      <node TEXT="runtime.Caller(skip int) (pc uintptr, file string, line int, ok bool)" ID="9e9858addb7e1395d33c27d3465130e5" STYLE="fork"/>
      <node TEXT="通过http://ip.3322.net 获取当前机器公网IP" ID="8c16f602e89dbfc842ba4a0d9e0da5de" STYLE="fork"/>
      <node TEXT="什么是守护进程?" ID="7924e2ecce8bcceb4440c0628ed50662" STYLE="fork">
        <node TEXT="https://blog.csdn.net/qq_34629352/article/details/103489614" ID="c9c862fd3840bf5a93f929659ccf9df5" STYLE="fork"/>
      </node>
      <node TEXT="time包提供了时间的显示和测量用的函数。日历的计算采用的是公历。" ID="9a853b149b4f973c6dd0b2c143b81975" STYLE="fork">
        <node TEXT="https://studygolang.com/static/pkgdoc/index.html" ID="b756a9aaa8d9a4c855dc9530cf153908" STYLE="fork"/>
      </node>
      <node TEXT="strconv包实现了基本数据类型和其字符串表示的相互转换。" ID="e7b9d1dfffa46a033d4662b8f496a173" STYLE="fork">
        <node TEXT="https://studygolang.com/static/pkgdoc/index.html" ID="f13fcec65d77463dfd8d74261608a541" STYLE="fork"/>
      </node>
      <node TEXT="runtime.GOMAXPROCS 设置调度器数量" ID="833a86660489215531c5bdcec99427c9" STYLE="fork">
        <node TEXT="http://c.biancheng.net/view/94.html" ID="08ebf8410c58dc4dee571e1a30cf8a5f" STYLE="fork"/>
        <node TEXT="https://blog.csdn.net/jinyidong/article/details/88235290" ID="8a2c88abcda90223485a94bf99c5e696" STYLE="fork"/>
      </node>
      <node TEXT="panic 和 recover" ID="2a792a367b10f31c040fcfae18560143" STYLE="fork">
        <node TEXT="https://studygolang.com/articles/12785" ID="a13921d163329a7c1f5ab4544c6b07be" STYLE="fork"/>
      </node>
      <node TEXT="redis发布（pub）、订阅（sub）模式" ID="97f3e5ef465355ebf22fa1552f86793b" STYLE="fork">
        <node TEXT="https://www.cnblogs.com/longjee/p/8668974.html" ID="1d4bd77b2311747c2abe3cff6dae3218" STYLE="fork"/>
      </node>
      <node TEXT="golang中redis对redigo的发布订阅机制的使用" ID="b5ea535a554b3c6d598123881ed79d40" STYLE="fork">
        <node TEXT="https://blog.csdn.net/qq_17308321/article/details/89417493" ID="355c398e2ff21e97e972e68b57ab8672" STYLE="fork"/>
      </node>
      <node TEXT="reids" ID="b755551a8601d7bebb097a8ef589133f" STYLE="fork">
        <node TEXT="Golang redis(一)redigo安装及简单示例" ID="76adf7df61b5c74bf9d90d18d2f14e7e" STYLE="fork">
          <node TEXT="https://blog.csdn.net/comprel/article/details/95918523" ID="c3d9d3f74c415fa8c11c4bb331d0bd1e" STYLE="fork"/>
        </node>
        <node TEXT="Golang redis(二)redigo连接详解" ID="123f07fd38e85f293711994f5da53c33" STYLE="fork">
          <node TEXT="https://blog.csdn.net/comprel/article/details/95920188" ID="e0d9b72758321d44758084ce38368b3b" STYLE="fork"/>
        </node>
        <node TEXT="Golang redis(三)redigo连接池" ID="eeae0c0977e59e7f9be56763d3557e5f" STYLE="fork">
          <node TEXT="https://blog.csdn.net/comprel/article/details/95920587" ID="4218f4d3364af491a0d14f9134e37d45" STYLE="fork"/>
        </node>
        <node TEXT="Golang redis(四)redigo类型转换及args传参详解" ID="9c5b1ad8e69a532b19fbd5b067806865" STYLE="fork">
          <node TEXT="https://blog.csdn.net/comprel/article/details/95920741" ID="3e52ef9aa3da89e3f5da0c4b98d4d78d" STYLE="fork"/>
        </node>
        <node TEXT="Golang redis(五)redigo pipline管道" ID="949f0738971369645b3ec27fb3bab772" STYLE="fork">
          <node TEXT="https://blog.csdn.net/comprel/article/details/95920971" ID="0ebdb599c10134e8a6b7d9fb49c38d15" STYLE="fork"/>
        </node>
        <node TEXT="Golang redis(六)redigo 发布订阅模式" ID="22609d1aee28c6dae918343df57ede51" STYLE="fork">
          <node TEXT="https://blog.csdn.net/comprel/article/details/95921305" ID="bcb34eb2def3ccbcf523df16952bd9aa" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="go-redis" ID="3a27d99bb76e7b0eb79f19d9e802bd49" STYLE="fork">
        <node TEXT="源码地址" ID="567873c6f544579856e53ffecef18333" STYLE="fork">
          <node TEXT="https://github.com/go-redis/redis" ID="e36abef91f39d2343dd53fc58efbe4d7" STYLE="fork"/>
        </node>
        <node TEXT="文档地址" ID="ffaa45f321d39de659e6c810fba94f3e" STYLE="fork">
          <node TEXT="https://godoc.org/github.com/go-redis/redis" ID="f23d479b57a0dc126177812615424131" STYLE="fork"/>
        </node>
        <node TEXT="go使用go-redis操作redis(一)安装及示例" ID="c211045cd638639c8b780ccb56deb31d" STYLE="fork">
          <node TEXT="https://blog.csdn.net/comprel/article/details/96716302" ID="8356f8db9340a18d25a823f2e7c938cb" STYLE="fork"/>
        </node>
        <node TEXT="go使用go-redis操作redis(二)返回类型" ID="3007d083ecd087d306f60480613e2bd9" STYLE="fork">
          <node TEXT="https://blog.csdn.net/comprel/article/details/96716582" ID="1949506fb4fa91480dede7a228c3114a" STYLE="fork"/>
        </node>
        <node TEXT="go-redis 发布/订阅" ID="b65e70aaf1946170eb1ae26d810db963" STYLE="fork">
          <node TEXT="https://studygolang.com/articles/18735?fr=sidebar" ID="acb4255cc393f8ead9f26db1ecfb596c" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="msgpack" ID="59853ada0f0a977017a845ecbefeee0b" STYLE="fork">
        <node TEXT="https://github.com/vmihailenco/msgpack" ID="0fad59e8de951c756d50d832345bf991" STYLE="fork"/>
        <node TEXT="https://msgpack.uptrace.dev/" ID="cd7cfcdf33041565e66cd613eee7dc13" STYLE="fork"/>
        <node TEXT="https://blog.csdn.net/weixin_33816946/article/details/92438248" ID="ee9840a7546619271d1b372a55070bad" STYLE="fork"/>
      </node>
      <node TEXT="Go语言中的数据格式（json、xml 、msgpack、protobuf）" ID="86e49d8ec3a630a7e9f37bb7337c62d3" STYLE="fork">
        <node TEXT="https://www.cnblogs.com/dcz2015/p/11342168.html" ID="11b85427174ed288e159d0ff11071a89" STYLE="fork"/>
      </node>
      <node TEXT="yaml" ID="a3355202c814925eb5bcffd06e3ae07e" STYLE="fork">
        <node TEXT="https://github.com/go-yaml/yaml" ID="995d48f9fb99fc200a49c1b416278e2f" STYLE="fork"/>
        <node TEXT="https://godoc.org/gopkg.in/yaml.v2" ID="42ebf47b79f494f489556158c160d491" STYLE="fork"/>
        <node TEXT="https://www.jianshu.com/p/84499381a7da" ID="5ba59564a4161c54492e25e8eca7e939" STYLE="fork"/>
      </node>
    </node>
  </node>
</map>