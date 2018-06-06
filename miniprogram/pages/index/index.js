var plugin = requirePlugin("myPlugin")
Page({
  data: {
    richText: ''
  },

  onLoad: function() {
    this.setData({
      richText: '<p>跟本地的 Word 、WPS 或 Pages 相比，在线文档的优势是：</p><ul><li>修改方便，不用为了几个字重新上传文档，可以直接在线改<br></li><li>云端保存，你在办公室电脑上没写完的文档，可以到咖啡馆用笔记本继续写，不用把文件拷来拷去</li><li>讨论方便，你可以快速的跟同事在线讨论文档的内容，获得改进建议</li></ul><hr><p>在编写排版排量的在线文档之前，你需要了解一些中文排版的基础知识。</p><p>首先，中文最重要的排版是断句。文档里的逗号、句号、问号和感叹号等常用标点，应该正确的使用；其次，是内容分段。文档里的内容段落，以 3 ~ 10 行为宜，段落过短会让内容破碎，过长容易引起阅读疲劳。</p><p>其次，你需要熟悉下面的格式排版方式：</p><h2><b style="font-size: 24px;">文字类型</b></h2><p>文字支持标题和正文两种类型，你可以选中文字后，在工具栏选择相应的文字类型。</p><p><img alt="Clipboard Image.png" src="https://tower.im/publications/attachments/63c965d324744c2cbd18d7cf3063b458" data-image-size="651,256"><br></p><p>Tips：你可以用截图粘贴的方式快速插入图片。</p><h2><b style="font-size: 24px;">正文样式</b><br></h2><p>目前，在线编辑器支持以下四种正文样式。</p><ul><li><b style="font-size: 16px;">加粗</b></li><li><i style="font-size: 16px;">斜体</i></li><li><u>下划线</u></li><li><strike>删除线</strike></li></ul><p><img alt="Clipboard Image.png" src="https://tower.im/publications/attachments/86db463e7afc4ff7a57bd17a0ec5d680" data-image-size="641,73"><br></p><h2><b style="font-size: 24px;">列表样式</b></h2><ol><li>这是有序列表，用于排版有顺序或者有编号的文本</li><li>直接回车，就能添加第二个列表项</li><li>如果连续回车两次，就能脱离列表模式，新开段落</li></ol><ul><li>这是无序列表，用于排版并列关系的文本</li><li>无序列表也支持回车自动创建列表项</li></ul><p><b style="font-size: 16px;"><br></b></p><h2><b style="font-size: 24px;">文字引用</b></h2><p>文档里的引用文字，或者备注文字，可以用引用格式来排版，像下面这样。</p><blockquote><p>其实自己在想是什么东西让我们有了今天，是什么让马云有了今天，我是没有理由成功的，阿里也没有理由成功，淘宝更没有理由成功，但我们今天居然走了这么多年，依旧对未来充满理想。</p><p><br></p><p>其实我在想是一种信任，在所有人不相信这个世界，所有人不相信未来，所有人不相信别人的时候，我们选择了相信，我们选择了信任，我们选择十年以后的中国会更好，我们选择相信我的同事会做得比我更好，我相信中国的年轻人会做得比我们更好。<br></p></blockquote><h2><b style="font-size: 24px;">更多功能</b></h2><p>你还可以粘贴代码，调整文字缩进，创建链接，插入本地或者网络图片，添加分隔线和表格，让自己的文档排版更专业。</p><p>最后还有一点，养成检查文档的好习惯，尽量不要出现错别字。：）</p>'
      // richText: `<h3 id="-">基本用法</h3><ol><li>给你这次测试起一个名字，如 <code>editor_version</code>。</li><li>考虑要设置几种不同的测试分支，我要测试新旧两种编辑器，则新版为 <code>'New'</code>, 旧版为 <code>'Old'</code>。</li><li><p>在 <code>app/helpers/ab_test_helper.rb</code> 里定义一个方法如</p><pre><code> def ab_test_editor_version\n  ab_test(:editor_version, {'Old' =&gt; 10}, {'New' =&gt; 0})\n end</code></pre></li><li><p>在 view 中需要进行测试的地方，使用如</p><pre><code> if ab_test_editor_version == 'New'   # 新版编辑器代码 else   # 旧版编辑器代码 end</code></pre></li></ol><h4 id="-">注意事项</h4><ol><li><code>{'Old' =&gt; 10}, {'New' =&gt; 0}</code> 后面的数字代表灰度的比例，示例中代表所有团队都用旧版，所有团队的 <code>ab_test_editor_version</code> 都会返回 <code>'Old'</code>。当希望只有我们指定的几个团队开启测试时，可以这样使用，部署代码后，再去手动开启。</li><li><code>{'Old' =&gt; 10}, {'New' =&gt; 0}</code> 要注意第一个分支，这个是 control 分支，当 redis 联接失败，或遇到其它问题，无法灰度的时候，会选择用 control 分支，所以一般要把稳定的代码分支放在第一个的位置。</li><li>所有分支的标志如 <code>'Old'</code> <code>'New'</code> 必须是 String。</li></ol><h3 id="-">如何给指定团队设置开启测试</h3><p>进行操作之前，请确保对应的 experiment 在 tower.im/split 中是 start 了的（没有的话，就去点一下 start 就好了）。</p><p>获得指定团队的 guid ，可以是多个，在服务器上打开 console ，输入</p><pre><code>SplitUtil.set_alt('editor_version', 'New', ['ee4251bdf88a4e82b63b70b58712309c'])</code></pre><p>获得指定团队现在的测试分支</p><pre><code>SplitUtil.get_alt('editor_version',  ['ee4251bdf88a4e82b63b70b58712309c'])</code></pre>`
    })
  },

  tapWxParserImg: function(e) {
    console.log(e.detail.src)
  },

  tapWxParserLink: function(e) {
    wx.navigateTo({
      url: e.detail.href
    })
  },

  changeContent: function() {
    this.setData({
      richText: '<p><a href="../other/index" target="_self" style="white-space: normal;">其它页面</a></p><table><colgroup><col width="19.857142857142858%"><col width="20%"><col width="20%"><col width="20.142857142857142%"><col width="20.42857142857143%"></colgroup><thead><tr><th>谁</th><th>离岗时间</th><th>回到岗位时间</th><th>值班日</th><th>备注</th></tr></thead><tbody><tr><td>Snow</td><td>16 / 初一</td><td>22 / 初七</td><td>15 / 除夕</td><td>很多时候在连手机都开不了的高寒地带</td></tr><tr><td>吕若尘</td><td>15 / 除夕</td><td>21 / 初六</td><td><br></td><td>但基本每天都在电脑旁边</td></tr><tr><td>高宇</td><td>15&nbsp;/ 除夕</td><td>22&nbsp;/&nbsp;初七 </td><td><br></td><td>老家在山里，但也有宽带，表示很欣慰<br></td></tr><tr><td>袁夏伟</td><td>15&nbsp;/ 除夕<br></td><td>22 / 初七<br></td><td>初一 / 16 初四 19</td><td>但基本每天都在电脑旁边<br></td></tr><tr><td>刘云龙</td><td>15&nbsp;/ 除夕<br></td><td>21&nbsp;/ 初六<br></td><td><br></td><td>白天不确定，晚上肯定在家</td></tr><tr><td>小龙</td><td>15 / 除夕</td><td>21 / 初六</td><td><br></td><td>但基本每天都在电脑旁边<br></td></tr><tr><td>梁忆<br><br></td><td>15 / 除夕</td><td>22 / 初七</td><td><br></td><td>电脑随身</td></tr><tr><td>豪哥</td><td>15 / 除夕<br></td><td>22 / 初七<br></td><td><br></td><td>电话 Oncall，不一定带电脑，如果有啥特别紧急需要的可以开车回家处理</td></tr><tr><td>郝云飞</td><td>15 / 除夕<br></td><td>21 / 初六<br></td><td>初二 / 17 初三 / 18</td><td>出门会带电脑<br><br></td></tr><tr><td>张泽雁</td><td>13</td><td>26</td><td><br></td><td>请了 4 天年假。<br>白天的话大部分时候在电脑旁。</td></tr><tr><td>宋辉</td><td>15/ 除夕</td><td>21 /初六</td><td>初五 初六</td><td><br></td></tr></tbody></table>'
    })
  }
})
