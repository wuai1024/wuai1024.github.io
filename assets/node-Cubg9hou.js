import{a as e,i as t,r as n,t as r}from"./app-DD80tygU.js";var i=JSON.parse(`{"path":"/operation/node.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1649132262000,"contributors":[{"name":"杨康","username":"","email":"851161583@qq.com","commits":1}],"changelog":[{"hash":"0b32d30b0d1a3d3bb32b48f80a9f229fb1cfb95b","time":1649132262000,"email":"851161583@qq.com","author":"杨康","message":"初始导入"}]},"filePathRelative":"operation/node.md"}`),a={name:`node.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h2 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置"><span>安装配置</span></a></h2><h3 id="_1、下载nginx" tabindex="-1"><a class="header-anchor" href="#_1、下载nginx"><span>1、下载nginx</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 进入目标文件夹</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /usr/local/src</span>
<span class="line"><span class="token function">wget</span> http://nginx.org/download/nginx-1.21.1.tar.gz</span>
<span class="line"><span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> nginx-1.21.1.tar.gz</span>
<span class="line"><span class="token builtin class-name">cd</span> nginx-1.21.1</span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line">yum <span class="token parameter variable">-y</span> <span class="token function">install</span> pcre-devel openssl-devel</span>
<span class="line"><span class="token comment"># 编译</span></span>
<span class="line">./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-http_ssl_module</span>
<span class="line"><span class="token function">make</span></span>
<span class="line"><span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、配置开机启动注册为服务" tabindex="-1"><a class="header-anchor" href="#_2、配置开机启动注册为服务"><span>2、配置开机启动注册为服务</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">yum <span class="token function">install</span> <span class="token function">vim</span> <span class="token parameter variable">-y</span></span>
<span class="line"><span class="token function">vim</span> /usr/lib/systemd/system/nginx.service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx</span>
<span class="line"><span class="token assign-left variable">After</span><span class="token operator">=</span>network.target</span>
<span class="line">   </span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">Type</span><span class="token operator">=</span>forking</span>
<span class="line"><span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/usr/local/nginx/logs/nginx.pid</span>
<span class="line"><span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx</span>
<span class="line"><span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload</span>
<span class="line"><span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop</span>
<span class="line"><span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true</span>
<span class="line">   </span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment">#开机自启</span></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> nginx</span>
<span class="line"><span class="token comment">#快捷操作</span></span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/nginx/sbin/nginx /usr/bin/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment">#启动服务</span></span>
<span class="line">nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment">#使用配置文件启动</span></span>
<span class="line">nginx <span class="token parameter variable">-c</span> <span class="token string">&quot;配置文件路径&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#重载服务（重载服务配置文件，类似于重启，但服务不会中止，当项目多的时候新增项目的时候很实用）</span></span>
<span class="line">nginx <span class="token parameter variable">-s</span> reload</span>
<span class="line"></span>
<span class="line"><span class="token comment">#退出服务</span></span>
<span class="line">nginx <span class="token parameter variable">-s</span> quit</span>
<span class="line"></span>
<span class="line"><span class="token comment">#强制关闭服务</span></span>
<span class="line">nginx <span class="token parameter variable">-s</span> stop</span>
<span class="line"></span>
<span class="line"><span class="token comment">#查看版本</span></span>
<span class="line">nginx <span class="token parameter variable">-v</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#帮助</span></span>
<span class="line">nginx <span class="token parameter variable">-h</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#验证配置文件</span></span>
<span class="line">nginx <span class="token parameter variable">-t</span>　　</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="systemctl命令" tabindex="-1"><a class="header-anchor" href="#systemctl命令"><span>systemctl命令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 启动</span></span>
<span class="line">systemctl start nginx.service  </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重启</span></span>
<span class="line">systemctl restart nginx.service  </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重载服务配置文件，类似于重启，但服务不会中止</span></span>
<span class="line">systemctl reload nginx.service　　　  </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止</span></span>
<span class="line">systemctl stop nginx.service  </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭开机启动</span></span>
<span class="line">systemctl disable nginx.service </span>
<span class="line"></span>
<span class="line">如果出现报错内容<span class="token string">&quot;Failed to execute operation: Access denied&quot;</span>，输入<span class="token string">&quot;systemctl daemon-reexec&quot;</span>即可解决。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};