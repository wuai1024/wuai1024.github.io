(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{326:function(a,s,t){"use strict";t.r(s);var e=t(9),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"_1、删除所有容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、删除所有容器"}},[a._v("#")]),a._v(" 1、删除所有容器")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2、删除所有镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、删除所有镜像"}},[a._v("#")]),a._v(" 2、删除所有镜像")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_3、按条件删除镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、按条件删除镜像"}},[a._v("#")]),a._v(" 3、按条件删除镜像")]),a._v(" "),s("h4",{attrs:{id:"没有打标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有打标签"}},[a._v("#")]),a._v(" 没有打标签")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/^<none>/ { print $3 }'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"镜像名包含关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像名包含关键字"}},[a._v("#")]),a._v(" 镜像名包含关键字")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 其中doss-api为关键字")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--force")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" doss-api "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print $3}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);