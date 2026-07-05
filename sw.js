<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 25.2.7.2 (Windows)"/>
	<meta name="created" content="2026-07-05T19:24:27.478748400"/>
	<meta name="changed" content="2026-07-05T19:25:52.105549700"/>
	<style type="text/css">
		@page { size: 21cm 29.7cm; margin: 2cm }
		p { line-height: 115%; margin-bottom: 0.25cm; background: transparent }
		a:link { color: #000080; text-decoration: underline }
		a:visited { color: #800000; text-decoration: underline }
	</style>
</head>
<body lang="pt-BR" link="#000080" vlink="#800000" dir="ltr"><p style="line-height: 100%; margin-bottom: 0cm">
self.addEventListener(&quot;install&quot;, event =&gt; {</p>
<p style="line-height: 100%; margin-bottom: 0cm">  event.waitUntil(</p>
<p style="line-height: 100%; margin-bottom: 0cm">   
caches.open(&quot;boat-cache&quot;).then(cache =&gt; {</p>
<p style="line-height: 100%; margin-bottom: 0cm">      return
cache.addAll([</p>
<p style="line-height: 100%; margin-bottom: 0cm">        &quot;./&quot;,</p>
<p style="line-height: 100%; margin-bottom: 0cm">       
&quot;./index.html&quot;,</p>
<p style="line-height: 100%; margin-bottom: 0cm">       
&quot;./manifest.json&quot;</p>
<p style="line-height: 100%; margin-bottom: 0cm">      ]);</p>
<p style="line-height: 100%; margin-bottom: 0cm">    })</p>
<p style="line-height: 100%; margin-bottom: 0cm">  );</p>
<p style="line-height: 100%; margin-bottom: 0cm">});</p>
<p style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm">self.addEventListener(&quot;fetch&quot;,
event =&gt; {</p>
<p style="line-height: 100%; margin-bottom: 0cm">  event.respondWith(</p>
<p style="line-height: 100%; margin-bottom: 0cm">   
caches.match(event.request).then(response =&gt; {</p>
<p style="line-height: 100%; margin-bottom: 0cm">      return
response || fetch(event.request);</p>
<p style="line-height: 100%; margin-bottom: 0cm">    })</p>
<p style="line-height: 100%; margin-bottom: 0cm">  );</p>
<p style="line-height: 100%; margin-bottom: 0cm">});</p>
</body>
</html>