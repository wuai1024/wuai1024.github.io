(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{393:function(s,a,t){"use strict";t.r(a);var e=t(21),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h4",{attrs:{id:"_1、准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、准备工作"}},[s._v("#")]),s._v(" 1、准备工作")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载程序包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o /root/apache-maven-3.8.5-bin.tar.gz https://dlcdn.apache.org/maven/maven-3/3.8.5/binaries/apache-maven-3.8.5-bin.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf apache-maven-3.8.5-bin.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移至安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" apache-maven-3.8.5 /usr/local/maven "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf apache-maven-3.8.5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"_2、写入环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、写入环境变量"}},[s._v("#")]),s._v(" 2、写入环境变量")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/profile.d/maven.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nexport M2_HOME=/usr/local/maven\nexport PATH=\\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$M2_HOME")]),s._v(":\\"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\nEOF")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"_3、加载环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、加载环境变量"}},[s._v("#")]),s._v(" 3、加载环境变量")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);