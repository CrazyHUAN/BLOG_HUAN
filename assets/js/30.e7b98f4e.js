(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{462:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"网络代理脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络代理脚本"}},[s._v("#")]),s._v(" 网络代理脚本")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("Terminal 在使用 git / repo /brew 命令的时候, 有时会需要拉取墙外的资源, 这时就需要科学上网,"),t("br"),s._v("\n而有些代理工具并没有全局功能, 所以需要在终端中进行http代理配置")])]),s._v(" "),t("p",[s._v("操作思路非常简单, http_proxy 等几个参数是终端配置代理的命令, 只要将其封装一下, 并配置为全局命令即可")]),s._v(" "),t("h4",{attrs:{id:"_1-在用户目录下-新建-command-目录-再该目录下新建-proxy-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-在用户目录下-新建-command-目录-再该目录下新建-proxy-文件"}},[s._v("#")]),s._v(" 1. 在用户目录下, 新建 "),t("code",[s._v("command")]),s._v(" 目录, 再该目录下新建 "),t("code",[s._v("proxy")]),s._v(" 文件")]),s._v(" "),t("br"),s._v(" "),t("img",{attrs:{width:"90%",src:"https://cdn.jsdelivr.net/gh/CrazyHuan/ImageBank@image/blog/20210722161753.png"}}),s._v(" "),t("p",[t("code",[s._v("proxy")]),s._v(" 脚本命令")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代理端口 查看 科学上网工具")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("h_p")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:9910 \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 socks5 如下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# h_p=socks5://127.0.0.1:9909")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("proxy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 打开终端代理\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("no_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost,127.0.0.1,localaddress,.localdomain.com"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$h_p")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$h_p")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" cip.cc\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("proxy_off")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 关闭终端代理\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" http_proxy\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" https_proxy \n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" cip.cc\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h4",{attrs:{id:"_2-将命令配置为全局命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-将命令配置为全局命令"}},[s._v("#")]),s._v(" 2.将命令配置为全局命令")]),s._v(" "),t("ul",[t("li",[s._v("在 用户目录下, 打开隐藏文件 "),t("code",[s._v("Command + Shift + .")])])]),s._v(" "),t("br"),s._v(" "),t("img",{attrs:{width:"80%",src:"https://cdn.jsdelivr.net/gh/CrazyHuan/ImageBank@image/blog/20210722161813.png"}}),s._v(" "),t("ul",[t("li",[s._v("打开 .zshrc 文件, 在最下方输入")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("source ~/command/proxy 4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_3-打开终端窗口-测试命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-打开终端窗口-测试命令"}},[s._v("#")]),s._v(" 3. 打开终端窗口,测试命令")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载命令脚本")]),s._v("\nsouce ~/.zshrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开代理")]),s._v("\nproxy\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭代理")]),s._v("\nproxy_off\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("Mac 新版本终端使用 zsh 作为默认shell,所以配置"),t("code",[s._v(".zshrc")]),s._v("文件,"),t("br"),s._v("\n使用 bash 做 shell 时配置文件为"),t("code",[s._v(".bashrc")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CrazyHuan/ImageBank@image/blog/20210722161815.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/CrazyHuan/ImageBank@image/blog/20210722161938.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);