(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{293:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java-函数式编程（三）——-lambda-表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-函数式编程（三）——-lambda-表达式"}},[a._v("#")]),a._v(" Java 函数式编程（三）—— Lambda 表达式")]),a._v(" "),t("p",[a._v("在许多情况下， Lambda 表达式的存在只是为了传递一个或多个形参。"),t("br"),a._v("\n在函数式编程中，常常传递 Lambda 表达式作为匿名函数，使用 Lambda 作为更高阶函数的实参。")]),a._v(" "),t("p",[a._v("普通函数（方法）通常有四个元素：")]),a._v(" "),t("ul",[t("li",[a._v("一个名称")]),a._v(" "),t("li",[a._v("返回类型")]),a._v(" "),t("li",[a._v("参数列表")]),a._v(" "),t("li",[a._v("主体  Lambda 表达式的构成：  "),t("code",[a._v("(parameters) -> body")]),a._v("  这里的  "),t("code",[a._v("->")]),a._v("  将参数列表和函数主体分离。函数的主体可能是一个表达式或一个语句。")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("在上面这个 Lambda 表达式中只有一行。信噪比很高，没有分号，也不需要 "),t("code",[a._v("return")]),a._v(" 关键字。这是一个理想的 Lambda 表达式。")]),a._v(" "),t("p",[a._v("当然，有很多时候，我们的函数主体可能需要包含多行表达式或语句。在这种情况下，分号必不可少，也会需要 "),t("code",[a._v("return")]),a._v(" 关键字，因为主体包含多行，括号  "),t("code",[a._v("{}")]),a._v("  也是必须的。同时如果参数列表为多个或没有参数时括号  "),t("code",[a._v("()")]),a._v("  也是必须的。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" square "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" number "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" square"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" square "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("需要注意的是：这里的参数列表中的  "),t("code",[a._v("i")]),a._v(" ,  "),t("code",[a._v("j")]),a._v("  并没有给定参数类型，这是因为在 Java 8 中支持了类型推断。当然我们也可以给定参数类表中的数据类型： "),t("code",[a._v("(int i, int j) -> {...}")])])])}),[],!1,null,null,null);s.default=n.exports}}]);