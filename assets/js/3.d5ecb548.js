(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{379:function(t,v,_){t.exports=_.p+"assets/img/ch04-img01-nano-ui.84582277.png"},380:function(t,v,_){t.exports=_.p+"assets/img/ch04-img02-sshd-conf-full.acfc6120.gif"},381:function(t,v,_){t.exports=_.p+"assets/img/ch04-img03-adduser.02408332.png"},382:function(t,v,_){t.exports=_.p+"assets/img/ch04-img04-adduser-full.70bb80c2.gif"},383:function(t,v,_){t.exports=_.p+"assets/img/ch04-img05-sudo-full.df520452.gif"},384:function(t,v,_){t.exports=_.p+"assets/img/ch04-img06-ssh-no-root-full.0c61dc36.gif"},385:function(t,v,_){t.exports=_.p+"assets/img/ch04-img07-putty-default-user.38216885.png"},386:function(t,v,_){t.exports=_.p+"assets/img/ch04-img08-puttygen-save.fc355969.png"},387:function(t,v,_){t.exports=_.p+"assets/img/ch04-img09-puttygen-save-keys.f86a933d.png"},388:function(t,v,_){t.exports=_.p+"assets/img/ch04-img10-winscp-import-session.c062aa44.png"},389:function(t,v,_){t.exports=_.p+"assets/img/ch04-img11-winscp-ui.415a396a.png"},390:function(t,v,_){t.exports=_.p+"assets/img/ch04-img12-winscp-locations.aeed560c.png"},391:function(t,v,_){t.exports=_.p+"assets/img/ch04-img13-winscp-newfolder-key.b598e63f.png"},392:function(t,v,_){t.exports=_.p+"assets/img/ch04-img14-winscp-upload-key.a2297390.png"},393:function(t,v,_){t.exports=_.p+"assets/img/ch04-img15-winscp-rename-key.25c6856c.png"},394:function(t,v,_){t.exports=_.p+"assets/img/ch04-img16-winscp-full.12d7fd17.gif"},395:function(t,v,_){t.exports=_.p+"assets/img/ch04-img17-rsa-login-full.876d4685.gif"},396:function(t,v,_){t.exports=_.p+"assets/img/ch04-img18-putty-privatekey-location.8990b265.png"},397:function(t,v,_){t.exports=_.p+"assets/img/ch04-img19-putty-privatekey-passphrase.becd3580.png"},398:function(t,v,_){t.exports=_.p+"assets/img/ch04-img20-winscp-privatekey-location.6764d05d.png"},491:function(t,v,_){"use strict";_.r(v);var e=_(20),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"【第-4-章】安全防护篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【第-4-章】安全防护篇"}},[t._v("#")]),t._v(" 【第 4 章】安全防护篇")]),t._v(" "),e("h2",{attrs:{id:"_4-1-为什么要做安全防护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-为什么要做安全防护"}},[t._v("#")]),t._v(" 4.1 为什么要做安全防护")]),t._v(" "),e("p",[t._v("Linux 服务器的安全防护是一个纷繁复杂的巨大课题。无数的网站、APP、服务、甚至线下基础设施都建立在 Linux 的基石之上，这背后牵涉到巨大的经济利益和商业价值，当然也就就意味着黑灰产有巨大的攻击动力。但是这些服务是如此重要、根本不允许出现重大的安全漏洞。于是无数的运维专业人员都在安全攻防的战场上拼搏努力，这才让大家能享受到基本稳定的现代化数字生活。")]),t._v(" "),e("p",[t._v("现在，你拥有了一台 VPS，并且将会敞开他的数据访问渠道来达到流量转发的目标，那就相当于你已经置身于安全攻防战场的第一线、直面所有风险。但与此同时，新人由于知识和信息的不足，看待安全问题是总是难免两极分化：要么觉得轻如鸿毛和自己没有半点关系，要么觉得重于泰山甚至惶惶不可终日。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("对于前者，我的建议是：安全无小事，尽量多查一些安全方面的信息，免得自己真的受了损失才后悔莫及")])]),t._v(" "),e("li",[e("p",[t._v("对于后者，我的建议是：不用紧张，我们的服务器仍不具有太高的价值、一般不会吸引到高水平的攻击，需要面对的基本都是一些自动化脚本的恶意扫描和登录尝试，跟着本文做一些基础的防护即可")])])]),t._v(" "),e("h2",{attrs:{id:"_4-2-具体的风险到底是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-具体的风险到底是什么"}},[t._v("#")]),t._v(" 4.2 具体的风险到底是什么")]),t._v(" "),e("p",[t._v("就像我们在《远程登录篇》配置的一样，任何人只需要知道【IP 地址】+【端口】+【用户名】+【密码】这四个要素，就能登录你的 VPS 服务器。那很显然，这四要素的安全就是我们要防护的底线。我们来逐一分析：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("【IP 地址】：恶意脚本会随机尝试和扫描 IP 段，可以简单认为是公开信息、无法隐藏")])]),t._v(" "),e("li",[e("p",[t._v("【端口】：如果使用默认端口，那么【端口 = "),e("code",[t._v("22")]),t._v("】")])]),t._v(" "),e("li",[e("p",[t._v("【用户名】：如果使用默认用户，那么【用户名 = "),e("code",[t._v("root")]),t._v("】")])]),t._v(" "),e("li",[e("p",[t._v("【密码】：密码不存在默认值，一定是由 VPS 后台随机生成或由你自行设置的。也就是说，如果你的服务器都是默认设置，则四要素中的三个已经是已知的，那么你整个服务器的安全，就全部寄托在一串小小的密码上了。这时有几种情况：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("如果你用了 VPS 管理后台随机生成密码，它一般包含随机的十几个大小写混杂的字母和符号，相对比较安全")])]),t._v(" "),e("li",[e("p",[t._v("如果你为了好记、把密码改成了类似"),e("code",[t._v("123456")]),t._v("这种超弱的密码，破解你的 VPS 服务器可谓不费吹灰之力")])]),t._v(" "),e("li",[e("p",[t._v("如果你为了好记、把密码改成了比较复杂、但在别的地方用过的密码，其实也并不安全。你要明白黑客手里有作弊器，比如说"),e("code",[t._v("密码表")]),t._v("，包含数万、数十万、数百万甚至更多曾经泄漏的真实密码）")])])])]),t._v(" "),e("li",[e("p",[t._v("但你要明白，没有哪个黑客真的要坐在电脑前一次一次的尝试你的密码，全部的攻击尝试都是恶意脚本自动进行的，它会 24 小时不眠不休的工作。也许每天你酣睡之时，你的服务器都在经受着一轮又一轮的冲击。")]),t._v(" "),e("p",[t._v("一旦密码被成功撞破，意味着你的四要素全部被攻击者掌握，恶意脚本就会快速登录服务器、获取服务器的最高 "),e("code",[t._v("root")]),t._v(" 控制权、安装部署它的恶意服务，然后就可以用你的服务器来 24 小时做各种坏事（比如挖矿、传播病毒、发送垃圾邮件、欺诈邮件、做 BT 中继、甚至暗网公众节点等等等等）。如果恶意脚本比较克制，其实可以做到相当的隐蔽性。而新人一般也不会去观察留意 VPS 的登录记录、进程变化、CPU 占用变化、流量变化等指标，你其实就很难发现自己被黑了。直到你的 VPS 服务商封禁你的账号、或者收到律师函为止。")])]),t._v(" "),e("li",[e("p",[t._v("别忘了，你获得 VPS 时大概率需要使用真实的支付信息，你登录各种网站、社交平台时也会留下你的 IP 地址，这些都与你的身份有直接或者间接的关系。于是，"),e("strong",[t._v("一旦这些坏事发生，它们就不可避免的与你产生了关联。")])])])]),t._v(" "),e("h2",{attrs:{id:"_4-3-我们要做的安全防护有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-我们要做的安全防护有哪些"}},[t._v("#")]),t._v(" 4.3 我们要做的安全防护有哪些")]),t._v(" "),e("p",[t._v("基于上述分析，我们要做的，自然就是对【端口】、【用户名】、【密码】这三要素进行加强，来降低被攻破的风险：")]),t._v(" "),e("ol",[e("li",[t._v("【端口】：将 SSH 远程登录端口修改为【非 22 端口】 （4.4）")]),t._v(" "),e("li",[t._v("【用户名】：建立【非 root】的新用户、并禁用 root 用户 SSH 远程登录 （4.5、4.6）")]),t._v(" "),e("li",[t._v("【密码】：SSH 启用 RSA 密钥验证登录、同时禁用密码验证登录 （4.7）")])]),t._v(" "),e("p",[t._v("记得按顺序来，别把自己锁在门外了。")]),t._v(" "),e("h2",{attrs:{id:"_4-4-将-ssh-远程登录端口修改为非-22-端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-将-ssh-远程登录端口修改为非-22-端口"}},[t._v("#")]),t._v(" 4.4 将 SSH 远程登录端口修改为非 22 端口")]),t._v(" "),e("p",[t._v("现在，我们来解决【端口 = "),e("code",[t._v("22")]),t._v("】的问题。（注意：有些 VPS 服务商，默认的端口已经是非 22 端口，那么你可以忽略这一步，当然也可以跟着本文改成别的端口）")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("小小白白 Linux 基础命令：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("编号")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("命令名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("命令说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cmd-03")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("nano")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("文本编辑器")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cmd-04")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("systemctl restart")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("重启某个服务")])])])])]),t._v(" "),e("li",[e("p",[t._v("小小白白 Linux 基础配置文件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("编号")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("配置文件位置")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("文件说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("conf-01")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("/etc/ssh/sshd_config")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SSH 远程登录程序设置")])])])])]),t._v(" "),e("li",[e("p",[t._v("我们要做的第一件事，当然就是【用"),e("code",[t._v("nano")]),t._v("这个文本编辑器打开"),e("code",[t._v("SSH远程登录程序设置")]),t._v("】，在 Windows 下，你会【找到文件并双击】，在 Linux 下该怎么办呢？仔细看看上面的命令说明，是不是就很简单了？没错，就是：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# nano /etc/ssh/sshd_config\n")])])])]),t._v(" "),e("li",[e("p",[t._v("文件打开后，你就进入了"),e("code",[t._v("nano")]),t._v("的界面，稍微观察一下，你会发现，它把重要的快捷键都显示在屏幕下方了（下图红框内），直接开卷考试、不用死记硬背，是不是很贴心呢？")]),t._v(" "),e("p",[e("img",{attrs:{src:_(379),alt:"nano的界面"}})])])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[e("p",[t._v("我们要做的第二件事，是【在打开的文件中找到"),e("code",[t._v("Port")]),t._v("这一项，并修改它的端口】。Port 后面的数字就是 SSH 的端口，一般建议把它改成一个大于"),e("code",[t._v("1024")]),t._v("小于"),e("code",[t._v("65535")]),t._v("的整数（本文以"),e("code",[t._v("9753")]),t._v("为例）。请结合"),e("code",[t._v("nano")]),t._v("的快捷键，想一下该怎么操作呢？果然，你又说对了！就是：")]),t._v(" "),e("ul",[e("li",[t._v("使用 "),e("code",[t._v("ctrl+w")]),t._v(" 进入搜索模式，然后输入 "),e("code",[t._v("Port 22")]),t._v(" 并回车")]),t._v(" "),e("li",[t._v("删除 "),e("code",[t._v("22")]),t._v(" 并改成 "),e("code",[t._v("9753")])]),t._v(" "),e("li",[t._v("说明：如果这一行开头有个"),e("code",[t._v("#")]),t._v("，证明这一行【不生效】（被注释掉了），你可像我一样在文件最后写一个不带"),e("code",[t._v("#")]),t._v("的，或者把"),e("code",[t._v("#")]),t._v("删掉就好。")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("本文以"),e("code",[t._v("9753")]),t._v("为例，就意味着随着本文的发布，这个端口会变成一个不大不小的特征，也许会被攻击者优先尝试、也许被GFW干扰、阻断。所以我强烈建议你用一个自己想到的其他端口，毕竟，你有6万多个端口可以自由选择。")])])])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[e("p",[t._v("我们要做的第三件事，是【保存文件并退出】")]),t._v(" "),e("ul",[e("li",[t._v("如果第 3 步你有仔细观察，就会发现保存并不是常见的 "),e("code",[t._v("ctrl+s")]),t._v("。")]),t._v(" "),e("li",[t._v("正确的快捷键：保存是 "),e("code",[t._v("ctrl+o")]),t._v(" + "),e("code",[t._v("回车")]),t._v("，退出是 "),e("code",[t._v("ctrl+x")])])])]),t._v(" "),e("li",[e("p",[t._v("我们最后要做的事，是【重启 ssh 服务，使变更生效】")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# systemctl restart ssh\n")])])])]),t._v(" "),e("li",[e("p",[t._v("完整流程演示如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(380),alt:"修改非22端口演示"}})])]),t._v(" "),e("li",[e("p",[t._v("修改 PuTTY 配置")]),t._v(" "),e("p",[t._v("现在新的端口已经生效，下次使用 PuTTY 登录时就要用"),e("code",[t._v("9753")]),t._v("了。所以现在请到 PuTTY 的设置中修改端口号码，然后保存 Session。嗯，你应该知道去哪里改了吧？（如果不知道的话，要重读前面的内容了哦！）")])])]),t._v(" "),e("h2",{attrs:{id:"_4-5-建立非-root-的新用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-建立非-root-的新用户"}},[t._v("#")]),t._v(" 4.5 建立非 root 的新用户")]),t._v(" "),e("p",[t._v("第二步，我们来解决【用户名 = "),e("code",[t._v("root")]),t._v("】的问题。")]),t._v(" "),e("p",[t._v("首先你要理解， Linux 系统中的"),e("code",[t._v("root")]),t._v("，不仅仅是一个管理员账号那么简单。它是整个系统的【根基】、是系统的主宰、至高无上的神。一旦"),e("code",[t._v("root")]),t._v("账号出现安全问题，整个系统都只能任人鱼肉、无处可逃。那么就跟随我进行操作吧：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("小小白白 Linux 基础命令：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("编号")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("命令名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("命令说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cmd-05")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("adduser")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("给系统新增用户")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cmd-06")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("apt install")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("安装某个软件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cmd-07")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("visudo")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("修改 sudo 权限设置专用编辑器")])])])])]),t._v(" "),e("li",[e("p",[t._v("我们要做的第一件事，是【新增一个用户并设定登录密码】，名字你可以随便起，我这里以"),e("code",[t._v("vpsadmin")]),t._v("为例：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# adduser vpsadmin\n")])])]),e("p",[t._v("执行命令后，根据提示操作即可。请务必设置一个用户密码（别忘记设置密码时你时看不到 "),e("code",[t._v("******")]),t._v(" 的）。之后系统会询问你一些用户的附加信息，这些就可以无视，一路回车即可。")]),t._v(" "),e("p",[e("img",{attrs:{src:_(381),alt:"建立新用户"}})])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("本文以"),e("code",[t._v("vpsadmin")]),t._v("为例，就意味着随着本文的发布，这个用户名也会变成一个不大不小的特征，也许会被攻击者优先尝试。所以和端口一样，我强烈建议你用一个自己想到的其他用户名。")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[t._v("完整流程演示如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(382),alt:"建立新用户"}})])]),t._v(" "),e("li",[e("p",[t._v("我们要做的第二件事，是【安装"),e("code",[t._v("sudo")]),t._v("功能】（"),e("code",[t._v("sudo")]),t._v(" 就是在关键时刻，让普通账户临时获得 "),e("code",[t._v("root")]),t._v(" 的神力，战力全开拯救世界）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# apt update && apt install sudo\n")])])]),e("p",[t._v("聪明的你大概已经发现，这一行命令其实是两个命令。前一半 "),e("code",[t._v("apt update")]),t._v(" 你之前已经见过并且用过了，是去服务器刷新软件版本信息。后面的 "),e("code",[t._v("apt install")]),t._v(" 就是这一次要用到的【安装命令】。两条连接在一起，就是让系统去【刷新可用的最新软件，然后安装最新版的"),e("code",[t._v("sudo")]),t._v("程序】。 "),e("code",[t._v("&&")]),t._v(" 则是把两个命令连起来执行的意思。")])]),t._v(" "),e("li",[e("p",[t._v("我们要做的第三件事，是【把"),e("code",[t._v("vpsadmin")]),t._v("用户加入"),e("code",[t._v("sudo")]),t._v("名单里，让他有资格借用"),e("code",[t._v("root")]),t._v("的神力】")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# visudo\n")])])]),e("p",[t._v("在 "),e("code",[t._v("User Privilege Specification")]),t._v(" 下加入一行 "),e("code",[t._v("vpsadmin ALL=(ALL) NOPASSWD: ALL")]),t._v(" 即可。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("我要特别说明的是"),e("code",[t._v("NOPASSWD")]),t._v("这个设置，它的意思是"),e("code",[t._v("vpsadmin")]),t._v("用户临时使用"),e("code",[t._v("root")]),t._v("权限时，不用额外输入密码。"),e("strong",[t._v("这与一般的安全建议相反")]),t._v("。我之所以如此推荐，是因为很多新人不顾危险坚持使用"),e("code",[t._v("root")]),t._v("账号就是因为用"),e("code",[t._v("root")]),t._v("时不用重复输入密码、觉得轻松。“两害相权取其轻”，我认为【直接用"),e("code",[t._v("root")]),t._v("用户的风险】大于【使用"),e("code",[t._v("sudo")]),t._v("时不用输密码的风险】，所以做了以上的建议。")]),t._v(" "),e("p",[t._v("如果你希望遵守传统习惯、每次使用"),e("code",[t._v("sudo")]),t._v("时需要输入密码，那么这一行改成 "),e("code",[t._v("vpsadmin ALL=(ALL:ALL) ALL")]),t._v(" 即可。")])])]),t._v(" "),e("li",[e("p",[t._v("完整流程演示如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(383),alt:"建立新用户"}})])])]),t._v(" "),e("h2",{attrs:{id:"_4-6-禁用-root-用户-ssh-远程登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-禁用-root-用户-ssh-远程登录"}},[t._v("#")]),t._v(" 4.6 禁用 root 用户 SSH 远程登录")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("现在你已经逐渐熟悉 Linux 了，所以这次换你思考，我们要做的第一件事是什么呢？没错，还是【用"),e("code",[t._v("nano")]),t._v("编辑器打开"),e("code",[t._v("SSH远程登录程序设置")]),t._v("】，什么，你想不起来怎么操作了？那去复习一下上面的内容再回来吧！............ 正确答案：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# nano /etc/ssh/sshd_config\n")])])])]),t._v(" "),e("li",[e("p",[t._v("找到"),e("code",[t._v("PermitRootLogin Yes")]),t._v("这一项，然后把它后面的设定值改为"),e("code",[t._v("no")]),t._v("即可。还记得怎么操作吗？............ 正确答案：")]),t._v(" "),e("ul",[e("li",[t._v("使用 "),e("code",[t._v("ctrl+w")]),t._v(" 进入搜索模式，然后输入 "),e("code",[t._v("PermitRootLogin")]),t._v(" 并回车")]),t._v(" "),e("li",[t._v("删除 "),e("code",[t._v("yes")]),t._v(" 并改成 "),e("code",[t._v("no")])])])]),t._v(" "),e("li",[e("p",[t._v("保存文件并退出。还记得怎么操作吗？............ 正确答案：")]),t._v(" "),e("ul",[e("li",[t._v("保存是 "),e("code",[t._v("ctrl+o")]),t._v("，然后 "),e("code",[t._v("回车")]),t._v(" 确认")]),t._v(" "),e("li",[t._v("退出是 "),e("code",[t._v("ctrl+x")])])])]),t._v(" "),e("li",[e("p",[t._v("重启 ssh 服务，让变更生效。还记得............ 算了直接公布正确答案：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# systemctl restart ssh\n")])])])]),t._v(" "),e("li",[e("p",[t._v("完整流程演示如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(384),alt:"禁用root用户SSH远程登录"}})])]),t._v(" "),e("li",[e("p",[t._v("下次通过 PuTTY 远程 SSH 登录的时候，"),e("code",[t._v("root")]),t._v("用户已无法连接，用户名就要换成"),e("code",[t._v("vpsadmin")]),t._v("了！方便起见，我们可以在 PuTTY 中把"),e("code",[t._v("vpsadmin")]),t._v("设置成默认登录用户名。（啰嗦君：别忘了保存 Session）")]),t._v(" "),e("p",[e("img",{attrs:{src:_(385),alt:"PuTTY设置默认用户名"}})])])]),t._v(" "),e("h2",{attrs:{id:"_4-7-使用-rsa-密钥登录并禁用密码登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-使用-rsa-密钥登录并禁用密码登录"}},[t._v("#")]),t._v(" 4.7 使用 RSA 密钥登录并禁用密码登录")]),t._v(" "),e("p",[t._v("第三步，我们来解决【密码】可能被撞破的问题。")]),t._v(" "),e("p",[t._v("前面我说过，黑客并不是很蠢的用穷举法破解你的密码，而是会用一些比如“密码表”的作弊手段。除非你用的是随机生成的超长密码（比如借助 1Password，或者 macOS 的 keychain 等密码管理工具），否则很容易中招。")]),t._v(" "),e("p",[t._v("超长随机密码虽然安全性有所提高，但是基本上无法记忆，手动输入也十分麻烦易错。为了解决这个困境，我们可以直接弃用【密码验证】方式，改用更安全的【密钥验证】。")]),t._v(" "),e("p",[t._v("所谓的【密钥验证】，就是生成【一对】相关联的密钥文件（公钥和私钥），然后把【公钥】上传到 VPS 备用。每次登录时，SSH 会将【公钥】和【私钥】进行匹配，若验证是正确的【密钥对】，则验证通过。（换言之，你无需记忆和输入复杂的密码，只要保护好【私钥】这个文件不外泄即可）")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("本文以 "),e("code",[t._v("RSA")]),t._v(" 密钥举例，是因为 "),e("code",[t._v("RSA")]),t._v(" 密钥在各种设备、各种 "),e("code",[t._v("SSH")]),t._v(" 客户端中有广泛悠久的支持历史，且目前依然能提供够用的安全性。但它绝非唯一选择。")]),t._v(" "),e("p",[t._v("其他的常见密钥还有：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("DSA")]),t._v(" - 已经从数学层面被证明不安全，所以永远不要用它")]),t._v(" "),e("li",[e("code",[t._v("ECDSA")]),t._v(" - 密钥小安全性高，但其算法被指留有 NSA 的后门，如果你的 VPS 上有值得 NSA 关注的东西就不要用它")]),t._v(" "),e("li",[e("code",[t._v("Ed25519")]),t._v(" - 这是一个与 "),e("code",[t._v("ECDSA")]),t._v(" 十分类似的算法，故具有相似的性能优势。同时其文档全部公开，所以普遍认为无后门")])]),t._v(" "),e("p",[t._v("所以，如果你的设备和软件都支持的话，我建议优先选择 "),e("code",[t._v("Ed25519")]),t._v(" 密钥。")])]),t._v(" "),e("p",[t._v("那我们现在就来配置【密钥验证】吧！")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("运行"),e("code",[t._v("PuTTYgen")]),t._v(" (PuTTY 密钥生成器)。位置是 "),e("code",[t._v("开始菜单")]),t._v(" --\x3e "),e("code",[t._v("所有程序")]),t._v(" --\x3e "),e("code",[t._v("PuTTY (64-bit)")]),t._v(" --\x3e "),e("code",[t._v("PuTTYgen")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("点击"),e("code",[t._v("Generate")]),t._v("开始生成（在界面空白处乱晃鼠标增加随机数）")]),t._v(" "),e("p",[e("img",{attrs:{src:_(386),alt:"生成密钥"}})])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("本图中是以 "),e("code",[t._v("2048")]),t._v(" 位的 "),e("code",[t._v("RSA")]),t._v(" 密钥为例的。但实际上，如果要获得与 "),e("code",[t._v("EDCSA/Ed25519")]),t._v(" 的 "),e("code",[t._v("256")]),t._v(" 位密钥相同的安全性，你需要使用 "),e("code",[t._v("3072")]),t._v(" 位的 "),e("code",[t._v("RSA")]),t._v(" 密钥。（即右下角的数字改成 "),e("code",[t._v("3072")]),t._v("）")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("你可以给私钥设置密码，增加一层安全性")])]),t._v(" "),e("li",[e("p",[t._v("点击 "),e("code",[t._v("Save public key")]),t._v(" 保存公钥，文件名为 "),e("code",[t._v("id_rsa.pub")])])]),t._v(" "),e("li",[e("p",[t._v("点击 "),e("code",[t._v("Save private key")]),t._v(" 保存私钥，文件名为 "),e("code",[t._v("id_rsa")]),t._v(" (PuTTY 私钥自带"),e("code",[t._v(".ppk")]),t._v("后缀)")])]),t._v(" "),e("li",[e("p",[t._v("最重要的，将上方红框内的内容，向下滚动全部复制出来并保存，文件名为 "),e("code",[t._v("authorized_keys")]),t._v("。（用 vscode 保存，默认会变成带"),e("code",[t._v("txt")]),t._v("后缀的文本文件，这没关系，之后上传 VPS 时我们会把后缀名去掉）")]),t._v(" "),e("p",[e("img",{attrs:{src:_(387),alt:"保存密钥"}})])])])]),t._v(" "),e("li",[e("p",[t._v("将公钥上传至 VPS 的"),e("code",[t._v("vpsadmin")]),t._v("用户下")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("这一步就需要用到之前准备的"),e("code",[t._v("WinSCP")]),t._v("了。")])]),t._v(" "),e("li",[e("p",[t._v("去"),e("a",{attrs:{href:"https://winscp.net/eng/index.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1),t._v("下载并安装，会提示你导入 PuTTY 的设置，当然一键导入啦！")]),t._v(" "),e("p",[e("img",{attrs:{src:_(388),alt:"一键导入Session"}})])]),t._v(" "),e("li",[e("p",[t._v("如果没有提示导入或者你已经提前安装好了，那按照下图进行配置即可")]),t._v(" "),e("p",[e("img",{attrs:{src:_(389),alt:"WinSCP登录设置"}})])]),t._v(" "),e("li",[e("p",[t._v("WinSCP 左边的目录就是本地电脑上的文件夹和文件，请定位到密钥所在的文件夹")])]),t._v(" "),e("li",[e("p",[t._v("WinSCP 右边的目录则是 VPS 服务器上的文件夹和文件，默认就在 "),e("code",[t._v("/home/vpsadmin/")]),t._v(" 文件夹，此时在请点击右下角 "),e("code",[t._v("X hidden")]),t._v(" 来显示隐藏文件")]),t._v(" "),e("p",[e("img",{attrs:{src:_(390),alt:"本地和远程文件夹"}})])]),t._v(" "),e("li",[e("p",[t._v("在右边（VPS 中）点击右键并新建文件夹，起名"),e("code",[t._v(".ssh")]),t._v(" （注意有一个"),e("code",[t._v(".")]),t._v("）")]),t._v(" "),e("p",[e("img",{attrs:{src:_(391),alt:"在VPS中建立放置公钥的文件夹"}})])]),t._v(" "),e("li",[e("p",[t._v("将【公钥】"),e("code",[t._v("authorized_keys")]),t._v("上传到"),e("code",[t._v(".ssh")]),t._v("文件夹内")]),t._v(" "),e("p",[e("img",{attrs:{src:_(392),alt:"上传authorized_keys"}})])]),t._v(" "),e("li",[e("p",[t._v("在上传时，将【公钥】从 "),e("code",[t._v("authorized_keys.txt")]),t._v(" 改名为 "),e("code",[t._v("authorized_keys")]),t._v("（去掉"),e("code",[t._v(".txt")]),t._v("这个后缀名）")]),t._v(" "),e("p",[e("img",{attrs:{src:_(393),alt:"确保没有任何后缀"}})])]),t._v(" "),e("li",[e("p",[t._v("完整流程演示如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(394),alt:"WinSCP操作完整演示"}})])])])]),t._v(" "),e("li",[e("p",[t._v("在 VPS 端设置 SSH 启用 RSA 密钥验证登录、同时禁用密码验证登录")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("小小白白 Linux 基础命令：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("编号")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("命令名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("命令说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cmd-08")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("sudo")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用"),e("code",[t._v("root")]),t._v("权限运行某个命令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("cmd-09")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("chmod")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("修改目标文件/文件夹的权限")])])])])]),t._v(" "),e("li",[e("p",[t._v("SSH 远程连接到 VPS 上（PuTTY）")])]),t._v(" "),e("li",[e("p",[t._v("修改 "),e("code",[t._v("authorized_keys")]),t._v(" 文件权限为 "),e("code",[t._v("600")]),t._v(" （仅所有者可读可写）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ chmod 600 ~/.ssh/authorized_keys\n")])])])]),t._v(" "),e("li",[e("p",[t._v("修改 SSH 配置。这个我们已经用了很多次，但现在我们已经从无所不能的"),e("code",[t._v("root")]),t._v("变成了普通用户"),e("code",[t._v("vpsadmin")]),t._v("，此时的我们是没有权限直接编辑 SSH 配置的。这时候就需要使用"),e("code",[t._v("sudo")]),t._v("命令了：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ sudo nano /etc/ssh/sshd_config\n")])])])]),t._v(" "),e("li",[e("p",[t._v("找到("),e("code",[t._v("ctrl+w")]),t._v(") "),e("code",[t._v("PasswordAuthentication")]),t._v(" 改成 "),e("code",[t._v("no")])])]),t._v(" "),e("li",[e("p",[t._v("找到("),e("code",[t._v("ctrl+w")]),t._v(") "),e("code",[t._v("PubkeyAuthentication")]),t._v(" 改成 "),e("code",[t._v("yes")]),t._v("，然后保存("),e("code",[t._v("ctrl+o")]),t._v(")退出("),e("code",[t._v("ctrl+x")]),t._v(")")])]),t._v(" "),e("li",[e("p",[t._v("重启 SSH 服务。（啰嗦君：别忘了现在需要使用"),e("code",[t._v("sudo")]),t._v("来获得权限）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ sudo systemctl restart ssh\n")])])])]),t._v(" "),e("li",[e("p",[t._v("完整流程如下:")]),t._v(" "),e("p",[e("img",{attrs:{src:_(395),alt:"SSH开启密钥验证并禁用密码验证"}})])])])]),t._v(" "),e("li",[e("p",[t._v("VPS 端已经设置好了公钥，现在要给 PuTTY 指定私钥位置供登录时使用（啰嗦君：别忘了保存 Session）")]),t._v(" "),e("p",[e("img",{attrs:{src:_(396),alt:"PuTTY指定私钥位置"}})])]),t._v(" "),e("li",[e("p",[t._v("至此，【密钥登录】已成功开启、【密码验证】已成功关闭、并且还给 PuTTY 保存了默认的登录用户名和私钥。未来使用 PuTTY 登录时，载入"),e("code",[t._v("VPS-SERVER")]),t._v("配置后，点击"),e("code",[t._v("Open")]),t._v("就可以一键登录了。")]),t._v(" "),e("p",[t._v("如果你给私钥设置了密码保护，登录时当然还需要输入这个密码才能使用密钥，如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(397),alt:"输入私钥密码"}})])]),t._v(" "),e("li",[e("p",[t._v("别忘了给"),e("code",[t._v("WinSCP")]),t._v("也做对应的密钥设置，否则之后想要传输文件时就无法登录了：")]),t._v(" "),e("p",[e("img",{attrs:{src:_(398),alt:"WinSCP指定私钥位置"}})])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("任何需要借助 SSH 进行登录的软件都需要密钥验证了，软件过多，无法逐一展示，请根据你的需要自行设置好哦")])]),t._v(" "),e("h2",{attrs:{id:"_4-8-你的进度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-你的进度"}},[t._v("#")]),t._v(" 4.8 你的进度")]),t._v(" "),e("p",[t._v("到这里为止，你的 VPS 已经完成了【端口】、【用户名】、【密码】这三要素的基本安全保障，虽然远称不上固若金汤，但一般的恶意脚本应该已经无法对你造成伤害了！")]),t._v(" "),e("p",[t._v("现在我们终于有了一个安全的系统基础，下一章，我们就可以开始逐步安装配置 Xray 需要的基础设施了！（什么基础设施呢？一个网页，一张证书）")]),t._v(" "),e("blockquote",[e("p",[t._v("⬛⬛⬛⬛⬜⬜⬜⬜ 50%")])])])}),[],!1,null,null,null);v.default=s.exports}}]);