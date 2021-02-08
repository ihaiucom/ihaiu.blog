
<map>
  <node ID="root" TEXT="战斗客户端代码">
    <node TEXT="游戏开始时序图" ID="e1acc29d5774834e07e33750981d45eb" STYLE="bubble" POSITION="right"/>
    <node TEXT="启动Launch" ID="2db98286a4f9f36bcb44178bb9c98a7f" STYLE="bubble" POSITION="right">
      <node TEXT="War.Launch(matchInfo: proto.MatchInfo, isReconn: boolean)" ID="13488ae7609e671e568f3ec07fd07336" STYLE="fork">
        <node TEXT="检测是否有战斗正在运行，如果有就将老的战斗退出" ID="42f9c4672c8be442e3b58b9f896221f7" STYLE="fork">
          <node TEXT="" ID="211972c72fee738dd2d1d9bb930021b8" STYLE="fork"/>
        </node>
        <node TEXT="设置状态为游戏启动中" ID="65a3b46adfcbc53669e33a97e097c07e" STYLE="fork">
          <node TEXT="" ID="f9c5c7582a82f32d61a2f75c371a55b1" STYLE="fork"/>
        </node>
        <node TEXT="初始化管理器实例对象" ID="4624fb18ebe3ee4ea1e8d6f1f1d52ca3" STYLE="fork">
          <node TEXT="" ID="97c3c98e8d8121419199ae6f94c894fc" STYLE="fork"/>
        </node>
        <node TEXT="获取关卡编辑器配置，如果没有配置就停止运行" ID="dddaf674e819055784e781d9cbb02490" STYLE="fork">
          <node TEXT="" ID="a1c41422aeaa53e6a9b94d982df57ab3" STYLE="fork"/>
        </node>
        <node TEXT="打开战斗界面" ID="631de38052e7befe56fd9b05edbfa616" STYLE="fork">
          <node TEXT="" ID="7a1f0205789b874e23c4f9082bc4ef60" STYLE="fork"/>
        </node>
        <node TEXT="加载战斗资源" ID="7ac50f0894bb9307ac0e95b84555164b" STYLE="fork">
          <node TEXT="" ID="d4db00e026fe4ca76c95d43b32cc9025" STYLE="fork">
            <node TEXT="打开加载界面" ID="8e975afb5dcda4bc76bae3029b2652b8" STYLE="fork">
              <node TEXT="" ID="afb725e1876ac1becd7286687f9ae7e5" STYLE="fork"/>
            </node>
            <node TEXT="获取关卡地图房间配置列表" ID="9024ba17b867944928f2e265dd66667a" STYLE="fork">
              <node TEXT="" ID="45a41ed5200e03520278b979a837bd5d" STYLE="fork">
                <node TEXT="" ID="f5c9998b12dbeea986cefa1b7c686adf" STYLE="fork"/>
              </node>
            </node>
            <node TEXT="生成预加载资源列表" ID="742da8d81ed6b132cf88f81b2f928ff9" STYLE="fork">
              <node TEXT="" ID="26f4d72387a89dfc8c1904e2624e63dc" STYLE="fork">
                <node TEXT="场景" ID="7b45b8eafa7bc3330e91944e568c94c6" STYLE="fork">
                  <node TEXT="" ID="29b042db10e93ec793d924bf489d6384" STYLE="fork"/>
                </node>
                <node TEXT="角色" ID="bb4da444d90e8c8841e51e956ca09fea" STYLE="fork">
                  <node TEXT="" ID="17fa6cb0a1dd370262cea5690a673583" STYLE="fork"/>
                </node>
                <node TEXT="全局资源" ID="c9a18e6d674cc52d3a64f5110a8d90ac" STYLE="fork">
                  <node TEXT="" ID="b8c43a6c6df48d1b97d07567dfd7a188" STYLE="fork"/>
                  <node TEXT="" ID="3e1f070e4da51673dc735c229c465d43" STYLE="fork"/>
                </node>
              </node>
            </node>
            <node TEXT="加载资源" ID="a79168fc753443f05d8c78804dc7c9c4" STYLE="fork">
              <node TEXT="" ID="8541ac07f159ae93a7034c21e02a6287" STYLE="fork">
                <node TEXT="设置进度条和发送同步进度条" ID="638eb44c37c57ca6e2cc7f54922505e7" STYLE="fork">
                  <node TEXT="" ID="b03334a18824d444acb125fa843d6271" STYLE="fork"/>
                </node>
              </node>
            </node>
            <node TEXT="等待（垃圾代码）" ID="554a6d502755c6e8aaccb8217be14b17" STYLE="fork">
              <node TEXT="" ID="9e03e9cff55f37e2b72c5df9776347cd" STYLE="fork"/>
            </node>
          </node>
        </node>
        <node TEXT="启动战斗视图" ID="a7d4536e9dd1c115a158ad880ca3a1eb" STYLE="fork">
          <node TEXT="" ID="eacaf0285724f2e8390da1a657a651dd" STYLE="fork">
            <node TEXT="初始化场景" ID="63e827853765356fdbc3055e1fa25edf" STYLE="fork">
              <node TEXT="" ID="01c9d7648e17e69476ace947e18901b4" STYLE="fork">
                <node TEXT="设置当前房间ID和配置" ID="728c13a4dba85ac5b999186144268603" STYLE="fork">
                  <node TEXT="" ID="3bdcfd0ae90a20d26e76fe5a034d3dd7" STYLE="fork"/>
                </node>
                <node TEXT="创建房间场景预设" ID="c54216fc9079fe10ee18b010e05f6085" STYLE="fork">
                  <node TEXT="" ID="2c419c88be60efdcd97fa02a21d40475" STYLE="fork"/>
                </node>
                <node TEXT="初始化房间" ID="b66ed9103b0e2da68382f62a79245a05" STYLE="fork">
                  <node TEXT="" ID="b72d7399dd00b2e5531ec2e0ced35e5a" STYLE="fork">
                    <node TEXT="获取当前房间小地图" ID="e4b83dcf896a270f030438bd69a6055a" STYLE="fork">
                      <node TEXT="" ID="516abe5c0670b6e5a141242ec3726829" STYLE="fork"/>
                    </node>
                    <node TEXT="播放背景音乐" ID="01aba3c4ecc51924c38a7ca8bdd1a227" STYLE="fork">
                      <node TEXT="" ID="c2f5effe32bd48bf1be577c814231242" STYLE="fork">
                        <node TEXT="" ID="b2a2d42496ad05bd0fc2d0d0408ab8f1" STYLE="fork"/>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node TEXT="初始化事件监听" ID="7ca141afc36f6f50cb8febe5a25f3625" STYLE="fork">
              <node TEXT="" ID="cb81964d72beb070bff5c27a07a5daae" STYLE="fork">
                <node TEXT="" ID="d87304573248ab2f84014d216be6baed" STYLE="fork">
                  <node TEXT="监听，怪物创建" ID="e553ba007200e53684a177c6a719bb18" STYLE="fork"/>
                  <node TEXT="监听，怪物销毁" ID="60fccfc1d9a46179fce7fa38317e43d1" STYLE="fork"/>
                  <node TEXT="监听,  特效创建" ID="c2386b8c8e27953026f42eed5405b423" STYLE="fork"/>
                  <node TEXT="监听，音效播放" ID="bc1100b12a8746ccbc1c04fb97ce77c3" STYLE="fork"/>
                </node>
              </node>
            </node>
            <node TEXT="初始化摄像机" ID="ad0d67bd20d8f2d0c394c15497d03f61" STYLE="fork">
              <node TEXT="" ID="56c862a52028f4bed47d221024bf9e41" STYLE="fork">
                <node TEXT="设置摄像机区域" ID="bb275e3e42559974a201dae7c06c6832" STYLE="fork">
                  <node TEXT="" ID="7ebf1fee06fe855025700b0ff3cd7c0d" STYLE="fork"/>
                </node>
                <node TEXT="绑定摄像机组件，设置摄像机跟随某个目标" ID="442b3a7d67d3d0f625e93b98bf91cbd7" STYLE="fork">
                  <node TEXT="" ID="cc451f349df9d4d65cc360c043dfa95d" STYLE="fork"/>
                </node>
              </node>
            </node>
            <node TEXT="初始化飘字" ID="136c2f90b2da4de16a2b9f7a8e8141c9" STYLE="fork">
              <node TEXT="" ID="2064e7f06d75c60e238bcdbedb5834fd" STYLE="fork">
                <node TEXT="" ID="f0baeefd1c6150acd6a1b644dcf03eda" STYLE="fork"/>
              </node>
            </node>
            <node TEXT="添加战斗视图组件， ViewBattle" ID="8fefd763e811e3db110f4529be692b13" STYLE="fork">
              <node TEXT="" ID="f478441e007329d092c3c174af5215ba" STYLE="fork">
                <node TEXT="onStart" ID="3bd905c49e92744e1ff57dfc39afab09" STYLE="fork">
                  <node TEXT="" ID="88a08389e0cb073c7ad810b00498f853" STYLE="fork">
                    <node TEXT="添加游戏开始协议监听" ID="a1f28544a99fba9fff5c00b164b71f88" STYLE="fork">
                      <node TEXT="" ID="8a9d455d9f9426588d1570d89dbf603a" STYLE="fork"/>
                    </node>
                    <node TEXT="添加事件监听" ID="4fcf0bedb515dfc977a2f48dcdb148d4" STYLE="fork">
                      <node TEXT="" ID="7d46022cac8b1a1bf7b58e4fe0872617" STYLE="fork"/>
                    </node>
                    <node TEXT="初始化掉落管理器" ID="3d424a36d89465564473bb726427ec03" STYLE="fork">
                      <node TEXT="" ID="e3f2c7e218dda702a360c1d159599422" STYLE="fork"/>
                    </node>
                    <node TEXT="设置加载还没完成， 用于组件onUpdate判断是否执行" ID="beaaa085393c9c58629fbacc23cafeb3" STYLE="fork">
                      <node TEXT="" ID="9b04904858a59224bbbc8da0f3b3abf3" STYLE="fork"/>
                    </node>
                    <node TEXT="监听加载完成事件" ID="75073379b88ac42113d2395b249f810e" STYLE="fork">
                      <node TEXT="" ID="2e012d39a9219dae17b424e3466db666" STYLE="fork">
                        <node TEXT="设置加载完成状态， 用于组件onUpdate判断是否执行" ID="425b8f9ebe9acbe8e19d523436d0a9aa" STYLE="fork">
                          <node TEXT="" ID="8ab2fb030bb0ff751eb49a93f042c51f" STYLE="fork"/>
                        </node>
                      </node>
                    </node>
                    <node TEXT="发送消息，加载100。通知服务器客户端已经准备好了" ID="b16f71693029421eeff83bc10f590f88" STYLE="fork">
                      <node TEXT="" ID="ed21994065287e37a9a4602ef2ae47be" STYLE="fork"/>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node TEXT="创建所有玩家视图" ID="663aa0bbcbd037c6536580312a10c113" STYLE="fork">
              <node TEXT="" ID="a367fd12dc718219a048a330013bb155" STYLE="fork">
                <node TEXT="" ID="d53ddbf8d44caa4cfcfd6094b0dfe83e" STYLE="fork">
                  <node TEXT="创建玩家视图" ID="d45783028560f534c477ebd19b8abebf" STYLE="fork">
                    <node TEXT="" ID="774cda13ab32235ca01fa97501cd6b7b" STYLE="fork">
                      <node TEXT="根据heroId获取，英雄预设资源名称" ID="72225be7dbd9a6d8630d7fbfe31d7389" STYLE="fork">
                        <node TEXT="" ID="b2a0b7233fd1bfd892687ac6a8a92801" STYLE="fork"/>
                      </node>
                      <node TEXT="获取角色模型实例对象， 初始化角度和位置" ID="f5c54829462c6dc7cebad226ff2b0895" STYLE="fork">
                        <node TEXT="" ID="254b0469590caadf7305455ea037d0f1" STYLE="fork"/>
                      </node>
                      <node TEXT="添加玩家视图组件, viewPlayer, 并且设置初始值" ID="fb85107305a43517eeae341d19bd6198" STYLE="fork">
                        <node TEXT="" ID="26e8c7a58c786e571ec3ece2f6bb3383" STYLE="fork"/>
                      </node>
                      <node TEXT="保存玩家视图组件" ID="01ab76a67dfabf3e2172dc6f458f72d2" STYLE="fork">
                        <node TEXT="" ID="10c75112ee2da632180f6e9954a77258" STYLE="fork"/>
                      </node>
                      <node TEXT="将模型实例对象添加到场景" ID="6ed3975ea537dd08f944bbcfd3d2cac9" STYLE="fork">
                        <node TEXT="" ID="6c0d12860e746291fe0e5b8e70473bb2" STYLE="fork"/>
                      </node>
                      <node TEXT="设置英雄武器" ID="0b678dbb76ab8677bb91f913397eb92c" STYLE="fork">
                        <node TEXT="" ID="e5ef26be3a121cfe384fdf03e30f385e" STYLE="fork"/>
                      </node>
                      <node TEXT="设置Debug用的，是否显示攻击/受击盒" ID="7d0304e8f3611175fd36826dc30705ec" STYLE="fork">
                        <node TEXT="" ID="595cdd34bfe2eee131af6218275e2e21" STYLE="fork"/>
                      </node>
                      <node TEXT="设置角度阴影、光圈" ID="44be65d0f7caea266f21c710cea81b32" STYLE="fork">
                        <node TEXT="" ID="6f9aeef83dd30c78361287ee503ac43b" STYLE="fork">
                          <node TEXT="" ID="6d85ca34c3175b55ce14582eb29adcb9" STYLE="fork"/>
                        </node>
                      </node>
                      <node TEXT="如果是自己玩家，设置自己玩家引用" ID="7433fcdd0bcfd9132b2aba1a216d2150" STYLE="fork">
                        <node TEXT="" ID="339261ea064a1b49af5c06065be6d752" STYLE="fork"/>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node TEXT="检测客户端和服务器配置是否同一个版本" ID="105dc134af6f07eed6474f837dcdb4e9" STYLE="fork">
              <node TEXT="" ID="f8d052b7c68da6d89aba59025f2da7b7" STYLE="fork"/>
            </node>
          </node>
        </node>
        <node TEXT="设置游戏状态为游戏运行中" ID="a121fee7e6f804552dee0ab327b685f3" STYLE="fork">
          <node TEXT="" ID="1bca53eb719e1e1a336f68ed3388f2df" STYLE="fork"/>
        </node>
      </node>
    </node>
    <node TEXT="游戏开始MatchBegin" ID="40c56097d9a998b64c3a44ef176e5d71" STYLE="bubble" POSITION="right">
      <node TEXT="" ID="34869970031f60b52800225fb75e0b41" STYLE="fork">
        <node TEXT="解析协议" ID="7ac91e06f5dd3caac8edc07f0e5898b5" STYLE="fork">
          <node TEXT="" ID="9a4cc51837be39f9ad7d466d5ced081b" STYLE="fork"/>
        </node>
        <node TEXT="检测消息合法性" ID="7b20cd326c70174b1d3a115898b95ca8" STYLE="fork">
          <node TEXT="" ID="3db490b1aafb2aa7b8fb8e95987c6247" STYLE="fork"/>
          <node TEXT="以下情况将终止" ID="8972f0375b7c0689319c2c970685210e" STYLE="fork">
            <node TEXT="是预测消息" ID="ede45ee60cfbba37bd2c823d1f1db4a8" STYLE="fork"/>
            <node TEXT="已经创建过战斗逻辑实例对象" ID="ee5e2fd4a288dbe0017c6214b4da32e2" STYLE="fork"/>
            <node TEXT="同步消息的文件数量和匹配消息的玩家数量不一致" ID="5032fb5330075a45955182bec4119d48" STYLE="fork"/>
          </node>
        </node>
        <node TEXT="创建玩家逻辑对象" ID="7d099c58c49280fcc3ae44332db279e0" STYLE="fork">
          <node TEXT="" ID="c6817bb043e0f268af197558be5ee9f4" STYLE="fork"/>
        </node>
        <node TEXT="创建战斗逻辑对象" ID="4eda9d5a0cfbc5e995e0c9809b0ba656" STYLE="fork">
          <node TEXT="" ID="741f4ad4825e76aa24e70abedc10e377" STYLE="fork"/>
        </node>
        <node TEXT="设置是否可以输入为false, 过1秒后回设置为true" ID="5f89e56101f59a9eaf2a543fda69af67" STYLE="fork">
          <node TEXT="" ID="5b19050d428fcba66a6520ba75b2f9a7" STYLE="fork"/>
        </node>
        <node TEXT="延迟1秒后执行，设置为可以输入，并且关闭加载界面" ID="a3d2e22867b7780c2649da6224140f58" STYLE="fork">
          <node TEXT="" ID="fac088ea9289e065a792e5ffae736c65" STYLE="fork"/>
        </node>
        <node TEXT="移除监听" ID="b70b2ce650a012edccfacc15c31be2ef" STYLE="fork">
          <node TEXT="" ID="a55be2ce4437e3f5cb3428d66e8e4233" STYLE="fork"/>
        </node>
        <node TEXT="设置摄像机跟随目标对象，为自己玩家视图对象" ID="fab3be40f2f5eee7b9a8c322b8371ff9" STYLE="fork">
          <node TEXT="" ID="fee8d24e692071e75e1378522dcf51fc" STYLE="fork">
            <node TEXT="" ID="d936b943fb434c725dc97812544eb97e" STYLE="fork"/>
          </node>
        </node>
      </node>
    </node>
    <node TEXT="Class" ID="f0ee8e93464b7980eefd0da17f65a42a" STYLE="bubble" POSITION="right">
      <node TEXT="WarLoader 资源预加载" ID="3572f54e800f7489729cdcbb74f42e7d" STYLE="fork"/>
      <node TEXT="WarView 视图" ID="ada203b54006d6daf858efd2f1cd80c6" STYLE="fork">
        <node TEXT="创建的地方" ID="ebce3f7d63f30285ff368cd45b802f1a" STYLE="fork">
          <node TEXT="War, War.view = new WarView();" ID="357a88662b18ef0e27aee07f2fe2e771" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="WarNet 网络" ID="dba83b149e7b86244a2532883c2cd641" STYLE="fork"/>
      <node TEXT="MatchProto 网络消息处理器" ID="83f0e8f30259b9b13ce37a727b4a8c8c" STYLE="fork"/>
      <node TEXT="EventMgr 事件" ID="e6f85833eb5363d2182eae3802059b72" STYLE="fork"/>
      <node TEXT="ViewBattle" ID="7d164630f1b4cb1b77ba0b46c8be6311" STYLE="fork">
        <node TEXT="创建的地方" ID="ae13bc76bdf4eaafb4646475e8d11107" STYLE="fork">
          <node TEXT="WarView, this._viewBattle = this.scene.addComponent(ViewBattle);" ID="7c9eed71ad6d4018312b7ff839e66af7" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="WarCamera" ID="f185f805ef1b0a9d31bb4a1bbe672ad6" STYLE="fork">
        <node TEXT="创建的地方" ID="8b3ffbae1fd8568479f7a1e4dd016e42" STYLE="fork">
          <node TEXT="WarView, this.scene.unitLayer3D.addComponent(WarCamera);" ID="764c7becabbd71fad4f79c9d274f0aab" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="GSceneDynamicLayer 背景层级卷轴" ID="379222e3a947af2271f236a347f7c418" STYLE="fork"/>
      <node TEXT="ViewPlayer 角色视图" ID="8ee5948724f2f29980315e48526c386f" STYLE="fork"/>
    </node>
    <node TEXT="编辑器配置" ID="0d56c5c453f2ea82069ad263911acd1f" STYLE="bubble" POSITION="right">
      <node TEXT="" ID="2605ccdb67af470f88df5c1155680100" STYLE="fork">
        <node TEXT="关卡配置" ID="fe1938e68292a7b9b40d920a138b6289" STYLE="fork">
          <node TEXT="关卡配置" ID="238ef288277cb46eaa01e3b290060bc9" STYLE="fork">
            <node TEXT="" ID="b61d018b94adda48d64ce863a8a67cf0" STYLE="fork">
              <node TEXT="关卡房间和小地图关系配置" ID="7455c8bf929758eb59413001c3949b90" STYLE="fork">
                <node TEXT="" ID="15a9185026ea680ff21756eff6ca3d1a" STYLE="fork">
                  <node TEXT="传送阵配置" ID="d60f8d055c9cb8844d069deb2e2929e0" STYLE="fork">
                    <node TEXT="" ID="9a5cc71f2e54d05088a6b135205bb3c5" STYLE="fork">
                      <node TEXT="Index、TransferIndex，传送点" ID="5d5c8ab21fecdc315ee93d49447f24d6" STYLE="fork">
                        <node TEXT="" ID="3c18e4efe6a75213edeb4278243ec5d0" STYLE="fork"/>
                      </node>
                    </node>
                  </node>
                  <node TEXT="房间类型" ID="7c487d1bb773f96a88f648026a9fba19" STYLE="fork">
                    <node TEXT="" ID="ab8d10f3530a14bec9d73493cc4b1c90" STYLE="fork"/>
                  </node>
                  <node TEXT="旋转类型" ID="2cb38560d8c712fd49e86b257c273c56" STYLE="fork">
                    <node TEXT="" ID="622410fe425f5cd2e34863cc870b531e" STYLE="fork"/>
                  </node>
                  <node TEXT="RoomOffset房间偏移，如果多个房间地图在一个场景中等 用来做参加偏移" ID="c26574bc4888cbffb327ef16f3c5f1a7" STYLE="fork">
                    <node TEXT="" ID="1a95856eae77eb8e7090d733bb549599" STYLE="fork"/>
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node TEXT="关卡房间详情配置" ID="22641bf1fee8cde4194fe1b21f96b1e0" STYLE="fork">
            <node TEXT="" ID="09b13454f4fca2f3bea5f7e9fc32be1b" STYLE="fork">
              <node TEXT="关卡模式" ID="9cb122a0b77fb4ac9cfc64b3ce7eb3c0" STYLE="fork">
                <node TEXT="" ID="3a840f1a0d78ef116fc62715bb55945a" STYLE="fork"/>
              </node>
              <node TEXT="结构体" ID="b70a6fa25153d6213f86727b1e5f132c" STYLE="fork">
                <node TEXT="摄像机区域" ID="319e959c07aa17531b9ef38ad93700e9" STYLE="fork">
                  <node TEXT="" ID="5e82f66c03cf7199c5ce7e486d2498dd" STYLE="fork"/>
                </node>
                <node TEXT="玩家初始位置" ID="65e60c4a9936a760899685be8d275be8" STYLE="fork">
                  <node TEXT="" ID="59f3d6a557e99f731449744c6f8272d5" STYLE="fork"/>
                </node>
                <node TEXT="怪物配置" ID="6e1da0c7046d8c6372d9f2a753ec5172" STYLE="fork">
                  <node TEXT="" ID="82a63a2fcaebb1321769c93465bdf9dd" STYLE="fork">
                    <node TEXT="队伍" ID="823275c0bd91c4487cadcc873599241b" STYLE="fork">
                      <node TEXT="" ID="97f0b6f459ef80ea950a73770829b02e" STYLE="fork"/>
                    </node>
                    <node TEXT="朝向" ID="ceb1dc117bc08a634d44725eab08bb9f" STYLE="fork">
                      <node TEXT="" ID="9f992e06e191b57995c79afaabdefb84" STYLE="fork"/>
                    </node>
                    <node TEXT="BossType, Boss类型" ID="5757fa20085237850632145d67e35385" STYLE="fork">
                      <node TEXT="" ID="3e7b9a9ec25169990012ce6feb4a8a37" STYLE="fork"/>
                    </node>
                    <node TEXT="EnemyType, 敌人类型" ID="919ba7dc819a79750a2205a4879581f6" STYLE="fork">
                      <node TEXT="" ID="4afbea2a739042347d76a093c769d5d1" STYLE="fork"/>
                    </node>
                    <node TEXT="BeAttackEnemyType, 只可被某一敌兵类型攻击产生伤害" ID="66adffffa2fec153009544fa2703b20f" STYLE="fork">
                      <node TEXT="" ID="0f4812a131f225fc11ab215a6c53397a" STYLE="fork"/>
                    </node>
                    <node TEXT="CreateType, 出现类型" ID="847e28346eb812bc7c72d9c1375118ac" STYLE="fork">
                      <node TEXT="" ID="aa7ab49b807fcfd178469fd9e2bfa90a" STYLE="fork"/>
                    </node>
                    <node TEXT="ShowType, 出场方式" ID="46d86bf49beea625e5cca06f2a899c2d" STYLE="fork">
                      <node TEXT="" ID="44a1835c8eaccc63e687d6ccea80f033" STYLE="fork">
                        <node TEXT="技能类型枚举" ID="f85203805da1b25bfa8497e4a92436f9" STYLE="fork">
                          <node TEXT="" ID="ca3379d532f82b9d5897500e97b0ea5c" STYLE="fork"/>
                        </node>
                      </node>
                    </node>
                    <node TEXT="BeHitActionType， 受击动作类型" ID="a4b08dca58820a7b191b512c379a1050" STYLE="fork">
                      <node TEXT="" ID="ecf6493b2fab8acec19c0774325e0fb7" STYLE="fork"/>
                    </node>
                  </node>
                </node>
                <node TEXT="触发器配置" ID="728b60f91db0673a17a11ab135374a23" STYLE="fork">
                  <node TEXT="" ID="5113d8ac596b51fce285f028e9033f7b" STYLE="fork">
                    <node TEXT="触发器基础数据" ID="8cfa09c5fecdbac7ae898762f51e2c5c" STYLE="fork">
                      <node TEXT="" ID="3fe1bb23fa53086668a2aab034fff212" STYLE="fork">
                        <node TEXT="触发器类型" ID="7d34ae83569ca29dc4d912a6e51f624c" STYLE="fork">
                          <node TEXT="" ID="f51d4e7ddda80743c90c0c4a86336644" STYLE="fork"/>
                        </node>
                        <node TEXT="触发器出现方式" ID="1ecb7a0228143eb95aff67ed5c503d09" STYLE="fork">
                          <node TEXT="" ID="bf44f9b303e153fc93fbc8cc8b53c85f" STYLE="fork"/>
                        </node>
                      </node>
                    </node>
                    <node TEXT="触发器类型" ID="33e062ced60fe5bb8408dfe3934b95b2" STYLE="fork">
                      <node TEXT="" ID="0db9680e39c305c031d3b328cb49e173" STYLE="fork"/>
                      <node TEXT="触发器类型结构体" ID="81d9c9f5c2505c2333444c0be89dfd86" STYLE="fork">
                        <node TEXT="触碰触发器" ID="d33e49d97d87df5b85839c18611ee5a2" STYLE="fork">
                          <node TEXT="" ID="9f4c87793ae36bc039fc4111da52c3ab" STYLE="fork">
                            <node TEXT="检测方式" ID="9d0a5088c703eb0ad33e0c05f51e557c" STYLE="fork">
                              <node TEXT="" ID="c0cc5ce0a09770aa411cf47b69e67831" STYLE="fork"/>
                            </node>
                            <node TEXT="模型类型" ID="d667a602c9a171c18a98b22bd3c84247" STYLE="fork">
                              <node TEXT="" ID="f79499018563960dd44e589cd179b85d" STYLE="fork"/>
                            </node>
                            <node TEXT="模型朝向" ID="5d32f8a1d48e9e56b8d8d622ea403614" STYLE="fork">
                              <node TEXT="" ID="2231f7c190d879b3b8db6971236f4330" STYLE="fork"/>
                            </node>
                          </node>
                        </node>
                        <node TEXT="时间触发器" ID="980e620460a2b3ede1002e5b6379cec9" STYLE="fork">
                          <node TEXT="" ID="af9b6d85136ee09836c3fb96fbc2f550" STYLE="fork"/>
                        </node>
                        <node TEXT="死亡触发器" ID="b3fd134e014cb8fb75561de566d7f4a2" STYLE="fork">
                          <node TEXT="" ID="45742daf58fcfa2faf29c68c19df02e4" STYLE="fork">
                            <node TEXT="DeadType死亡触发器触发条件" ID="e9bf44f67752df98e38fb32aa8ca3632" STYLE="fork">
                              <node TEXT="" ID="721b696dcf3ba9067cd6df19bbe61657" STYLE="fork"/>
                            </node>
                            <node TEXT="ListenRangeType死亡触发器监听范围" ID="afbe914263572f1b20e8dcd2b210efc2" STYLE="fork">
                              <node TEXT="" ID="3bc57d379246dad41bda14bfc52dbe08" STYLE="fork"/>
                            </node>
                          </node>
                        </node>
                        <node TEXT="血量触发器" ID="dbee28156050dabcbdaa969c1e6f7f35" STYLE="fork">
                          <node TEXT="" ID="74a2366fd8d2514057b83ba2160b8471" STYLE="fork"/>
                        </node>
                        <node TEXT="出生触发器" ID="18b29edd374005e76462410fe06b0368" STYLE="fork">
                          <node TEXT="" ID="74105ad821fb0d22d9321498964e1692" STYLE="fork">
                            <node TEXT="出生触发器出发条件" ID="06a42fb93c61e7500ecbbc5d91b47b12" STYLE="fork">
                              <node TEXT="" ID="43b77ea038fd521af32e055f87bbcf7f" STYLE="fork"/>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                    <node TEXT="触发器结果" ID="c52bc0b390f3f4d37fc09a2771a90ba1" STYLE="fork">
                      <node TEXT="" ID="0ab8376bb52ec3f119d73ac1e899529d" STYLE="fork">
                        <node TEXT="触发器结果类型" ID="640303ddc337fa5cd5e36e98555c6917" STYLE="fork">
                          <node TEXT="" ID="2b9bd4951c3b0ddc3db4c6b23ad10e13" STYLE="fork"/>
                        </node>
                        <node TEXT="触发器结果结构体" ID="165cf4f38d190221ce86b36a4977744d" STYLE="fork">
                          <node TEXT="暴兵" ID="f48f4b7df31621ff37c57bb93142ee25" STYLE="fork">
                            <node TEXT="" ID="79a7ff23650c7ee0f8652757b105d657" STYLE="fork"/>
                          </node>
                          <node TEXT="传送" ID="e1bd9fba8c38db527c15abeaa5628cc1" STYLE="fork">
                            <node TEXT="" ID="8d0530fb3fb23de30d7f0029fdeadbd7" STYLE="fork">
                              <node TEXT="传送阵类型" ID="b02d8d6751cc9153382fac0f82d093a1" STYLE="fork">
                                <node TEXT="" ID="4e93b14676d407be613ac7729bf0b115" STYLE="fork"/>
                              </node>
                            </node>
                          </node>
                          <node TEXT="动画特效" ID="dbc733809593bc6772578c7a8948add8" STYLE="fork">
                            <node TEXT="" ID="5bed0d613bcb703ee931912b1133b603" STYLE="fork">
                              <node TEXT="" ID="017e312571ac745c7c0ff1e20e7666f0" STYLE="fork"/>
                            </node>
                          </node>
                          <node TEXT="飞行特效" ID="6c59f3bee06b5529bc921100b6face4c" STYLE="fork">
                            <node TEXT="" ID="92405a8c293935fd4f37cf5d18dab4dc" STYLE="fork"/>
                          </node>
                          <node TEXT="地形破坏" ID="e4357ae22ab905c7f84a0629b4088515" STYLE="fork">
                            <node TEXT="" ID="a5df5d96138b4a65f130e563b6716641" STYLE="fork"/>
                          </node>
                          <node TEXT="物品掉落" ID="d35f19933cd1b4b17d6c77e917ee88f1" STYLE="fork">
                            <node TEXT="" ID="dde052a9055d2c3f46019526b73508b1" STYLE="fork"/>
                          </node>
                          <node TEXT="触发触发器" ID="72d9ecf901d247bf3e3d490017588226" STYLE="fork">
                            <node TEXT="" ID="38efd5cf1af3de69196ac6a1f850c79e" STYLE="fork"/>
                          </node>
                          <node TEXT="概率暴兵" ID="9a320c875ae39b2a16425b05e4bc0303" STYLE="fork">
                            <node TEXT="" ID="19fd7bff1d88cdb0e7c1f6cfa14790a3" STYLE="fork">
                              <node TEXT="" ID="42b1882516753a514057d62d63319840" STYLE="fork"/>
                            </node>
                          </node>
                          <node TEXT="触发概率触发器" ID="ca84ef2eda34e1fceb583cf2598eece6" STYLE="fork">
                            <node TEXT="" ID="ffb31a80482ef93214e768ab045ab3af" STYLE="fork">
                              <node TEXT="" ID="ff35c0640aae0b79f946f97e15227e5c" STYLE="fork"/>
                            </node>
                          </node>
                          <node TEXT="杀死敌兵" ID="62fb60f63f4026fa563e9af1b4ddc09f" STYLE="fork">
                            <node TEXT="" ID="b728dc4463206facda5b7ee2b5bf36c7" STYLE="fork"/>
                          </node>
                          <node TEXT="游戏结算" ID="904f01e5a24524125b13e8ee591013c1" STYLE="fork">
                            <node TEXT="" ID="1ffed958c37c18e0e2f6045942e244bf" STYLE="fork"/>
                          </node>
                          <node TEXT="删除阻挡" ID="b75dbaaff9a491892ab2588c5a2afa89" STYLE="fork">
                            <node TEXT="" ID="c4d63a9b79aaf5f86048ab7b674921fa" STYLE="fork"/>
                          </node>
                          <node TEXT="UI动画资源" ID="4d1da6f67fbd772825b3a089968e7f5e" STYLE="fork">
                            <node TEXT="" ID="32c9078ce95568b942c3e01692de6414" STYLE="fork">
                              <node TEXT="" ID="06cd2b4bb54a3d88d74e0e9b8c6c04ee" STYLE="fork">
                                <node TEXT="相对屏幕坐标类型" ID="d5c0f7943c0c2d0629614c4e2f4aa0d6" STYLE="fork">
                                  <node TEXT="" ID="bab2b0b1714f51b0cb32eaf592666f2b" STYLE="fork"/>
                                </node>
                              </node>
                            </node>
                          </node>
                          <node TEXT="左侧相机视野卡点" ID="c08c88c53e08f08eac46f38fe81369ab" STYLE="fork">
                            <node TEXT="" ID="74cebc42699d4083635da54d0a1e9d7a" STYLE="fork"/>
                          </node>
                          <node TEXT="触发buff" ID="e567f2c37b9a1ecb1abd76e5c203826a" STYLE="fork">
                            <node TEXT="" ID="3b9983c18ce952637aa9c9d9a99759de" STYLE="fork">
                              <node TEXT="触发buff作用类型" ID="46eedf87399f67e0a27204dfa56997b2" STYLE="fork">
                                <node TEXT="" ID="bfeb5a2c1fb32635a332a14bc4b72496" STYLE="fork"/>
                              </node>
                              <node TEXT="作用队伍" ID="7313fb8a003aaa22a2fa3e9a0dbff66f" STYLE="fork">
                                <node TEXT="" ID="76008b9a657b0d0c9ee559836d584fa6" STYLE="fork"/>
                              </node>
                            </node>
                          </node>
                          <node TEXT="开启或关闭AI节点" ID="8aea8172824ebac6f76aac269d343488" STYLE="fork">
                            <node TEXT="" ID="290c1b5cf587daf1a581e134bbbfb819" STYLE="fork">
                              <node TEXT="" ID="69297d727b3773b339bbd285909db43f" STYLE="fork">
                                <node TEXT="操作AI行为树状态" ID="3b79f920f7cfdb7f5fef27d9115399d3" STYLE="fork">
                                  <node TEXT="" ID="389d94de3124831f8d508f9ef4237296" STYLE="fork"/>
                                </node>
                              </node>
                            </node>
                          </node>
                          <node TEXT="触发剧情" ID="ae36c6e39bf9e23b8be81c0e12888d09" STYLE="fork">
                            <node TEXT="" ID="e2c93228776c337e4d8f4404b597a267" STYLE="fork"/>
                          </node>
                          <node TEXT="改变场景背景，如错层" ID="f106d85cc61561fa7c49822d0ab837c5" STYLE="fork">
                            <node TEXT="" ID="b22e169363355ba289c2eacac6c82a81" STYLE="fork">
                              <node TEXT="操作类型" ID="a4e3c663187547c7136edeeb4fa2fdfd" STYLE="fork">
                                <node TEXT="" ID="e38e4e1534844aeea5f333065879a9db" STYLE="fork"/>
                              </node>
                              <node TEXT="操作方向" ID="f07e0257465ff423b83fb55aa8f6be30" STYLE="fork">
                                <node TEXT="" ID="3968efb69886ec47174add101cec456e" STYLE="fork"/>
                              </node>
                            </node>
                          </node>
                          <node TEXT="音效" ID="b37614b72deed6846ffec53c57b675d4" STYLE="fork">
                            <node TEXT="" ID="d380e4d1fb36eb95a472c5024977da11" STYLE="fork"/>
                          </node>
                          <node TEXT="重来一局战斗" ID="ec503f8729c4253ebfe47efe19c837fe" STYLE="fork">
                            <node TEXT="" ID="93fab5b4efc8e52554496c4579a4ec00" STYLE="fork"/>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node TEXT="地形阻挡" ID="9a692b845fcbfa32932640def794622a" STYLE="fork">
                  <node TEXT="" ID="730029e2c84b705479a1479366ec813a" STYLE="fork"/>
                </node>
                <node TEXT="物件配置" ID="50cb1e3f43081ef0be3cfb07b0f33e7b" STYLE="fork">
                  <node TEXT="" ID="833d8316b9b901842ece3b9f90659df6" STYLE="fork"/>
                </node>
                <node TEXT="传送点配置" ID="6cbbe7dfdfc1dabb21442a153ed5b4b5" STYLE="fork">
                  <node TEXT="" ID="f3c19305c9fa1d26d5f7570940c00c73" STYLE="fork"/>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node TEXT="协议消息" ID="a9c7270229ed4bf2e82fbff8b6032e07" STYLE="bubble" POSITION="right">
      <node TEXT="发送匹配" ID="4c6bb0be2991737d5c523c56957d73fd" STYLE="fork">
        <node TEXT="" ID="88bec8e6fd18ebc6e7f01d12641e08e7" STYLE="fork">
          <node TEXT="" ID="f9f430ebf2302003c3249bc73631f906" STYLE="fork"/>
        </node>
        <node TEXT="" ID="bee41a0c90e900124f54875fc642683e" STYLE="fork"/>
      </node>
      <node TEXT="取消匹配" ID="11ba4ed97bb35d75bde82abb19fd2c5d" STYLE="fork">
        <node TEXT="" ID="a67b210677a0937c5ce5c19b6ed551c1" STYLE="fork"/>
        <node TEXT="" ID="ad1c0a85eb3d42c7e9d0eef2bdad98b1" STYLE="fork"/>
      </node>
      <node TEXT="匹配成功信息" ID="e17f0804a8ee3be24017ae3931796e4e" STYLE="fork">
        <node TEXT="" ID="c3a94d643ea9899d92b6e65ca6464755" STYLE="fork">
          <node TEXT="" ID="b43ad95fd67896ebd739e03609e56816" STYLE="fork">
            <node TEXT="" ID="026d446c1be6d5f7a6889596dd12a30b" STYLE="fork">
              <node TEXT="" ID="8b310be870b462d6cff68c02aa95c7a9" STYLE="fork"/>
            </node>
          </node>
        </node>
      </node>
      <node TEXT="加载进度条" ID="299ee0ce213ba990b63531384f7e03ca" STYLE="fork">
        <node TEXT="" ID="49fe3bcb28e44bd8a063b4a266245e29" STYLE="fork"/>
        <node TEXT="" ID="590e494495ff5f6c35278de2db18cea7" STYLE="fork"/>
        <node TEXT="" ID="06c52e41bf964005bee709dba09df15f" STYLE="fork">
          <node TEXT="" ID="b40486a633918b1d4ab8b1b3ccff14fc" STYLE="fork"/>
        </node>
      </node>
      <node TEXT="同步消息" ID="6a4fa4241f473fdddcca3001a2bb20f8" STYLE="fork">
        <node TEXT="发送操作消息" ID="7b5e7e8e9905ff5e8487cdc8952f946d" STYLE="fork">
          <node TEXT="" ID="47ad8e25b2c1cbc423fc64cebde7fbb4" STYLE="fork"/>
          <node TEXT="" ID="02eac9236a94569c9d494537021f0256" STYLE="fork">
            <node TEXT="" ID="836967f721cd74d49bad04b2ad296f39" STYLE="fork"/>
            <node TEXT="" ID="6ff418361c7c1e2cd7980efb3c6debb5" STYLE="fork">
              <node TEXT="" ID="672b418b0b83de4fc4e691f972262b80" STYLE="fork"/>
              <node TEXT="" ID="3231221e67832b3ab46b8015aef000aa" STYLE="fork"/>
            </node>
            <node TEXT="" ID="46ed8905e9dd254e31c55e01517f44c3" STYLE="fork">
              <node TEXT="" ID="3d7f80109dd072db362a94176f57185f" STYLE="fork"/>
              <node TEXT="" ID="322b757ab72c69a328724097252a8824" STYLE="fork"/>
              <node TEXT="" ID="dbd82c529df4bcf529547da27d33c439" STYLE="fork"/>
            </node>
            <node TEXT="" ID="fc61bbe314429ecd7b17d1a43cd989ca" STYLE="fork">
              <node TEXT="" ID="f46f45dbf041e14ca4a9bd5d8bf598bf" STYLE="fork"/>
            </node>
          </node>
          <node TEXT="" ID="b7fdb2362b12242e869126b71a4c44c6" STYLE="fork"/>
        </node>
        <node TEXT="S2C 状态同步消息" ID="36157f30ca9b6f2f6f2aa4bc0d72008a" STYLE="fork">
          <node TEXT="" ID="dfd83f71a1a3508d95932604b22e5797" STYLE="fork">
            <node TEXT="" ID="7f8cbf25ae1461e1172630017a226be5" STYLE="fork">
              <node TEXT="" ID="62c9099b1baacb25506a2493914cab49" STYLE="fork">
                <node TEXT="" ID="1de6ec661f48257ab2cb18f622a0ac8c" STYLE="fork"/>
              </node>
              <node TEXT="" ID="dc8f394bd7504d71b73dd8eb7595d1cc" STYLE="fork">
                <node TEXT="" ID="cdf2f847d9cf6c8a026e827ea34f6874" STYLE="fork"/>
                <node TEXT="" ID="981d3a1b5b44a5fffc6510b66847da09" STYLE="fork"/>
                <node TEXT="" ID="9f921e12fd1aa931b815bbe71acd4a52" STYLE="fork"/>
                <node TEXT="" ID="3e00c296cb2526fcf52bc71988865045" STYLE="fork"/>
                <node TEXT="" ID="fb5b660ef236fa7f7573121db843dc20" STYLE="fork"/>
                <node TEXT="" ID="501f963e37a08989a0b4336a39695212" STYLE="fork"/>
                <node TEXT="" ID="adfa23dad4a69f76221752ebda7cb99d" STYLE="fork"/>
                <node TEXT="" ID="58a4ca2b29dfdf627377ce4bc1ef3416" STYLE="fork"/>
                <node TEXT="" ID="f81998ad2421db1377bc0e3f0cdb064c" STYLE="fork"/>
                <node TEXT="" ID="aa096daeb2b22079e510547f018fc74e" STYLE="fork">
                  <node TEXT="" ID="8455b0c6051fcc3ebc1b7881afa76b76" STYLE="fork"/>
                </node>
                <node TEXT="" ID="93f0c56840f360da55645221fe792a3a" STYLE="fork">
                  <node TEXT="" ID="90e251223675a91f9dcdcc101680eaa6" STYLE="fork"/>
                </node>
                <node TEXT="" ID="191040309be6cfcda981c635878197f4" STYLE="fork">
                  <node TEXT="" ID="39ddaa62796e2230cd7efdc606a2800f" STYLE="fork"/>
                </node>
                <node TEXT="" ID="3ddb811d7132b6b71737594ceae0f67f" STYLE="fork"/>
              </node>
            </node>
          </node>
        </node>
        <node TEXT="S2C 结算" ID="d95ecc98bc92faa70cd8e2ef54b582d0" STYLE="fork">
          <node TEXT="" ID="0f48d7ec8162788c61065c29200fe863" STYLE="fork">
            <node TEXT="" ID="1f94dfac0edd8cdb98a628bd0b044548" STYLE="fork"/>
            <node TEXT="" ID="9ad33b7e567ba516491c430348ea65f5" STYLE="fork">
              <node TEXT="" ID="2e8eb300a4d01886c745df20f5f867ab" STYLE="fork"/>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
</map>