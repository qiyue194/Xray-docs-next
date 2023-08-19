import{r as e,o as s,c as n,a as o,b as a,w as t,F as p,e as l,d as c}from"./app.0e29a904.js";const r={},i=o("h1",{id:"shadowsocks",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#shadowsocks","aria-hidden":"true"},"#"),l(" Shadowsocks")],-1),d=l("The "),u={href:"https://en.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},h=l("Shadowsocks"),b=l(" protocol is compatible with most other implementations of Shadowsocks. The server supports TCP and UDP packet forwarding, with an option to selectively disable UDP."),k=c('<h3 id="supported-encryption-methods" tabindex="-1"><a class="header-anchor" href="#supported-encryption-methods" aria-hidden="true">#</a> Supported Encryption Methods</h3><p>The currently supported methods are following:</p><ul><li>Recommended encryption methods: <ul><li><code>2022-blake3-aes-128-gcm</code></li><li><code>2022-blake3-aes-256-gcm</code></li><li><code>2022-blake3-chacha20-poly1305</code></li></ul></li><li>Other encryption methods: <ul><li><code>aes-256-gcm</code></li><li><code>aes-128-gcm</code></li><li><code>chacha20-poly1305</code>/<code>chacha20-ietf-poly1305</code></li><li><code>xchacha20-poly1305</code>/<code>xchacha20-ietf-poly1305</code></li><li><code>none</code>/<code>plain</code></li></ul></li></ul><p>The Shadowsocks 2022 new protocol format improves performance and includes complete replay protection, addressing the following security issues in the old protocol:</p>',4),m={href:"https://github.com/shadowsocks/shadowsocks-org/issues/183",target:"_blank",rel:"noopener noreferrer"},g=l("Serious vulnerabilities in Shadowsocks AEAD encryption, which cannot guarantee the integrity of the communication content"),f=o("li",null,"Increasing false positive rate of the original TCP replay filter over time",-1),y=o("li",null,"Lack of UDP replay protection",-1),q=o("li",null,"TCP behaviors that can be used for active probing",-1),w=c('<div class="custom-container danger"><p class="custom-container-title">Danger</p><p>Traffic transmitted without encryption using the &quot;none&quot; method will be in plain text. <strong>Do not use it on public networks</strong> for security reasons.</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp,udp&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p><code>clients</code>: a list of <a href="#clientobject"><code>ClientObject</code></a>, empty list considered valid</p></blockquote><p>The <code>password</code> parameter can be specified for the server at all, but also in the <a href="#clientobject"><code>ClientObject</code></a> being dedicated to the given user. Server-level <code>password</code> is not guaranteed to override the client-specific one.</p><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>The supported network protocol type. For example, when specified as <code>&quot;tcp&quot;</code>, it will only handle TCP traffic. The default value is <code>&quot;tcp&quot;</code>.</p><h2 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;密码&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>method</code>: string, any of the <a href="#supportedencryptionmethods">supported methods</a></p></blockquote><p>Required.</p><blockquote><p><code>password</code>: string</p></blockquote><p>Required. For <strong>Shadowsocks 2022</strong> a pre-shared <code>base64</code> random key similar to WireGuard&#39;s keys should be used as the password. The command</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl rand -base64 <span class="token operator">&lt;</span>length<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>could used to generate a key. The length of the required key for <code>shadowsocks-rust</code> implementation depends on the encryption method:</p><table><thead><tr><th>Encryption Method</th><th style="text-align:right;">Key Length</th></tr></thead><tbody><tr><td><code>2022-blake3-aes-128-gcm</code></td><td style="text-align:right;">16</td></tr><tr><td><code>2022-blake3-aes-256-gcm</code></td><td style="text-align:right;">32</td></tr><tr><td><code>2022-blake3-chacha20-poly1305</code></td><td style="text-align:right;">32</td></tr></tbody></table><p>In the <code>go-shadowsocks</code> implementation written in Golang, a 32-byte key always works.</p><p>For <strong>any other encryption method</strong> <em>any string</em> could be used. There is no limitation on the password length, but shorter passwords are more susceptible to cracking. It is recommended to use a random-generated password of 16 characters or longer. The following example generates 40-characters length password:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> strings /dev/urandom <span class="token operator">|</span> <span class="token function">grep</span> -o <span class="token string">&#39;[[:alnum:]]&#39;</span> <span class="token operator">|</span> <span class="token function">head</span> -n <span class="token number">40</span> <span class="token operator">|</span> <span class="token function">tr</span> -d <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>level</code>: number</p></blockquote>',20),v=l("The user level that the connection will use to determine the corresponding "),x=l("Local Policy"),j=l("."),T=l("The value of "),S=o("code",null,"level",-1),C=l(" corresponds to the value of "),P=o("code",null,"level",-1),D=l(" in the "),O=l("policy"),I=l(". If not specified, the default value is 0."),L=o("blockquote",null,[o("p",null,[o("code",null,"email"),l(": string")])],-1),F=o("p",null,"The user's email, used to differentiate traffic from different users for logs or statistics.",-1);r.render=function(l,c){const r=e("OutboundLink"),R=e("RouterLink");return s(),n(p,null,[i,o("p",null,[d,o("a",u,[h,a(r)]),b]),k,o("ul",null,[o("li",null,[o("a",m,[g,a(r)])]),f,y,q]),w,o("p",null,[v,a(R,{to:"/en/config/policy.html#levelpolicyobject"},{default:t((()=>[x])),_:1}),j]),o("p",null,[T,S,C,P,D,a(R,{to:"/en/config/policy.html#policyobject"},{default:t((()=>[O])),_:1}),I]),L,F],64)};export default r;
