---
layout: docs
title: Toast
description: Toast notification component documentation
permalink: /docs/components/toast/
---

# Toast

The toast include renders the live-region container used by the notification JavaScript. The default layout already includes it once.

```liquid
{% raw %}{% include components/toast.html position="bottom-right" %}{% endraw %}
```

To show a message, call the API after the toast module has initialized:

```js
window.showToast({
  title: 'Saved',
  message: 'Your changes have been saved.',
  variant: 'success'
});
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `position` | string | `top-right` | `top-right`, `top-left`, `bottom-right`, `bottom-left` |

Include one toast container per page. It uses `aria-live="polite"` so assistive technology can announce new notifications without interrupting.
