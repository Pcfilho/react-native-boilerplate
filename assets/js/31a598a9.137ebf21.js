"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=m(n),c=r,p=h["".concat(s,".").concat(c)]||h[c]||u[c]||o;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={slug:"/ThemesAndDarkMode",title:"Themes and darkMode \ud83c\udf17"},i=void 0,l={unversionedId:"Guides/3_2_ThemesAndDarkMode",id:"Guides/3_2_ThemesAndDarkMode",title:"Themes and darkMode \ud83c\udf17",description:"This boilerplate handle dark themes and theme overrides",source:"@site/docs/3_Guides/3_2_ThemesAndDarkMode.md",sourceDirName:"3_Guides",slug:"/ThemesAndDarkMode",permalink:"/react-native-boilerplate/docs/ThemesAndDarkMode",draft:!1,editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/docs/docs/3_Guides/3_2_ThemesAndDarkMode.md",tags:[],version:"current",frontMatter:{slug:"/ThemesAndDarkMode",title:"Themes and darkMode \ud83c\udf17"},sidebar:"tutorialSidebar",previous:{title:"Theme \ud83c\udfa8",permalink:"/react-native-boilerplate/docs/Theme"},next:{title:"Splash screen & loading data \ud83d\udcbe",permalink:"/react-native-boilerplate/docs/SplashScreenLoadingData"}},s={},m=[{value:"What is the default configuration \u2753",id:"what-is-the-default-configuration-",level:2},{value:"Create a new theme \ud83e\udde9",id:"create-a-new-theme-",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"Extended example with dark theme",id:"extended-example-with-dark-theme",level:3}],d={toc:m},h="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This boilerplate handle dark themes and theme overrides"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-is-the-default-configuration-"},"What is the default configuration \u2753"),(0,r.kt)("p",null,"By default, the boilerplate comes with a ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," theme and a ",(0,r.kt)("inlineCode",{parentName:"p"},"default dark")," theme.\nThe default theme is build around the different files at the root of ",(0,r.kt)("inlineCode",{parentName:"p"},"src/Theme"),", by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Common.js"),(0,r.kt)("li",{parentName:"ul"},"Fonts.js"),(0,r.kt)("li",{parentName:"ul"},"Gutters.js"),(0,r.kt)("li",{parentName:"ul"},"Images.js"),(0,r.kt)("li",{parentName:"ul"},"Layout.js"),(0,r.kt)("li",{parentName:"ul"},"Variables.js")),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},"default dark")," theme is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/Theme/themes/default_dark"),"."),(0,r.kt)("p",null,"The Boilerplate Theme system is based on layers overriding.",(0,r.kt)("br",{parentName:"p"}),"\n","In other words, the ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),' theme is the "base theme" of the application.\nOn the top of it, if the ',(0,r.kt)("inlineCode",{parentName:"p"},"darkMode")," is on, the base theme is overrided by style classes or variables of the ",(0,r.kt)("inlineCode",{parentName:"p"},"default dark")," theme."),(0,r.kt)("p",null,"Moreover, if we add a new theme into ",(0,r.kt)("inlineCode",{parentName:"p"},"src/Theme/themes"),", for example : ",(0,r.kt)("inlineCode",{parentName:"p"},"custom"),".\nThe theme system will override the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," theme classes by the ones of ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," theme.\nIf the dark mode is activated, the theme system will try to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_dark")," directory if exists, and override the theme too."),(0,r.kt)("p",null,"So, the merge of style and variables classes look like this :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"default theme <- custom theme <- custom dark theme (if darkMode = true and theme exist)\n")),(0,r.kt)("p",null,"The name of the current theme and if the dark mode is on are stored in redux and persisted in the device. At a given point of the time the state can look like this :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n   theme: 'custom',\n   darkMode: true, // can be null|true|false\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"darkMode")," values can be :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"null (by default) : the darkMode is automatically set depending of the scheme of the device"),(0,r.kt)("li",{parentName:"ul"},"true : force the theme to be dark"),(0,r.kt)("li",{parentName:"ul"},"false : force the theme to be light")),(0,r.kt)("p",null,"There are two Actions availabled to set a new theme :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DefaultTheme")," allow to set the theme from parameters only if the ",(0,r.kt)("inlineCode",{parentName:"li"},"state.theme")," is null (used in the initialisation of the app to set the default theme if this is the first time the app is openned or if the data were cleared)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ChangeTheme")," allow to set a given theme (see example bellow)")),(0,r.kt)("h2",{id:"create-a-new-theme-"},"Create a new theme \ud83e\udde9"),(0,r.kt)("h3",{id:"basic-example"},"Basic example"),(0,r.kt)("p",null,"To create a new theme, create a new directory into ",(0,r.kt)("inlineCode",{parentName:"p"},"src/Theme/themes")," with the name of your theme. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"custom"),".\nAdd files with the same names of the default theme files.\nFor example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," theme has to override the primary color, simply create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Variables")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"src/Theme/themes/custom")," with the following :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/Theme/themes/custom/Variables.js"',title:'"src/Theme/themes/custom/Variables.js"'},"const Colors = {\n  primary: 'yellow',\n}\n\nexport default {\n  Colors,\n}\n")),(0,r.kt)("p",null,"\ud83d\udea8 After adding a new override file, don't forget to export it into the root file of the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," directory with the following :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/Theme/themes/custom/index.js"',title:'"src/Theme/themes/custom/index.js"'},"export { default as Variables } from './Variables'\n")),(0,r.kt)("p",null,"\ud83d\udea8 Each time a new theme is create, import it into the root of themes directory with the name of the theme :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/Theme/themes/index.js"',title:'"src/Theme/themes/index.js"'},"import * as default_dark from './default_dark'\nimport * as custom from './custom' // <-- add this line\n\nexport default {\n  default_dark,\n  custom, // <-- add this line\n}\n")),(0,r.kt)("p",null,"That's it ! now you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChangeTheme")," action to set the theme in a container for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Containers/Example/index.js"',title:'"src/Containers/Example/index.js"'},"import React, { useState } from 'react'\nimport { useDispatch, useSelector } from 'react-redux'\nimport { View, Button } from 'react-native'\nimport { useTheme } from '@/Hooks'\nimport { changeTheme } from '@/Store/Theme'\n\nconst IndexExampleContainer = () => {\n  const { Common, Fonts, Gutters, Layout } = useTheme()\n  const dispatch = useDispatch()\n\n  const changeTheme = ({ theme, darkMode }) => {\n    dispatch(changeTheme({ theme, darkMode }))\n  }\n\n  return (\n    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>\n      <View\n        style={[\n          Layout.row,\n          Layout.rowHCenter,\n          Gutters.smallHPadding,\n          Gutters.largeVMargin,\n          Common.backgroundPrimary,\n        ]}\n      >\n        <Button onPress={() => changeTheme({ theme: 'custom' })} title=\"set theme custom\" />\n        <Button onPress={() => changeTheme({ theme: 'default' })} title=\"set theme default\" />\n      </View>\n    </View>\n  )\n}\nexport default IndexExampleContainer\n")),(0,r.kt)("h3",{id:"extended-example-with-dark-theme"},"Extended example with dark theme"),(0,r.kt)("p",null,"After adding a new theme, to handle the dark theme of it, the same way the new theme was created, the dark will be. \ud83d\ude0e",(0,r.kt)("br",{parentName:"p"}),"\n","So, the first step is to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/Theme/themes/custom_dark")," directory. This theme will override the default and the custom theme by :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adding a new color"),(0,r.kt)("li",{parentName:"ul"},"override the React Navigation primary color"),(0,r.kt)("li",{parentName:"ul"},"apply the new color by adding a border on the ",(0,r.kt)("inlineCode",{parentName:"li"},"backgroundPrimary")," class.")),(0,r.kt)("p",null,"Let's create the following files :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Theme/themes/custom_dark/Variables.js"',title:'"src/Theme/themes/custom_dark/Variables.js"'},"const Colors = {\n  orange: 'orange', // adding a new color \u2705\n}\n\nconst NavigationColors = {\n  primary: 'red', // override the React Navigation primary color \u2705\n}\n\nexport default {\n  Colors,\n  NavigationColors,\n}\n\n")),(0,r.kt)("p",null,"And, "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Theme/themes/custom_dark/Common.js"',title:'"src/Theme/themes/custom_dark/Common.js"'},"import { StyleSheet } from 'react-native'\n\nexport default function ({ Colors }) {\n  return StyleSheet.create({\n    backgroundPrimary: {\n      backgroundColor: Colors.primary,\n      borderColor: Colors.orange, // apply the new color by adding a border on the `backgroundPrimary` class \u2705\n    },\n  })\n}\n")),(0,r.kt)("p",null,"\ud83d\udea8 After adding a new override file, don't forget to export it into the root file of the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_dark")," directory with the following :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Theme/themes/custom_dark/index.js"',title:'"src/Theme/themes/custom_dark/index.js"'},"export { default as Variables } from './Variables'\nexport { default as Common } from './Common'\n")),(0,r.kt)("p",null,"\ud83d\udea8 Each time a new theme is create, import it into the root of themes directory with the name of the theme :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Theme/themes/index.js"',title:'"src/Theme/themes/index.js"'},"import * as default_dark from './default_dark'\nimport * as custom from './custom'\nimport * as custom_dark from './custom_dark' // <- add this line\n\nexport default {\n  default_dark,\n  custom,\n  custom_dark, // <- add this line\n}\n")),(0,r.kt)("p",null,"You can add extra buttons to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleContainer")," below to test it :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Containers/Example/index.js"',title:'"src/Containers/Example/index.js"'},'...\nconst ExampleContainer = () => {\n  ...\n  return (\n    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>\n      <View\n        style={[\n          Layout.row,\n          Layout.rowHCenter,\n          Gutters.smallHPadding,\n          Gutters.largeVMargin,\n          Common.backgroundPrimary,\n        ]}\n      >\n        <Button onPress={() => changeTheme({ theme: \'custom\' })} title="set theme custom" />\n        <Button onPress={() => changeTheme({ theme: \'default\' })} title="set theme default" />\n        <Button onPress={() => changeTheme({ darkMode: null })} title="Dark auto" /> {/* <- add this line */}\n        <Button onPress={() => changeTheme({ darkMode: true })} title="set to Dark" /> {/* <- add this line */}\n        <Button onPress={() => changeTheme({ darkMode: false })} title="set to Light" /> {/* <- add this line */}\n      </View>\n    </View>\n  )\n}\n')),(0,r.kt)("p",null,"That's it ! you can now enjoy multi theming and dark mode ! \ud83d\udc4f"))}u.isMDXComponent=!0}}]);