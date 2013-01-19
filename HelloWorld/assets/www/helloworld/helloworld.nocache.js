function helloworld(){
  var $wnd_0 = window;
  var $doc_0 = document;
  sendStats('bootstrap', 'begin');
  function isHostedMode(){
    var query = $wnd_0.location.search;
    return query.indexOf('gwt.codesvr.helloworld=') != -1 || query.indexOf('gwt.codesvr=') != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd_0.__gwtStatsEvent) {
      $wnd_0.__gwtStatsEvent({moduleName:'helloworld', sessionId:$wnd_0.__gwtStatsSessionId, subSystem:'startup', evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  helloworld.__sendStats = sendStats;
  helloworld.__moduleName = 'helloworld';
  helloworld.__errFn = null;
  helloworld.__moduleBase = 'DUMMY';
  helloworld.__softPermutationId = 0;
  helloworld.__computePropValue = null;
  helloworld.__getPropMap = null;
  helloworld.__gwtInstallCode = function(){
  }
  ;
  helloworld.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  var __gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  var __gwt_getMetaProperty = function(){
    return null;
  }
  ;
  __propertyErrorFunction = null;
  var activeModules = $wnd_0.__gwt_activeModules = $wnd_0.__gwt_activeModules || {};
  activeModules['helloworld'] = {moduleName:'helloworld'};
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function getInstallLocation(){
    setupInstallLocation();
    return frameDoc.getElementsByTagName('body')[0];
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc_0.createElement('iframe');
    scriptFrame.src = 'javascript:""';
    scriptFrame.id = 'helloworld';
    scriptFrame.style.cssText = 'position:absolute; width:0; height:0; border:none; left: -1000px;' + ' top: -1000px;';
    scriptFrame.tabIndex = -1;
    $doc_0.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    frameDoc.write('<html><head><\/head><body><\/body><\/html>');
    frameDoc.close();
    var frameDocbody = frameDoc.getElementsByTagName('body')[0];
    var script = frameDoc.createElement('script');
    script.language = 'javascript';
    var temp = 'var $wnd = window.parent;';
    script.text = temp;
    frameDocbody.appendChild(script);
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc_0.readyState == 'undefined') {
          return typeof $doc_0.body != 'undefined' && $doc_0.body != null;
        }
        return /loaded|complete/.test($doc_0.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc_0.removeEventListener) {
            $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc_0.addEventListener) {
        $doc_0.addEventListener('DOMContentLoaded', onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code){
      function removeScript(body, element){
      }

      var docbody = getInstallLocation();
      var doc = getInstallLocationDoc();
      var script;
      if (navigator.userAgent.indexOf('Chrome') > -1 && window.JSON) {
        var scriptFrag = doc.createDocumentFragment();
        scriptFrag.appendChild(doc.createTextNode('eval("'));
        for (var i = 0; i < code.length; i++) {
          var c = window.JSON.stringify(code[i]);
          scriptFrag.appendChild(doc.createTextNode(c.substring(1, c.length - 1)));
        }
        scriptFrag.appendChild(doc.createTextNode('");'));
        script = doc.createElement('script');
        script.language = 'javascript';
        script.appendChild(scriptFrag);
        docbody.appendChild(script);
        removeScript(docbody, script);
      }
       else {
        for (var i = 0; i < code.length; i++) {
          script = doc.createElement('script');
          script.language = 'javascript';
          script.text = code[i];
          docbody.appendChild(script);
          removeScript(docbody, script);
        }
      }
    }

    helloworld.onScriptDownloaded = function(code){
      setupWaitForBodyLoad(function(){
        installCode(code);
      }
      );
    }
    ;
    sendStats('moduleStartup', 'moduleRequested');
    var script_0 = $doc_0.createElement('script');
    script_0.src = filename;
    $doc_0.getElementsByTagName('head')[0].appendChild(script_0);
  }

  helloworld.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  helloworld.__installRunAsyncCode = function(code){
    var docbody = getInstallLocation();
    var script = getInstallLocationDoc().createElement('script');
    script.language = 'javascript';
    script.text = code;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc_0.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_1 = meta.getAttribute('name'), content_0;
      if (name_1) {
        name_1 = name_1.replace('helloworld::', '');
        if (name_1.indexOf('::') >= 0) {
          continue;
        }
        if (name_1 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_0, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_1 = content_0.substring(0, eq);
              value_0 = content_0.substring(eq + 1);
            }
             else {
              name_1 = content_0;
              value_0 = '';
            }
            metaProps[name_1] = value_0;
          }
        }
         else if (name_1 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_1 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value = metaProps[name_0];
      return value == null?null:value;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    helloworld.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url + 'clear.cache.gif';
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf('helloworld.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    function isLocationOk(){
      var loc = $doc_0.location;
      return loc.href == loc.protocol + '//' + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '' && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return helloworld.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId;
    function unflattenKeylistIntoAnswers(propValArray, value){
      var answer = answers;
      for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value = providers[propName](), allowedValuesMap = values[propName];
      if (value in allowedValuesMap) {
        return value;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunc) {
        __propertyErrorFunc(propName, allowedValuesList, value);
      }
      throw null;
    }

    providers['mgwt.os'] = function(){
      {
        var mgwt_os = function(){
          var ua = window.navigator.userAgent.toLowerCase();
          if (ua.indexOf('android') != -1) {
            if (ua.indexOf('mobile') != -1) {
              return 'android';
            }
             else {
              return 'android_tablet';
            }
          }
          if (ua.indexOf('ipad') != -1) {
            if (window.devicePixelRatio >= 2) {
              return 'ipad_retina';
            }
            return 'ipad';
          }
          if (ua.indexOf('iphone') != -1 || ua.indexOf('ipod') != -1) {
            if (window.devicePixelRatio >= 2) {
              return 'retina';
            }
            return 'iphone';
          }
          if (ua.indexOf('blackberry') != -1) {
            return 'blackberry';
          }
          return 'desktop';
        }
        ();
        return mgwt_os;
      }
    }
    ;
    values['mgwt.os'] = {android:0, android_tablet:1, blackberry:2, desktop:3, ipad:4, ipad_retina:5, iphone:6, retina:7};
    providers['mobile.user.agent'] = function(){
      return /(android|iphone|ipod|ipad)/i.test(window.navigator.userAgent)?'mobilesafari':'not_mobile';
    }
    ;
    values['mobile.user.agent'] = {mobilesafari:0, not_mobile:1};
    providers['phonegap.env'] = function(){
      {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.indexOf('android') != -1 || (ua.indexOf('ipad') != -1 || (ua.indexOf('ipod') != -1 || (ua.indexOf('iphone') != -1 || ua.indexOf('blackberry') != -1)))) {
          var url = document.location.href;
          if (url.indexOf('file://') === 0) {
            return 'yes';
          }
        }
        return 'no';
      }
    }
    ;
    values['phonegap.env'] = {no:0, yes:1};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    helloworld.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        result[key] = computePropValue(key);
      }
      return result;
    }
    ;
    helloworld.__computePropValue = computePropValue;
    $wnd_0.__gwt_activeModules['helloworld'].bindings = helloworld.__getPropMap;
    sendStats('bootstrap', 'selectingPermutation');
    if (isHostedMode()) {
      return computeUrlForResource('helloworld.devmode.js');
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'yes'], '0B7E214E9DD93B4608501B635154B1B8');
      unflattenKeylistIntoAnswers(['desktop', 'mobilesafari', 'yes'], '1978F9948902D51D9D3B8B8ED5D3C50B');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'yes'], '1AED788326B002F72980A1A9A441BCFD');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'no'], '1C6A5ECDFBD02157E39DC16569035251');
      unflattenKeylistIntoAnswers(['ipad_retina', 'not_mobile', 'yes'], '2343B3E30A8783421F4761B56C316409');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'no'], '2455602E79AF0B97A157AE91BEAC29DE');
      unflattenKeylistIntoAnswers(['iphone', 'mobilesafari', 'no'], '266770A8B18AD814789536DF7226E8FD');
      unflattenKeylistIntoAnswers(['ipad_retina', 'mobilesafari', 'no'], '4059C53A2F05496A2883CF13A44D047E');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'yes'], '41B03B878772A740E5EF2B5A4A0048E7');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'yes'], '4B01B8ECCFEE8882B21E560FF8599182');
      unflattenKeylistIntoAnswers(['ipad', 'mobilesafari', 'yes'], '63F45703B092C71FD53DF5E0E2E31A21');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'no'], '7826B915EF215D21565AD33DEC30119E');
      unflattenKeylistIntoAnswers(['blackberry', 'mobilesafari', 'no'], '7B5F6A4C548493D1D985A0D51F52268B');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'no'], '8C1762C1263301C95634DD5560C109E6');
      unflattenKeylistIntoAnswers(['retina', 'mobilesafari', 'no'], 'AA0493F3955EA9B71B511BFEB53F517E');
      unflattenKeylistIntoAnswers(['android_tablet', 'mobilesafari', 'yes'], 'B4B6FF20B14D9BD8AEAC6942D1910FB9');
      unflattenKeylistIntoAnswers(['blackberry', 'mobilesafari', 'yes'], 'C4CDEE91B278098ADD891318BD2D7F43');
      unflattenKeylistIntoAnswers(['desktop', 'mobilesafari', 'no'], 'C64824773CC2B05E25807D16B8B8292F');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'no'], 'C6B7F01BCA181836AC8FDA85DFCC3996');
      unflattenKeylistIntoAnswers(['iphone', 'mobilesafari', 'yes'], 'C6F3884F9D74345261ED4298D0AE079F');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'yes'], 'C939BD025AC9454A3C89897A793A2CE8');
      unflattenKeylistIntoAnswers(['ipad', 'mobilesafari', 'no'], 'C9883031C238958988521B21F93ADD9E');
      unflattenKeylistIntoAnswers(['retina', 'mobilesafari', 'yes'], 'CDA653EE0EE5BC2104E8C52BA93905F8');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'yes'], 'CFF26EBE7377AE54BF048F184E88C6DE');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'yes'], 'D63070095794A1186D7B47933873A15F');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'no'], 'DAE22001302F87F81160ACA885326A6F');
      unflattenKeylistIntoAnswers(['android_tablet', 'mobilesafari', 'no'], 'DEF0BA2A969B17CA92FE803802E87C1A');
      unflattenKeylistIntoAnswers(['ipad_retina', 'mobilesafari', 'yes'], 'E9B12536CA8439255636C72620F62C1C');
      unflattenKeylistIntoAnswers(['ipad_retina', 'not_mobile', 'no'], 'EC5F83C57ACEA0A8C57EA25780B05D70');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'no'], 'EF30FCD4C99256ED1FD50A04A3226246');
      unflattenKeylistIntoAnswers(['android', 'mobilesafari', 'no'], 'F10B7CD96ABD1EC30D9F2EF2EC2922E0');
      unflattenKeylistIntoAnswers(['android', 'mobilesafari', 'yes'], 'F3ADE06FE14F76B02142241B5701237B');
      strongName = answers[computePropValue('mgwt.os')][computePropValue('mobile.user.agent')][computePropValue('phonegap.env')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + 1), 10);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    helloworld.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + '.cache.js');
  }

  function loadExternalStylesheets(){
    if (!$wnd_0.__gwt_stylesLoaded) {
      $wnd_0.__gwt_stylesLoaded = {};
    }
    sendStats('loadExternalRefs', 'begin');
    sendStats('loadExternalRefs', 'end');
  }

  processMetas();
  helloworld.__moduleBase = computeScriptBase();
  activeModules['helloworld'].moduleBase = helloworld.__moduleBase;
  var filename_0 = getCompiledCodeFilename();
  loadExternalStylesheets();
  sendStats('bootstrap', 'end');
  installScript(filename_0);
  return true;
}

helloworld.succeeded = helloworld();
