webpackJsonp([16],{"./node_modules/json-loader/index.js!./.cache/json/docs.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2 id="setup-your-project"><a href="#setup-your-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup Your Project</h2>\n<p>Let’s create a very simple form using <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>. If <code>create-react-app</code> is not installed, let’s install it immediately.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app\n$ create-react-app my-app\n$ <span class="token function">cd</span> my-app\n</code></pre>\n      </div>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p><code>react-drip-form</code> is published to npm.<br>\nInstall the stable version with the following command.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> --save react-drip-form\n$ <span class="token function">npm</span> <span class="token function">install</span> --save react-drip-form-components\n</code></pre>\n      </div>\n<p>Although this is not required, we will use the <a href="https://github.com/tsuyoshiwada/react-drip-form-components">official UI</a> component to build the form quickly.</p>\n<p>If you are building a component with full scratch, see the <a href="./tutorial/">tutorial</a>.</p>\n<h2 id="create-simple-forms"><a href="#create-simple-forms" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create Simple Forms</h2>\n<p>Copy and paste the following code into <code>src/App.js</code> and run <code>npm start</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> dripForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-drip-form\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  FieldGroup<span class="token punctuation">,</span>\n  Input<span class="token punctuation">,</span>\n  Textarea<span class="token punctuation">,</span>\n  Select<span class="token punctuation">,</span>\n  Checkbox<span class="token punctuation">,</span>\n  Radio<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-drip-form-components\'</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">const</span> SampleForm <span class="token operator">=</span> <span class="token function">dripForm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  validations<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      max<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    username<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      max<span class="token punctuation">:</span> <span class="token number">255</span><span class="token punctuation">,</span>\n      alphaNumeric<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    email<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      email<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    emailConfirm<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      same<span class="token punctuation">:</span> <span class="token string">\'email\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    gender<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    job<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      max<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    subject<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    confirm<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    message<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      max<span class="token punctuation">:</span> <span class="token number">500</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  handlers<span class="token punctuation">,</span>\n  meta<span class="token punctuation">:</span> <span class="token punctuation">{</span> invalid<span class="token punctuation">,</span> pristine <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handlers<span class="token punctuation">.</span>onSubmit<span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>Name<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Input\n        type<span class="token operator">=</span><span class="token string">"text"</span>\n        id<span class="token operator">=</span><span class="token string">"name"</span>\n        name<span class="token operator">=</span><span class="token string">"name"</span>\n        label<span class="token operator">=</span><span class="token string">"Name"</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"username"</span><span class="token operator">></span>Username<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Input\n        type<span class="token operator">=</span><span class="token string">"text"</span>\n        id<span class="token operator">=</span><span class="token string">"username"</span>\n        name<span class="token operator">=</span><span class="token string">"username"</span>\n        label<span class="token operator">=</span><span class="token string">"Username"</span>\n        placeholder<span class="token operator">=</span><span class="token string">"enter-your-username"</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>Email<span class="token operator">-</span>Address<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Input\n        type<span class="token operator">=</span><span class="token string">"email"</span>\n        id<span class="token operator">=</span><span class="token string">"email"</span>\n        name<span class="token operator">=</span><span class="token string">"email"</span>\n        label<span class="token operator">=</span><span class="token string">"Email-Address"</span>\n        placeholder<span class="token operator">=</span><span class="token string">"example@mail.com"</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"emailConfirm"</span><span class="token operator">></span>Email<span class="token operator">-</span>Address <span class="token punctuation">(</span>Confirm<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Input\n        type<span class="token operator">=</span><span class="token string">"email"</span>\n        id<span class="token operator">=</span><span class="token string">"emailConfirm"</span>\n        name<span class="token operator">=</span><span class="token string">"emailConfirm"</span>\n        label<span class="token operator">=</span><span class="token string">"Email-Address (Confirm)"</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>label<span class="token operator">></span>Gender<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>\n      <span class="token operator">&lt;</span>FieldGroup name<span class="token operator">=</span><span class="token string">"gender"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Radio value<span class="token operator">=</span><span class="token string">"female"</span><span class="token operator">></span>Female<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Radio value<span class="token operator">=</span><span class="token string">"male"</span><span class="token operator">></span>Male<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Radio value<span class="token operator">=</span><span class="token string">"other"</span><span class="token operator">></span>Other<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Radio value<span class="token operator">=</span><span class="token string">"none"</span><span class="token operator">></span>Rather not say<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>FieldGroup<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>label<span class="token operator">></span>Job <span class="token punctuation">(</span>Optional<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>\n      <span class="token operator">&lt;</span>FieldGroup name<span class="token operator">=</span><span class="token string">"job"</span> multiple<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Checkbox value<span class="token operator">=</span><span class="token string">"frontend-engineer"</span><span class="token operator">></span>Front<span class="token operator">-</span>end Engineer<span class="token operator">&lt;</span><span class="token operator">/</span>Checkbox<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Checkbox value<span class="token operator">=</span><span class="token string">"backend-engineer"</span><span class="token operator">></span>Back<span class="token operator">-</span>end Engineer<span class="token operator">&lt;</span><span class="token operator">/</span>Checkbox<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Checkbox value<span class="token operator">=</span><span class="token string">"software-engineer"</span><span class="token operator">></span>Software Engineer<span class="token operator">&lt;</span><span class="token operator">/</span>Checkbox<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Checkbox value<span class="token operator">=</span><span class="token string">"ui-designer"</span><span class="token operator">></span>UI Designer<span class="token operator">&lt;</span><span class="token operator">/</span>Checkbox<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Checkbox value<span class="token operator">=</span><span class="token string">"ux-designer"</span><span class="token operator">></span>UX Designer<span class="token operator">&lt;</span><span class="token operator">/</span>Checkbox<span class="token operator">></span>\n        <span class="token operator">&lt;</span>Checkbox value<span class="token operator">=</span><span class="token string">"graphic-designer"</span><span class="token operator">></span>Graphic Designer<span class="token operator">&lt;</span><span class="token operator">/</span>Checkbox<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>FieldGroup<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"subject"</span><span class="token operator">></span>Subject<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Select\n        id<span class="token operator">=</span><span class="token string">"subject"</span>\n        name<span class="token operator">=</span><span class="token string">"subject"</span>\n        label<span class="token operator">=</span><span class="token string">"Subject"</span>\n      <span class="token operator">></span>\n        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>Please select a subject<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>\n        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"option1"</span><span class="token operator">></span>Option <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>\n        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"option2"</span><span class="token operator">></span>Option <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>\n        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"option3"</span><span class="token operator">></span>Option <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Select<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"message"</span><span class="token operator">></span>Message <span class="token punctuation">(</span>Optional<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Textarea\n        id<span class="token operator">=</span><span class="token string">"message"</span>\n        name<span class="token operator">=</span><span class="token string">"message"</span>\n        label<span class="token operator">=</span><span class="token string">"Message"</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Checkbox\n        name<span class="token operator">=</span><span class="token string">"confirm"</span>\n        value<span class="token operator">=</span><span class="token string">"yes"</span>\n      <span class="token operator">></span>\n        I agree to the <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>Terms <span class="token keyword">of</span> Use<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Checkbox<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>button\n      onClick<span class="token operator">=</span><span class="token punctuation">{</span>handlers<span class="token punctuation">.</span>onSubmit<span class="token punctuation">}</span>\n      disabled<span class="token operator">=</span><span class="token punctuation">{</span>invalid <span class="token operator">||</span> pristine<span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      Send message\n    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  handleSubmit <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onValidSubmit()\'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div\n        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n          maxWidth<span class="token punctuation">:</span> <span class="token number">740</span><span class="token punctuation">,</span>\n          width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span>\n          margin<span class="token punctuation">:</span> <span class="token string">\'0 auto\'</span><span class="token punctuation">,</span>\n          padding<span class="token punctuation">:</span> <span class="token string">\'60px 20px\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\n        <span class="token operator">&lt;</span>SampleForm onValidSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>A very simple form has been completed!</p>\n<hr>\n<p>We encourage you to look at <a href="../examples/basic-form/">Examples</a> to use <code>react-drip-form</code> deeper!</p>',frontmatter:{title:"Quick Start",previous:{link:"/",title:"HOME"},next:{link:"/docs/motivation/",title:"Motivation"}}}},pathContext:{slug:"docs/"}}}});
//# sourceMappingURL=path---docs-da3546e6a594d81940f6.js.map