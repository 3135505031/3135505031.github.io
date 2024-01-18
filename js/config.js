if (!window.NexT) window.NexT = {};

(function() {
  const className = 'next-config';

  const staticConfig = {};
  let variableConfig = {};

  const parse = text => JSON.parse(text || '{}');

  const update = name => {
    const targetEle = document.querySelector(`.${className}[data-name="${name}"]`);
    if (!targetEle) return;
    const parsedConfig = parse(targetEle.text);
    if (name === 'main') {
      Object.assign(staticConfig, parsedConfig);
    } else {
      variableConfig[name] = parsedConfig;
    }
  };

  update('main');

  window.CONFIG = new Proxy({}, {
    get(overrideConfig, name) {
      let existing;
      if (name in staticConfig) {
        existing = staticConfig[name];
      } else {
        if (!(name in variableConfig)) update(name);
        existing = variableConfig[name];
      }

      // For unset override and mixable existing
      if (!(name in overrideConfig) && typeof existing === 'object') {
        // Get ready to mix.
        overrideConfig[name] = {};
      }

      if (name in overrideConfig) {
        const override = overrideConfig[name];

        // When mixable
        if (typeof override === 'object' && typeof existing === 'object') {
          // Mix, proxy changes to the override.
          return new Proxy({ ...existing, ...override }, {
            set(target, prop, value) {
              target[prop] = value;
              override[prop] = value;
              return true;
            }
          });
        }

        return override;
      }

      // Only when not mixable and override hasn't been set.
      return existing;
    }
  });

  document.addEventListener('pjax:success', () => {
    variableConfig = {};
  });
})();

<head>
<style>
table {
border-collapse: collapse;
width: 100%;
max-width: 800px;
margin: 0 auto;
}
th, td {
padding: 8px;
text-align: left;
border-bottom: 1px solid #ddd;
}
tr:nth-child(odd) {
background-color: #f2f2f2;
}
tr:nth-child(even) {
background-color: #ffffff;
}
.center {
text-align: center;
}
</style>
</head>
<script>
// 使用JavaScript给表格奇偶行添加类名
var rows = document.getElementsByTagName("tr");
for (var i = 0; i < rows.length; i++) {
if (i % 2 === 0) {
rows[i].className = "even";
} else {
rows[i].className = "odd";
}
}
</script>
