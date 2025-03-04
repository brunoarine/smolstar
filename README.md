# smolstar Hugo Theme

A smolweb-inspired theme for Hugo.


## Principles
Tries to follow [smolweb.org](https://smolweb.org) guidelines:  
- **Zero JavaScript** (no analytics, no cookies)  
- **Under 10KB/page** (including markup)  
- Semantic HTML5  
- Accessible defaults  

## Installation  
1. Add submodule:  
```bash
git submodule add https://github.com/yourusername/smolstar themes/smolstar
```
2. Set theme in config:  
```yaml
# config.yaml
theme: smolstar
themesDir: ../.. # Match your directory structure
```

## Configuration  
Essential params from your exampleSite/config.yaml:  
```yaml
params:
  author: "Your Name"           # Displayed in footer
  bio: "Simple human"           # Short byline
  description: "My smol space"  # Meta description
  showToc: true                 # Table of Contents
  links:                        # Menu items
    - name: Posts
      path: /posts
```

## Important Notes  
This theme is:  
- Used in production by its author  
- Not professionally maintained  
- Missing common features by design  
- Optimized for personal blogging  

Test in multiple browsers before deployment.

## Development  
PRs welcome for:
- Accessibility improvements
- Translation support
- HTML validation fixes

*Keep the web smol* 🌍
